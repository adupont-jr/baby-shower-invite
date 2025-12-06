'use client';

import React, { useState, FormEvent } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function RsvpForm() {
    const [isRsvpSubmitted, setIsRsvpSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleRsvpSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const guests = formData.get('guests') as string;

        try {
            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Request timed out. Check your network or Firebase configuration.')), 10000)
            );

            await Promise.race([
                addDoc(collection(db, "guests"), {
                    name,
                    email,
                    guests: parseInt(guests),
                    timestamp: serverTimestamp()
                }),
                timeoutPromise
            ]);
            setIsRsvpSubmitted(true);
        } catch (error) {
            console.error("Error adding document: ", error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            alert(`Error submitting RSVP: ${errorMessage}. Please take a screenshot of this and send it to me.`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleICalDownload = () => {
        const cal = [
            'BEGIN:VCALENDAR', 'VERSION:2.0', 'BEGIN:VEVENT',
            'URL:' + window.location.href,
            'DTSTART:20260207T220000Z',
            'DTEND:20260208T010000Z',
            'SUMMARY:Baby Shower for Armandito DuPont',
            'DESCRIPTION:A baby shower in honor of Armandito DuPont. Ciao Baby!',
            'LOCATION:1330 Hidden Springs Dr, Corona, CA 92881',
            'END:VEVENT', 'END:VCALENDAR'
        ].join('\r\n');

        const blob = new Blob([cal], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', 'baby-shower-armandito.ics');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="mt-8 glass p-8 md:p-10 rounded-3xl shadow-lg animate-fade-in" style={{ animationDelay: '1.0s' }}>
            {!isRsvpSubmitted ? (
                <>
                    <div className="text-center mb-8">
                        <h3 className="text-4xl font-cursive text-[var(--color-terracotta)] mb-3">Kindly RSVP</h3>
                        <p className="text-lg text-[var(--color-charcoal)]">Let us know if you can make it!</p>
                    </div>
                    <form onSubmit={handleRsvpSubmit} className="max-w-md mx-auto space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-charcoal)] mb-2">Full Name</label>
                            <input type="text" name="name" id="name" required
                                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/60 focus:border-[var(--color-terracotta)] focus:ring-2 focus:ring-[var(--color-terracotta)]/20 outline-none transition-all"
                                placeholder="Enter your full name" suppressHydrationWarning />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-charcoal)] mb-2">Email</label>
                            <input type="email" name="email" id="email" required
                                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/60 focus:border-[var(--color-terracotta)] focus:ring-2 focus:ring-[var(--color-terracotta)]/20 outline-none transition-all"
                                placeholder="Enter your email" suppressHydrationWarning />
                        </div>
                        <div>
                            <label htmlFor="guests" className="block text-sm font-semibold text-[var(--color-charcoal)] mb-2">Number of Guests</label>
                            <input type="number" name="guests" id="guests" min="1" defaultValue="1" required
                                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/60 focus:border-[var(--color-terracotta)] focus:ring-2 focus:ring-[var(--color-terracotta)]/20 outline-none transition-all" suppressHydrationWarning />
                        </div>
                        <button type="submit" disabled={isLoading}
                            className="w-full bg-[var(--color-terracotta)] text-white font-bold py-4 px-6 rounded-full hover:bg-[#c96b52] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed">
                            {isLoading ? 'Submitting...' : 'Submit RSVP'}
                        </button>
                    </form>
                </>
            ) : (
                <div className="mt-6 text-center">
                    <div className="mb-6">
                        <div className="w-16 h-16 bg-[var(--color-sage)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-[var(--color-sage)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h4 className="text-3xl font-cursive text-[var(--color-sage)] mb-2">Grazie!</h4>
                        <p className="text-lg text-[var(--color-charcoal)]">Thank you for RSVPing!</p>
                    </div>

                    <p className="text-[var(--color-charcoal)] mb-6 opacity-80">Add the event to your calendar:</p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Baby+Shower+for+Armandito+DuPont&dates=20260207T220000Z/20260208T010000Z&details=A+baby+shower+in+honor+of+Armandito+DuPont.+Ciao+Baby!&location=1330+Hidden+Springs+Dr,+Corona,+CA+92881" target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center w-full sm:w-auto bg-white/80 border border-white/60 text-[var(--color-charcoal)] font-semibold py-3 px-6 rounded-xl hover:bg-white transition duration-300 shadow-sm hover:shadow-md">
                            <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                            Google
                        </a>
                        <a href="https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=Baby+Shower+for+Armandito+DuPont&startdt=2026-02-07T22:00:00Z&enddt=2026-02-08T01:00:00Z&body=A+baby+shower+in+honor+of+Armandito+DuPont.+Ciao+Baby!&location=1330+Hidden+Springs+Dr,+Corona,+CA+92881" target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center w-full sm:w-auto bg-white/80 border border-white/60 text-[var(--color-charcoal)] font-semibold py-3 px-6 rounded-xl hover:bg-white transition duration-300 shadow-sm hover:shadow-md">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H11V11H3V3Z M13 3H21V11H13V3Z M3 13H11V21H3V13Z M13 13H21V21H13V13Z"></path></svg>
                            Outlook
                        </a>
                        <button onClick={handleICalDownload}
                            className="flex items-center justify-center w-full sm:w-auto bg-white/80 border border-white/60 text-[var(--color-charcoal)] font-semibold py-3 px-6 rounded-xl hover:bg-white transition duration-300 shadow-sm hover:shadow-md">
                            <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.2,2.8C15.4,2.7,13.8,4.3,12.8,4.3c-1,0-2.3-1.6-3.9-1.5c-2.3,0.1-4.3,2.3-4.3,5.5c0,4.1,3.2,8.2,5.7,8.2 c1.1,0,2-0.8,3.1-0.8s1.9,0.8,3.1,0.8c2.7,0,5.8-4.2,5.8-8.2C22.3,4.8,19.5,2.7,17.2,2.8z M12.8,3.2c0.8-0.9,1.8-1.5,2.9-1.5 c0.3,0,0.5,0,0.8,0.1c-0.6,0.5-1.2,1.2-1.7,2C14.1,4.4,13.4,5,12.8,5C12.1,5,11.7,4.6,11.2,4.1C11.7,3.6,12.2,3.3,12.8,3.2z"></path></svg>
                            Apple/iCal
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
