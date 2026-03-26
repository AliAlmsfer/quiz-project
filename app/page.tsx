"use client";

import { useEffect, useState, useCallback } from "react";

type Section =
  | "start"
  | "story1"
  | "story2"
  | "counter"
  | "game1"
  | "game2"
  | "game3"
  | "game4"
  | "game5"
  | "game6"
  | "game7"
  | "game8"
  | "game9"
  | "game10"
  | "game11"
  | "game12"
  | "game13"
  | "game14"
  | "game15"
  | "game16"
  | "end";

// ======= بيانات الأسئلة =======
const QUESTIONS: {
  id: Section;
  next: Section;
  emoji: string;
  question: string;
  correct: string;
  wrong: string;
}[] = [
  {
    id: "game2",
    next: "game3",
    emoji: "💭",
    question: "يحبها؟",
    correct: "اي بكلشي ❤️",
    wrong: "لا",
  },
  {
    id: "game3",
    next: "game4",
    emoji: "🌙",
    question: "تفكر فيها؟",
    correct: "كل وقت ❤️",
    wrong: "أحيانا",
  },
  {
    id: "game4",
    next: "game5",
    emoji: "✨",
    question: "شهد أهم شي بحياته؟",
    correct: "اي والله ❤️",
    wrong: "مو متأكد",
  },
  {
    id: "game5",
    next: "game6",
    emoji: "🔥",
    question: "تحس بيها وهي بعيدة؟",
    correct: "دايمًا ❤️",
    wrong: "لا",
  },
  {
    id: "game6",
    next: "game7",
    emoji: "🌹",
    question: "ودها تكون معاه دايم؟",
    correct: "اي ❤️",
    wrong: "شايف",
  },
  {
    id: "game7",
    next: "game8",
    emoji: "💌",
    question: "صوتها يريحه؟",
    correct: "أكثر من كلشي ❤️",
    wrong: "عادي",
  },
  {
    id: "game8",
    next: "game9",
    emoji: "🎯",
    question: "تحمل اسمها بقلبه؟",
    correct: "من يوم أول ❤️",
    wrong: "يمكن",
  },
  {
    id: "game9",
    next: "game10",
    emoji: "🌟",
    question: "أجمل لحظة بحياته وين؟",
    correct: "وياها ❤️",
    wrong: "بمكان ثاني",
  },
  {
    id: "game10",
    next: "game11",
    emoji: "💫",
    question: "يتمنى عيد ميلادها يكون مثالي؟",
    correct: "من كل قلبه ❤️",
    wrong: "عادي",
  },
  {
    id: "game11",
    next: "game12",
    emoji: "🎂",
    question: "تستاهل كل الخير؟",
    correct: "وأكثر ❤️",
    wrong: "شوي",
  },
  {
    id: "game12",
    next: "game13",
    emoji: "🕊️",
    question: "هي سكينته؟",
    correct: "هي كل سكينتي ❤️",
    wrong: "لا أدري",
  },
  {
    id: "game13",
    next: "game14",
    emoji: "🌸",
    question: "يبيها سعيدة؟",
    correct: "هذا كل اللي أبيه ❤️",
    wrong: "مو مشغول",
  },
  {
    id: "game14",
    next: "game15",
    emoji: "💎",
    question: "هي نادرة؟",
    correct: "مو يلكى مثلها ❤️",
    wrong: "عادية",
  },
  {
    id: "game15",
    next: "game16",
    emoji: "🌊",
    question: "يحبها للأبد؟",
    correct: "وبعد الأبد ❤️",
    wrong: "إنشاء الله",
  },
  {
    id: "game16",
    next: "end",
    emoji: "🔥",
    question: "حبه شكد؟",
    correct: "أكثر من كلشي ❤️",
    wrong: "عادي",
  },
];

