import React, { useEffect, useState } from 'react';


export const GifGrid = ( {categoria} ) => {

const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, [])
    
    const getGifs = async()=>{

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=lzvjyAmtxakRcsf2YOwHA5IJL27NU29D'
        const resp = await fetch (url);  
        const {data} = await resp.json();
        //const {title}= await resp.json();
        
        const gifs = data.map( img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })  
    
        //console.log(gifs);
        setImages(gifs);

    }

    getGifs();    

    return (
        <div>
            <h3>{categoria}</h3>
            <ol>
                {
                    // images.map(img=>(
                    //     <li key={img.id}>{img.title}</li>
                       
                    // ))

                    //Con desestructuracion 
                    images.map(({id,title})=>(
                        <li key={id}>{title}</li>   
                    ))
                }
            </ol>
        </div>
    )
}
