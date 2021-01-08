import React,{useState} from 'react'
import { AddCategory } from './Componentes/AddCategory';
import { GifGrid } from './Componentes/GifGrid';

export const GitExpertApp = () => {

    //const categorias = ['Chelsea', 'Arsenal', 'Leeds'];
   
    const [categorys, setCategorys] = useState(['Chelsea FC']);



    //  const handleAdd = () =>{
    //     setCategorias(categ =>[ ...categ, "Fulham"]); 
    //  }

    return (
        <>
          <h2>GitExpertApp</h2>
          <AddCategory setCategorys={setCategorys}/>
          <hr />  
         
          <ol>
              {
                  categorys.map( category =>(
                      <GifGrid 
                      key={category}
                      category={category}/>
                  ))
              }
          </ol>
        </>
    )
}
   