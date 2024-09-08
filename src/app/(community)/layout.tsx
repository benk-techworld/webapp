import { MobileMenuProvider } from '@/contexts/mobile-context';
import Header from "@/components/layout/header";

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <main className='flex flex-col h-screen'>
            <MobileMenuProvider><Header/></MobileMenuProvider>
            <div className="flex-1 max-w-7xl w-full mx-auto">
                {children}
            </div>
        </main>
    );
}