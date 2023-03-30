import React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

function Avatar() {
    const { data: session } = useSession();

    return (
        <Image
            src={`${session?.user?.image}`}
            width={120}
            height={120}
            alt='Picture of the author'
            className='rounded-full'
        />
    );
}

export default Avatar;
