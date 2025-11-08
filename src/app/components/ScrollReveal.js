'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
    useEffect(() => {
        // Define all animation classes to watch for
        const animationClasses = [
            'scroll-fade-up',
            'scroll-fade-down',
            'scroll-fade-left',
            'scroll-fade-right',
            'scroll-fade',
            'scroll-zoom-in',
            'scroll-zoom-out',
            'scroll-flip-left',
            'scroll-flip-right',
            'scroll-slide-up'
        ];

        // Create selector for all animation classes
        const selector = animationClasses.map(cls => `.${cls}`).join(', ');

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Stop observing once animated (animate only once)
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.1,
            rootMargin: '0px 0px -80px 0px'
        });

        // Observe all elements with animation classes
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return null;
}
