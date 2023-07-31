import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Products from './Products';

function App() {
    const [products ,setProducts ] = useState([
        {id:1, count:2 , productName: 'laptop'},
        {id:2, count:1 , productName: 'phone'},
        {id:3, count:4 , productName: 'Ipad'}
    ]);
    const handleDelete = (productId) => {
        // const newProducts = products.filter(product => product.id !== productId); /* ravrshe neonlearn ke kotah va sade tar hast */
        // setProducts(newProducts);
        setProducts((product) => {
            return products.filter((product) => {
                return product.id !== productId 
            })
        })
    }
    const handleReset = () => {
        const newProducts = products.map(product => {
            product.count = 0;
            return product
        });
        setProducts(newProducts)
        // setProducts({products: newProducts})
    }

    const handleIncrement = (productId) => {
        const newProducts = [...products]; /* yek copy dorost mikonim az products ke dar state gharar dare */
        const index = newProducts.findIndex(product => product.id === productId);
        newProducts[index].count += 1;
        setProducts(newProducts);
    }
    const handleDecrement = (productId) => {
        const newProducts = [...products]; /* yek copy dorost mikonim az products ke dar state gharar dare */
        const index = newProducts.findIndex(product => product.id === productId);
        newProducts[index].count -= 1;
        setProducts(newProducts);
    }
    useEffect(() => {
        console.log('App')
    } )
    return (
        <div className="App">
            <Navbar products={products}/>
            <Products products={products}
            onDelete={handleDelete} 
            onReset={handleReset}
            onIncrement={handleIncrement} 
            onDecrement={handleDecrement} />
        </div>
    );
    
}

export default App;