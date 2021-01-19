import React from 'react'
// import Image from '../../basicComponents/Image'
import "../../styles/Product2.styles.css"
import Colors from './Colors'
import Details from './Details'
import Sizes from './Sizes'

const Product = ({Brand_name,t_shirt_name,price,src}) => {
    return (
        <div className="container">
        <div className="product">
        <div className="imgbox">
            <img src="fashion1.png" alt="" / >
            {/* <Image src={src} /> */}
            
        </div>
        <div className="details">
            <Details 
            Brand_name={Brand_name}
            t_shirt_name={t_shirt_name}
            price={price}
            src={src}
            />
            <Sizes />
        <label>Colors</label>
        <Colors />
        {/* <a href="#">Add to cart</a> */}
        <button>Add to cart</button>
        </div>
        
        
    </div>
    </div>
    )
}

export default Product
