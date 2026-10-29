/* =========================================================
   Latihan menulis
   - Huruf contoh putus-putus di kanvas
   - Jiplak dengan jari/mouse
   - Kemajuan dihitung dari cakupan huruf contoh
   ========================================================= */
(function () {
  "use strict";

  const SIZE = 900;
  const BASELINE = 700;
  const GUIDE_COLOR = "#c3d5e8";  const INK_COLORS = ["#2f6fed", "#7b5cd6", "#2fa36b", "#e07a2f", "#d94f70", "#33435c"];
  const FONT_STACK = '"Comic Sans MS", "Segoe UI", "Trebuchet MS", sans-serif';

  const SETS = {
    besar: { label: "Huruf besar", chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("") },
    kecil: { label: "Huruf kecil", chars: "abcdefghijklmnopqrstuvwxyz".split("") },
    angka: { label: "Angka", chars: "0123456789".split("") },
    kata: {
      label: "Kata",
      chars: ["mama", "papa", "bola", "buku", "sapi", "kuda", "bunga", "rumah", "ikan", "sepatu", "ayam", "meja", "kursi", "pintu", "lampu", "mobil", "topi", "kaos", "tas", "nasi"]
    }
  };

  const el = {
    canvas: document.getElementById("pad"),
    title: document.getElementById("char-title"),
    pill: document.getElementById("progress-pill"),
    bar: document.getElementById("write-bar"),
    chips: document.getElementById("char-chips"),
    setChips: document.getElementById("set-chips"),
    prev: document.getElementById("btn-prev"),
    next: document.getElementById("btn-next"),
    clear: document.getElementById("btn-clear"),
    guide: document.getElementById("btn-guide"),
    save: document.getElementById("btn-save"),
    inkPalette: document.getElementById("ink-palette")
  };

  if (!el.canvas) return;

  const ctx = el.canvas.getContext("2d");
  const bg = document.createElement("canvas");
  const bgCtx = bg.getContext("2d");
  const mask = document.createElement("canvas");
  const maskCtx = mask.getContext("2d");
  bg.width = bg.height = SIZE;
  mask.width = mask.height = SIZE;

  const state = {
    setKey: "besar",
    idx: 0,
    ink: INK_COLORS[0],
    showGuide: true,
    drawing: false,
    stroke: null,
    strokes: [],
    points: [],
    buckets: new Map(),
    covered: 0,
    celebrated: false,
    rafPending: false
  };

  /* ---------------- Ukuran huruf ---------------- */
  function fitFontSize(text) {
    let size = 700;
    const maxW = 780;
    const maxAscent = 515;
    const maxDescent = 95;

    ctx.save();
    ctx.font = "700 " + size + "px " + FONT_STACK;
    const width = ctx.measureText(text).width;
    if (width > maxW) size = Math.floor((size * maxW) / width);

    ctx.font = "700 " + size + "px " + FONT_STACK;
    const m = ctx.measureText(text);
    let factor = 1;
    if (m.actualBoundingBoxAscent > maxAscent) factor = Math.min(factor, maxAscent / m.actualBoundingBoxAscent);
    if (m.actualBoundingBoxDescent > maxDescent) factor = Math.min(factor, maxDescent / m.actualBoundingBoxDescent);
    ctx.restore();

    return Math.max(120, Math.floor(size * factor));
  }

  function drawGuideText(c, maskMode) {
    const text = SETS[state.setKey].chars[state.idx];
    const size = fitFontSize(text);
    c.save();
    c.font = "700 " + size + "px " + FONT_STACK;
    c.textAlign = "center";
    c.textBaseline = "alphabetic";
    if (maskMode) {
      c.fillStyle = "#000000";
      c.fillText(text, SIZE / 2, BASELINE);
    } else {
      c.fillStyle = "#eef3fa";
      c.fillText(text, SIZE / 2, BASELINE);
      c.strokeStyle = GUIDE_COLOR;
      c.lineWidth = 5;
      c.setLineDash([12, 10]);
      c.strokeText(text, SIZE / 2, BASELINE);
    }
    c.restore();
  }

  /* ---------------- Latar & garis bantu ---------------- */
  function buildBackground() {
    bgCtx.clearRect(0, 0, SIZE, SIZE);
    bgCtx.fillStyle = "#ffffff";
    bgCtx.fillRect(0, 0, SIZE, SIZE);

    bgCtx.save();
    bgCtx.strokeStyle = "#dbe9f6";
    bgCtx.lineWidth = 3;
    [170, 470, BASELINE, 800].forEach(function (y, i) {
      bgCtx.beginPath();
      bgCtx.setLineDash(i === 1 || i === 3 ? [16, 14] : []);
      bgCtx.moveTo(40, y);
      bgCtx.lineTo(SIZE - 40, y);
      bgCtx.stroke();
    });

    // garis awal (titik hijau) sebagai petunjuk arah
    bgCtx.setLineDash([]);
    bgCtx.fillStyle = "#d8f3e1";
    bgCtx.beginPath();
    bgCtx.arc(70, BASELINE, 14, 0, Math.PI * 2);
    bgCtx.fill();
    bgCtx.restore();

    if (state.showGuide) drawGuideText(bgCtx, false);
  }

  /* ---------------- Mask & kemajuan ---------------- */
  function buildMask() {
    maskCtx.clearRect(0, 0, SIZE, SIZE);
    drawGuideText(maskCtx, true);
    const data = maskCtx.getImageData(0, 0, SIZE, SIZE).data;
    const step = 7;
    const cell = 48;
    state.points = [];
    state.buckets = new Map();
    for (let y = 0; y < SIZE; y += step) {
      for (let x = 0; x < SIZE; x += step) {
        const alpha = data[(y * SIZE + x) * 4 + 3];
        if (alpha > 80) {
          const i = state.points.length;
          state.points.push({ x: x, y: y, hit: false });
          const key = Math.floor(x / cell) + "," + Math.floor(y / cell);
          let arr = state.buckets.get(key);
          if (!arr) {
            arr = [];
            state.buckets.set(key, arr);
          }
          arr.push(i);
        }
      }
    }
    state.covered = 0;
  }

  function markCovered(px, py) {
    const cell = 48;
    const r = 26;
    const r2 = r * r;
    const bx0 = Math.floor((px - r) / cell);
    const bx1 = Math.floor((px + r) / cell);
    const by0 = Math.floor((py - r) / cell);
    const by1 = Math.floor((py + r) / cell);
    for (let bx = bx0; bx <= bx1; bx++) {
      for (let by = by0; by <= by1; by++) {
        const arr = state.buckets.get(bx + "," + by);
        if (!arr) continue;
        for (let k = 0; k < arr.length; k++) {
          const p = state.points[arr[k]];
          if (p.hit) continue;
          const dx = p.x - px;
          const dy = p.y - py;
          if (dx * dx + dy * dy <= r2) {
            p.hit = true;
            state.covered++;
          }
        }
      }
    }
  }

  function progressPct() {
    if (!state.points.length) return 0;
    return Math.min(100, Math.round((state.covered / state.points.length) * 100));
  }

  function updateProgressUI() {
    state.rafPending = false;
    const pct = progressPct();
    el.pill.textContent = pct + "%";
    el.bar.style.width = pct + "%";
    el.pill.style.color = pct >= 70 ? "#1d6b39" : "#4b6a86";
    el.pill.style.background = pct >= 70 ? "#e9fbee" : "#eef4fb";
    if (pct >= 70 && !state.celebrated) {
      state.celebrated = true;
      const ch = SETS[state.setKey].chars[state.idx];
      const key = "tulis-" + state.setKey + "-" + ch;
      App.confetti({ count: 70 });
      App.sound.win();
      if (!App.isDone(key)) {
        App.markDone(key);
        App.addStars(1);
        App.toast("Huruf " + ch + " selesai! ⭐ +1 bintang");
      } else {
        App.toast("Huruf " + ch + " selesai lagi. Mantap!");
      }
      renderChips();
    }
  }

  function scheduleProgress() {
    if (state.rafPending) return;
    state.rafPending = true;
    requestAnimationFrame(updateProgressUI);
  }

  /* ---------------- Menggambar ---------------- */
  function redraw() {
    ctx.clearRect(0, 0, SIZE, SIZE);
    ctx.drawImage(bg, 0, 0);
    state.strokes.forEach(paintStroke);
  }

  function paintStroke(s) {
    if (!s.points.length) return;
    ctx.strokeStyle = s.color;
    ctx.fillStyle = s.color;
    ctx.lineWidth = s.width;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    if (s.points.length === 1) {
      ctx.beginPath();
      ctx.arc(s.points[0][0], s.points[0][1], s.width / 2, 0, Math.PI * 2);
      ctx.fill();
      return;
    }
    ctx.beginPath();
    ctx.moveTo(s.points[0][0], s.points[0][1]);
    for (let i = 1; i < s.points.length; i++) ctx.lineTo(s.points[i][0], s.points[i][1]);
    ctx.stroke();
  }

  function pointFrom(ev) {
    const r = el.canvas.getBoundingClientRect();
    return [
      ((ev.clientX - r.left) * SIZE) / r.width,
      ((ev.clientY - r.top) * SIZE) / r.height
    ];
  }

  el.canvas.addEventListener("pointerdown", function (ev) {
    ev.preventDefault();
    try { el.canvas.setPointerCapture(ev.pointerId); } catch (e) { /* abaikan */ }
    state.drawing = true;
    state.stroke = { color: state.ink, width: 20, points: [pointFrom(ev)] };
    state.strokes.push(state.stroke);
    paintStroke(state.stroke);
    markCovered(state.stroke.points[0][0], state.stroke.points[0][1]);
    scheduleProgress();
  });

  el.canvas.addEventListener("pointermove", function (ev) {
    if (!state.drawing || !state.stroke) return;
    ev.preventDefault();
    const p = pointFrom(ev);
    const pts = state.stroke.points;
    const last = pts[pts.length - 1];
    if (Math.hypot(p[0] - last[0], p[1] - last[1]) < 1.5) return;
    pts.push(p);

    ctx.strokeStyle = state.stroke.color;
    ctx.lineWidth = state.stroke.width;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(last[0], last[1]);
    ctx.lineTo(p[0], p[1]);
    ctx.stroke();

    markCovered(p[0], p[1]);
    scheduleProgress();
  });

  function endStroke(ev) {
    if (!state.drawing) return;
    state.drawing = false;
    state.stroke = null;
    if (ev && el.canvas.hasPointerCapture && el.canvas.hasPointerCapture(ev.pointerId)) {
      el.canvas.releasePointerCapture(ev.pointerId);
    }
  }
  el.canvas.addEventListener("pointerup", endStroke);
  el.canvas.addEventListener("pointercancel", endStroke);
  el.canvas.addEventListener("pointerleave", endStroke);

  /* ---------------- Ganti huruf / set ---------------- */
  function keyFor(text) {
    return "tulis-" + state.setKey + "-" + text;
  }

  function renderChips() {
    const chars = SETS[state.setKey].chars;
    el.chips.innerHTML = "";
    chars.forEach(function (ch, i) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "char-chip";
      if (ch.length > 1) {
        b.style.width = "auto";
        b.style.padding = "0 14px";
      }
      b.textContent = ch;
      b.setAttribute("aria-label", "Latihan " + ch);
      if (i === state.idx) b.classList.add("active");
      if (App.isDone(keyFor(ch))) b.classList.add("done");
      b.addEventListener("click", function () {
        state.idx = i;
        App.sound.click();
        loadChar();
      });
      el.chips.appendChild(b);
    });
  }

  function loadChar() {
    state.strokes = [];
    state.drawing = false;
    state.stroke = null;
    state.celebrated = false;
    buildBackground();
    buildMask();
    redraw();
    const text = SETS[state.setKey].chars[state.idx];
    el.title.textContent = SETS[state.setKey].label + " — " + text;
    el.pill.textContent = "0%";
    el.bar.style.width = "0%";
    el.pill.style.color = "#4b6a86";
    el.pill.style.background = "#eef4fb";
    renderChips();
    const active = el.chips.querySelector(".char-chip.active");
    if (active) {
      const target = active.offsetLeft - (el.chips.clientWidth - active.offsetWidth) / 2;
      el.chips.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
    }
  }

  function step(dir) {
    const chars = SETS[state.setKey].chars;
    state.idx = (state.idx + dir + chars.length) % chars.length;
    App.sound.click();
    loadChar();
  }

  /* ---------------- Kontrol ---------------- */
  el.setChips.addEventListener("click", function (ev) {
    const btn = ev.target.closest("[data-set]");
    if (!btn) return;
    state.setKey = btn.dataset.set;
    state.idx = 0;
    el.setChips.querySelectorAll(".chip").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b === btn));
    });
    App.sound.click();
    loadChar();
  });

  el.prev.addEventListener("click", function () { step(-1); });
  el.next.addEventListener("click", function () { step(1); });

  el.clear.addEventListener("click", function () {
    state.strokes = [];
    state.celebrated = false;
    state.points.forEach(function (p) { p.hit = false; });
    state.covered = 0;
    redraw();
    el.pill.textContent = "0%";
    el.bar.style.width = "0%";
    App.sound.pop();
  });

  el.guide.addEventListener("click", function () {
    state.showGuide = !state.showGuide;
    el.guide.setAttribute("aria-pressed", String(state.showGuide));
    el.guide.textContent = state.showGuide ? "👁️ Contoh: nyala" : "👁️ Contoh: mati";
    buildBackground();
    redraw();
  });

  el.save.addEventListener("click", function () {
    el.canvas.toBlob(function (blob) {
      if (!blob) {
        App.toast("Gagal menyimpan. Coba lagi, ya.");
        return;
      }
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      const text = SETS[state.setKey].chars[state.idx];
      a.download = "menulis-" + text + ".png";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 5000);
      App.toast("Hasil menulis tersimpan.");
    }, "image/png");
  });

  /* ---------------- Palet tinta ---------------- */
  INK_COLORS.forEach(function (hex, i) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "swatch";
    b.style.background = hex;
    b.dataset.ink = hex;
    b.setAttribute("aria-label", "Tinta warna " + hex);
    b.setAttribute("aria-pressed", String(i === 0));
    b.addEventListener("click", function () {
      state.ink = hex;
      el.inkPalette.querySelectorAll(".swatch").forEach(function (s) {
        s.setAttribute("aria-pressed", String(s === b));
      });
      App.sound.click();
    });
    el.inkPalette.appendChild(b);
  });

  /* ---------------- Mulai ---------------- */
  loadChar();
})();
