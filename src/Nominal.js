import { Component } from "react";
import styled from "styled-components";



const Empitem = styled.div`
  padding:20px;
  margin-bottom:15px;
  border-radius:7px;
  box-shadow:5px 5px 10px rgba(0,0,0, .2);
  color:#008080;
  background-color:#FFC0CB
`;

const Head = styled.h2`
font-size:25px
`;

export const Button = styled.button`
display:block;
padding:5px 15px;
background-color:gold;
border:1px solid red;
border-radius:7px;
margin-bottom:10px;
`


class Whoim extends Component {
    constructor(props) {
      super(props);
      this.state = {
        age:18,
        widt:''
      }
    }
    
    
        pushNominal=()=>this.setState((state)=>({age:state.age+1}));
        minusNominal=()=>this.setState((state)=>({age:state.age-1}));

        torrin = (rit,color)=>{
            console.log(color)
            return this.setState((state)=>({widt:rit.target.value}))
        }
  
             
        render(){
      const{name,fam} = this.props,
           {age,widt} = this.state;     
              return(
              <Empitem>
                 <Button onClick ={this.pushNominal}>Добавить возраст</Button>
                 <Button onClick ={this.minusNominal}>Отнять возраст</Button>
                <Head>Меня зовут {name} ,моя фамилия {fam}, возраст: {age} лет, рост:{widt} см.</Head>
                <form >
                    <span>Введите данные</span>
                    <input type="text"  onChange={(e)=>this.torrin(e,'black')}/>
                </form>
  
              </Empitem>
          )
        }
  
  }
  export default Whoim