import React, { Component } from 'react';

class Exersise extends Component {
    state = {
        count: 5,
    }
    render() {
        return (
            <div>
                <hr />
                <br />
                <span className='m-2 text info'> {} </span>
                <span className='m-2 badge bg-primary'>{this.props.productName} </span>
                <button onClick={this.handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
                <button onClick={this.handleDecrement} className='m-2 btn btn-sm btn-warning'>-</button>
                <button onClick={ () => {this.handleDelete(5)}} className='m-2 btn btn-sm btn-danger'>delete</button>  {/* mitonim function ro ham darone clickhacdeler tarif konim */}
                {this.props.children}
            </div> 
        );
    }
    handleDelete = () => {
        this.props.onDelete(this.props.id)
    }
    handleDecrement = () => {
        const {count} = this.state;
        this.setState({count: count - 1})
    }
    handleIncrement = () => {
        const{count } = this.state;
        this.setState({count: count +1})
    }
}

export default Exersise;
