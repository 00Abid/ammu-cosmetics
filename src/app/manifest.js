export default function manifest() {
    return {
        name: 'AMMU COSMETICS',
        short_name: 'AMMU',
        description: 'Pure. Natural. You. - Natural luxury skincare and cosmetics',
        start_url: '/',
        display: 'standalone',
        background_color: '#F8F5F1',
        theme_color: '#1c1917',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/ammu-logo.webp',
                sizes: '192x192 512x512', // Using your single logo for both sizes
                type: 'image/webp',
            },
        ],
    }
}
