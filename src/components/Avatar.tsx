import React from 'react';

type Props = {
    src: string;
    alt: string;
}

const Avatar = ({ src, alt }: Props) => <img src={src} alt={alt} style={{ borderRadius: '50%' }} />;

export default Avatar;
