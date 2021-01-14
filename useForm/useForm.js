import { useState } from 'react';

export const useForm = ( initialState = {} ) => { 
    // También se podría poner la validación del formulario dentro de este custom hook
    
    const [values, setValues] = useState(initialState);

    //Para resetear el formulario
    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        })

    }

    return [ values, handleInputChange, reset ];

}