export default function BirthdayPage() {
  const [section, setSection] = useState<Section>("start");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState("");
  const [fadeKey, setFadeKey] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const next = useCallback((id: Section) => {
    setFadeKey((k) => k + 1);
    setSection(id);
  }, []);

  const correct = useCallback(
    (nextId: Section) => {
      setScore((prev) => prev + 10);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1200);
      next(nextId);
    },
    [next],
  );

  const win = useCallback(() => {
    setScore((prev) => prev + 10);
    next("end");
  }, [next]);

  // ⏳ العداد
  useEffect(() => {
    const startDate = new Date("2025-04-29");
    const tick = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      setTime(`${d} يوم و ${h} ساعة و ${m} دقيقة ❤️`);
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  // ❤️ القلوب الطائرة
  useEffect(() => {
    const emojis = ["❤️", "🩷", "💕", "💖", "💗", "✨"];
    const interval = setInterval(() => {
      const heart = document.createElement("div");
      heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      heart.style.cssText = `
        position: fixed;
        bottom: -40px;
        left: ${Math.random() * 100}vw;
        font-size: ${12 + Math.random() * 18}px;
        pointer-events: none;
        animation: floatUp ${4 + Math.random() * 3}s ease-in forwards;
        z-index: 0;
        opacity: 0.7;
      `;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 7000);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  // ======= مكوّن الزر الصحيح =======
  const GoodButton = ({
    children,
    onClick,
  }: {
    children: React.ReactNode;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className="relative overflow-hidden  from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 px-8 py-4 rounded-2xl mt-5 text-lg font-bold shadow-lg shadow-pink-900/50 transition-all duration-200 active:scale-95"
    >
      <span className="relative z-10">{children}</span>
    </button>
  );

  // ======= مكوّن الزر الهارب =======
  const WrongButton = ({ children }: { children: React.ReactNode }) => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const move = () => {
      setPos({
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
      });
    };
    return (
      <button
        onMouseEnter={move}
        onTouchStart={move}
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          transition: "transform 0.3s ease",
        }}
        className="bg-gray-700/60 border border-gray-600 px-6 py-3 rounded-2xl mt-3 text-gray-400 cursor-not-allowed select-none"
      >
        {children}
      </button>
    );
  };

  // ======= غلاف القسم =======
  const Wrap = ({ children }: { children: React.ReactNode }) => (
    <div
      key={fadeKey}
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative z-10 animate-fadeIn"
    >
      <div className="bg-black/40 backdrop-blur-md border border-pink-900/30 rounded-3xl p-8 max-w-md w-full shadow-2xl shadow-pink-950/50">
        {children}
      </div>
    </div>
  );

  // ======= شريط التقدم =======
  const totalQuestions = QUESTIONS.length;
  const currentQ = QUESTIONS.findIndex((q) => q.id === section);
  const progress =
    currentQ >= 0 ? ((currentQ / totalQuestions) * 100).toFixed(0) : null;

  // ======= عرض السؤال الحالي =======
  const currentQuestion = QUESTIONS.find((q) => q.id === section);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;800;900&display=swap');

        * { font-family: 'Tajawal', sans-serif; }

        @keyframes floatUp {
          0%   { transform: translateY(0) scale(1); opacity: 0.7; }
          100% { transform: translateY(-110vh) scale(0.5); opacity: 0; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(236,72,153,0.3); }
          50%       { box-shadow: 0 0 50px rgba(236,72,153,0.7); }
        }

        @keyframes confetti-drop {
          0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }

        .animate-fadeIn { animation: fadeIn 0.6s ease forwards; }
        .animate-pulse-glow { animation: pulse-glow 2s infinite; }

        .score-badge {
          background: linear-gradient(135deg, #be185d, #9f1239);
          border: 1px solid rgba(236,72,153,0.4);
        }
      `}</style>

      <div
        dir="rtl"
        className="min-h-screen relative overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0f 0%, #1a0a1a 50%, #0f0a1a 100%)",
        }}
      >
        {/* خلفية نجوم */}
        <div
          className="fixed inset-0 z-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 20% 30%, white, transparent), radial-gradient(1px 1px at 80% 70%, white, transparent), radial-gradient(1px 1px at 50% 50%, white, transparent), radial-gradient(1px 1px at 10% 80%, white, transparent), radial-gradient(1px 1px at 90% 20%, white, transparent)",
          }}
        />

        {/* كونفيتي عند الإجابة الصحيحة */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50 flex justify-center">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                style={{
                  position: "fixed",
                  top: 0,
                  left: `${Math.random() * 100}%`,
                  fontSize: `${14 + Math.random() * 16}px`,
                  animation: `confetti-drop ${0.8 + Math.random() * 0.6}s ease forwards`,
                  animationDelay: `${Math.random() * 0.3}s`,
                }}
              >
                {["🎉", "✨", "💖", "🌟", "🎊"][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>
        )}

        {/* شريط النقاط */}
        {section !== "start" && section !== "end" && (
          <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40 score-badge px-5 py-2 rounded-full text-sm font-bold shadow-lg">
            🏆 النقاط: {score}
          </div>
        )}

        {/* شريط تقدم الأسئلة */}
        {progress !== null && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-64">
            <div className="bg-gray-800/60 rounded-full h-2">
              <div
                className=" from-pink-500 to-rose-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-center text-xs text-gray-400 mt-1">
              سؤال {currentQ + 1} من {totalQuestions}
            </p>
          </div>
        )}

        {/* ===== البداية ===== */}
        {section === "start" && (
          <Wrap>
            <div className="text-5xl mb-4 animate-bounce">🎂</div>
            <h1 className="text-3xl font-black text-transparent bg-clip-text  from-pink-400 to-rose-300">
              عيد ميلاد سعيد يا شهد
            </h1>
            <p className="mt-5 leading-9 text-gray-200 text-base">
              يمكن اني بعيد عليج بهاليوم…
              <br />
              بس قلبي يمج بكل لحظة
              <br />
              وكل عام وانتي أجمل شي بحياتي ❤️
            </p>
            <GoodButton onClick={() => next("story1")}>كملي 🎁</GoodButton>
          </Wrap>
        )}

        {/* ===== القصة 1 ===== */}
        {section === "story1" && (
          <Wrap>
            <div className="text-4xl mb-3">🌙</div>
            <h2 className="text-2xl font-bold text-pink-400">بدايتج</h2>
            <p className="mt-4 leading-9 text-gray-200">
              بهذا اليوم انولد شخص غيّر حياتي…
              <br />
              انولدتي انتي ❤️
            </p>
            <GoodButton onClick={() => next("story2")}>بعد</GoodButton>
          </Wrap>
        )}

        {/* ===== القصة 2 ===== */}
        {section === "story2" && (
          <Wrap>
            <div className="text-4xl mb-3">💫</div>
            <h2 className="text-2xl font-bold text-pink-400">
              شنو انتي الي ❤️
            </h2>
            <p className="mt-4 leading-9 text-gray-200">
              انتي مو بس حب…
              <br />
              انتي راحتي وكل دنيتي
            </p>
            <GoodButton onClick={() => next("counter")}>كملي</GoodButton>
          </Wrap>
        )}

        {/* ===== العداد ===== */}
        {section === "counter" && (
          <Wrap>
            <div className="text-4xl mb-3">⏳</div>
            <h2 className="text-2xl font-bold text-pink-400">صارلنا سوا</h2>
            <div className="mt-5 bg-pink-950/40 border border-pink-800/40 rounded-2xl p-5 animate-pulse-glow">
              <p className="text-xl font-bold text-pink-300">{time}</p>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              وكل ثانية أحبج أكثر من اللي قبلها
            </p>
            <GoodButton onClick={() => next("game1")}>
              نبدأ التحدي 🎮
            </GoodButton>
          </Wrap>
        )}

        {/* ===== مقدمة التحدي ===== */}
        {section === "game1" && (
          <Wrap>
            <div className="text-5xl mb-3">🎮</div>
            <h2 className="text-2xl font-bold text-pink-400">التحدي يبدأ!</h2>
            <p className="mt-3 text-gray-300">جاوبي صح واجمعي النقاط ❤️</p>
            <p className="mt-2 text-gray-500 text-sm">
              (بس الإجابة الغلط تهرب منج 😏)
            </p>
            <div className="mt-4 text-2xl font-black text-pink-400">
              النقاط: {score}
            </div>
            <GoodButton onClick={() => next("game2")}>ابدأ 💪</GoodButton>
          </Wrap>
        )}

        {/* ===== الأسئلة الديناميكية ===== */}
        {currentQuestion && section !== "game1" && (
          <Wrap>
            <div className="text-4xl mb-2">{currentQuestion.emoji}</div>
            <h2 className="text-xl font-bold text-gray-400 mb-1">
              سؤال {currentQ + 1}
            </h2>
            <p className="text-2xl font-black text-white mt-2 mb-6">
              {currentQuestion.question}
            </p>
            <div className="flex flex-col items-center gap-2 w-full">
              {currentQuestion.next === "end" ? (
                <GoodButton onClick={win}>{currentQuestion.correct}</GoodButton>
              ) : (
                <GoodButton onClick={() => correct(currentQuestion.next)}>
                  {currentQuestion.correct}
                </GoodButton>
              )}
              <WrongButton>{currentQuestion.wrong}</WrongButton>
            </div>
          </Wrap>
        )}

        {/* ===== النهاية ===== */}
        {section === "end" && (
          <Wrap>
            <div className="text-5xl mb-4">💌</div>
            <h2 className="text-3xl font-black text-transparent bg-clip-text  from-pink-400 to-rose-300">
              يا شهد
            </h2>
            <div className="mt-2 bg-pink-950/30 border border-pink-800/30 rounded-2xl p-4">
              <p className="text-4xl font-black text-pink-400">
                🏆 {score} نقطة
              </p>
              <p className="text-gray-400 text-sm mt-1">بس النقاط مو المهم…</p>
            </div>
            <p>
              يا شهد… يا أجمل صدفة بحياتي… في يوم ميلادكِ، لا أهنئكِ فقط… بل
              أهنئ نفسي لأنكِ وُجدتِ في حياتي كل عامٍ وأنتِ النور الذي يضيء
              أيامي، والنبض الذي يمنح قلبي الحياة أحبكِ حبًا يتجاوز المسافات،
              ويكبر مع كل لحظة تمرّ، ويزداد عمقًا كلما فكرتُ بكِ وإن كنتُ اليوم
              بعيدًا عنكِ، فإني أقف بقلبٍ مليء بكِ، وكأنكِ أمامي الآن أتمنى لكِ
              في عامكِ الجديد كل الفرح، كل الأمان، وكل الأحلام التي تستحقينها
              وأتمنى… أن أكون أنا أحد أجمل أقداركِ التي لا تزول أعدكِ… أن أبقى
              معكِ، وأن أحبكِ أكثر مع كل عام، وأن لا يتغير قلبي مهما تغيّرت
              الأيام عيد ميلادكِ ليس مجرد يوم… بل هو بداية عمرٍ جديد لي معكِ ❤️
              كل عامٍ وأنتِ حبيبتي… كل عامٍ وأنتِ حياتي… كل عامٍ وأنا أحبكِ أكثر
              🎂❤️
            </p>
            <div className="mt-6 text-3xl animate-bounce">❤️ 🎂 ❤️</div>
          </Wrap>
        )}
      </div>
    </>
  );
}
