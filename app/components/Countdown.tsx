'use client';

import React, { useState, useEffect } from 'react';

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="glass p-4 rounded-xl glass-hover transform transition-all duration-300 hover:scale-105">
        <div className="text-4xl md:text-5xl font-bold text-[var(--color-terracotta)] font-cursive">{value}</div>
        <div className="text-sm uppercase tracking-widest text-[var(--color-charcoal)] mt-1 font-medium">{label}</div>
    </div>
);

export default function Countdown() {
    const calculateTimeLeft = () => {
        const difference = +new Date("2026-02-07T14:00:00") - +new Date();
        let timeLeft: { [key: string]: number } = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    // Initialize with empty state to match server-side rendering
    const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>({});
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Don't render anything until mounted on client to avoid hydration mismatch
    if (!isMounted) {
        return (
            <section className="mt-8 text-center glass p-8 rounded-3xl shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-4xl font-cursive text-[var(--color-terracotta)] mb-8">Until We Celebrate!</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center max-w-2xl mx-auto">
                    <CountdownUnit value={0} label="Days" />
                    <CountdownUnit value={0} label="Hours" />
                    <CountdownUnit value={0} label="Minutes" />
                    <CountdownUnit value={0} label="Seconds" />
                </div>
            </section>
        );
    }

    return (
        <section className="mt-8 text-center glass p-8 rounded-3xl shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-4xl font-cursive text-[var(--color-terracotta)] mb-8">Until We Celebrate!</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center max-w-2xl mx-auto">
                {Object.keys(timeLeft).length > 0 ? (
                    <>
                        <CountdownUnit value={timeLeft.days} label="Days" />
                        <CountdownUnit value={timeLeft.hours} label="Hours" />
                        <CountdownUnit value={timeLeft.minutes} label="Minutes" />
                        <CountdownUnit value={timeLeft.seconds} label="Seconds" />
                    </>
                ) : (
                    <div className='col-span-4 text-3xl font-cursive text-[var(--color-terracotta)]'>The party is here!</div>
                )}
            </div>
        </section>
    );
}
