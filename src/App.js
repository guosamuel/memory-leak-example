import React from 'react';
import logo from './logo.svg';
import './App.css';

import IncreaseCount from './IncreaseCount'
import StaticCount from './StaticCount'

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
    return (
      <div className="App">
        <span>Click to Switch Components</span>
        <input type="checkbox" onChange={this.handleCheck}/>
        <br />
        { this.state.checked ? <StaticCount count={this.state.count}/> :<IncreaseCount increaseCount={this.increaseCount} count={this.state.count}/> }
      </div>
    )
  }
}

export default App;
