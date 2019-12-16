import React from 'react';
import Home from '../Components/Home/Home';
import NavBar from '../Components/NavBar/NavBar'
import './App.scss';

// import Shop from '../Components/Shop/Shop';

class App extends React.Component{

  // state = {
  //   cartLength: ""
  // }

   getLength = (size) => {
    const cartSize = size;
    console.log("000",cartSize)
    return cartSize;
  }

  render(){
    return (
      <div className="App">
        <NavBar cart={this.getLength} />
        <Home getCartLen = {this.getLength} />
      </div>
    );
  }
}

export default App;
