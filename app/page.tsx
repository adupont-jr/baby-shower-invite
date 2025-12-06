'use client';

import React, { useState } from 'react';
import Countdown from './components/Countdown';
import LocationMap from './components/LocationMap';
import RegistryLink from './components/RegistryLink';
import RsvpForm from './components/RsvpForm';
import EnvelopeIntro from './components/EnvelopeIntro';

export default function Home() {
    const [showIntro, setShowIntro] = useState(true);

    return (
        <>
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Outfit:wght@300;400;600&display=swap');
        
        .font-cursive {
            font-family: 'Dancing Script', cursive;
        }
      `}</style>

            {showIntro && (
                <EnvelopeIntro onOpenComplete={() => setShowIntro(false)} />
            )}

            <main className="min-h-screen py-8 px-4 md:px-8 flex justify-center items-start">
                <div className="w-full max-w-4xl space-y-8">

                    {/* Main Invitation Card */}
                    <div className="glass rounded-3xl overflow-hidden relative animate-fade-in p-8 md:p-16 text-center group">

                        {/* Shimmer Effect Overlay */}
                        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 animate-shimmer"></div>

                        {/* Floating Doodles */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-0">
                            <div className="opacity-80 h-full w-full relative">
                                {/* Top Left - Pizza */}
                                <img src="/images/diaper.png" alt="" className="animate-float absolute top-[5%] left-[4%] w-[15%] md:w-[10%] rotate-12 opacity-90" />

                                {/* Top Left - socks */}
                                <img src="/images/socks.png" alt="" className="animate-float absolute bottom-[23.5%] left-[4%] w-[12%] md:w-[11%] -rotate-20 delay-200 opacity-90" />

                                {/* Top Right - wine */}
                                <img src="/images/wineglass.png" alt="" className="animate-float absolute bottom-[22%] right-[4%] w-[9%] md:w-[7%] -rotate-12 delay-200 opacity-90" />

                                {/* Top Right - wine & pizza */}
                                <img src="/images/pizzaandwine.png" alt="" className="animate-float absolute top-[4%] right-[4%] w-[22%] md:w-[15%] -rotate-12 delay-205 opacity-90" />

                                {/* Middle Left - Pin */}
                                <img src="/images/pin.png" alt="" className="animate-float absolute top-[57%] -translate-y-1/2 left-[7%] w-[10%] md:w-[7%] rotate-10 opacity-60 delay-210" />

                                {/* Middle Right - Diaper */}
                                <img src="/images/pizza.png" alt="" className="animate-float absolute top-[52%] right-[7.5%] w-[9%] md:w-[7.5%] rotate-2 opacity-80 delay-210" />

                                {/* Bottom Right - Mushroom */}
                                <img src="/images/mushroom.png" alt="" className="animate-float absolute bottom-[51.5%] right-[5%] w-[13%] md:w-[10.5%] -rotate-315 delay-220 opacity-80" />

                                {/* Bottom Left - Bottle */}
                                <img src="/images/bottle.png" alt="" className="animate-float absolute bottom-[51.8%] left-[4%] w-[9%] md:w-[8%] rotate-0 delay-700 opacity-80" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 space-y-6">
                            <header className="animate-slide-up flex flex-col items-center">
                                <img src="/images/ribbon_bow_v5.png" alt="Elegant Ribbon Bow" className="w-90 md:w-[40rem] -mt-7 md:-mt-5 -mb-6 md:-mb-15 rotate-2 mix-blend-multiply" />
                                <h1 className="font-cursive text-7xl md:text-9xl text-[var(--color-terracotta)] drop-shadow-sm hover:scale-105 transition-transform duration-300 cursor-default inline-block">
                                    Ciao Baby!
                                </h1>
                            </header>

                            <div className="space-y-4 animate-slide-up delay-200">
                                <p className="text-lg md:text-2xl text-[var(--color-charcoal)] font-light tracking-wide">
                                    Please join us for an Italian winter baby shower honoring
                                </p>
                                <h2 className="font-cursive text-5xl md:text-7xl text-[var(--color-sage)] py-2">
                                    Catalina and Armando DuPont
                                </h2>
                            </div>

                            <div className="pt-8 space-y-2 animate-slide-up delay-300">
                                <div className="inline-block glass px-8 py-4 rounded-full animate-pulse-soft">
                                    <p className="text-xl md:text-3xl font-semibold text-[var(--color-terracotta)]">
                                        Saturday, February 7th, 2026
                                    </p>
                                    <p className="text-lg md:text-xl text-[var(--color-charcoal)] mt-1">
                                        at 2:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Components Wrapper */}
                    <div className="space-y-6 animate-slide-up delay-500">
                        <Countdown />
                        <LocationMap />
                        <RegistryLink />
                        <RsvpForm />
                    </div>
                </div>
            </main >
        </>
    );
}
