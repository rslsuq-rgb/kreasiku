/* =========================================================
   Studio mewarnai
   - Klik bidang (isi warna / hapus)
   - Kuas bebas di kanvas
   - Undo, ulangi, simpan PNG
   ========================================================= */
(function () {
  "use strict";

  const PALETTE = [
    "#ff8a4c", "#ffd166", "#6fd08c", "#4cb8f0", "#b79cf0", "#ff9ebb",
    "#ff6b6b", "#f4a261", "#ffe8b6", "#c8f7c5", "#bde9ff", "#e3d7ff",
    "#33435c", "#8b5e3c", "#a8e6cf", "#ffc8dd", "#ffd6a5", "#ffffff"
  ];

  const el = {
    galleryView: document.getElementById("galeri-view"),
    studioView: document.getElementById("studio-view"),
    gallery: document.getElementById("gallery"),
    holder: document.getElementById("art-holder"),
    stage: document.getElementById("stage"),
    canvas: document.getElementById("brush"),
    palette: document.getElementById("palette"),
    custom: document.getElementById("custom-color"),
    size: document.getElementById("brush-size"),
    sizeOut: document.getElementById("brush-size-out"),
    title: document.getElementById("studio-title"),
    sub: document.getElementById("studio-sub"),
    hint: document.getElementById("mode-hint"),
    count: document.getElementById("fill-count"),
    back: document.getElementById("btn-back"),
    undo: document.getElementById("btn-undo"),
    reset: document.getElementById("btn-reset"),
    download: document.getElementById("btn-download")
  };

  if (!el.gallery || !window.GAMBAR) return;

  const ctx = el.canvas.getContext("2d");
  const state = {
    item: null,
    color: PALETTE[0],
    mode: "isi",
    size: 22,
    actions: [],
    strokes: [],
    drawing: false,
    stroke: null
  };

  /* ---------------- Galeri ---------------- */
  function buildGallery() {
    const frag = document.createDocumentFragment();
    window.GAMBAR.forEach(function (item) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "art-card";
      btn.innerHTML =
        '<span class="thumb" aria-hidden="true">' + item.svg + "</span>" +
        '<span class="name"><span>' + item.nama + '</span><span aria-hidden="true">→</span></span>' +
        '<span class="muted" style="font-size:.8rem">' + item.kategori + "</span>";
      btn.setAttribute("aria-label", "Warnai gambar " + item.nama);
      btn.addEventListener("click", function () {
        App.sound.pop();
        open(item.id);
      });
      frag.appendChild(btn);
    });
    el.gallery.innerHTML = "";
    el.gallery.appendChild(frag);
  }

  /* ---------------- Buka / tutup studio ---------------- */
  function open(id) {
    const item = window.GAMBAR.find(function (g) { return g.id === id; });
    if (!item) return close();

    state.item = item;
    state.actions = [];
    state.strokes = [];
    el.holder.innerHTML = item.svg;
    clearBrush();
    el.title.textContent = "Mewarnai " + item.nama;
    el.sub.textContent = "Klik bagian gambar untuk mengisi warna. Pilih kuas untuk coretan bebas.";
    el.galleryView.hidden = true;
    el.studioView.hidden = false;
    updateCount();
    setMode("isi");
    history.replaceState(null, "", "#" + id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function close() {
    state.item = null;
    el.studioView.hidden = true;
    el.galleryView.hidden = false;
    history.replaceState(null, "", location.pathname + location.search);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------------- Palet ---------------- */
  function buildPalette() {
    const frag = document.createDocumentFragment();
    PALETTE.forEach(function (hex) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "swatch";
      b.style.background = hex;
      b.dataset.color = hex;
      b.setAttribute("aria-label", "Warna " + hex);
      b.setAttribute("aria-pressed", String(hex === state.color));
      b.addEventListener("click", function () { pickColor(hex); });
      frag.appendChild(b);
    });
    el.palette.appendChild(frag);
  }

  function pickColor(hex) {
    state.color = hex;
    el.custom.value = hex;
    el.palette.querySelectorAll(".swatch").forEach(function (s) {
      s.setAttribute("aria-pressed", String(s.dataset.color === hex));
    });
    App.sound.click();
    if (state.mode === "hapus") setMode("isi");
  }

  /* ---------------- Mode ---------------- */
  function setMode(mode) {
    state.mode = mode;
    el.stage.dataset.mode = mode === "kuas" ? "kuas" : "isi";
    document.querySelectorAll("[data-mode-btn]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.modeBtn === mode));
    });
    const hints = {
      isi: "Mode isi warna: klik bagian gambar.",
      kuas: "Mode kuas: tahan dan geser untuk mewarnai bebas.",
      hapus: "Mode hapus: klik bidang untuk mengembalikan putih."
    };
    el.hint.textContent = hints[mode];
    el.stage.style.cursor = mode === "kuas" ? "crosshair" : "pointer";
  }

  /* ---------------- Isi warna ---------------- */
  function regionFill(shape) {
    return (shape.getAttribute("fill") || "#ffffff").toLowerCase();
  }

  function onStageClick(ev) {
    if (!state.item || state.mode !== "isi" && state.mode !== "hapus") return;
    const shape = ev.target.closest ? ev.target.closest(".region") : null;
    if (!shape || !el.holder.contains(shape)) return;

    const next = state.mode === "hapus" ? "#ffffff" : state.color;
    const prev = regionFill(shape);
    if (prev === next.toLowerCase()) return;

    state.actions.push({ type: "fill", shape: shape, prev: prev });
    shape.setAttribute("fill", next);
    App.sound.pop();
    updateCount();
  }

  function updateCount() {
    if (!state.item) return;
    let n = 0;
    el.holder.querySelectorAll(".region").forEach(function (s) {
      if (regionFill(s) !== "#ffffff") n++;
    });
    el.count.textContent = n + " bidang diwarnai";
  }

  /* ---------------- Kuas ---------------- */
  function clearBrush() {
    ctx.clearRect(0, 0, el.canvas.width, el.canvas.height);
  }

  function redrawStrokes() {
    clearBrush();
    state.strokes.forEach(function (s) { paintStroke(s); });
  }

  function paintStroke(s) {
    ctx.strokeStyle = s.color;
    ctx.fillStyle = s.color;
    ctx.lineWidth = s.size;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    if (s.points.length === 1) {
      ctx.beginPath();
      ctx.arc(s.points[0][0], s.points[0][1], s.size / 2, 0, Math.PI * 2);
      ctx.fill();
      return;
    }
    ctx.beginPath();
    ctx.moveTo(s.points[0][0], s.points[0][1]);
    for (let i = 1; i < s.points.length; i++) {
      ctx.lineTo(s.points[i][0], s.points[i][1]);
    }
    ctx.stroke();
  }

  function pointFrom(ev) {
    const r = el.canvas.getBoundingClientRect();
    return [
      ((ev.clientX - r.left) * el.canvas.width) / r.width,
      ((ev.clientY - r.top) * el.canvas.height) / r.height
    ];
  }

  function strokeColor() {
    return state.mode === "hapus" ? "#ffffff" : state.color;
  }

  el.canvas.addEventListener("pointerdown", function (ev) {
    if (!state.item) return;
    if (state.mode !== "kuas") return;
    ev.preventDefault();
    try { el.canvas.setPointerCapture(ev.pointerId); } catch (e) { /* abaikan */ }
    state.drawing = true;
    state.stroke = { color: strokeColor(), size: state.size * 2, points: [pointFrom(ev)] };
    state.strokes.push(state.stroke);
    state.actions.push({ type: "stroke", stroke: state.stroke });
    paintStroke(state.stroke);
  });

  el.canvas.addEventListener("pointermove", function (ev) {
    if (!state.drawing || !state.stroke) return;
    ev.preventDefault();
    const p = pointFrom(ev);
    const pts = state.stroke.points;
    const last = pts[pts.length - 1];
    if (Math.hypot(p[0] - last[0], p[1] - last[1]) < 2) return;
    pts.push(p);
    ctx.strokeStyle = state.stroke.color;
    ctx.lineWidth = state.stroke.size;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(last[0], last[1]);
    ctx.lineTo(p[0], p[1]);
    ctx.stroke();
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

  /* ---------------- Aksi ---------------- */
  function undo() {
    const act = state.actions.pop();
    if (!act) {
      App.toast("Belum ada yang bisa dibatalkan.");
      return;
    }
    if (act.type === "fill") {
      act.shape.setAttribute("fill", act.prev);
    } else {
      const i = state.strokes.indexOf(act.stroke);
      if (i >= 0) state.strokes.splice(i, 1);
      redrawStrokes();
    }
    App.sound.click();
    updateCount();
  }

  function reset() {
    if (!state.item) return;
    el.holder.querySelectorAll(".region").forEach(function (s) {
      s.setAttribute("fill", "#ffffff");
    });
    state.actions = [];
    state.strokes = [];
    clearBrush();
    updateCount();
    App.sound.pop();
    App.toast("Gambar dikembalikan ke putih.");
  }

  function download() {
    if (!state.item) return;
    const svgEl = el.holder.querySelector("svg");
    if (!svgEl) return;

    const clone = svgEl.cloneNode(true);
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    clone.setAttribute("width", "1000");
    clone.setAttribute("height", "1000");
    const data = new XMLSerializer().serializeToString(clone);
    const svgUrl = URL.createObjectURL(new Blob([data], { type: "image/svg+xml;charset=utf-8" }));
    const img = new Image();

    img.onload = function () {
      const out = document.createElement("canvas");
      out.width = 1000;
      out.height = 1000;
      const c = out.getContext("2d");
      c.fillStyle = "#ffffff";
      c.fillRect(0, 0, 1000, 1000);
      c.drawImage(img, 0, 0, 1000, 1000);
      c.drawImage(el.canvas, 0, 0, 1000, 1000);
      URL.revokeObjectURL(svgUrl);

      out.toBlob(function (blob) {
        if (!blob) {
          App.toast("Gagal menyimpan gambar. Coba lagi, ya.");
          return;
        }
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "mewarnai-" + state.item.id + ".png";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 5000);

        const key = "warnai-" + state.item.id;
        if (!App.isDone(key)) {
          App.markDone(key);
          App.addStars(1);
          App.confetti({ count: 60 });
          App.sound.win();
          App.toast("Karya tersimpan! ⭐ +1 bintang");
        } else {
          App.toast("Karya tersimpan. Bagus!");
        }
      }, "image/png");
    };

    img.onerror = function () {
      URL.revokeObjectURL(svgUrl);
      App.toast("Maaf, gambar gagal disimpan. Coba browser lain.");
    };

    img.src = svgUrl;
  }

  /* ---------------- Pasang event ---------------- */
  buildGallery();
  buildPalette();
  setMode("isi");

  el.holder.addEventListener("click", onStageClick);

  document.querySelectorAll("[data-mode-btn]").forEach(function (b) {
    b.addEventListener("click", function () {
      setMode(b.dataset.modeBtn);
      App.sound.click();
    });
  });

  el.custom.addEventListener("input", function () {
    state.color = el.custom.value;
    el.palette.querySelectorAll(".swatch").forEach(function (s) {
      s.setAttribute("aria-pressed", String(s.dataset.color === state.color));
    });
  });

  el.size.addEventListener("input", function () {
    state.size = Number(el.size.value);
    el.sizeOut.textContent = String(state.size);
  });

  el.back.addEventListener("click", close);
  el.undo.addEventListener("click", undo);
  el.reset.addEventListener("click", reset);
  el.download.addEventListener("click", download);

  window.addEventListener("hashchange", function () {
    const id = location.hash.replace("#", "");
    if (id) open(id);
    else if (state.item) close();
  });

  const startId = location.hash.replace("#", "");
  if (startId && window.GAMBAR.some(function (g) { return g.id === startId; })) {
    open(startId);
  }
})();
