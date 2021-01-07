import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( {categoria} ) => {

const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, [])
    
    const getGifs = async()=>{

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=lzvjyAmtxakRcsf2YOwHA5IJL27NU29D'
        const resp = await fetch (url);  
        const {data} = await resp.json();
       
        
        const gifs = data.map( img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })  
    
        console.log(gifs);
        setImages(gifs);

    }


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
