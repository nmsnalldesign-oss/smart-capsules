"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useRef, useState } from "react";

// Анимированные молекулы-частицы на фоне
function Particle({ x, y, size, delay, color }: { x: string; y: string; size: number; delay: number; color: string }) {
    return (
        <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{ left: x, top: y, width: size, height: size, background: color }}
            animate={{
                y: [0, -30, 0, 15, 0],
                x: [0, 10, -10, 5, 0],
                opacity: [0.15, 0.4, 0.15, 0.35, 0.15],
                scale: [1, 1.2, 0.9, 1.1, 1],
            }}
            transition={{ duration: 8 + delay, repeat: Infinity, ease: "easeInOut", delay }}
        />
    );
}

// Линии-связи между частицами (молекулярная сетка)
function MoleculeRing({ size, x, y, delay, rotate }: { size: number; x: string; y: string; delay: number; rotate: number }) {
    return (
        <motion.div
            className="absolute pointer-events-none border rounded-full"
            style={{
                left: x, top: y,
                width: size, height: size,
                borderColor: "rgba(0, 112, 243, 0.12)",
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
            }}
            animate={{ rotate: [rotate, rotate + 360], scale: [1, 1.05, 1] }}
            transition={{ duration: 20 + delay * 3, repeat: Infinity, ease: "linear" }}
        />
    );
}

// Анимация каждой буквы заголовка
const titleWords = ["Умные", "Капсулы"];

export default function Hero() {
    const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

    const particles = [
        { x: "8%", y: "15%", size: 10, delay: 0, color: "rgba(0,180,216,0.5)" },
        { x: "15%", y: "70%", size: 7, delay: 1.2, color: "rgba(0,112,243,0.4)" },
        { x: "25%", y: "40%", size: 5, delay: 2.5, color: "rgba(0,229,199,0.5)" },
        { x: "75%", y: "20%", size: 12, delay: 0.8, color: "rgba(0,112,243,0.3)" },
        { x: "85%", y: "60%", size: 8, delay: 3, color: "rgba(0,180,216,0.45)" },
        { x: "90%", y: "85%", size: 6, delay: 1.5, color: "rgba(0,229,199,0.4)" },
        { x: "55%", y: "85%", size: 9, delay: 2, color: "rgba(0,112,243,0.25)" },
        { x: "40%", y: "12%", size: 6, delay: 4, color: "rgba(0,180,216,0.35)" },
    ];

    const rings = [
        { size: 300, x: "10%", y: "50%", delay: 0, rotate: 20 },
        { size: 200, x: "88%", y: "30%", delay: 1, rotate: -15 },
        { size: 150, x: "70%", y: "80%", delay: 2, rotate: 45 },
        { size: 400, x: "50%", y: "50%", delay: 0.5, rotate: 10 },
    ];

    return (
        <section className="relative min-h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden bg-white pt-20">

            {/* Глубинный градиентный фон */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/40 to-white" />
                {/* Большое свечение слева */}
                <motion.div
                    className="absolute w-[700px] h-[700px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)",
                        left: "-15%", top: "10%",
                    }}
                    animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Большое свечение справа */}
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(0,112,243,0.06) 0%, transparent 70%)",
                        right: "-10%", bottom: "5%",
                    }}
                    animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
                {/* Центральный акцент */}
                <motion.div
                    className="absolute w-[400px] h-[200px] rounded-full"
                    style={{
                        background: "radial-gradient(ellipse, rgba(0,229,199,0.05) 0%, transparent 70%)",
                        left: "50%", top: "40%", transform: "translate(-50%,-50%)",
                    }}
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
            </div>

            {/* Молекулярные кольца */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {rings.map((r, i) => <MoleculeRing key={i} {...r} />)}
            </div>

            {/* Частицы */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {particles.map((p, i) => <Particle key={i} {...p} />)}
            </div>

            {/* Горизонтальная сетка */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.025]"
                style={{
                    backgroundImage: "linear-gradient(#0070f3 1px, transparent 1px), linear-gradient(90deg, #0070f3 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }}
            />

            {/* Основной контент */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">


                    {/* Заголовок с пословной анимацией */}
                    <motion.h1 className="text-6xl md:text-8xl font-bold font-[var(--font-outfit)] leading-[1.05] mb-8 text-gray-900">
                        {titleWords.map((word, wi) => (
                            <span key={wi} className="inline-block overflow-hidden mr-4">
                                <motion.span
                                    className={`inline-block ${wi === 1 ? "text-gradient" : ""}`}
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.9,
                                        delay: 0.3 + wi * 0.18,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                >
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </motion.h1>

                    {/* Горизонтальный разделитель */}
                    <motion.div
                        className="w-24 h-0.5 bg-gradient-to-r from-[#00b4d8] to-[#0070f3] mx-auto mb-8 rounded-full"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />

                    {/* Подзаголовок */}
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="text-lg md:text-xl text-gray-500 mb-14 max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        Команда химиков и биотехнологов, разработчиков инновационных технологий микрокапсулирования.
                        Мы создаем микрокапсулы на основе белково-полисахаридных комплексов, которые защищают активные
                        вещества от внешних воздействий и обеспечивают их контролируемое высвобождение.
                    </motion.p>

                </div>
            </div>

            {/* Нижний fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
        </section>
    );
}
