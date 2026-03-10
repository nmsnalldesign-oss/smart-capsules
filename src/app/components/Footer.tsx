"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Building2 } from "lucide-react";

export default function Footer() {
    return (
        <section id="contact" className="pt-12 pb-20 bg-white border-t border-gray-100 font-[var(--font-outfit)] scroll-mt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                <div className="max-w-3xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Наши <span className="text-gradient">контакты</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-600 text-lg leading-relaxed mb-16"
                    >
                        Интересует наша продукция? Хотите заказать индивидуальную разработку микрокапсул или обсудить сотрудничество? Свяжитесь с нами — мы ответим на ваши вопросы и поможем подобрать решение под ваши задачи.
                    </motion.p>
                </div>

                {/* Контактные карточки */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
                    {/* Компания */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0 }}
                        className="bg-gray-50 border border-gray-100 rounded-3xl p-8 text-center group hover:border-[#0070f3]/30 hover:shadow-lg transition-all"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0070f3] mx-auto mb-5 group-hover:bg-[#0070f3] group-hover:text-white transition-colors">
                            <Building2 className="w-7 h-7" />
                        </div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Компания</p>
                        <p className="text-lg font-bold text-gray-900">ООО «Умные Капсулы»</p>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-gray-50 border border-gray-100 rounded-3xl p-8 text-center group hover:border-[#0070f3]/30 hover:shadow-lg transition-all"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0070f3] mx-auto mb-5 group-hover:bg-[#0070f3] group-hover:text-white transition-colors">
                            <Mail className="w-7 h-7" />
                        </div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Email</p>
                        <a href="mailto:umcaps@yandex.ru" className="text-lg font-bold text-[#0070f3] hover:underline transition-all">
                            umcaps@yandex.ru
                        </a>
                    </motion.div>

                    {/* Телефон */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50 border border-gray-100 rounded-3xl p-8 text-center group hover:border-[#0070f3]/30 hover:shadow-lg transition-all"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0070f3] mx-auto mb-5 group-hover:bg-[#0070f3] group-hover:text-white transition-colors">
                            <Phone className="w-7 h-7" />
                        </div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Телефон</p>
                        <a href="tel:+79966362273" className="text-lg font-bold text-gray-900 hover:text-[#0070f3] transition-colors">
                            +7 (996) 636-22-73
                        </a>
                    </motion.div>
                </div>

                {/* Лого ФСИ */}
                <div className="flex justify-center mb-16">
                    <a href="https://www.fasie.ru/" target="_blank" rel="noopener noreferrer" className="block w-48 opacity-80 hover:opacity-100 transition-opacity">
                        <img src="/images/page1_img1_Image19.png" alt="ФСИ" width="400" height="150" loading="lazy" className="w-full h-auto object-contain" />
                    </a>
                </div>

                {/* Юридическая заметка */}
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Данный сайт не собирает, не обрабатывает и не хранит персональные данные посетителей. Формы сбора данных отсутствуют. Системы аналитики и отслеживания не используются.
                    </p>
                </div>

                {/* Копирайт */}
                <div className="pt-10 border-t border-gray-100 flex justify-center items-center text-xs text-gray-400 font-bold uppercase tracking-widest">
                    <span>© {new Date().getFullYear()} ООО «Умные Капсулы»</span>
                </div>
            </div>
        </section>
    );
}
