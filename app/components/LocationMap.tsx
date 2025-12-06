import React from 'react';

export default function LocationMap() {
    return (
        <section className="mt-8 glass p-8 rounded-3xl shadow-lg animate-fade-in text-center" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-4xl font-cursive text-[var(--color-terracotta)] mb-4">The Location</h3>
            <div className="mb-8 space-y-1">
                <p className="text-xl font-semibold text-[var(--color-charcoal)]">The DuPont Residence</p>
                <p className="text-lg text-[var(--color-charcoal)] opacity-80">1330 Hidden Springs Dr, Corona, CA 92881</p>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden border-4 border-white/50 shadow-inner">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.462747196568!2d-117.5148086847942!3d33.74836998070448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcc9a5554b7c6b%3A0xb3a2283e3c233a0b!2s1330%20Hidden%20Springs%20Dr%2C%20Corona%2C%20CA%2092881!5e0!3m2!1sen!2sus!4v1664500000000!5m2!1sen!2sus&t=k"
                    width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"></iframe>
            </div>
        </section>
    );
}
