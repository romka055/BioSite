// ----- Organelle data -----
const organelleData = {
  "membrane": {
    emoji: "🛡️",
    name: "קרום התא (ממברנה)",
    desc: "השומר של התא! שכבה דקה שעוטפת את כל התא ומחליטה מה נכנס ומה יוצא ממנו - כמו דלת עם שומר.",
    fact: "הקרום עשוי בעיקר משומנים וחלבונים, והוא כל כך דק שאפשר לראות אותו רק במיקרוסקופ חזק מאוד."
  },
  "cytoplasm": {
    emoji: "💧",
    name: "ציטופלזמה",
    desc: "הנוזל הדמוי ג'ל שממלא את כל התא. כל האברונים 'שטים' בתוכו, ובו מתרחשים הרבה תהליכים כימיים.",
    fact: "ציטופלזמה מורכבת ברובה ממים - בערך 70%-80%!"
  },
  "nucleus": {
    emoji: "🧠",
    name: "גרעין התא",
    desc: "'מרכז הבקרה' של התא. בתוכו נמצא החומר התורשתי (DNA) שמכיל את כל ההוראות איך התא צריך לפעול ולהתחלק.",
    fact: "אם היינו פורשים את ה-DNA מתא אחד שלך לקו ישר, הוא היה מגיע לאורך של כ-2 מטר!"
  },
  "nucleolus": {
    emoji: "⚪",
    name: "גרעינון",
    desc: "מבנה קטן בתוך הגרעין שתפקידו לייצר ריבוזומים, שלימים יוצאים לציטופלזמה כדי לייצר חלבונים.",
    fact: "לתא יכול להיות יותר מגרעינון אחד בתוך הגרעין שלו."
  },
  "mitochondria": {
    emoji: "🔋",
    name: "מיטוכונדריה",
    desc: "'תחנת הכוח' של התא. כאן מתבצעת נשימת התא - תהליך שהופך סוכר וחמצן לאנרגיה (ATP) שהתא יכול להשתמש בה.",
    fact: "לתאי שריר, שצריכים הרבה אנרגיה, יש הרבה יותר מיטוכונדריה מאשר לתאי עור."
  },
  "er": {
    emoji: "🪢",
    name: "רשתית אנדופלזמית",
    desc: "מערכת צינורות וממברנות המשמשת להובלת חומרים בתוך התא. חלק ממנה 'מחוספס' כי יש עליו ריבוזומים.",
    fact: "הרשתית האנדופלזמית המחוספסת קשורה ישירות לקרום הגרעין."
  },
  "golgi": {
    emoji: "📦",
    name: "מכשיר גולגי",
    desc: "אורז, ממיין ושולח חלבונים וחומרים אחרים אל מחוץ לתא או למקומות אחרים בתוכו - כמו מחלקת משלוחים.",
    fact: "מכשיר הגולגי נקרא על שם המדען האיטלקי קמילו גולגי שגילה אותו."
  },
  "ribosomes": {
    emoji: "🔵",
    name: "ריבוזומים",
    desc: "מבנים זעירים שמייצרים חלבונים לפי ההוראות שמגיעות מהגרעין. יש כאלה שצפים חופשי ויש כאלה שיושבים על הרשתית האנדופלזמית.",
    fact: "בתא אחד יכולים להיות מיליוני ריבוזומים הפועלים בו-זמנית!"
  },
  "lysosome": {
    emoji: "♻️",
    name: "ליזוזום",
    desc: "'מרכז המיחזור' של התא. מפרק חומרי פסולת, חלקי תא ישנים וחומרים מיותרים בעזרת אנזימים מיוחדים.",
    fact: "ליזוזומים נמצאים בעיקר בתאי בעלי חיים, ועוזרים גם להילחם בחיידקים פולשים."
  },
  "vacuole-small": {
    emoji: "🫧",
    name: "חלולית",
    desc: "'מחסן' קטן לאחסון מים, מזון או חומרי פסולת. בתאי בעלי חיים החלוליות בדרך כלל קטנות ויש כמה מהן.",
    fact: "תא יכול להשתמש בחלולית כדי לפלוט חומרים מיותרים אל מחוץ לתא."
  },
  "vacuole-large": {
    emoji: "🫧",
    name: "חלולית מרכזית",
    desc: "בתאי צומח יש חלולית ענקית אחת שתופסת חלק גדול מהתא. היא אוגרת מים ועוזרת לתא להישאר נוקשה וזקוף.",
    fact: "כשלצמח אין מספיק מים, החלולית מתכווצת וזו אחת הסיבות שהצמח 'נובל'."
  },
  "chloroplast": {
    emoji: "🌿",
    name: "כלורופלסט",
    desc: "נמצא רק בתאי צומח! מבצע פוטוסינתזה - הופך אור שמש, מים ופחמן דו חמצני לסוכר וחמצן, בעזרת החומר הירוק כלורופיל.",
    fact: "בלי כלורופלסטים וצמחים, לא היה חמצן לנשימה באטמוספירה של כדור הארץ."
  },
  "cellwall": {
    emoji: "🧱",
    name: "קיר התא",
    desc: "קיים רק בתאי צומח (ולא בתאי בעלי חיים). זהו מבנה קשיח העוטף את קרום התא מבחוץ, ועשוי בעיקר מתאית. הוא תומך בתא ומגן עליו.",
    fact: "קיר התא הוא הסיבה שלתאי צומח יש צורה מרובעת וקבועה יותר מתאי בעלי חיים."
  }
};

