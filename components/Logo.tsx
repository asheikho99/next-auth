import React from 'react';
import Image from 'next/image';

interface LogoProps {
    src: string;
    alt: string;
}

function Logo({src, alt}: LogoProps) {
    return (
        <Image
            src={src}
            alt={alt}
            width={100}
            height={100}
            fill={false}
        />
    );
}

export default Logo;
