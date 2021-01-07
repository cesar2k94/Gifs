import React,{useState} from 'react'
import { AddCategory } from './Componentes/AddCategory';
import { GifGrid } from './Componentes/GifGrid';

export const GitExpertApp = () => {

    //const categorias = ['Chelsea', 'Arsenal', 'Leeds'];
   
    const [categorias, setCategorias] = useState(['Chelsea FC']);



    //  const handleAdd = () =>{
    //     setCategorias(categ =>[ ...categ, "Fulham"]); 
    //  }

    return (
        <>
          <h2>GitExpertApp</h2>
          <AddCategory setCategorias={setCategorias}/>
          <hr />  
         
          <ol>
              {
                  categorias.map( categoria =>(
                      <GifGrid 
                      key={categoria}
                      categoria={categoria}/>
                  ))
              }
          </ol>
        </>
    )
}
   