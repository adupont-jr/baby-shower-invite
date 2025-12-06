import React from 'react';

export default function RegistryLink() {
    return (
        <section className="mt-8 glass p-8 rounded-3xl shadow-lg animate-fade-in text-center" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-4xl font-cursive text-[var(--color-terracotta)] mb-6">Baby Registry</h3>
            <p className="text-lg text-[var(--color-charcoal)] mb-8 max-w-2xl mx-auto">
                Your presence is the greatest gift, but if you wish to contribute, our registry is linked below.
            </p>
            <a href="https://my.babylist.com/armandodupontthe3rd" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-[var(--color-terracotta)] text-white font-semibold py-4 px-10 rounded-full hover:bg-[#c96b52] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                View Our Registry
            </a>
        </section>
    );
}
