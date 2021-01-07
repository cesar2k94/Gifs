import React from 'react'

export const GifGridItem = ({tittle,url}) => {


    return (
        <div className="targeta">
            <img src = {url} alt={tittle}/>
            <p>{tittle}</p>
        </div>
    )
}
