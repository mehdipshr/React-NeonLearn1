import React from 'react';
import { useState } from 'react';

export default function Test() {
    

    const [name, setName] = useState('mehdi');
   


    const handleButton = () => {
        setName('hello')
        console.log(name);
    }
   
    return (
        <div>
            <h1>section 1</h1>
            <h1>{name}</h1>
            <button onClick={handleButton}> change name </button>
            <hr />
            <hr />
        </div>
    )
}
