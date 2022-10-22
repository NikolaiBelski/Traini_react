import './App.css';
import Whoim from './Nominal';
import styled from 'styled-components';
import React from 'react';
import { Component } from 'react';
 
import { Button } from './Nominal';

const Wrapper = styled.div`
    width: 600px;
    margin:80px auto 0 auto ;

`;

const DynamicKreateElelment = (props) =>{
  return (
    <div className={'mb-3 p-3 border border-' + props.color}>
      {

        React.Children.map(props.children, child => {
          return React.cloneElement(child , {className: 'shadow p-3 m-3 border rounded'})
        })


      }
        

    </div>
  )
}

const Meessage = (props) => {
  return (
    <h2>сколько Квадратов остекления : {props.counter}</h2>
  )
}


class Counter extends Component {

    state = {
      count:0,
      rid:0
    }

 onCount = () => {
    this.setState(({count})=>({count:count+1}))
 }
 onRid = () => {
  this.setState(({rid})=>({rid:rid+10}))
}



render () {

return (
  <>
       <button
                onClick={this.onCount}>
                Click me
       </button>
       {this.props.render(this.state.count)}
       <button
                onClick={this.onRid}>
                Click you
       </button>
       {this.props.render(this.state.rid)}
  </>
)}
}


function App(){
  return(
   
    <Wrapper>
       <DynamicKreateElelment color={'primary'}>
             <h2>Знаешь ли ты</h2>
             <h2>Вдоль ночных дорог</h2>
      </DynamicKreateElelment>


      <h1 style={{color:'#008080',textAlign:"center"}}>Привет, Пользователь!!!</h1>
        <Whoim name = 'Николай' fam = 'Бельский'/>
        <Whoim name = 'Евгения' fam = 'Бельская'/>
        <Whoim name = 'Юлия' fam = 'Максимова'/>
        <Whoim name = 'Александр' fam = 'Нерсесян'/>
       
        <Counter render = {elem => (<Meessage counter = {elem}/>) }/>
        
    </Wrapper>
   
  )
}
export default App;
