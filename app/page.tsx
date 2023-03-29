import { useSession } from 'next-auth/react';

import AuthButton from '@/components/AuthButton';
import User from '@/components/User';

export default function RootPage() {
    return (
        <>
            <User />
            <AuthButton />
        </>
    );
}
