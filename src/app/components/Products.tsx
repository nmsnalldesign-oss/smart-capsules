"use client";

import { motion } from "framer-motion";
import { Droplet, Sun, Wind } from "lucide-react";
import { useState, useEffect } from "react";

const products = [
    {
        id: "oil",
        name: "SmartCaps Oil",
        description: "Микрокапсулированные растительные масла",
        icon: Droplet,
        color: "from-blue-500 to-blue-600",
    },
    {
        id: "vita",
        name: "SmartCaps Vita",
        description: "Стабильные формы витамина А и других жирорастворимых витаминов",
        icon: Sun,
        color: "from-amber-500 to-orange-500",
    },
    {
        id: "aroma",
        name: "SmartCaps Aroma",
        description: "Защищенные эфирные масла с пролонгированным ароматом",
        icon: Wind,
        color: "from-teal-500 to-emerald-600",
    }
];

export default function Products() {
    // removed isMobile for hydration

    return (
        <section id="products" aria-labelledby="products-heading" className="pt-12 pb-12 bg-white relative scroll-mt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        id="products-heading"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "200px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl md:text-5xl font-[var(--font-outfit)] font-bold mb-6 text-gray-900"
                    >
                        Наша <span className="text-gradient">продукция</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "200px" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-gray-600 text-lg max-w-2xl mx-auto"
                    >
                        Специализированные линейки микрокапсул для защиты ценных активов в ваших продуктах.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {products.map((product, index) => (
                        <motion.article
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -10 }}
                            className="bg-white border border-gray-100 shadow-md p-8 rounded-2xl relative group overflow-hidden hover:shadow-2xl transition-all"
                            style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                        >
                            <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${product.color} relative z-10`}>
                                <product.icon className="w-7 h-7 text-white" aria-hidden="true" />
                            </div>

                            <h3 className="text-xl font-bold font-[var(--font-outfit)] mb-3 text-gray-900 relative z-10">
                                {product.name}
                            </h3>

                            <p className="text-gray-600 leading-relaxed text-sm relative z-10">
                                {product.description}
                            </p>

                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0070f3] group-hover:w-full transition-all duration-300" aria-hidden="true" />
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
