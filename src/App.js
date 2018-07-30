import React, { Component } from 'react';
// import { createStore } from 'redux';
// import reducer from './Reducers'; //an import from the redux library
// import Greeting from './Components/Greeting';
import PostForm from './Components/PostForm';
import AllPost from './Components/AllPost';



// const initialState={name: 'dibyn'}

// the Redux Reducer is just a function. A function that takes in two parameters. The first being the STATE of the app, and the other the ACTION .  
// createStore() is responsible for passing the arguments into the reducer. 

// const store = createStore(reducer,initialState);

class App extends Component {
  // constructor(props){
  //     super(props);

  //     // this.state = {
  //     //   name:'Dibyn'
  //     // }
  // }


  render() {
    return (
      <div className="App">
      <div className = "navbar">
        <h2 className = "center">Post IT</h2>
      </div>
        {/* <Greeting greet = {store.getState().name} /> */}
        <PostForm />
        <AllPost />
      </div>
    );
  }
}

export default App;
