'use client';

import React, { useState, useEffect } from 'react';

interface EnvelopeIntroProps {
    onOpenComplete: () => void;
}

export default function EnvelopeIntro({ onOpenComplete }: EnvelopeIntroProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isFading, setIsFading] = useState(false);

    const handleOpen = () => {
        if (isOpen) return;
        setIsOpen(true);

        // Play music
        const audio = new Audio('/music/italian-summer.mp3');
        audio.volume = 0.4; // Set volume to 40%
        audio.play().catch(e => console.log("Audio play failed:", e));

        // Wait for envelope open animation (approx 800ms) 
        // + 1 second pause
        // = Start fading at 1800ms
        setTimeout(() => {
            setIsFading(true);
        }, 1800);

        // Complete the transition after fade out (1800ms + 1500ms fade)
        setTimeout(() => {
            onOpenComplete();
        }, 3300);
    };

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#F4F1DE] transition-all duration-1500 ease-in-out ${isFading ? 'opacity-0 pointer-events-none scale-110' : 'opacity-100 scale-100'}`}>
            <div className="perspective-1000 w-full max-w-md p-4">
                <div
                    className={`relative w-full aspect-[1.4] cursor-pointer group transition-transform duration-700 ease-out ${isOpen ? 'translate-y-32' : 'hover:-translate-y-2'}`}
                    onClick={handleOpen}
                >
                    {/* Envelope Back */}
                    <div className="absolute inset-0 bg-[#B84A39] rounded-lg shadow-2xl z-0"></div>

                    {/* Invitation Card Preview */}
                    <div className={`absolute inset-x-4 top-4 bottom-4 bg-white rounded shadow-md transition-all duration-1000 ease-in-out z-10 flex flex-col items-center justify-center p-6 text-center border border-stone-100 ${isOpen ? '-translate-y-[130%] scale-110 rotate-0' : 'translate-y-0'}`}>
                        <div className="w-full h-full border border-[#81B29A]/30 p-4 flex flex-col items-center justify-center">
                            <p className="font-cursive text-4xl md:text-5xl font-bold text-[#B84A39] mb-2">Ciao Baby!</p>
                            <p className="font-sans text-xs uppercase tracking-widest text-[#3D405B]">You are invited</p>
                        </div>
                    </div>

                    {/* Envelope Front Flaps */}
                    <div className="absolute inset-0 z-20 pointer-events-none">
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#C05645] clip-path-polygon-[0_100%,_50%_0,_100%_100%] rounded-b-lg"></div>
                        <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#D66552] clip-path-polygon-[0_0,_100%_50%,_0_100%] rounded-l-lg"></div>
                        <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#D66552] clip-path-polygon-[100%_0,_0_50%,_100%_100%] rounded-r-lg"></div>
                    </div>

                    {/* Top Flap */}
                    <div className={`absolute top-0 left-0 right-0 h-1/2 bg-[#B84A39] z-30 origin-top transition-transform duration-700 ease-in-out rounded-t-lg ${isOpen ? 'rotate-x-180 z-0' : 'rotate-x-0 delay-300'}`} style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }}></div>

                    {/* Wax Seal */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-500 ${isOpen ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}`}>
                        <div className="w-16 h-16 bg-[#F2CC8F] rounded-full shadow-lg flex items-center justify-center border-4 border-[#E5B673]">
                            <span className="text-2xl">🍋</span>
                        </div>
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                            <p className="text-[#3D405B] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Tap to open</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .rotate-x-180 {
                    transform: rotateX(180deg);
                }
                .rotate-x-0 {
                    transform: rotateX(0deg);
                }
                .clip-path-polygon-\[0_100\%_2c_50\%_0_2c_100\%_100\%\] {
                    clip-path: polygon(0 100%, 50% 0, 100% 100%);
                }
                .clip-path-polygon-\[0_0_2c_100\%_50\%_2c_0_100\%\] {
                    clip-path: polygon(0 0, 100% 50%, 0 100%);
                }
                .clip-path-polygon-\[100\%_0_2c_0_50\%_2c_100\%_100\%\] {
                    clip-path: polygon(100% 0, 0 50%, 100% 100%);
                }
            `}</style>
        </div>
    );
}
