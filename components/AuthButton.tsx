'use client';

import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

function AuthButton() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                <button
                    className='bg-red-500 text-white py-1.5 px-2.5 w-80 rounded-lg'
                    onClick={() => signOut()}
                >
                    Sign out
                </button>
            </>
        );
    }

    return (
        <>
            <button
                className='bg-black text-white py-1.5 px-2.5 w-80 rounded-lg'
                onClick={() => signIn('github')}
            >
                Sign in using GitHub
            </button>{' '}
        </>
    );
}

export default AuthButton;
