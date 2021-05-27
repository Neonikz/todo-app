import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import {useCounter} from '../../hooks/useCounter'
import '../02-use-effect/effects.css'

export const MultipleCustomHooks = () => {
    
    const {counter, increment, decrement } = useCounter(1);

    const { loading, data} = useFetch( `https://breakingbadapi.com/api/quotes/${ counter }` );

    const { author, quote} = !!data && data[0];


    
    return (
        <>
            <h1 className="text-center">Breaking Bad Quotes</h1>
            <hr />

            {
                loading 
                ?
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>

                )
                :
                (   
                    <blockquote className="blockquote text-center">
                        <p className="mb-0">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )
            }

            <button className="btn btn-primary mr-2" onClick={ decrement }>
                Prev Quote
            </button>
            <button className="btn btn-primary" onClick={ increment }>
                Next Quote
            </button>
        </>
    )
}
