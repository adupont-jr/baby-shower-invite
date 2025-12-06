'use client';

import React, { useState, useEffect } from 'react';

export default function CinematicPrototype() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        // Sequence
        const timers = [
            setTimeout(() => setStep(1), 500),  // "Ciao"
            setTimeout(() => setStep(2), 1500), // "Baby"
            setTimeout(() => setStep(3), 3000), // Fade out text
            setTimeout(() => setStep(4), 4000), // Reveal Card
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <div className="min-h-screen bg-[#3D405B] flex items-center justify-center overflow-hidden relative font-cursive">

            {/* Intro Text Container */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none transition-all duration-1000 ${step >= 3 ? 'opacity-0 scale-110 blur-sm' : 'opacity-100 blur-0'}`}>
                <div className="flex items-center space-x-4 text-[#F4F1DE] text-7xl md:text-9xl drop-shadow-lg">
                    <span className={`transition-all duration-1000 transform ${step >= 1 ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-10 opacity-0 blur-md'}`}>
                        Ciao
                    </span>
                    <span className={`transition-all duration-1000 delay-200 transform ${step >= 2 ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-10 opacity-0 blur-md'}`}>
                        Baby!
                    </span>
                </div>
            </div>

            {/* Main Content (Invitation) */}
            <div className={`w-full max-w-lg bg-[#F4F1DE]/95 backdrop-blur-md p-12 rounded-[2rem] shadow-2xl transform transition-all duration-1500 ease-out border border-white/20 ${step === 4 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10'}`}>
                <div className="text-center space-y-8">
                    <div className="w-16 h-16 bg-[#B84A39] rounded-full mx-auto flex items-center justify-center text-3xl shadow-inner">
                        🍋
                    </div>
                    <div>
                        <p className="font-sans text-[#81B29A] uppercase tracking-[0.2em] text-sm mb-4">You are invited to</p>
                        <h2 className="text-6xl text-[#B84A39]">An Italian Summer</h2>
                    </div>
                    <div className="h-px w-24 bg-[#3D405B]/20 mx-auto"></div>
                    <p className="text-[#3D405B] font-sans text-lg">Celebrating Catalina & Armando</p>
                </div>
            </div>
        </div>
    );
}
