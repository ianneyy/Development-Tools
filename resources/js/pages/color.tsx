// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
// import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon, InputIcon } from '@radix-ui/react-icon';

import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Color & Styling',
        href: '/color',
    },
];
const features = [
    {
        name: 'Colorffy',
        description: 'The easiest CSS Color Palette Generators.',
        href: 'https://colorffy.com/',
        cta: 'Browse',
        background: <img className="absolute -top-20 -right-20 opacity-60" />,
        className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
    },
];


 
export default function Color() {
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