// click on cell-wall shape isn't a separate element by id in SVG except rect with plant-only; add listener via class
// ----- Diagram interactivity -----
const svg = document.getElementById("cellSvg");
const infoPanel = document.getElementById("infoPanel");
const animalBtn = document.getElementById("animalBtn");
const plantBtn = document.getElementById("plantBtn");

function showInfo(id) {
  const data = organelleData[id];
  if (!data) return;
  infoPanel.innerHTML = `
    <div class="info-icon">${data.emoji}</div>
    <h3>${data.name}</h3>
    <p>${data.desc}</p>
    <div class="fun-fact">💡 ידעתם? ${data.fact}</div>
  `;
}

function selectOrganelle(el) {
  const id = el.getAttribute("data-id");
  if (!id) return;
  svg.querySelectorAll(".organelle.selected").forEach(o => o.classList.remove("selected"));
  el.classList.add("selected");
  showInfo(id);
}

svg.querySelectorAll(".organelle").forEach(el => {
  el.addEventListener("click", () => selectOrganelle(el));
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      selectOrganelle(el);
    }
  });
});

// Cell wall click (it has no data-id to avoid duplicate key with membrane style; add direct listener)
const cellWallRect = svg.querySelector("rect.plant-only");
if (cellWallRect) {
  cellWallRect.style.cursor = "pointer";
  cellWallRect.setAttribute("tabindex", "0");
  cellWallRect.setAttribute("role", "button");
  cellWallRect.addEventListener("click", () => showInfo("cellwall"));
  cellWallRect.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      showInfo("cellwall");
    }
  });
}

function setMode(mode) {
  const isPlant = mode === "plant";
  svg.classList.toggle("plant-mode", isPlant);
  animalBtn.classList.toggle("active", !isPlant);
  plantBtn.classList.toggle("active", isPlant);
  svg.querySelectorAll(".organelle.selected").forEach(o => o.classList.remove("selected"));
  infoPanel.innerHTML = `
    <div class="info-icon">👆</div>
    <h3>לחצו על אחד מחלקי התא</h3>
    <p>בחרו באברון בשרטוט כדי לקרוא מידע מעניין עליו.</p>
  `;
}

animalBtn.addEventListener("click", () => setMode("animal"));
plantBtn.addEventListener("click", () => setMode("plant"));

