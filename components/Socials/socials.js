import React, { useState } from "react";
import _ from "lodash/core";

export default function Socials({ data, children }){

    const items = data.map(({ platform, text, path, show }) => {
        return show ?
            (<Item 
                key={ useState(_.uniqueId('socials-')) }
                platform={ platform }
                text={ text }
                path={ path }
            />): 
            null;
    });
    
    return (
        <>
            { items }
        </>
    );
}

function Item({ platform, text, path }){
    return (
        <div>
            <a href={ path }>
                <span>{ text }</span>
            </a>
        </div>
    );
}
