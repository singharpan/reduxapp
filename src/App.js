import React from "react";
import { connect } from "react-redux";
import { anotherName } from "./actions/myaction";

import "./App.css";

function App(props) {
  const mywishes = props.mywish.map((item) => {
    return <h2>{item}</h2>;
  });
  return (
    <div className="App">
      <h2>This is App component</h2>
      <p>The user name is {props.myname}</p>
      {mywishes}
      <button
        onClick={() => {
          props.changeName();
        }}
      >
        Click Here
      </button>
    </div>
  );
}
//to get data "mapStatetoProps"
const mapStateToProps = (state) => {
  return {
    myname: state.name,
    mywish: state.wish,
  };
};
//we are not sending any data..so no need to send argument to API
//to change/update data "mapDispatchToProps"
const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => {
      dispatch(anotherName());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
//parethesis() is used to invoke and App component is passed to it...as "connect" return Higher Order Component
//If Component is not needed to display but only update the state...then first argument to connect() is null
