import React from 'react';
import { useState } from 'react';
import Title from './Title';

export default function Test() {
    const [showEvents, setShowEvents] = useState(true);

    const [name, setName] = useState('mehdi');
    const [events, setEvents] = useState([
        {title: "Thore : sadsa nh hellod", id:1},
        {title: "SpiderMan :  nh hellod", id:2},
        {title: "Halk : hellod", id:3},
        {title: "Super Man :aaaaa hellod", id:4},
        {title: "Bat man : bbbbbb nh hellod", id:5},
        {title: "Robin Hood : cccccc nh nnnnn", id:6}
    ])

    const mappedEvents = events.map((event , index ) => <div>
    <h2>{index + 1} {event.title}</h2>
    <button onClick={() =>deleteTitle(event.id) }>Delete</button> 
    </div> 
    )


    const handleButton = () => {
        setName('hello')
        console.log(name);
    }
    const deleteTitle = (id) => {
        setEvents( (prevEvents)=> {
            return prevEvents.filter((event) => {
                return id !== event.id
            })
        })
    }
    return (
        <div>

            <h1>Condition template</h1>
            <button onClick={handleButton}> change name </button>
            <Title title="my Favorite Movies" subtitle="Best movies"/>
            {
                showEvents &&
                (
                <div>
                    <button onClick={ () => setShowEvents(false) }>Hide</button>
                </div>
                )
            }

            {
                !showEvents &&
                (
                <div>
                    <button onClick={ () => setShowEvents(true) }>Show</button>
                </div>
                )
            }
            
            {
                showEvents && mappedEvents
            }
            <hr/>
            <hr/>
            
        </div>
    )
}
