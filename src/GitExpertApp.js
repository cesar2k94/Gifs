import React,{useState} from 'react'
import { AddCategory } from './Componentes/AddCategory';

export const GitExpertApp = () => {

    //const categorias = ['Chelsea', 'Arsenal', 'Leeds'];
   
    const [categorias, setCategorias] = useState(['Chelsea', 'Arsenal', 'Leeds']);

    //  const handleAdd = () =>{
    //     setCategorias(categ =>[ ...categ, "Fulham"]); 
    //  }

    return (
        <>
          <h2>GitExpertApp</h2>
          <AddCategory/>
          <hr />  
         
          <ol>
              {
                  categorias.map( category =>{
                      return<li key={category} >{category}</li>
                  })
              }
          </ol>
        </>
    )
}
   