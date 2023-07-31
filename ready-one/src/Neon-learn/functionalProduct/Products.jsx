import React from 'react';
// import { useState } from 'react';
import Product from './Product';

export default function Products(props) {
    // const [products, setProducts] = useState([
    //     {id:1, count:2 , productName: 'laptop'},
    //     {id:2, count:1 , productName: 'phone'},
    //     {id:3, count:4 , productName: 'Ipad'},
    // ]);
    // const handleDelete = (productId) => {
    //     // const newProducts = products.filter(product => product.id !== productId); /* ravrshe neonlearn ke kotah va sade tar hast */
    //     // setProducts(newProducts);
    //     setProducts((product) => {
    //         return products.filter((product) => {
    //             return product.id !== productId 
    //         })
    //     })
    // }
    // const handleReset = () => {
    //     const newProducts = products.map(product => {
    //         product.count = 0;
    //         return product
    //     });
    //     setProducts(newProducts)
    //     // setProducts({products: newProducts})
    // }

    // const handleIncrement = (productId) => {
    //     const newProducts = [...products]; /* yek copy dorost mikonim az products ke dar state gharar dare */
    //     const index = newProducts.findIndex(product => product.id === productId);
    //     newProducts[index].count += 1;
    //     setProducts(newProducts);
    // }
    // const handleDecrement = (productId) => {
    //     const newProducts = [...products]; /* yek copy dorost mikonim az products ke dar state gharar dare */
    //     const index = newProducts.findIndex(product => product.id === productId);
    //     newProducts[index].count -= 1;
    //     setProducts(newProducts);
    // }
    return (
        <div>
            <button onClick={props.onReset} className='btn btn-primary'>Reset</button>
            {props.products.map((product,index) =>( 
                <Product onDecrement={props.onDecrement} onIncrement={props.onIncrement} onReset={props.onReset} onDelete={props.onDelete} id={product.id} key={index} productName={product.productName} count={product.count} > 
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quos, <br />dolore voluptatibus totam
                    earum consectetur tempore? <br /></p>
                </Product> 

            ))}
        </div>
    )
    
}
