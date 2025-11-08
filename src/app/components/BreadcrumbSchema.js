'use client';

import { usePathname } from 'next/navigation';

export default function BreadcrumbSchema() {
    const pathname = usePathname();

    const generateBreadcrumbs = () => {
        const baseUrl = 'https://www.ammu-cosmetics.vercel.app';
        const paths = pathname.split('/').filter(Boolean);

        const breadcrumbList = [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: baseUrl
            }
        ];

        let currentUrl = baseUrl;
        paths.forEach((path, index) => {
            currentUrl += `/${path}`;
            let name = path.charAt(0).toUpperCase() + path.slice(1);

            // Custom names for routes
            const nameMap = {
                'products': 'Products',
                'why': 'Why Choose Us',
                'contact': 'Contact Us'
            };

            if (nameMap[path]) {
                name = nameMap[path];
            }

            breadcrumbList.push({
                '@type': 'ListItem',
                position: index + 2,
                name: name,
                item: currentUrl
            });
        });

        return {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbList
        };
    };

    const breadcrumbSchema = generateBreadcrumbs();

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
    );
}
