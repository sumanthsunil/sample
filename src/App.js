import React, { Component } from 'react';
import './App.css';

import Person from './person/Person';
class App extends Component {

  state={
     persons:[
       {id:'01',name:"sumanth",job:"stu"},
       {id:'02',name:"leena",job:"sde"},
       {id:'03',name:"pandu",job:"sunil"}
      
      ],

       showPersons:false
  }

  switchHandler=(ne)=>{
    this.setState({
                           
        persons:[
        {name:ne,job:"student"},
        {name:"leena",job:"sdedeveloper"}]
                                                          
    })
  }
  nameHandler=(event,id)=>{

    const personIndex=this.state.persons.findIndex((p)=>{
      return p.id=id;
    })
    const person={
      ...this.state.persons[personIndex]
    };
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;
    this.setState({
                           
        persons:persons              
    })
  }

  toggleHandler=()=>{
    const show=this.state.showPersons;
    this.setState({
                           
        showPersons:!show
                                                          
    })
  }
  deleteHandler=(index)=>{
    //const perso= this.state.persons;
    const perso=[...this.state.persons];
    perso.splice(index,1);
    this.setState({
      persons:perso
    })
  }
  render() {
    const styl={
        backgroundColor:'green',
        font:'inherit',
        border:'1px solid black',
        padding: '9px',
        cursor:'pointer',
       
    }
     let persons=null;
     if(this.state.showPersons){
       persons=(
        <div>
         { this.state.persons.map((pers,index)=>{

           return <Person
                  click={()=>this.deleteHandler(index)}
                  change={(event)=>this.nameHandler(event,pers.id)}
                  name={pers.name}
                  job={pers.job}
                  key={pers.id}
           />

         })}
       
         
       </div>
       );
       styl.backgroundColor='red';
      

     }
     let classes=[]
     if(this.state.persons.length <= 2){
       classes.push('red');
     }
     if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    return (
   
      <div className="App">
       <h1>hi sumanth wassup</h1>
       <p className={classes.join(' ')}>hey sumanth the color has changed for now</p>
       <button style={styl}
       onClick={this.toggleHandler}>switch_name</button>
        {persons}
       </div>
    
    );
  }
}

export default App;
