import React from "react";

export const IconProtection = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="prot-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00b4d8" />
                <stop offset="100%" stopColor="#0070f3" />
            </linearGradient>
        </defs>
        <path d="M50 10 L85 25 V50 C85 70 70 85 50 95 C30 85 15 70 15 50 V25 L50 10Z" stroke="url(#prot-grad)" strokeWidth="6" strokeLinejoin="round" />
        <path d="M40 55 L48 63 L65 40" stroke="#00e5c7" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const IconTime = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="time-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0070f3" />
                <stop offset="100%" stopColor="#00e5c7" />
            </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="40" stroke="url(#time-grad)" strokeWidth="6" />
        <path d="M50 25 V50 L65 65" stroke="#0070f3" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const IconForms = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="form-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0070f3" />
                <stop offset="100%" stopColor="#00e5c7" />
            </linearGradient>
        </defs>
        <rect x="20" y="20" width="25" height="25" rx="5" stroke="url(#form-grad)" strokeWidth="6" />
        <circle cx="67" cy="32" r="12" stroke="#00e5c7" strokeWidth="6" />
        <path d="M40 80 L32 60 H48 Z" stroke="url(#form-grad)" strokeWidth="6" strokeLinejoin="round" />
        <rect x="55" y="55" width="25" height="25" rx="5" stroke="#00b4d8" strokeWidth="6" />
    </svg>
);

export const IconFlask = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="flask-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00b4d8" />
                <stop offset="100%" stopColor="#0070f3" />
            </linearGradient>
        </defs>
        <path d="M35 15 H65 M45 15 V40 L20 80 H80 L55 40 V15" stroke="url(#flask-grad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 70 C40 65 60 75 75 70" stroke="#00e5c7" strokeWidth="6" strokeLinecap="round" />
    </svg>
);

export const IconDna = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="dna-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0070f3" />
                <stop offset="100%" stopColor="#00b4d8" />
            </linearGradient>
        </defs>
        <path d="M30 10 C30 50 70 50 70 90 M70 10 C70 50 30 50 30 90" stroke="url(#dna-grad)" strokeWidth="6" strokeLinecap="round" />
        <path d="M38 25 H62 M48 40 H52 M32 75 H68" stroke="#00e5c7" strokeWidth="4" strokeLinecap="round" />
    </svg>
);

export const IconSettings = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="set-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0070f3" />
                <stop offset="100%" stopColor="#00e5c7" />
            </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="15" stroke="url(#set-grad)" strokeWidth="6" />
        <path d="M45 20 V10 H55 V20 M45 90 V80 H55 V90 M20 45 H10 V55 H20 M90 45 H80 V55 H90 M30 30 L23 23 M77 77 L70 70 M70 30 L77 23 M23 77 L30 70" stroke="url(#set-grad)" strokeWidth="6" strokeLinecap="round" />
    </svg>
);

export const IconScale = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="scale-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00b4d8" />
                <stop offset="100%" stopColor="#0070f3" />
            </linearGradient>
        </defs>
        <path d="M20 80 H80 L65 20 H35 L20 80Z" stroke="url(#scale-grad)" strokeWidth="6" strokeLinejoin="round" />
        <path d="M20 80 L35 20 M80 80 L65 20" stroke="#00e5c7" strokeWidth="6" />
        <path d="M30 60 H70" stroke="url(#scale-grad)" strokeWidth="6" strokeLinecap="round" />
    </svg>
);

export const IconOil = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 15 C50 15 20 45 20 65 C20 85 30 90 50 90 C70 90 80 85 80 65 C80 45 50 15 50 15 Z" stroke="#00b4d8" strokeWidth="6" strokeLinejoin="round" />
        <path d="M35 60 C32 70 40 80 50 82" stroke="#0070f3" strokeWidth="5" strokeLinecap="round" />
    </svg>
);

export const IconSun = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="20" stroke="#f59e0b" strokeWidth="6" />
        <path d="M50 15 V10 M50 90 V85 M15 50 H10 M90 50 H85 M25 25 L20 20 M75 75 L80 80 M25 75 L20 80 M75 25 L80 20" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
    </svg>
);

export const IconWind = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 40 H70 C80 40 85 30 75 25 C65 20 60 35 70 45" stroke="#10b981" strokeWidth="6" strokeLinecap="round" />
        <path d="M10 65 H80 C90 65 95 75 85 80 C75 85 70 70 80 60" stroke="#14b8a6" strokeWidth="6" strokeLinecap="round" />
    </svg>
);

export const IconBeauty = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="beauty-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
        </defs>
        <path d="M50 15 L60 40 L85 45 L65 60 L70 85 L50 70 L30 85 L35 60 L15 45 L40 40 Z" stroke="url(#beauty-grad)" strokeWidth="6" strokeLinejoin="round" />
    </svg>
);

export const IconDroplets = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 30 C35 30 15 50 15 65 C15 75 25 80 35 80 C45 80 55 75 55 65 C55 50 35 30 35 30 Z" stroke="#3b82f6" strokeWidth="6" strokeLinejoin="round" />
        <path d="M70 45 C70 45 55 60 55 70 C55 78 62 82 70 82 C78 82 85 78 85 70 C85 60 70 45 70 45 Z" stroke="#0ea5e9" strokeWidth="5" strokeLinejoin="round" />
    </svg>
);

export const IconLeaf = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 90 C50 90 20 80 20 45 C20 20 50 10 50 10 C50 10 80 20 80 45 C80 80 50 90 50 90 Z" stroke="#10b981" strokeWidth="6" />
        <path d="M50 90 V10 M50 70 L70 50 M50 50 L30 35 M50 35 L65 25" stroke="#10b981" strokeWidth="6" strokeLinecap="round" />
    </svg>
);

export const IconCoffee = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 30 H70 V70 C70 80 60 90 45 90 C30 90 20 80 20 70 V30 Z" stroke="#d97706" strokeWidth="6" />
        <path d="M70 40 H80 C85 40 90 45 90 55 C90 65 85 70 80 70 H70" stroke="#d97706" strokeWidth="6" strokeLinecap="round" />
        <path d="M35 10 V20 M45 5 V20 M55 10 V20" stroke="#fbbf24" strokeWidth="5" strokeLinecap="round" />
    </svg>
);

export const IconSmile = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="#f43f5e" strokeWidth="6" />
        <path d="M35 65 C45 75 55 75 65 65" stroke="#f43f5e" strokeWidth="6" strokeLinecap="round" />
        <circle cx="35" cy="40" r="4" fill="#f43f5e" />
        <circle cx="65" cy="40" r="4" fill="#f43f5e" />
    </svg>
);
