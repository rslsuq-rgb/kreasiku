/* =========================================================
   Berhitung — 10 soal per sesi
   Mode: hitung benda, tambah, kurang, bandingkan
   ========================================================= */
(function () {
  "use strict";

  const TOTAL = 10;

  const OBJECTS = [
    { ch: "🍎", nama: "apel" },
    { ch: "🐟", nama: "ikan" },
    { ch: "⚽", nama: "bola" },
    { ch: "🌸", nama: "bunga" },
    { ch: "🐤", nama: "anak ayam" },
    { ch: "🍓", nama: "stroberi" },
    { ch: "🚗", nama: "mobil" },
    { ch: "⭐", nama: "bintang" },
    { ch: "🐝", nama: "lebah" },
    { ch: "🍪", nama: "kue" },
    { ch: "⛵", nama: "perahu" }
  ];

  const el = {
    play: document.getElementById("play"),
    result: document.getElementById("result"),
    prompt: document.getElementById("q-prompt"),
    visual: document.getElementById("visual"),
    answers: document.getElementById("answers"),
    feedback: document.getElementById("feedback"),
    label: document.getElementById("q-label"),
    streak: document.getElementById("q-streak"),
    statQ: document.getElementById("stat-q"),
    statBenar: document.getElementById("stat-benar"),
    statStreak: document.getElementById("stat-streak"),
    bar: document.getElementById("bar"),
    modeChips: document.getElementById("mode-chips"),
    restart: document.getElementById("btn-restart"),
    again: document.getElementById("btn-again"),
    resEmoji: document.getElementById("res-emoji"),
    resTitle: document.getElementById("res-title"),
    resText: document.getElementById("res-text"),
    resStars: document.getElementById("res-stars"),
    resScore: document.getElementById("res-score")
  };

  if (!el.prompt) return;

  const state = {
    mode: "hitung",
    level: "mudah",
    index: 0,
    correct: 0,
    streak: 0,
    bestStreak: 0,
    locked: false,
    q: null,
    timer: null
  };

  /* ---------------- Utilitas ---------------- */
  function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function pickObject() {
    return OBJECTS[rnd(0, OBJECTS.length - 1)];
  }

  function numberOptions(answer, min, max) {
    const set = new Set([answer]);
    let guard = 0;
    while (set.size < 4 && guard++ < 60) {
      const delta = rnd(1, 4) * (Math.random() < 0.5 ? -1 : 1);
      const v = answer + delta;
      if (v >= min && v <= max) set.add(v);
      else set.add(rnd(min, Math.max(min, max)));
    }
    while (set.size < 4) set.add(rnd(min, max));
    return shuffle(Array.from(set)).map(function (v) {
      return { text: String(v), value: v };
    });
  }

  function groupHTML(n, obj, extraClass) {
    let out = '<div class="group ' + (extraClass || "") + '">';
    for (let i = 0; i < n; i++) {
      out += '<span class="obj" style="animation-delay:' + i * 45 + 'ms">' + obj.ch + "</span>";
    }
    return out + "</div>";
  }

  /* ---------------- Pembuat soal ---------------- */
  function makeQuestion() {
    const obj = pickObject();
    const easy = state.level === "mudah";

    if (state.mode === "hitung") {
      const n = easy ? rnd(1, 5) : rnd(3, 10);
      return {
        prompt: "Ada berapa " + obj.nama + "?",
        visual: groupHTML(n, obj),
        options: numberOptions(n, 1, 10),
        answer: n,
        hint: "Hitung satu per satu: " + n + " " + obj.nama + "."
      };
    }

    if (state.mode === "tambah") {
      const max = easy ? 5 : 10;
      const a = rnd(1, max);
      const b = rnd(1, max);
      const sum = a + b;
      const total = a + b;
      return {
        prompt: a + " + " + b + " = ?",
        visual:
          groupHTML(a, obj, "alt") +
          '<span class="plus" aria-hidden="true">+</span>' +
          groupHTML(b, obj) +
          (total > 12 ? '<span class="muted" style="width:100%;font-size:.8rem">Jumlah semua ' + obj.nama + "</span>" : ""),
        options: numberOptions(sum, 1, easy ? 10 : 20),
        answer: sum,
        hint: "Mulai dari " + a + ", lalu hitung " + b + " lagi. Hasilnya " + sum + "."
      };
    }

    if (state.mode === "kurang") {
      const max = easy ? 8 : 15;
      const a = rnd(3, max);
      const b = rnd(1, a - 1);
      const diff = a - b;
      return {
        prompt: a + " − " + b + " = ?",
        visual:
          groupHTML(a, obj, "alt") +
          '<span class="muted" style="width:100%;font-size:.82rem">' + b + " " + obj.nama + " diambil (yang pudar)</span>",
        options: numberOptions(diff, 0, easy ? 8 : 15),
        answer: diff,
        hint: a + " dikurangi " + b + " sama dengan " + diff + ".",
        taken: b
      };
    }

    // banding
    let a = rnd(1, easy ? 6 : 10);
    let b = rnd(1, easy ? 6 : 10);
    if (Math.random() < 0.15) b = a;
    const symbol = a > b ? ">" : a < b ? "<" : "=";
    return {
      prompt: "Bandingkan dua kelompok. Tanda apa yang benar?",
      visual:
        '<div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;justify-content:center">' +
        '<div><div class="muted" style="font-size:.78rem;margin-bottom:4px">Kelompok A</div>' +
        groupHTML(a, obj, "alt") +
        "</div>" +
        '<span class="vs" aria-hidden="true">vs</span>' +
        '<div><div class="muted" style="font-size:.78rem;margin-bottom:4px">Kelompok B</div>' +
        groupHTML(b, obj) +
        "</div></div>" +
        '<div class="muted" style="width:100%;font-size:.95rem;margin-top:6px">' + a + " ... " + b + "</div>",
      options: [
        { text: ">", value: ">", label: "lebih banyak dari" },
        { text: "<", value: "<", label: "lebih sedikit dari" },
        { text: "=", value: "=", label: "sama dengan" }
      ],
      answer: symbol,
      hint: a + " " + symbol + " " + b + " — " + (symbol === ">" ? "kelompok A lebih banyak." : symbol === "<" ? "kelompok B lebih banyak." : "keduanya sama banyak.")
    };
  }

  /* ---------------- Render ---------------- */
  function render() {
    state.locked = false;
    state.q = makeQuestion();
    const q = state.q;

    el.play.hidden = false;
    el.result.hidden = true;
    el.label.textContent = "Soal " + (state.index + 1) + " dari " + TOTAL;
    el.prompt.textContent = q.prompt;
    el.visual.innerHTML = q.visual;
    el.feedback.textContent = "";
    el.feedback.className = "feedback";

    if (q.taken) {
      const objs = el.visual.querySelectorAll(".group.alt .obj");
      for (let i = objs.length - q.taken; i < objs.length; i++) {
        objs[i].classList.add("taken");
      }
    }

    el.answers.innerHTML = "";
    q.options.forEach(function (opt) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "answer";
      b.textContent = opt.text;
      if (opt.label) b.setAttribute("aria-label", opt.text + " (" + opt.label + ")");
      b.addEventListener("click", function () { answer(opt.value, b); });
      el.answers.appendChild(b);
    });

    el.statQ.textContent = (state.index + 1) + " / " + TOTAL;
    el.bar.style.width = Math.round((state.index / TOTAL) * 100) + "%";
    el.statBenar.textContent = String(state.correct);
    el.statStreak.textContent = String(state.streak) + (state.streak >= 2 ? " 🔥" : "");
    el.streak.textContent = state.streak >= 2 ? "🔥 Beruntun " + state.streak : "";
  }

  function answer(value, btn) {
    if (state.locked) return;
    state.locked = true;
    const q = state.q;
    const ok = value === q.answer;

    el.answers.querySelectorAll(".answer").forEach(function (b) {
      b.disabled = true;
      if (b.textContent === String(q.answer)) b.classList.add("correct");
    });

    if (ok) {
      state.correct++;
      state.streak++;
      state.bestStreak = Math.max(state.bestStreak, state.streak);
      btn.classList.add("correct");
      el.feedback.textContent = pickPraise() + " Benar!";
      el.feedback.className = "feedback good";
      App.sound.correct();
      if (state.streak > 0 && state.streak % 3 === 0) App.confetti({ count: 40 });
    } else {
      state.streak = 0;
      btn.classList.remove("correct");
      btn.classList.add("wrong");
      el.feedback.textContent = "Belum tepat. " + q.hint;
      el.feedback.className = "feedback bad";
      App.sound.wrong();
    }

    el.statBenar.textContent = String(state.correct);
    el.statStreak.textContent = String(state.streak) + (state.streak >= 2 ? " 🔥" : "");
    el.streak.textContent = state.streak >= 2 ? "🔥 Beruntun " + state.streak : "";
    el.bar.style.width = Math.round(((state.index + 1) / TOTAL) * 100) + "%";

    clearTimeout(state.timer);
    state.timer = setTimeout(next, ok ? 950 : 2200);
  }

  function pickPraise() {
    const list = ["Hebat!", "Keren!", "Bagus sekali!", "Tepat!", "Pintar!"];
    return list[rnd(0, list.length - 1)];
  }

  function next() {
    state.index++;
    if (state.index >= TOTAL) finish();
    else render();
  }

  /* ---------------- Hasil ---------------- */
  function finish() {
    el.play.hidden = true;
    el.result.hidden = false;
    el.label.textContent = "Selesai";
    el.bar.style.width = "100%";

    const score = state.correct;
    const stars = score >= 9 ? 3 : score >= 7 ? 2 : score >= 4 ? 1 : 0;

    el.resScore.textContent = score + " / " + TOTAL;
    el.resStars.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const s = document.createElement("span");
      s.textContent = "⭐";
      if (i >= stars) s.className = "dim";
      el.resStars.appendChild(s);
    }

    if (stars === 3) {
      el.resEmoji.textContent = "🏆";
      el.resTitle.textContent = "Luar biasa!";
      el.resText.textContent =
        score === TOTAL
          ? "Semua benar! Kamu sudah jago berhitung!"
          : "Hampir semua benar. Kamu sudah jago berhitung!";
    } else if (stars === 2) {
      el.resEmoji.textContent = "🎉";
      el.resTitle.textContent = "Bagus sekali!";
      el.resText.textContent = "Tinggal sedikit lagi. Coba sekali lagi, ya!";
    } else if (stars === 1) {
      el.resEmoji.textContent = "🌱";
      el.resTitle.textContent = "Terus berlatih!";
      el.resText.textContent = "Kamu sudah mencoba dengan baik. Main lagi pelan-pelan.";
    } else {
      el.resEmoji.textContent = "🤗";
      el.resTitle.textContent = "Tidak apa-apa!";
      el.resText.textContent = "Semua orang belajar dari awal. Coba level Mudah dulu.";
    }

    if (stars > 0) {
      App.addStars(stars);
      App.sound.win();
      App.confetti({ count: 110 });
      App.saveBest("berhitung-" + state.mode, score);
      el.resText.textContent += " ⭐ +" + stars + " bintang";
    } else {
      App.sound.click();
    }
  }

  /* ---------------- Kontrol ---------------- */
  function startSession() {
    clearTimeout(state.timer);
    state.index = 0;
    state.correct = 0;
    state.streak = 0;
    state.bestStreak = 0;
    state.locked = false;
    render();
  }

  el.modeChips.addEventListener("click", function (ev) {
    const btn = ev.target.closest("[data-mode]");
    if (!btn) return;
    state.mode = btn.dataset.mode;
    el.modeChips.querySelectorAll(".chip").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b === btn));
    });
    App.sound.click();
    startSession();
  });

  document.querySelectorAll("[data-level]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      state.level = btn.dataset.level;
      document.querySelectorAll("[data-level]").forEach(function (b) {
        b.setAttribute("aria-pressed", String(b === btn));
      });
      App.sound.click();
      startSession();
    });
  });

  el.restart.addEventListener("click", function () {
    App.sound.click();
    startSession();
  });
  el.again.addEventListener("click", function () {
    App.sound.click();
    startSession();
  });

  startSession();
})();
