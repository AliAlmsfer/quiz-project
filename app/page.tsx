"use client";

import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  correct: number;
};

const questions: Question[] = [
  {
    question: "ما الشيء الذي يزيد كلما أعطيت منه؟",
    options: ["المال", "الحب 💘", "العمر", "الكتب"],
    correct: 1,
  },
  {
    question: "كم مرة في الدقيقة تفكر في من تحب؟",
    options: ["مرة أو مرتين", "١٠ مرات 🤍", "كل ثانية 💫", "ما بفكر/ما بفكرش"],
    correct: 2,
  },
  {
    question: "ما أروع هدية يمكن أن تهديها لحبيبك؟",
    options: ["وردة حمراء", "ساعة غالية", "وقت ممتع معك ❤️", "عطر فاخر"],
    correct: 2,
  },
  {
    question: "أين قابلت حبك الأول (أو تحب أن تقابله)؟",
    options: [
      "في الجامعة/المدرسة",
      "عبر الأصدقاء",
      "في حلم 🌙",
      "في مقهى/منتزه",
    ],
    correct: 2,
  },
  {
    question: "ما لغة الحب المفضلة لديك؟",
    options: [
      "كلمات التشجيع",
      "الوقت النوعي ⏳",
      "اللمس (حضن/مسكة يد) 🤲",
      "تقديم الهدايا",
    ],
    correct: 1,
  },
];

export default function QuizPage() {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});

  const handleAnswer = (qIndex: number, optionIndex: number) => {
    setAnswers({
      ...answers,
      [qIndex]: optionIndex,
    });
  };

  return (
    <div className="min-h-screen  from-pink-50 via-rose-50 to-red-50 py-12 px-4 font-[Cairo]">
      <div className="max-w-3xl mx-auto">
        {/* Header رومانسي */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-rose-600 drop-shadow-md flex items-center justify-center gap-3 flex-wrap">
            <span className="animate-pulse">💗</span>
            اختبار الحب
            <span className="animate-pulse">💗</span>
          </h1>
          <p className="text-rose-400 text-xl mt-2">هل قلبك يعرف الإجابات؟</p>
          <div className="w-24 h-1  from-rose-300 to-pink-300 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* الأسئلة */}
        <div className="space-y-8">
          {questions.map((q, qIndex) => {
            const selectedAnswer = answers[qIndex];

            return (
              <div
                key={qIndex}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-rose-200 p-7 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] hover:border-rose-300"
              >
                {/* رقم السؤال والنص */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full  from-rose-400 to-pink-400 text-white font-bold text-lg shadow-md">
                    {qIndex + 1}
                  </span>
                  <h2 className="font-bold text-2xl text-rose-800">
                    {q.question}
                  </h2>
                </div>

                {/* الخيارات */}
                <div className="grid gap-3 pr-4">
                  {q.options.map((option, optionIndex) => {
                    const isSelected = selectedAnswer === optionIndex;
                    const isCorrect = optionIndex === q.correct;

                    let optionClasses =
                      "group border-2 p-4 rounded-2xl cursor-pointer transition-all duration-200 flex items-center gap-3 bg-white hover:shadow-md";

                    // تغيير الألوان بناءً على الإجابة
                    if (selectedAnswer !== undefined) {
                      if (isCorrect) {
                        optionClasses +=
                          " bg-green-50 border-green-400 hover:bg-green-100";
                      } else if (isSelected && !isCorrect) {
                        optionClasses +=
                          " bg-red-50 border-red-400 hover:bg-red-100";
                      } else {
                        optionClasses +=
                          " border-rose-200 hover:border-rose-400 hover:bg-rose-50";
                      }
                    } else {
                      optionClasses +=
                        " border-rose-200 hover:border-rose-400 hover:bg-rose-50";
                    }

                    return (
                      <div
                        key={optionIndex}
                        onClick={() => handleAnswer(qIndex, optionIndex)}
                        className={optionClasses}
                      >
                        <span
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                            isSelected
                              ? isCorrect
                                ? "bg-green-500 border-green-600 text-white"
                                : "bg-red-500 border-red-600 text-white"
                              : "border-rose-300 group-hover:border-rose-500"
                          }`}
                        >
                          {isSelected && (
                            <span className="text-sm">
                              {isCorrect ? "✓" : "✗"}
                            </span>
                          )}
                        </span>
                        <span
                          className={`text-gray-700 text-lg ${
                            isSelected && isCorrect
                              ? "text-green-700 font-semibold"
                              : ""
                          }`}
                        >
                          {option}
                        </span>

                        {/* أيقونات إضافية للخيارات الصحيحة */}
                        {isSelected && isCorrect && (
                          <span className="mr-auto text-green-500 animate-pulse">
                            ❤️
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* رسالة بعد الإجابة */}
                {selectedAnswer !== undefined && (
                  <div className="mt-4 text-sm text-rose-400 italic flex items-center gap-2">
                    <span>💕</span>
                    {selectedAnswer === q.correct
                      ? "إجابة رائعة! قلبك في المكان الصحيح"
                      : "معليهش! الحب يعلمنا الصح والخطأ"}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* زر النتيجة */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              const correctCount = Object.keys(answers).filter(
                (key) =>
                  answers[parseInt(key)] === questions[parseInt(key)].correct,
              ).length;
              alert(
                `💖 أجبت على ${correctCount} من ${questions.length} إجابات صحيحة! 💖`,
              );
            }}
            className="group  from-rose-400 to-pink-400 text-white text-2xl font-bold py-5 px-14 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 border-4 border-white/50 inline-flex items-center gap-3"
          >
            <span className="group-hover:animate-bounce">💌</span>
            أظهر نتيجة الحب
            <span className="group-hover:animate-bounce">💌</span>
          </button>
          <p className="text-rose-400 mt-4 text-sm">
            (كل الإجابات صحيحة إذا كانت من القلب 💖)
          </p>
        </div>

        {/* أرقام حب متحركة */}
        <div className="flex justify-center gap-6 mt-12 text-4xl opacity-30">
          {["❤️", "💕", "💖", "💗", "💓"].map((heart, i) => (
            <span
              key={i}
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {heart}
            </span>
          ))}
        </div>

        {/* إحصائيات صغيرة */}
        {Object.keys(answers).length > 0 && (
          <div className="mt-8 text-center text-rose-500 bg-white/50 rounded-2xl p-4 backdrop-blur-sm border border-rose-200">
            <p className="text-lg">
              أجبت على {Object.keys(answers).length} أسئلة
              {Object.keys(answers).length === questions.length && " 🎉 أحسنت!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
