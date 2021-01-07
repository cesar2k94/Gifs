import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {


    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) =>{
        setinputValue(e.target.value);
    }
   

    const handleSubmit=(e)=>{
        e.preventDefault()//evitar comportamiento por defecto del form
      
        if (inputValue.trim().length>2) {
            setCategorias(categ=>[ inputValue,...categ])
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
    AddCategory.propTypes={
        setCategorias: PropTypes.func.isRequired
    }
}
