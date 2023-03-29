'use client';

import { SessionProvider as Provider } from 'next-auth/react';

interface ProviderProps {
    children: React.ReactNode;
}
export default function SessionProvider({ children }: ProviderProps) {
    return <Provider>{children}</Provider>;
}
