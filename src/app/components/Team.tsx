"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const team = [
    {
        name: "Анна Немойкина",
        role: "Директор",
        image: "/images/Анна Немойкина.png",
    },
    {
        name: "Владислав Орлов",
        role: "Биотехнолог-разработчик",
        image: "/images/Владислав Орлов.png",
    },
    {
        name: "Александра Мышова",
        role: "Инженер-исследователь",
        image: "/images/Александра мышова.png",
    },
    {
        name: "Зоя Макаренко",
        role: "Инженер-исследователь",
        image: "/images/Зоя Макаренко.png",
    }
];

export default function Team() {
    // isMobile check removed for hydration

    return (
        <section id="team" className="pt-12 pb-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl text-center md:text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "200px" }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="text-4xl md:text-5xl font-[var(--font-outfit)] font-bold mb-6 text-gray-900"
                        >
                            Команда <span className="text-gradient">проекта</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "200px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -10 }}
                            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
                            style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                        >
                            <div className="aspect-[4/5] overflow-hidden relative w-full">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6 bg-white w-full flex flex-col justify-center items-center text-center">
                                <h3 className="text-xl font-bold font-[var(--font-outfit)] text-gray-900 mb-1 group-hover:text-[#0070f3] transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-[#0070f3] text-sm font-medium">
                                    {member.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
