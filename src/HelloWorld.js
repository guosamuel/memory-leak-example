import React from 'react'

class HelloWorld extends React.Component {
  state: {
    count: 0
  }

  componentDidMount() {
    document.addEventListener('click', this.increaseCount)
  }

  increaseCount = () => {
    this.setState( {count: this.state.count + 1} )
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>Click anywhere on this page to increase the count: {this.state.count}</h2>
      </div>
    )
  }
}

export default HelloWorld
