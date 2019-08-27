import React from 'react';

export function Date(props) {

    return (
        <div>
            <form onSubmit={() => props.setData}>
                <input type={`date`}></input>
            </form>
        </div>
    )
}