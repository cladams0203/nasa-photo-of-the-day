import React from 'react';

export function Text(props) {

    return (
        <div>
            <h2>Nasa Daily Photo</h2>
            <p>{props.description}</p>
        </div>
    )
}