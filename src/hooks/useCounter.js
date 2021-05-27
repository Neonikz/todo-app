import { useState } from "react"


export const useCounter = ( initialState = 10) => {

    const [counter, setCounter] = useState(initialState);

    const increment = () => {       //factor para sumar o restar por mas numeros
        setCounter( counter + 1);
    };

    const decrement = () => {
        setCounter( counter - 1 );
    };

    const reset = () => {
        setCounter( initialState );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}
