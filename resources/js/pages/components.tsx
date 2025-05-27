// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
// import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon, InputIcon } from '@radix-ui/react-icon';

import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'UI Components',
        href: '/components',
    },
];
const features = [
    {
        name: '21st.dev',
        description: 'Discover, share & remix the best UI components',
        href: 'https://21st.dev/',
        cta: 'Browse',
        background: <img className="absolute -top-20 -right-20 opacity-60" />,
        className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
    },
    {
        name: 'Shadcn',
        description: 'Build your React component library',
        href: 'https://ui.shadcn.com/',
        cta: 'Browse',
        background: <img className="absolute -top-20 -right-20 opacity-60" />,
        className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
    },
    {
        name: 'DaisyUI',
        description: 'Faster, cleaner, easier Tailwind CSS development',
        href: 'https://daisyui.com/',
        cta: 'Learn more',
        background: <img className="absolute -top-20 -right-20 opacity-60" />,
        className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
    },
    {
        name: 'HeadlessUI',
        description: 'Faster, cleaner, easier Tailwind CSS development',
        href: 'https://headlessui.com/',
        cta: 'Learn more',
        background: <img className="absolute -top-20 -right-20 opacity-60" />,
        className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
    },
    {
        name: 'Radix UI',
        description: 'Unstyled, accessible components for React',
        href: 'https://www.radix-ui.com/',
        cta: 'Browse',
        background: <img className="absolute -top-20 -right-20 opacity-60" />,
        className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
    },
];

const features2 = [
    {
        name: 'Blade Icons',
        description: 'A package to easily make use of SVG icons in your Laravel Blade views. Choose from a wide selection of icon sets. ',
        href: 'https://blade-ui-kit.com/blade-icons',
        cta: 'Browse',
        background: <img className="absolute -top-20 -right-20 opacity-60" />,
        className: 'lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2',
    },
    {
        name: 'Flowbite',
        description: 'Build websites even faster with components on top of Tailwind CSS',
        href: 'https://flowbite.com/',
        cta: 'Browse',
        background: <img className="absolute -top-20 -right-20 opacity-60" />,
        className: 'lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3',
    },
];

// const features3 = [
//     {
//         name: 'Blade Icons',
//         description: 'A package to easily make use of SVG icons in your Laravel Blade views. Choose from a wide selection of icon sets. ',
//         href: 'https://blade-ui-kit.com/blade-icons',
//         cta: 'Browse',
//         background: <img className="absolute -top-20 -right-20 opacity-60" />,
//         className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
//     },
//     {
//         name: 'Radix UI',
//         description: 'Unstyled, accessible components for React',
//         href: 'https://www.radix-ui.com/',
//         cta: 'Browse',
//         background: <img className="absolute -top-20 -right-20 opacity-60" />,
//         className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
//     },
//     {
//         name: 'LottieFiles',
//         description: 'Create, edit, collaborate on and implement lightweight Lottie animations across websites, apps, socials and more.',
//         href: 'https://lottiefiles.com/',
//         cta: 'Browse',
//         background: <img className="absolute -top-20 -right-20 opacity-60" />,
//         className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
//     },
//     {
//         name: 'UIverse',
//         description: 'The Largest Library of Open-Source UI',
//         href: 'https://uiverse.io/',
//         cta: 'Browse',
//         background: <img className="absolute -top-20 -right-20 opacity-60" />,
//         className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2',
//     },
//     {
//         name: 'unDraw',
//         description: 'Open-source illustrations for any idea you can imagine and create.',
//         href: 'https://undraw.co/',
//         cta: 'Browse',
//         background: <img className="absolute -top-20 -right-20 opacity-60" />,
//         className: 'lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4',
//     },
// ];
export default function Components() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Development Tools" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <BentoGrid className="lg:grid-rows-3">
                    {features.map((feature) => (
                        <BentoCard key={feature.name} {...feature} />
                    ))}
                </BentoGrid>

                <BentoGrid className="lg:grid-rows-3">
                    {features2.map((features2) => (
                        <BentoCard key={features2.name} {...features2} />
                    ))}
                </BentoGrid>
{/* 
                <BentoGrid className="lg:grid-rows-3">
                    {features3.map((features3) => (
                        <BentoCard key={features3.name} {...features3} />
                    ))}
                </BentoGrid> */}
            </div>
        </AppLayout>
    );
}
