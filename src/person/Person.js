import React from 'react';
import './person.css';
;
const person=(props)=>{
   
    return (
        <div className="person">
            <p  onClick={props.click}>hey dude i am{props.name} when will i get a {props.job} job</p>
            <p>{props.children} </p>
           <input type="text"  onChange={props.change} value={props.name} />

        </div>
    )
}

export default person;