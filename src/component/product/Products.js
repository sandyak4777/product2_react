import React from 'react'
import Product from './Product';
import "../../styles/Product2.styles.css"

const Products = () => {

    const products =[
        {id:1, Brand_name:"United Colors Of Benetton", t_shirt_name:"Talk Of The Tee",price:"$200",src:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"},
        {id:2, Brand_name:"Levis",t_shirt_name:"Short Sleeve Pros", price:"$10",src:"https://images.unsplash.com/photo-1610576243507-083bdf576169?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
        {id:3, Brand_name:"Tommy Hilfiger",t_shirt_name:"Comft Tees", price:"$20",src:"https://images.unsplash.com/photo-1528873981-36c6afde7b9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"},
        {id:4, Brand_name:"U.S. Polo Assn",t_shirt_name:"Cotton Colleagues", price:"$200",src:"https://images.unsplash.com/photo-1610492273249-6406a1154eae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
        {id:5, Brand_name:"FILA",t_shirt_name:"T-Shirt Shack", price:"$200",src:"https://images.unsplash.com/photo-1610492273249-6406a1154eae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
        {id:6, Brand_name:"GAP",t_shirt_name:"T-Shirt Testimonials", price:"$200",src:"https://images.unsplash.com/photo-1610492273249-6406a1154eae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
        {id:7, Brand_name:"Roadster",t_shirt_name:"T-Shirt Party", price:"$200",src:"https://images.unsplash.com/photo-1610492273249-6406a1154eae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
        {id:8, Brand_name:"Jack & Jones", t_shirt_name:"Tasteful Ts",price:"$200",src:"https://images.unsplash.com/photo-1610492273249-6406a1154eae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
        {id:9, Brand_name:"Nautica",t_shirt_name:"Tasteful Ts", price:"$200",src:"https://images.unsplash.com/photo-1610492273249-6406a1154eae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
        {id:10, Brand_name:"Mast & Harbour",t_shirt_name:"Tasteful Ts", price:"$200",src:"https://images.unsplash.com/photo-1610492273249-6406a1154eae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
        
    ];
    return (
        <div className="products_grid">
            {
                products.map(product=>(
                    <Product 
                      id={product.id}
                      Brand_name={product.Brand_name}
                      t_shirt_name={product.t_shirt_name}
                      price={product.price}
                      src={product.src}
                      />
                ))
            }
        </div>
    )
}

export default Products
