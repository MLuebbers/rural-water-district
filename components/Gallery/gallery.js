import React, { useState } from 'react';
import _ from 'lodash/core';

import Image from 'next/image';
import Link from 'next/link';

const galleryLoader = ({ src, width, quality }) => {
    return `/content/assets/gallery/${src}?w=${width}&q=${quality || 75}`;
};

export default function Gallery({ images, children }) {
    
    const gallery = images.map(({ path, caption }) => {
        
        return (
            <div key={ useState(_.uniqueId('gallery-')) }>
                <Image 
                    loader={ galleryLoader }
                    src={ path } 
                    width={ 200 }
                    height={ 200 }
                    alt={ caption }
                />
                <span>{ caption }</span>
            </div>
        );
    });

    return (
        <>
            { gallery }
        </>
    );
}