"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const milestones = [
    { id: 0, year: "2022", title: "Зарождение идеи: команда проекта начинает разработку технологии микрокапсулирования биотехнологического сырья для косметической отрасли." },
    { id: 1, year: "2023", title: "Победа в конкурсе «СТАРТ-1» Фонда содействия инновациям. Основание компании ООО «Умные Капсулы»." },
    { id: 2, year: "2024", title: "Успешное завершение первого этапа НИОКР. Получены и испытаны опытные образцы микрокапсулированных масел и витамина А." },
    { id: 3, year: "2025", title: "Получен патент на технологию микрокапсулирования. Компании присвоен статус «Малая технологическая компания» (МТК)." },
    { id: 4, year: "2026", title: "Старт нового этапа НИОКР. Доработка технологии и получение полнофункциональных образцов микрокапсул готовых к выходу на рынок." },
    { id: 5, year: "2027", title: "Выход на рынок и первые продажи B2B-клиентам в косметической отрасли." },
    { id: 6, year: "2028-2029", title: "Масштабирование производства и расширение линейки продуктов." },
    { id: 7, year: "2030–2035", title: "Расширение сфер применения: выход на рынки пищевых ингредиентов и агробиотехнологий с продуктами на основе микрокапсулирования." },
];

export default function Timeline() {
    const [activeIndex, setActiveIndex] = useState(3); // Start near current year
    // isMobile removed for hydration fixing

    return (
        <section className="pt-20 pb-12 bg-gray-50 relative border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-[var(--font-outfit)] font-bold mb-6 text-gray-900"
                    >
                        История <span className="text-gradient">и перспективы</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col items-center">
                    {/* Active Card */}
                    <div className="w-full h-[250px] md:h-[200px] relative overflow-hidden bg-[#0070f3] rounded-2xl shadow-lg mb-12 flex items-center justify-center text-center p-6 md:p-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="w-full max-w-3xl"
                            >
                                <h3 className="text-4xl md:text-5xl font-bold font-[var(--font-outfit)] text-white mb-4">
                                    {milestones[activeIndex].year}
                                </h3>
                                <p className="text-white md:text-lg font-medium leading-relaxed">
                                    {milestones[activeIndex].title}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Timeline Navigation */}
                    <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
                        <div className="min-w-[800px] flex items-center justify-between relative px-4">
                            {/* Connecting Line */}
                            <div className="absolute left-8 right-8 top-[36px] h-0.5 border-t-2 border-dashed border-gray-300 -z-10" />

                            {milestones.map((item, idx) => {
                                const isActive = idx === activeIndex;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveIndex(idx)}
                                        aria-label={`Выбрать год ${item.year}`}
                                        aria-current={isActive ? "step" : undefined}
                                        className="relative flex flex-col items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-[#0070f3] rounded-sm p-1"
                                    >
                                        <span className={`text-sm md:text-base mb-3 transition-colors ${isActive ? "text-[#0070f3] font-bold" : "text-gray-500 font-medium group-hover:text-gray-800"}`}>
                                            {item.year}
                                        </span>
                                        <div
                                            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${isActive ? "bg-[#0070f3] border-[#0070f3] scale-125 shadow-[0_0_12px_rgba(0,112,243,0.4)]" : "bg-white border-gray-300 group-hover:border-[#00b4d8]"}`}
                                        />
                                        <div className={`w-0.5 h-3 mt-1 bg-gray-300 transition-opacity ${isActive ? "opacity-0" : "opacity-100"}`} />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
