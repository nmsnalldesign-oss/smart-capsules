"use client";

import { motion } from "framer-motion";
import { FlaskConical, Microscope, Settings, Maximize } from "lucide-react";
import { useState, useEffect } from "react";

const values = [
    {
        title: "ферментация растительного сырья",
        icon: FlaskConical,
        desc: ""
    },
    {
        title: "синтез и модификация биополимеров",
        icon: Microscope,
        desc: ""
    },
    {
        title: "оптимизация процессов микрокапсулирования",
        icon: Settings,
        desc: ""
    },
    {
        title: "масштабирование от лабораторного образца до промышленной партии",
        icon: Maximize,
        desc: ""
    }
];

export default function Values() {
    // isMobile удалено для предотвращения FOUC и CLS

    return (
        <section className="py-24 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00b4d8]/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "200px" }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="sticky top-32"
                            style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                        >
                            <h2 className="text-4xl md:text-5xl font-[var(--font-outfit)] font-bold mb-6 text-gray-900 leading-tight">
                                Наши <span className="text-gradient">компетенции</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Мы разрабатываем индивидуальные решения под задачи заказчика: от инкапсуляции специфических активов до адаптации технологии под существующее производство.
                            </p>
                            <div className="p-6 rounded-2xl bg-white shadow-xl border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full pointer-events-none" />
                                <p className="text-gray-900 font-medium text-lg leading-snug relative z-10">
                                    Работаем в B2B-сегменте. Готовы к сотрудничеству и поиску оптимальных решений под ваши задачи.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {values.map((value, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "100px" }}
                                    transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white border border-gray-100 shadow-md rounded-3xl p-8 hover:shadow-xl transition-all group"
                                    style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0070f3] mb-6 group-hover:bg-[#0070f3] group-hover:text-white transition-colors">
                                        <value.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold font-[var(--font-outfit)] text-gray-900 mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {value.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
