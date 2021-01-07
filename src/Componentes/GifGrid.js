import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( {categoria} ) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(categoria)
        .then(imgs=>setImages(imgs))
    }, [categoria])
    
    


    return (
        <>
            <h3>{categoria}</h3>
        <div className="targeta-grid">            
                {
                    // images.map(img=>(
                    //     <li key={img.id}>{img.title}</li>
                       
                    // ))

                    images.map(img=>(
                        <GifGridItem
                        key={img.id} 
                        {...img}  />//se envian todas las propiedades del Url es lo mismo q poner img={img}
                    ))
                }
      
        </div>
        </>
    )
}