// ----- Flashcards -----
const flashcardIds = ["membrane", "cytoplasm", "nucleus", "mitochondria", "er", "golgi", "ribosomes", "lysosome", "chloroplast", "cellwall"];
const flashcardGrid = document.getElementById("flashcardGrid");

flashcardIds.forEach(id => {
  const data = organelleData[id];
  if (!data) return;
  const card = document.createElement("div");
  card.className = "flashcard";
  card.innerHTML = `
    <div class="flashcard-inner">
      <div class="flashcard-face flashcard-front">
        <div class="fc-emoji">${data.emoji}</div>
        <h4>${data.name}</h4>
      </div>
      <div class="flashcard-face flashcard-back">
        <p>${data.desc}</p>
      </div>
    </div>
  `;
  card.addEventListener("click", () => card.classList.toggle("flipped"));
  flashcardGrid.appendChild(card);
});

// ----- Quiz -----
const quizQuestions = [
  {
    q: "איזה אברון מכונה 'תחנת הכוח של התא'?",
    options: ["גרעין התא", "מיטוכונדריה", "ריבוזום", "חלולית"],
    answer: 1,
    explain: "מיטוכונדריה אחראית על ייצור האנרגיה (ATP) שהתא זקוק לה."
  },
  {
    q: "מהו תפקידו העיקרי של גרעין התא?",
    options: ["ייצור אנרגיה", "אחסון מים", "ניהול התא ושמירת החומר התורשתי", "הגנה על התא מבחוץ"],
    answer: 2,
    explain: "הגרעין מכיל את ה-DNA ומנהל את כל הפעילות בתא."
  },
  {
    q: "איזה אברון אחראי על ייצור חלבונים בתא?",
    options: ["ריבוזום", "ליזוזום", "מיטוכונדריה", "קרום התא"],
    answer: 0,
    explain: "ריבוזומים מייצרים חלבונים לפי ההוראות שמגיעות מהגרעין."
  },
  {
    q: "מה ההבדל העיקרי בין תא צומח לתא מבעל חיים?",
    options: [
      "לתא צומח אין גרעין",
      "רק לתא צומח יש קיר תא וכלורופלסטים",
      "רק לתא מבעל חיים יש מיטוכונדריה",
      "אין שום הבדל"
    ],
    answer: 1,
    explain: "קיר התא וכלורופלסטים קיימים רק בתאי צומח."
  },
  {
    q: "מהו תפקיד הכלורופלסט?",
    options: ["פירוק פסולת", "ביצוע פוטוסינתזה", "ייצור ריבוזומים", "אחסון מים"],
    answer: 1,
    explain: "כלורופלסט הופך אור שמש, מים ופחמן דו חמצני לסוכר וחמצן בתהליך הפוטוסינתזה."
  },
  {
    q: "מהו תפקיד הליזוזום?",
    options: ["שליחת חומרים מחוץ לתא", "פירוק פסולת ומיחזור חומרים", "ייצור אנרגיה", "שמירה על צורת התא"],
    answer: 1,
    explain: "ליזוזום הוא 'מרכז המיחזור' של התא, הוא מפרק חומרי פסולת וחלקי תא ישנים."
  },
  {
    q: "איך קוראים לנוזל שממלא את התא ושבו שטים האברונים?",
    options: ["ציטופלזמה", "חלולית", "קרום התא", "DNA"],
    answer: 0,
    explain: "ציטופלזמה הוא הנוזל הדמוי ג'ל שממלא את התא."
  },
  {
    q: "איזה אברון אורז ושולח חומרים מחוץ לתא, כמו מחלקת משלוחים?",
    options: ["רשתית אנדופלזמית", "מכשיר גולגי", "גרעינון", "ליזוזום"],
    answer: 1,
    explain: "מכשיר גולגי אורז, ממיין ושולח חומרים אל מחוץ לתא."
  },
  {
    q: "מה מיוחד בחלולית בתא צומח לעומת תא מבעל חיים?",
    options: [
      "אין בתא צומח חלולית בכלל",
      "בתא צומח יש בדרך כלל חלולית מרכזית אחת גדולה",
      "בתא צומח יש הרבה חלוליות זעירות בלבד",
      "החלולית בתא צומח מייצרת אנרגיה"
    ],
    answer: 1,
    explain: "בתא צומח יש בדרך כלל חלולית מרכזית אחת גדולה מאוד, שתופסת חלק ניכר מנפח התא."
  },
  {
    q: "מה מיוחד במיטוכונדריה מבחינה גנטית?",
    options: [
      "אין לה שום דבר מיוחד",
      "יש לה DNA משלה, נפרד מה-DNA שבגרעין",
      "היא חלק מהגרעין",
      "היא מכילה את כל ה-DNA של התא"
    ],
    answer: 1,
    explain: "למיטוכונדריה יש DNA עצמאי משלה, ומשערים שבעבר היא הייתה יצור חד-תאי עצמאי."
  }
];

