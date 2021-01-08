import React /* { useEffect, useState } */ from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifGridItem } from './GifGridItem';


export const GifGrid = ( {category} ) => {

    const {data,loading} = useFetchGifs(category);
      
    return (
        <>
            <h3>{category}</h3>
            {loading && <p className='animate__flash'>Loading...</p>}
            
       {  <div className="targeta-grid">            
                {
                    // data.map(img=>(
                    //     <li key={img.id}>{img.title}</li>
                       
                    // ))

                    data.map(img=>(
                        <GifGridItem
                        key={img.id} 
                        {...img}  />//se envian todas las propiedades del Url es lo mismo q poner img={img}
                    ))
                }
      
        </div> }
        </>
    )
}
