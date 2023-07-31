import React, { Component } from 'react';

class product extends Component {
    
    
    componentDidUpdate(){
        console.log('product - didUpdate');
      }
    // count = 5; /* in yek attribute hast ke ghabl az render neveshtimesh */
    render() {
        console.log('product - render');
        // const  count = 0; /* agar darone methode render neveshte beshe bayad be onvane moteghayer tarifesh konim */
        // const list = [ "item one",
        //     "item two" ,
        //     "item three"];
        
        const {productName} = this.props; /* ravesh baraye estefade az props dar class component */ 
        return (

            <>
                    <div>
                        <span className='m-2 text info'>  {productName}</span>
                        <span className='m-2 badge bg-primary'> {this.format()} </span>
                        <button onClick={this.handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
                        <button onClick={this.handleDecrement} className='m-2 btn btn-sm btn-warning'>-</button>
                        <button onClick={ () => {this.handleDelete(5)} }className='m-2 btn btn-sm btn-danger'>delete</button>
                        {/* <ul>{list.map((item , index ) => <li index>{index +1 } -{item}</li>)} </ul> */}
                    </div>  
            </>
        );
    }
    handleIncrement = () => {
        this.props.onIncrement(this.props.id)
    }
    
    handleDecrement = () => {

        this.props.onDecrement(this.props.id)
        // const {count} = this.props.count;
        // this.setState({count: this.props.count - 1})
        // console.log('Decrement');
    }
    handleDelete = () =>{
        this.props.onDelete(this.props.id)
    }
    format(){
        if(this.props.count === 0 ){
            return 'zero';

        }else{
            return this.props.count
        }  /* mitonim bejaye value yek jsx return konim dar yek method */
    }
}

export default product;