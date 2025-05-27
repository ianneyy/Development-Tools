// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
// import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon, InputIcon } from '@radix-ui/react-icon';

import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Animation & Effects',
        href: '/animation',
    },
];
const features = [
    {
        name: 'Animate.css',
        description: 'Just-add-water CSS animations',
        href: 'https://animate.style/',
        cta: 'Browse',
        background: <img className="absolute -top-20 -right-20 opacity-60" />,
        className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
    },
    {
        name: 'animejs',
        description: 'All-in-one animation engine.',
        href: 'https://animejs.com/',
        cta: 'Browse',
        background: <img className="absolute -top-20 -right-20 opacity-60" />,
        className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
    },
    {
        name: 'LottieFiles',
        description: 'Create, edit, collaborate on and implement lightweight Lottie animations across websites, apps, socials and more.',
        href: 'https://lottiefiles.com/',
        cta: 'Browse',
        background: <img className="absolute -top-20 -right-20 opacity-60" />,
        className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
    },
    {
        name: 'Confetti.js',
        description: 'Lightweight confetti animation for celebratory UI effects',
        href: 'https://confetti.js.org/',
        cta: 'Learn more',
        background: <img className="absolute -top-20 -right-20 opacity-60" />,
        className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
    },
];



export default function Animation() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Development Tools" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <BentoGrid className="lg:grid-rows-3">
                    {features.map((feature) => (
                        <BentoCard key={feature.name} {...feature} />
                    ))}
                </BentoGrid>

            </div>
        </AppLayout>
    );
}
