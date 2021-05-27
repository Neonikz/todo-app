import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../02-use-effect/effects.css';

export const CallBackHook = () => {
    
    const [counter, setCounter] = useState(10);
    
    // const increment = () => {
    //     setCounter( counter + 1);
    // }
    
    const increment = useCallback( (num) => {
        setCounter(c => c + num );
    },[ setCounter ]);

    useEffect(() => {
        

    }, [])


    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <h3 />

            <ShowIncrement increment={ increment } />
        </>
    )
}
