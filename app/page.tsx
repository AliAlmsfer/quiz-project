"use client"

import { useState } from "react"

type Question = {
  question: string
  options: string[]
  correct: number
}

const questions: Question[] = [
  {
    question: "ما عاصمة فرنسا؟",
    options: ["لندن", "باريس", "مدريد", "روما"],
    correct: 1,
  },
  {
    question: "كم عدد أيام الأسبوع؟",
    options: ["5", "6", "7", "8"],
    correct: 2,
  },
  {
    question: "كم عدد الكواكب في المجموعة الشمسية؟",
    options: ["7", "8", "9", "10"],
    correct: 1,
  },
  {
    question: "ما أكبر محيط في العالم؟",
    options: ["الأطلسي", "الهادئ", "الهندي", "المتجمد"],
    correct: 1,
  },
  {
    question: "ما أسرع حيوان بري؟",
    options: ["الأسد", "الفهد", "الحصان", "النمر"],
    correct: 1,
  },

  // يمكنك تكرار النمط حتى تصل إلى 50 سؤال
]

export default function QuizPage() {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({})

  const handleAnswer = (qIndex: number, optionIndex: number) => {
    setAnswers({
      ...answers,
      [qIndex]: optionIndex,
    })
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">

      <h1 className="text-3xl font-bold text-center mb-12">
        اختبار المعلومات العامة
      </h1>

      <div className="space-y-8">
        {questions.map((q, qIndex) => (
          <div
            key={qIndex}
            className="border rounded-2xl p-6 shadow-sm"
          >

            <h2 className="font-semibold mb-4 text-lg">
              {qIndex + 1}. {q.question}
            </h2>

            <div className="grid gap-3">

              {q.options.map((option, optionIndex) => {
                const selected = answers[qIndex]

                const isCorrect = optionIndex === q.correct
                const isSelected = selected === optionIndex

                let style = "border p-3 rounded-lg cursor-pointer hover:bg-gray-100"

                if (selected !== undefined) {
                  if (isCorrect) {
                    style = "border p-3 rounded-lg bg-green-100 border-green-500"
                  } else if (isSelected && !isCorrect) {
                    style = "border p-3 rounded-lg bg-red-100 border-red-500"
                  }
                }

                return (
                  <div
                    key={optionIndex}
                    onClick={() => handleAnswer(qIndex, optionIndex)}
                    className={style}
                  >
                    {option}
                  </div>
                )
              })}

            </div>

          </div>
        ))}
      </div>

    </div>
  )
}