import React, { Component } from 'react';

class EventHandelers extends Component {
    state = {
        count: 0,
        productName: 'laptop'
    }
    render() {
        return (
            <div>
                <div>
                    <hr />
                    <br />
                        <span className='m-2 text info'> {this.Format()} </span>
                        <span className='m-2 badge bg-primary'>{this.state.productName} </span>
                        <button onClick={this.handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
                        <button onClick={this.handleDecrement} className='m-2 btn btn-sm btn-warning'>-</button>
                        <button onClick={ () => {this.handleDelete(55)}} className='m-2 btn btn-sm btn-danger'>delete</button>  {/* mitonim function ro ham darone clickhacdeler tarif konim */} 
                    </div> 
            </div>
        );
    }
    handleIncrement = () => {
        const {count}= this.state;
        this.setState({count: count + 1 ,})
        console.log('increment' ,this);
    }
    
    handleDecrement = () => {
        const {count} = this.state;
        this.setState({count: count - 1})
        console.log('Decrement');
    }
    handleDelete = (itemNumber) =>{
        console.log(itemNumber);
    }
    Format(){
        if(this.state.count === 0 ){
            return 'zero';

        }else{
            return this.state.count
        }  /* mitonim bejaye value yek jsx return konim dar yek method */
    }
}



export default EventHandelers;