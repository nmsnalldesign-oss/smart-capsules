"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        handleScroll(); // Устанавливаем правильное состояние при загрузке страницы
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Продукция', href: '#products' },
        { name: 'Технологии', href: '#technology' },
        { name: 'О нас', href: '#about' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center gap-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00b4d8] to-[#0070f3] flex items-center justify-center">
                                <div className="w-4 h-4 rounded-full bg-white"></div>
                            </div>
                            <span className={`font-[var(--font-outfit)] font-bold text-xl tracking-wide ${isScrolled ? 'text-gray-900' : 'text-gray-900'} hidden sm:block`}>Умные Капсулы</span>
                        </Link>

                        {/* FASIE Logo */}
                        <a href="https://www.fasie.ru/" target="_blank" rel="noopener noreferrer" className="block w-24 sm:w-32 h-auto hover:opacity-80 transition-opacity border-l border-gray-300 pl-4 sm:pl-6 ml-2 sm:ml-0">
                            <img src="/images/page1_img1_Image19.png" alt="Фонд содействия инновациям" width="400" height="150" loading="eager" className="w-full h-auto object-contain" />
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`font-medium text-sm transition-colors ${isScrolled ? 'text-gray-600 hover:text-[#0070f3]' : 'text-gray-700 hover:text-[#0070f3]'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="#contact"
                            className="bg-[#0070f3] text-white hover:bg-[#005bb5] transition-colors duration-300 px-5 py-2 rounded-full font-semibold text-sm shadow-sm"
                        >
                            Контакты
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-900 hover:text-[#0070f3] focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full left-0 top-full"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-[#0070f3] hover:bg-blue-50 rounded-md transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-center mt-4 bg-[#0070f3] text-white hover:bg-[#005bb5] transition-colors py-3 rounded-md font-semibold"
                            >
                                Контакты
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
