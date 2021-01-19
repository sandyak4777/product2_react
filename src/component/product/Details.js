import React from 'react'
import "../../styles/Product2.styles.css"

const Details = ({Brand_name,t_shirt_name,price}) => {
    return (
        <div>
            <h2>{Brand_name} <br /><span>{t_shirt_name}</span></h2>
            <div className="price">{price} </div>
        </div>
    )
}

export default Details
