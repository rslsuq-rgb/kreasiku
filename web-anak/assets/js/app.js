/* =========================================================
   Belajar Yuk! — fungsi bersama
   Suara, konfeti, bintang, toast. Tanpa dependensi.
   ========================================================= */
(function () {
  "use strict";

  const STORE_KEY = "belajarYuk.v1";

  /* ---------------- Penyimpanan lokal (hanya di perangkat) ---------------- */
  function readStore() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      const data = raw ? JSON.parse(raw) : {};
      return {
        stars: Number(data.stars) || 0,
        done: data.done && typeof data.done === "object" ? data.done : {},
        best: data.best && typeof data.best === "object" ? data.best : {},
      };
    } catch (e) {
      return { stars: 0, done: {}, best: {} };
    }
  }

  function writeStore(data) {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(data));
    } catch (e) {
      /* mode privat / file:// — abaikan */
    }
    paintStars();
  }

  function addStars(n) {
    const data = readStore();
    data.stars = Math.max(0, data.stars + n);
    writeStore(data);
    return data.stars;
  }

  function markDone(id) {
    const data = readStore();
    data.done[id] = true;
    writeStore(data);
  }

  function isDone(id) {
    return !!readStore().done[id];
  }

  function saveBest(key, value) {
    const data = readStore();
    if (!data.best[key] || value > data.best[key]) data.best[key] = value;
    writeStore(data);
  }

  function paintStars() {
    const total = readStore().stars;
    document.querySelectorAll("[data-stars]").forEach(function (el) {
      el.textContent = total;
    });
  }

  /* ---------------- Suara (WebAudio, tanpa file) ---------------- */
  let audioCtx = null;
  let soundOn = true;

  function ctx() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      audioCtx = new AC();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
  }

  function tone(freq, start, dur, type, vol) {
    const ac = ctx();
    if (!ac || !soundOn) return;
    const t0 = ac.currentTime + start;
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = type || "sine";
    osc.frequency.setValueAtTime(freq, t0);
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(vol || 0.09, t0 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(gain).connect(ac.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  }

  const sound = {
    click: function () { tone(520, 0, 0.07, "triangle", 0.05); },
    correct: function () {
      [523.25, 659.25, 783.99, 1046.5].forEach(function (f, i) {
        tone(f, i * 0.075, 0.18, "sine", 0.09);
      });
    },
    wrong: function () {
      tone(310, 0, 0.16, "sine", 0.08);
      tone(233, 0.13, 0.24, "sine", 0.08);
    },
    win: function () {
      [523.25, 587.33, 659.25, 783.99, 880, 1046.5].forEach(function (f, i) {
        tone(f, i * 0.09, 0.28, "triangle", 0.09);
      });
    },
    pop: function () { tone(880, 0, 0.06, "sine", 0.05); },
    toggle: function (on) {
      soundOn = !!on;
      if (soundOn) sound.pop();
    },
    isOn: function () { return soundOn; }
  };

  /* ---------------- Konfeti ---------------- */
  function confetti(opts) {
    opts = opts || {};
    const count = opts.count || 90;
    const canvas = document.createElement("canvas");
    canvas.className = "confetti-canvas";
    document.body.appendChild(canvas);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    const c = canvas.getContext("2d");
    c.scale(dpr, dpr);

    const colors = ["#ff8a4c", "#4cb8f0", "#6fd08c", "#ffd166", "#ff9ebb", "#b79cf0"];
    const parts = [];
    for (let i = 0; i < count; i++) {
      parts.push({
        x: Math.random() * window.innerWidth,
        y: -20 - Math.random() * window.innerHeight * 0.35,
        w: 6 + Math.random() * 7,
        h: 8 + Math.random() * 10,
        vy: 2 + Math.random() * 3.4,
        vx: -1.2 + Math.random() * 2.4,
        rot: Math.random() * Math.PI,
        vr: -0.14 + Math.random() * 0.28,
        color: colors[(Math.random() * colors.length) | 0],
        shape: Math.random() > 0.6 ? "circle" : "rect"
      });
    }

    let frames = 0;
    function tick() {
      frames++;
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);
      let alive = 0;
      parts.forEach(function (p) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.03;
        p.rot += p.vr;
        if (p.y < window.innerHeight + 30) alive++;
        c.save();
        c.translate(p.x, p.y);
        c.rotate(p.rot);
        c.fillStyle = p.color;
        c.globalAlpha = Math.max(0, 1 - frames / 220);
        if (p.shape === "circle") {
          c.beginPath();
          c.arc(0, 0, p.w / 2, 0, Math.PI * 2);
          c.fill();
        } else {
          c.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }
        c.restore();
      });
      if (alive > 0 && frames < 240) {
        requestAnimationFrame(tick);
      } else {
        canvas.remove();
      }
    }
    requestAnimationFrame(tick);
  }

  /* ---------------- Toast ---------------- */
  let toastEl = null;
  let toastTimer = null;
  function toast(msg, ms) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    requestAnimationFrame(function () { toastEl.classList.add("show"); });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("show");
    }, ms || 2200);
  }

  /* ---------------- Navigasi ---------------- */
  function initNav() {
    const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".nav a").forEach(function (a) {
      const href = (a.getAttribute("href") || "").toLowerCase();
      const isHome = (here === "" || here === "index.html") && href === "index.html";
      if (href === here || isHome) a.setAttribute("aria-current", "page");
    });
    paintStars();
  }

  /* ---------------- Tombol suara & tautan "segera hadir" ---------------- */
  function initExtras() {
    document.querySelectorAll("[data-sound-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const next = !sound.isOn();
        sound.toggle(next);
        btn.setAttribute("aria-pressed", String(next));
        btn.textContent = next ? "🔊" : "🔈";
      });
    });

    document.addEventListener("click", function (ev) {
      const el = ev.target.closest("[data-soon]");
      if (!el) return;
      ev.preventDefault();
      toast(el.getAttribute("data-soon"));
    });
  }

  /* ---------------- Ekspor ---------------- */
  window.App = {
    sound: sound,
    confetti: confetti,
    toast: toast,
    addStars: addStars,
    markDone: markDone,
    isDone: isDone,
    saveBest: saveBest,
    readStore: readStore,
    initNav: initNav
  };

  function boot() {
    initNav();
    initExtras();

    if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
      navigator.serviceWorker.register("sw.js").catch(function () {
        /* offline cache tidak tersedia — situs tetap jalan */
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
