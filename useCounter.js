import { useState } from 'react';
 

// export const useCounter = ( initialState = 10 ) => {
    
//     const [state, setState] = useState(initialState);

//     const reset = () => {
//         setState ( initialState );
//     }

//     const increment = ( factor = 1 ) => {
//         setState ( state + factor );
//     }

//     const decrement = ( factor = 1 ) => {
//         setState ( state - factor );
//     }


//     return {
//         state,
//         increment,
//         reset,
//         decrement
//     };

// }


export const useCounter = ( initialState = 10 ) => {
    
    const [counter, setCounter] = useState(initialState);

    const reset = () => {
        setCounter ( initialState );
    }

    const increment = () => {
        setCounter ( counter + 1 );
    }

    const decrement = () => {
        setCounter ( counter - 1 );
    }


    return {
        counter,
        increment,
        reset,
        decrement
    };

}
