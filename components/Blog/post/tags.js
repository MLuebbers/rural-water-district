import React, { useState } from 'react';
import _ from 'lodash/core';
import processTags from '../../../scripts/util/processTags';

export default function Tags({ tags, specialItems}) {
    const specialItemElements = processTags(specialItems).map((element, index, array) => {
        return (
            <span 
                className="list-element"
                key={ useState(_.uniqueId('specialItem-')) } 
            >
                {element + ((index < (array.length - 1) || tags?.length) ? ", " : "")}
            </span>
        );
    });

    const tagElements = processTags(tags).map((element, index, array) => {
        return (
            <span
                className="list-element"
                key={ useState(_.uniqueId('tag-')) } 
            >
                {element + (index < (array.length - 1) ? ", " : "")}
            </span>
        );
    });

    return (
        <>
            <span className="list-container tags-specialItems">{ specialItemElements }</span>
            <span className="list-container tags-tags">{ tagElements }</span>
        </>
    );
}