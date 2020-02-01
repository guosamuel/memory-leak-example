import React from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './HelloWorld'

class App extends React.Component {
  state = {
    checked: false
  }

  handleCheck = () => {
    this.setState({ checked: !this.state.checked})
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <span>Click to Switch Components</span>
        <input type="checkbox" onChange={this.handleCheck}/>
        <br />
        <HelloWorld />
      </div>
    )
  }
}

export default App;
