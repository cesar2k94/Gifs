import React, { useState } from 'react'

export const AddCategory = () => {


    const [inputValue, setinputValue] = useState('Hola')

    const handleInputChange = (e) =>{
        setinputValue(e.target.value);
    }
   

    const handleSubmit=(e)=>{
        e.preventDefault()//evitar comportamiento por defecto del form
        console.log('Submit hecho');
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
