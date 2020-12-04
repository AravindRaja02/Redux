import React,{Component} from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  // state={
  //   age:21
  // };
  // AgeUp=()=>{
  //   this.setState({
  //     ...this.state,
  //     age:++this.state.age
  //   })
  // }
  // AgeDown=()=>{
  //   this.setState({
  //     ...this.state,
  //     age:--this.state.age
  //   })
  // }
  
  render(){
  return (
    <div className="App">
  {/* <h2>Age: <span>{this.state.age}</span></h2>
     <button onClick={this.AgeUp}>AgeUP</button>
     <button onClick={this.AgeDown}>AgeDOWN</button> */}

     <h2>Age: <span>{this.props.age}</span></h2>
     <button onClick={this.props.OnAgeUp}>AgeUP</button>
     <button onClick={this.props.OnAgeDown}>AgeDOWN</button>
    </div>
  );
}
}
const mapStateToProps=(state)=>{
  return{
age:state.age

}
}
const mapDispatchToState=(dispatch)=>{
  return{
    OnAgeUp:()=>dispatch({type:"AGE_UP" }),
    OnAgeDown:()=>dispatch({type:"AGE_DOWN"})
  }

}

export default connect(mapStateToProps,mapDispatchToState) (App);
