'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import Avatar from './Avatar';


function User() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div className='flex flex-col justify-center items-center'>
                <Avatar />
                <p className='font-bold text-lg'>{`Hello, ${session?.user?.name}`}</p>
                <p className='text-md'>{session?.user?.email}</p>
            </div>
        );
    }

    return <></>;
}

export default User;
