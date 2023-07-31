import React, { Component } from 'react';

class Navbar extends Component {
    componentDidUpdate(){
        console.log('navbar - didUpdate');
      }
    render() {
        console.log('navbar - render');
        return (
            <nav className='navbar navbar-light bg-light'>
                <div className="container-fluid">
                    <a href="#" className='navbar-brand'>
                        navbar{this.calculateSum()}
                    </a>
                </div>
            </nav>
        );
    }
    calculateSum = () => {
        let sum = 0;
        this.props.products.forEach(product => {
            sum += product.count;
        })
        return sum;
    }
}

export default Navbar;