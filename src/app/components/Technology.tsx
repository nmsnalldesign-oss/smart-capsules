"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
    CheckCircle2, Shield, Layers, Droplets,
    Microscope, Sparkles, ArrowRight, Target,
    Search, Beaker, Zap, ShieldCheck, Microscope as MicroscopeIcon,
    FlaskConical, ClipboardCheck, Lock
} from "lucide-react";

// --- ДАННЫЕ ДЛЯ РАЗДЕЛА ТЕХНОЛОГИЯ ---
const advantages = [
    "Защита актива от деградации и окисления",
    "Увеличение срока годности актива",
    "Маскировка запаха и вкуса",
    "Контролируемое высвобождение активного вещества",
    "Иммобилизация ферментов и микроорганизмов",
    "Улучшенная технологичность/совместимость актива"
];

const applications = [
    "Средства для ухода за кожей и волосами: крема, сыворотки, шампуни, гели, маски",
    "Парфюмерия, дезодоранты",
    "Пигменты",
    "УФ-фильтры",
    "Моющие средства"
];

const techProcessSteps = [
    {
        title: "Диспергирование",
        text: "Активное вещество (масло, витамин) диспергируется в растворе белка",
        icon: Droplets
    },
    {
        title: "Коацервация",
        text: "Добавляется полисахарид, изменяется pH — вокруг частиц формируется оболочка",
        icon: Beaker
    },
    {
        title: "Защита",
        text: "Полученные микрокапсулы защищают активный компонент и обеспечивают его высвобождение в нужный момент",
        icon: Shield
    }
];

// --- ДАННЫЕ ДЛЯ РАЗДЕЛА КАК ЭТО РАБОТАЕТ (ПО НОВОМУ СКРИНУ) ---
const benefits = [
    "Защита активных веществ от окисления, света, температуры и влажности",
    "Контролируемое высвобождение: от быстрого (при нанесении на кожу) до пролонгированного",
    "Возможность создания как жидких (суспензии), так и сухих (порошки) форм"
];

const specifications = [
    { param: "Метод", val: "Комплексная коацервация", icon: Zap },
    { param: "Оболочка", val: "Белок + полисахарид (биополимеры природного происхождения)", icon: Droplets },
    { param: "Размер капсул", val: "От 1 до 250 мкм (регулируется под задачи заказчика)", icon: Target },
    { param: "Высвобождение", val: "Контролируемое: от быстрого до пролонгированного", icon: ArrowsUpFromLine },
    { param: "Безопасность", val: "Подтверждена (ТР ТС 009/2011)", icon: ShieldCheck }
];

// Helper for higher-level icons not imported
function ArrowsUpFromLine(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m7 9 5-5 5 5" />
            <path d="M12 4v12" />
            <path d="M5 20h14" />
        </svg>
    );
}

const itemVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export default function Technology() {
    // Removed isMobile state for hydration

    return (
        <div className="space-y-0">
            {/* === СЕКЦИЯ 1: ТЕХНОЛОГИЯ (Объединенная база) === */}
            <section id="technology" className="pt-12 pb-20 bg-white overflow-hidden scroll-mt-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16 md:mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "200px" }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 font-[var(--font-outfit)]"
                        >
                            Наша <span className="text-gradient">технология</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "200px" }}
                            className="md:col-span-7 bg-gray-50/50 rounded-[32px] p-8 md:p-10 border border-gray-100 flex flex-col items-center justify-center relative min-h-[520px]"
                            style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                        >
                            <div className="w-full max-w-[420px] relative z-10">
                                <svg viewBox="0 0 500 500" className="w-full h-auto drop-shadow-2xl overflow-visible">
                                    <defs>
                                        <radialGradient id="shellGradient" cx="30%" cy="30%" r="70%">
                                            <stop offset="0%" stopColor="#3b82f6" />
                                            <stop offset="100%" stopColor="#1e3a8a" />
                                        </radialGradient>
                                        <radialGradient id="coreGradient" cx="35%" cy="35%" r="65%">
                                            <stop offset="0%" stopColor="#ffca28" />
                                            <stop offset="100%" stopColor="#ea580c" />
                                        </radialGradient>
                                    </defs>
                                    <motion.circle cx="250" cy="270" r="140" fill="url(#shellGradient)" animate={{ scale: [1, 1.01, 1] }} transition={{ duration: 5, repeat: Infinity }} />
                                    <motion.circle cx="250" cy="270" r="85" fill="url(#coreGradient)" animate={{ opacity: [0.9, 1, 0.9] }} transition={{ duration: 4, repeat: Infinity }} />
                                    <path d="M 250 130 A 140 140 0 0 1 390 270 L 335 270 A 85 85 0 0 0 250 185 Z" fill="white" fillOpacity="0.8" />
                                    <path d="M 390 270 A 140 140 0 0 1 250 410 L 250 355 A 85 85 0 0 0 335 270 Z" fill="white" fillOpacity="0.8" />
                                    <g>
                                        <path d="M 210 145 L 210 80 L 160 80" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 4" />
                                        <circle cx="210" cy="145" r="4" fill="#2563eb" />
                                        <text x="155" y="65" fontFamily="var(--font-outfit)" fontSize="18" fontWeight="bold" fill="#1e3a8a" textAnchor="end">оболочка</text>
                                        <text x="155" y="85" fontSize="14" fill="#64748b" textAnchor="end">(белок / полисахарид)</text>
                                    </g>
                                    <g>
                                        <path d="M 290 240 L 330 140 L 370 140" fill="none" stroke="#ea580c" strokeWidth="2" strokeDasharray="4 4" />
                                        <circle cx="290" cy="240" r="4" fill="#ea580c" />
                                        <text x="375" y="125" fontFamily="var(--font-outfit)" fontSize="18" fontWeight="bold" fill="#ea580c" textAnchor="start">ядро</text>
                                        <text x="375" y="145" fontSize="14" fill="#ea580c" textAnchor="start">(активное вещество)</text>
                                        <text x="385" y="175" fontSize="14" fill="#64748b" fontStyle="italic" textAnchor="start">Растительные масла</text>
                                        <text x="385" y="195" fontSize="14" fill="#64748b" fontStyle="italic" textAnchor="start">Эфирные масла</text>
                                        <text x="385" y="215" fontSize="14" fill="#64748b" fontStyle="italic" textAnchor="start">Витамины</text>
                                    </g>
                                </svg>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "200px" }}
                            className="md:col-span-5 bg-white border border-gray-100 rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col overflow-hidden"
                            style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                        >
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2 font-[var(--font-outfit)]">Образцы коацерватов</h3>
                                <div className="flex items-center gap-2 text-[#0070f3] font-bold text-sm uppercase tracking-wider">
                                    <Search className="w-4 h-4" /> МИКРОСКОПИЯ
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col min-h-[300px]">
                                <div className="relative flex-1 rounded-2xl overflow-hidden bg-gray-50 mb-4 group" style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}>
                                    <motion.img
                                        whileHover={{ scale: 1.15 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        src="/images/page3_img1_Image35.jpg"
                                        className="absolute inset-0 w-full h-[125%] object-cover object-center scale-[1.10]"
                                        alt="Microscope Data"
                                        style={{ willChange: "transform" }}
                                    />
                                </div>
                                <div className="flex justify-between items-center px-4 py-3 bg-gray-50 rounded-xl border border-gray-100">
                                    <span className="text-[10px] font-black text-[#0070f3] tracking-widest uppercase">SEM DATA</span>
                                    <div className="flex gap-4 text-[11px] font-bold text-gray-600 font-mono">
                                        <span>5kV</span><span>X37</span><span>500µm</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "200px" }} className="bg-gray-50/50 rounded-[32px] p-8 p-10 border border-gray-100 shadow-sm" style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}>
                            <h4 className="text-lg font-bold text-gray-900 uppercase tracking-widest mb-8 flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm text-[#0070f3] flex items-center justify-center border border-gray-100"><Shield className="w-5 h-5" /></div>
                                Преимущества:
                            </h4>
                            <ul className="space-y-4">
                                {advantages.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">{item}</span></li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "200px" }} className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-100 shadow-sm" style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}>
                            <h4 className="text-lg font-bold text-gray-900 uppercase tracking-widest mb-8 flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-50 text-[#0070f3] rounded-xl flex items-center justify-center"><Target className="w-5 h-5" /></div>
                                Применение:
                            </h4>
                            <ul className="space-y-4">
                                {applications.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4"><ArrowRight className="w-4 h-4 text-[#0070f3] shrink-0 mt-1.5" /><span className="text-gray-700 font-medium">{item}</span></li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Визуализация процесса (смещено сюда из как это работает) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {techProcessSteps.map((step, i) => (
                            <motion.div key={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "100px" }} transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative group hover:border-[#0070f3]/30 transition-all"
                                style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                            >
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0070f3] mb-6 group-hover:scale-110 transition-transform">{i + 1}</div>
                                <h5 className="text-xl font-bold text-gray-900 mb-2 font-[var(--font-outfit)]">{step.title}</h5>
                                <p className="text-gray-600 text-sm">{step.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <div className="relative rounded-[40px] overflow-hidden border-8 border-white shadow-xl h-[300px]">
                            <img src="/images/page3_img2_Image36.jpg" width="400" height="300" loading="lazy" className="w-full h-full object-cover scale-[1.10]" alt="Microscopy" />
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent"><p className="text-white font-bold tracking-[0.2em] text-[10px]">OPTICAL</p></div>
                        </div>
                        <div className="relative rounded-[40px] overflow-hidden border-8 border-white shadow-xl h-[300px]">
                            <img src="/images/page3_img1_Image35.jpg" width="400" height="300" loading="lazy" className="w-full h-full object-cover scale-[1.10]" alt="SEM" />
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent"><p className="text-white font-bold tracking-[0.2em] text-[10px]">ELECTRON (SEM)</p></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* === СЕКЦИЯ 2: КАК ЭТО РАБОТАЕТ (ПО НОВОМУ СКРИНУ) === */}
            <section id="how-it-works" className="py-20 bg-gray-50/50 overflow-hidden border-t border-gray-100 scroll-mt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                    <div className="text-center mb-16">
                        <motion.h2 variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "200px" }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 font-[var(--font-outfit)]"
                        >
                            Как это <span className="text-gradient">работает</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

                        {/* ЛЕВАЯ КОЛОНКА: Описание и Бенефиты */}
                        <div className="lg:col-span-12 space-y-8">
                            <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "200px" }}
                                className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden"
                                style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20" />

                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-12 relative z-10">
                                    Мы используем метод <span className="text-[#0070f3] font-bold">комплексной коацервации</span> — процесс взаимодействия
                                    противоположно заряженных биополимеров белковой и полисахаридной природы.
                                    В результате вокруг частиц активного вещества формируется защитная оболочка — микрокапсула.
                                </p>

                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-[var(--font-outfit)] relative z-10">Что это дает:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {benefits.map((benefit, i) => (
                                        <div key={i} className="flex flex-col gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100/50 group hover:bg-white hover:shadow-md transition-all duration-300">
                                            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#0070f3] group-hover:bg-[#0070f3] group-hover:text-white transition-colors">
                                                {i === 0 ? <ShieldCheck className="w-5 h-5" /> : i === 1 ? <Zap className="w-5 h-5" /> : <Layers className="w-5 h-5" />}
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* НИЖНЯЯ ПАНЕЛЬ: Безопасность и Спецификация (Bento Split) */}
                        <div className="lg:col-span-5 flex flex-col h-full">
                            <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "200px" }}
                                className="bg-[#0070f3] text-white p-8 md:p-10 rounded-[40px] shadow-lg relative overflow-hidden group flex-1 flex flex-col justify-center"
                                style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                            >
                                <h4 className="text-2xl font-bold mb-6 font-[var(--font-outfit)] flex items-center gap-3">
                                    <ShieldCheck className="w-8 h-8" /> Безопасность
                                </h4>
                                <p className="text-blue-50 text-lg leading-relaxed mb-8">
                                    Образцы прошли токсикологические, микробиологические и клинико-лабораторные испытания
                                    в соответствии с требованиями <span className="font-bold underline">ТР ТС 009/2011</span>
                                </p>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-7 flex flex-col h-full">
                            <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "200px" }}
                                className="bg-white border border-gray-100 rounded-[40px] shadow-sm overflow-hidden flex-1 flex flex-col"
                                style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                            >
                                <div className="p-6 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
                                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Параметры технологии</span>
                                </div>
                                <div className="p-2 flex-1">
                                    <table className="w-full text-left">
                                        <tbody className="divide-y divide-gray-50">
                                            {specifications.map((spec, i) => (
                                                <tr key={i} className="group hover:bg-blue-50/30 transition-colors">
                                                    <td className="pl-4 pr-1 py-3.5 flex items-center gap-3 text-xs md:text-sm font-bold text-gray-900 leading-tight">
                                                        <spec.icon className="w-4 h-4 text-[#0070f3] shrink-0" />
                                                        {spec.param}
                                                    </td>
                                                    <td className="px-4 py-3.5 text-[11px] md:text-sm text-gray-600 font-medium leading-tight">
                                                        {spec.val}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}