let quizState = {
  order: [],
  current: 0,
  score: 0
};

const quizContainer = document.getElementById("quizContainer");

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz() {
  quizState.order = shuffle(quizQuestions.map((_, i) => i));
  quizState.current = 0;
  quizState.score = 0;
  renderQuestion();
}

function renderQuestion() {
  const qIndex = quizState.order[quizState.current];
  const question = quizQuestions[qIndex];
  const total = quizState.order.length;

  // shuffle options but keep track of correct answer text
  const optionIndices = shuffle(question.options.map((_, i) => i));
  const correctText = question.options[question.answer];

  quizContainer.innerHTML = `
    <div class="quiz-progress">שאלה ${quizState.current + 1} מתוך ${total} &nbsp;|&nbsp; ניקוד: ${quizState.score}</div>
    <div class="quiz-question">${question.q}</div>
    <div class="quiz-options">
      ${optionIndices.map(i => `<button class="quiz-option" data-text="${encodeURIComponent(question.options[i])}">${question.options[i]}</button>`).join("")}
    </div>
    <div id="quizExplainSlot"></div>
  `;

  const optionButtons = quizContainer.querySelectorAll(".quiz-option");
  optionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const chosenText = decodeURIComponent(btn.getAttribute("data-text"));
      optionButtons.forEach(b => b.disabled = true);
      optionButtons.forEach(b => {
        const text = decodeURIComponent(b.getAttribute("data-text"));
        if (text === correctText) b.classList.add("correct");
        else if (b === btn) b.classList.add("wrong");
      });
      if (chosenText === correctText) quizState.score++;

      const explainSlot = document.getElementById("quizExplainSlot");
      explainSlot.innerHTML = `
        <div class="quiz-explain">💡 ${question.explain}</div>
        <button class="btn btn-primary quiz-next" id="quizNextBtn">
          ${quizState.current + 1 < total ? "השאלה הבאה ←" : "לראות תוצאה סופית"}
        </button>
      `;
      document.getElementById("quizNextBtn").addEventListener("click", () => {
        quizState.current++;
        if (quizState.current < total) {
          renderQuestion();
        } else {
          renderResult();
        }
      });
    });
  });
}

function renderResult() {
  const total = quizState.order.length;
  const score = quizState.score;
  let message;
  if (score === total) message = "מושלם! אלופת התא! 🏆";
  else if (score >= total * 0.7) message = "כל הכבוד, ידע מצוין! 🌟";
  else if (score >= total * 0.4) message = "לא רע! עוד קצת תרגול ותהיו מומחים 💪";
  else message = "כדאי לעבור שוב על הכרטיסיות והשרטוט ולנסות שוב 📖";

  quizContainer.innerHTML = `
    <div class="quiz-result">
      <h3>סיימתם את החידון!</h3>
      <div class="score">${score} / ${total}</div>
      <p>${message}</p>
      <button class="btn btn-primary" id="restartQuizBtn">נסו שוב 🔁</button>
    </div>
  `;
  document.getElementById("restartQuizBtn").addEventListener("click", startQuiz);
}

startQuiz();
