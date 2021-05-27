import React, { useState } from 'react'
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks'
import '../02-use-effect/effects.css'

export const RealExampleRef = () => {
    
    const [show, setShow] = useState(false);
    
    return (
        <>
          <h1>Real Example Ref</h1>  
          <hr />

          {show && <MultipleCustomHooks />}

          <button
                className="btn btn-primary mt-5 d-block"
                onClick={ () => {
                    setShow( !show ); 
                }}
          >
              Show/Hide
          </button>
        </>
    )
}
