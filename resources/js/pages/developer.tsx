// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
// import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon, InputIcon } from '@radix-ui/react-icon';

import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Developer Platforms',
        href: '/developer',
    },
];
const features = [
    {
        name: 'WorkOS',
        description:
            'WorkOS is a developer platform that provides enterprise-ready features like Single Sign-On (SSO), SCIM user provisioning, audit logs, and more',
        href: 'https://workos.com/',
        cta: 'Browse',
        background: <img className="absolute -top-20 -right-20 opacity-60" />,
        className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3',
    },
    {
        name: 'CodePen ',
        description: 'Online code editor and social development environment for front-end developers',
        href: 'https://codepen.io/',
        cta: 'Browse',
        background: <img className="absolute -top-20 -right-20 opacity-60" />,
        className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3',
    },
   
];




export default function Developer() {
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
