"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Trophy, Landmark, X, ZoomIn, Award } from "lucide-react";

const documents = [
    {
        id: "patent",
        title: "ПАТЕНТ",
        subtitle: "на технологию микрокапсулирования",
        info: "№ 2852170 от 2024 года",
        icon: FileText,
        content: {
            type: "image",
            src: "/images/page_1.png", // Новое фото патента
            alt: "Патент на технологию"
        }
    },
    {
        id: "mtk",
        title: "СТАТУС МТК",
        subtitle: "Малая технологическая компания",
        info: "Присвоен в 2025 году",
        icon: Landmark,
        content: {
            type: "text",
            title: "Статус МТК",
            text: "Компании присвоен статус Малой технологической компании (реестр Минэкономразвития РФ). Это подтверждает наш статус как разработчика высокотехнологичных решений.",
            tag: "Реестр Минэкономразвития РФ"
        }
    },
    {
        id: "fsi",
        title: "ПОДДЕРЖКА ФСИ",
        subtitle: "Победитель конкурса «СТАРТ-1»",
        info: "Грант 2023",
        icon: Trophy,
        content: {
            type: "special",
            logo: "/images/page1_img1_Image19.png",
            title: "Фонд содействия инновациям",
            desc: "Победитель конкурса «СТАРТ-1». Грант получен на проведение НИОКР и разработку технологии микрокапсулирования."
        }
    }
];

export default function Certificates() {
    const [selectedDoc, setSelectedDoc] = useState<null | typeof documents[0]>(null);
    // Removed isMobile state for hydration

    return (
        <section id="certificates" className="pt-20 pb-12 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

                {/* --- HEADER --- */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "200px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl md:text-5xl font-[var(--font-outfit)] font-bold mb-6 text-gray-900"
                    >
                        Наши <span className="text-gradient">документы и статусы</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "200px" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium"
                    >
                        Подтверждение экспертизы и технологического лидерства компании
                    </motion.p>
                </div>

                {/* --- CARDS GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {documents.map((doc, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "150px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            onClick={() => setSelectedDoc(doc)}
                            className="bg-gray-50 border border-gray-100 rounded-[32px] p-10 flex flex-col items-center text-center group cursor-pointer hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500 relative overflow-hidden"
                            style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                        >
                            {/* Акцентная линия при наведении */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#0070f3] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                            {/* Иконка */}
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 text-[#0070f3] group-hover:scale-110 group-hover:bg-[#0070f3] group-hover:text-white transition-all duration-500">
                                <doc.icon className="w-8 h-8" />
                            </div>

                            {/* Текст */}
                            <h3 className="font-bold text-gray-900 text-xl mb-4 font-[var(--font-outfit)] tracking-tight">{doc.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                                {doc.subtitle}
                            </p>

                            {/* Доп инфо */}
                            <div className="pt-8 border-t border-gray-200 w-full">
                                <div className="text-[#0070f3] font-bold text-sm tracking-wide bg-blue-50 py-2 px-4 rounded-xl inline-block">
                                    {doc.info}
                                </div>
                            </div>

                            {/* Подсказка "Кликни" */}
                            <div className="absolute bottom-4 right-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs font-bold text-gray-400">
                                <span>Смотреть</span>
                                <ZoomIn className="w-3 h-3" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- MODAL OVERLAY --- */}
            <AnimatePresence>
                {selectedDoc && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md"
                        onClick={() => setSelectedDoc(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white rounded-[40px] shadow-2xl max-w-4xl w-full max-h-[90svh] overflow-hidden relative border border-white/20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header модалки */}
                            <div className="p-6 md:p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                <div>
                                    <h4 className="text-xl font-bold font-[var(--font-outfit)] text-gray-900">{selectedDoc.title}</h4>
                                    <p className="text-sm text-gray-500 font-medium">{selectedDoc.info}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedDoc(null)}
                                    className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-red-500 hover:rotate-90 transition-all duration-300"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Контент модалки */}
                            <div className="p-8 md:p-12 overflow-y-auto max-h-[calc(90svh-120px)]">
                                {selectedDoc.content.type === "image" && (
                                    <div className="flex justify-center bg-blue-50/30 rounded-3xl p-4 border border-blue-100 shadow-inner">
                                        <img
                                            src={selectedDoc.content.src}
                                            alt={selectedDoc.content.alt}
                                            width="1200"
                                            height="1600"
                                            loading="eager"
                                            className="max-h-[60svh] w-auto object-contain rounded-xl shadow-2xl"
                                        />
                                    </div>
                                )}

                                {selectedDoc.content.type === "text" && (
                                    <div className="max-w-2xl mx-auto py-12 text-center">
                                        <div className="w-20 h-20 bg-blue-50 rounded-[28px] flex items-center justify-center text-[#0070f3] mx-auto mb-8">
                                            <selectedDoc.icon className="w-10 h-10" />
                                        </div>
                                        <span className="px-4 py-1.5 bg-blue-50 text-[#0070f3] rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">
                                            {selectedDoc.content.tag}
                                        </span>
                                        <h5 className="text-3xl font-bold text-gray-900 mb-6 font-[var(--font-outfit)]">{selectedDoc.content.title}</h5>
                                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                                            {selectedDoc.content.text}
                                        </p>
                                    </div>
                                )}

                                {selectedDoc.content.type === "special" && (
                                    <div className="max-w-2xl mx-auto text-center py-8">
                                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 mb-10">
                                            <img
                                                src={selectedDoc.content.logo}
                                                alt="FSI"
                                                width="400"
                                                height="150"
                                                loading="lazy"
                                                className="h-24 w-auto mx-auto object-contain mb-8"
                                            />
                                            <div className="h-px bg-gray-200 w-24 mx-auto mb-8" />
                                            <h5 className="text-xl font-bold text-gray-900 mb-4">{selectedDoc.content.title}</h5>
                                            <p className="text-gray-600 leading-relaxed md:text-lg">
                                                {selectedDoc.content.desc}
                                            </p>
                                        </div>
                                        <div className="bg-[#0070f3] text-white p-6 rounded-2xl flex items-center justify-center gap-4 shadow-lg shadow-blue-100">
                                            <Award className="w-6 h-6" />
                                            <span className="font-bold uppercase tracking-wider text-sm">Грантовая поддержка подтверждена</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
