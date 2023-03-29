'use client';

import React from 'react';
import { useSession } from 'next-auth/react';

import Image from 'next/image';

function User() {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                <Image
                    src={`${session?.user?.image}`}
                    width={120}
                    height={120}
                    alt='Picture of the author'
                    className='rounded-full'
                />
                <p className='font-bold text-lg'>{`Hello, ${session?.user?.name}`}</p>
            </>
        );
    }

    return <></>;
}

export default User;
