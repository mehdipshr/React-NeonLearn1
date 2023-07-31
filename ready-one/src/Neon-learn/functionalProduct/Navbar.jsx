import React from 'react'

export default function Navbar(props) {
    return (
        <nav className='navbar navbar-light bg-light'>
            <div className="container-fluid">
                <a href="#h" className='navbar-brand'>
                    navbar{calculateSum()}
                </a>
            </div>
        </nav>
    );
    function calculateSum (){
        let sum = 0;
        props.products.forEach(product => {
            sum += product.count;
        })
        return sum;
    }
}
