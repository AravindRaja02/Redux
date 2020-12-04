import React, { Component } from "react";
import "./App.css";

//its a function that returns higer order compoent
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="age">
         <h2> Your age: <span>{this.props.age}</span></h2>
        </div>
        <button className="ageUp" onClick={this.props.onAgeUp}>Age UP</button>
        <button className="ageDown" onClick={this.props.onAgeDown}>Age Down</button>
        <hr/>
        <h2>History</h2>
        { <div>
          <ul>
            
            {this.props.history.map(el=>(
             <li onClick={()=>this.props.onDelItem(el.id)}className="historyItem" key={el.id}> 
              {el.age}
              </li>
      ))
            }
          </ul>
        </div> }
   

      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    history: state.history
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
    onDelItem:(id)=>dispatch({type: "DEL_ITEM", key:id})
    
  };
};
export default connect(mapStateToProps,mapDispachToProps)(App);
