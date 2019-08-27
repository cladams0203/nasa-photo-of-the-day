import React, { useState } from 'react';
import { Api } from './Api-call';

export function Date(props) {
    const [value, setValue] = useState('')
    
    return (
        <div>
            <form onSubmit={Api(props.setData, value)} >
                <input type={`date`} name={`date`} value={value} onChange={(e) => setValue(e.target.value)}></input>
            </form>
        </div>
    )
}