import React from 'react'

class IncreaseCount extends React.Component {

  componentDidMount() {
    document.addEventListener('click', this.props.increaseCount)
  }

  render() {
    console.log("I AM IN THE INCREASE COUNT COMPONENT. THE COUNT IS:", this.props.count)
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>Click anywhere on this page to increase the count: {this.props.count}</h2>
      </div>
    )
  }
}

export default IncreaseCount
