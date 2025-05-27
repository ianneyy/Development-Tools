// import { Head} from '@inertiajs/react';
// import { SplashCursor } from '@/components/ui/splash-cursor';
import { HeroSection } from '@/components/hero-section-dark';

export default function Welcome() {
    // const { auth } = usePage<SharedData>().props;

    return (
        <>
            {/* <SplashCursor /> */}

            {/* <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                            </>
                        )}
                    </nav>
                </header> */}
            <HeroSection
                title="Developed by Ian Belarmino"
                subtitle={{
                    regular: 'Development Tools & Resources ',
                    gradient: 'for every web developer',
                }}
                description="Empower your workflow with a curated suite of tools and resources designed to help you build, test, and launch with confidence."
                ctaText="Login "
                ctaHref="/login"
              
                gridOptions={{
                    angle: 65,
                    opacity: 0.4,
                    cellSize: 50,
                    lightLineColor: '#4a4a4a',
                    darkLineColor: '#2a2a2a',
                }}
            />
            <div className="hidden h-14.5 lg:block"></div>
        </>
    );
}
