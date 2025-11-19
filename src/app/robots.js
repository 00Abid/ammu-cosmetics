export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/server/', '/private/', '/*.env$'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
        ],
        sitemap: [
            'https://www.ammu-cosmetics.vercel.app/sitemap.xml',
            'https://www.ammu-cosmetics.vercel.app/image-sitemap.xml',
        ],
    };
}
