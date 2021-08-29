import React, { useState } from "react";
import _ from "lodash/core";

export default function Schedule({ data, children }){

    const items = data.map(({ date, venue, location, link, status }) => {
        return (
            <Item 
                key={ useState(_.uniqueId('schedule-')) }
                date={ date } 
                venue={ venue }
                location={ location }
                link={ link }
                status={ status }
            />
        )
    });
    
    return (
        <>
            { items }
        </>
    );
}

function Item({ date, venue, location, link, status }){
    return (
        <div>
            <a href={ link }>
                <span>{ date }</span>
                <span>{ venue }</span>
                <span>{ location }</span>
            </a>
        </div>
    );
}