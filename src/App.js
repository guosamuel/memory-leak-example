import React from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './HelloWorld'
import GoodbyeWorld from './GoodbyeWorld'

class App extends React.Component {
  state = {
    checked: false,
    count: 0
  }

  handleCheck = () => {
    this.setState({ checked: !this.state.checked})
  }

  increaseCount = () => {
    this.setState( {count: this.state.count + 1} )
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <span>Click to Switch Components</span>
        <input type="checkbox" onChange={this.handleCheck}/>
        <br />
        { this.state.checked ? <GoodbyeWorld /> :<IncreaseCount increaseCount={this.increaseCount} count={this.state.count}/> }
      </div>
    )
  }
}

export default App;
