import React, { useState } from 'react';
import _ from 'lodash/core';

import Item from "./item.js";

export default function List({ data }) {
    const items = data.map((e) => {
        return (
            <Item
                key={ useState(_.uniqueId('blog-')) } 
                {... e} 
            />
        );
    });

    return (
        <>
            { items }
        </>
    );
}