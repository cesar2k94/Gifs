import React from 'react'

export const GifGridItem = ({tittle,url}) => {


    return (
        <div className="animate__fadeInDownBig">
            <img src = {url} alt={tittle}/>
            <p>{tittle}</p>
        </div>
    )
}
