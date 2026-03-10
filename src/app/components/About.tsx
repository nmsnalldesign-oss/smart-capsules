"use client";

import { motion } from "framer-motion";
import {
    Users, FlaskConical, Microscope, Settings,
    Maximize, Sparkles, Droplets, Coffee, Smile,
    Leaf, Briefcase, GraduationCap, Award, Globe,
    ChevronRight, Beaker, CheckCircle2
} from "lucide-react";
import { useState, useEffect } from "react";

const competencies = [
    { title: "Ферментация растительного сырья", icon: FlaskConical },
    { title: "Синтез и модификация биополимеров", icon: Microscope },
    { title: "Оптимизация процессов микрокапсулирования", icon: Settings },
    { title: "Масштабирование до промышленной партии", icon: Maximize }
];

const markets = [
    { name: "Косметика", icon: Sparkles },
    { name: "Бытовая химия", icon: Droplets },
    { name: "Пищевые ингредиенты", icon: Coffee },
    { name: "Oral Care", icon: Smile },
    { name: "Агротехнологии", icon: Leaf },
];

const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export default function About() {
    // Removed isMobile state

    return (
        <section id="about" className="py-20 bg-white overflow-hidden scroll-mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* --- HEADER --- */}
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "200px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 font-[var(--font-outfit)]"
                    >
                        О нашей <span className="text-gradient">компании</span>
                    </motion.h2>
                </div>

                {/* --- BENTO GRID SYSTEM --- */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

                    {/* 1. MAIN CARD: Who We Are (8 cols) */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "200px" }}
                        className="md:col-span-8 bg-gray-50/50 rounded-[32px] p-8 md:p-10 border border-gray-100 flex flex-col justify-center gap-6 relative overflow-hidden"
                        style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-[var(--font-outfit)] leading-tight">
                            «Умные Капсулы» — команда химиков и биотехнологов, разработчиков инновационных технологий.
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                            Мы создаем микрокапсулы на основе белково-полисахаридных комплексов, которые защищают активные вещества от окисления и обеспечивают их контролируемое высвобождение.
                        </p>
                    </motion.div>

                    {/* 2. B2B STATUS (4 cols) */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "200px" }}
                        className="md:col-span-4 bg-[#0070f3] rounded-[32px] p-8 text-white flex flex-col justify-between shadow-blue-200 shadow-lg"
                        style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                    >
                        <Briefcase className="w-10 h-10 mb-6 text-blue-100" />
                        <div>
                            <h4 className="text-xl font-bold mb-2 font-[var(--font-outfit)] uppercase tracking-wider">B2B Сегмент</h4>
                            <p className="text-blue-50 font-medium leading-snug">Готовы к сотрудничеству и поиску оптимальных решений под ваши задачи.</p>
                        </div>
                    </motion.div>

                    {/* 3. COMPETENCIES (7 cols) */}
                    <div className="md:col-span-12 flex flex-col md:flex-row gap-6 h-full mt-2">
                        <div className="md:w-7/12 flex flex-col h-full">
                            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-[var(--font-outfit)]">
                                Наши компетенции:
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                                {competencies.map((comp, i) => (
                                    <motion.div
                                        key={i}
                                        variants={itemVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "100px" }}
                                        style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                                        transition={{ delay: i * 0.05 }}
                                        className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm flex items-start gap-4 hover:border-blue-200 transition-all group h-full"
                                    >
                                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#0070f3] shrink-0 group-hover:bg-[#0070f3] group-hover:text-white transition-colors duration-300">
                                            <comp.icon className="w-5 h-5" />
                                        </div>
                                        <h5 className="text-sm font-bold text-gray-800 font-[var(--font-outfit)] leading-tight pt-1">
                                            {comp.title}
                                        </h5>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* 4. MARKETS (5 cols) */}
                        <motion.div
                            id="markets"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "200px" }}
                            className="md:w-5/12 bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm flex flex-col justify-between scroll-mt-24 h-full"
                            style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                        >
                            <h4 className="text-lg font-bold text-gray-900 font-[var(--font-outfit)] mb-6 uppercase tracking-widest">РЫНКИ:</h4>
                            <div className="grid grid-cols-1 gap-3 flex-1">
                                {markets.map((market, i) => (
                                    <div key={i} className="flex items-center gap-4 py-2 border-b border-gray-50 last:border-0 group">
                                        <div className="w-2 h-2 rounded-full bg-blue-200 group-hover:bg-[#0070f3] transition-colors" />
                                        <span className="text-sm font-bold text-gray-700 tracking-wide">{market.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* 5. INDIVIDUAL SOLUTIONS (Full width 12 cols) */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "200px" }}
                        className="md:col-span-12 bg-gray-50 border border-gray-100 rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 group"
                        style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                    >
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-[#0070f3] shrink-0">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-xl font-bold font-[var(--font-outfit)] mb-2 text-gray-900">
                                Индивидуальные решения под задачи заказчика
                            </h4>
                            <p className="text-gray-600 font-medium">
                                От инкапсуляции специфических активов до адаптации технологии под существующее производство.
                            </p>
                        </div>
                        <div className="flex gap-2">
                        </div>
                    </motion.div>
                </div>

            </div>
        </section >
    );
}
