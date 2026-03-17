"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoveStory() {
  const [current, setCurrent] = useState(0)

  const pages = [
    "هذه ليست مجرد صفحة...\nهذه رحلة صغيرة داخل قلبي.\nكل خطوة فيها\nتحمل ذكرى معك.",
    "كل شيء كان عاديًا في حياتي\nحتى جاء يوم\nعرفت فيه اسمًا\nصار يسكن قلبي.",
    "أول مرة رأيتك\nابتسمت دون أن أشعر.\nكأن قلبي عرفك\nقبل أن تعرفك عيناي.",
    "ومن بين كل الناس\nبقي وجهك وحده\nيسكن الذاكرة.",
    "يوم جئت لبيتكم\nحاملاً بوكيه ورد\nلم أكن مجرد مندوب.\nكنت قلبًا\nيبحث عن لحظة يراك فيها.",
    "ربما بيني وبينك اليوم مسافة\nلكن هناك شيء\nلا يعرف البعد...\nقلبي.",
    "يقولون إن النجوم بعيدة\nلكن نجمة واحدة\nنزلت إلى حياتي\nوكان اسمها\nشهد.",
    "لا أعدك بدنيا بلا صعوبات\nلكن أعدك بشيء واحد\nأن يبقى قلبي\nبيتًا لك دائمًا."
  ]

  const next = () => {
    if (current < pages.length) {
      setCurrent(current + 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex items-center justify-center text-center px-4 overflow-hidden">

      <div className="max-w-[700] p-8 relative">

        {/* ✨ قلوب متحركة */}
        <motion.div
          className="absolute text-pink-500 text-3xl"
          animate={{ y: [-20, -200], opacity: [1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ❤️
        </motion.div>

        {/* 🎬 النص */}
        <AnimatePresence mode="wait">
          {current < pages.length ? (
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="text-lg leading-8 whitespace-pre-line"
            >
              {current === 0 && (
                <h1 className="text-3xl font-bold mb-6">
                  إلى شهد
                </h1>
              )}

              {pages[current]}
            </motion.div>
          ) : (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 1 }}
            >
              <div className="text-8xl text-pink-500 animate-pulse">
                M ❤️ S
              </div>

              <p className="text-2xl mt-6 leading-8">
                هل تقبلين أن تبقي<br />
                نجمة حياتي<br />
                وقصة قلبي<br />
                إلى الأبد؟
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🔘 زر */}
        {current <= pages.length && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={next}
            className="mt-8 px-8 py-3 text-lg rounded-full bg-pink-500 hover:bg-pink-600 transition shadow-lg"
          >
            {current === 0
              ? "ابدئي الرحلة"
              : current === pages.length
              ? "💖"
              : "التالي"}
          </motion.button>
        )}

      </div>
    </div>
  )
}