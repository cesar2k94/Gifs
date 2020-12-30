import React,{useState} from 'react'

export const GitExpertApp = () => {

    //const categorias = ['Chelsea', 'Arsenal', 'Leeds'];
   
    const [categorias, setCategorias] = useState(['Chelsea', 'Arsenal', 'Leeds']);

     const handleAdd = () =>{
        setCategorias(categ =>[ ...categ, "Fulham"]); 
     }

    return (
        <>
          <h2>GitExpertApp</h2>
          <hr />  
          <button onClick= {handleAdd} >Agregar</button>
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
   