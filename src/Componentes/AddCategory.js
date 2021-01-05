import React, { useState } from 'react';
import {GitExpertApp} from '../GitExpertApp';

export const AddCategory = ({setCategorias}) => {


    const [inputValue, setinputValue] = useState('Hola')

    const handleInputChange = (e) =>{
        setinputValue(e.target.value);
    }
   

    const handleSubmit=(e)=>{
        e.preventDefault()//evitar comportamiento por defecto del form
      
        if (inputValue.trim().length>2) {
            setCategorias(categ=>[...categ, inputValue])
            setinputValue('')
        }
        
        //console.log('Submit hecho');
    }

    return (
        <div>
           <form onSubmit= {handleSubmit}>
            <input 
            type="text"
            value= {inputValue}
            onChange={handleInputChange}
            />
            </form>
        </div>
    )
}
