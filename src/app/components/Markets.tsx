"use client";

import { motion } from "framer-motion";
import { Sparkles, Droplets, Coffee, Smile, Leaf } from "lucide-react";
import { useState, useEffect } from "react";

const markets = [
    { name: "Косметика", icon: Sparkles },
    { name: "Бытовая химия", icon: Droplets },
    { name: "Пищевые ингредиенты", icon: Coffee },
    { name: "Oral Care", icon: Smile },
    { name: "Агротехнологии", icon: Leaf },
];

export default function Markets() {
    // isMobile удалено для предотвращения глитчей на мобильных

    return (
        <section id="markets" className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-[var(--font-outfit)] font-bold mb-6 text-gray-900"
                    >
                        Где применяются <br /><span className="text-gradient">наши технологии?</span>
                    </motion.h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {markets.map((market, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ y: -5, borderColor: "#0070f3" }}
                            className="bg-gray-50 border w-[160px] md:w-[200px] border-gray-100 shadow-sm rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center gap-4 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-[#0070f3] group-hover:text-white text-[#0070f3] transition-colors duration-300">
                                <market.icon className="w-8 h-8" />
                            </div>
                            <h3 className="font-[var(--font-outfit)] font-bold text-gray-700 group-hover:text-gray-900 transition-colors">
                                {market.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
