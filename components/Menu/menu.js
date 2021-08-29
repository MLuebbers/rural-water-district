import React, { useState } from "react";
import _ from "lodash/core";

export default function Menu({ data, children }){

    const items = data.map(({ text, path }) => {
        return (
            <Item 
                key={ useState(_.uniqueId('menu-')) }
                text={ text }
                path={ path }
            />
        )
    });
    
    return (
        <>
            { items }
        </>
    );
}

function Item({ text, path }){
    return (
        <div>
            <a href={ path }>
                <span>{ text }</span>
            </a>
        </div>
    );
}
