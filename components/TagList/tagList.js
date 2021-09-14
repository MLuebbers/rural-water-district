import React, { useState } from 'react';
import Link from 'next/link';
import _ from 'lodash/core';

export default function TagList({ tags }) {
    const tagElements = Object.keys(tags)?.map((element) => {
        return (
            <span
                className="list-element"
                key={ useState(_.uniqueId('tag-')) } 
            >
                #<Link href={`/lists/${ element }`}>{ element }</Link>
            </span>
        );
    });

    return (
        <>
            <span className="list-container tags-tags">{ tagElements }</span>
        </>
    );
}