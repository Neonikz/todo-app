import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import {useCounter} from '../../hooks/useCounter'
import './layout.css'

export const Layout = () => {
    
    const {counter, increment, decrement } = useCounter(1);

    const {data} = useFetch( `https://breakingbadapi.com/api/quotes/${ counter }` );

    const {quote} = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])
    
    return (
        <>
            <h1 className="text-center">Layout Effect</h1>
            <hr />
  
            <blockquote className="blockquote text-center">
                <p 
                    className="mb-0"
                    ref={pTag}
                >{quote}</p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3)}
            </pre>

            <button className="btn btn-primary mr-2" onClick={ decrement }>
                Prev Quote
            </button>
            <button className="btn btn-primary" onClick={ increment }>
                Next Quote
            </button>
        </>
    )
}
