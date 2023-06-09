import './globals.css';
import SessionProvider from '../context/SessionProvider';
import Logo from '@/components/Logo';

export const metadata = {
    title: 'Next 13 with Next Auth',
    description: 'Generated by create next app',
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang='en'>
            <body className="bg-gray-1100 bg-[url('/grid.svg')]">
                <SessionProvider>
                    <div className='flex flex-col h-screen justify-center items-center p-4'>
                        <div className='flex flex-col justify-center items-center space-y-12 text-white bg-black border- p-12 rounded-lg'>
                            <div className='flex flex-row justify-center items-center space-x-8'>
                                <Logo src='nextjs.svg' alt='picture of next js logo' />
                                <Logo src='nextauth.svg' alt='picture of next auth logo' />
                            </div>
                            <div className='text-center'>
                                <h1 className='font-bold text-3xl'>
                                    NEXT.JS 13 + NEXT AUTH
                                </h1>
                                <p>Authentication Example</p>
                            </div>
                            {children}
                        </div>
                    </div>
                </SessionProvider>
            </body>
        </html>
    );
}
