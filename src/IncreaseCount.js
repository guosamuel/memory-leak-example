import React from 'react'

class IncreaseCount extends React.Component {

  componentDidMount() {
    document.addEventListener('click', this.props.increaseCount)
    document.addEventListener('click', this.showLeakedMessage)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.props.increaseCount)
    document.removeEventListener('click', this.showLeakedMessage)
  }

  showLeakedMessage = (e) => {
    if (e.target.className === "button") {
      console.log("I'm in the Increase Count component")
    }
  }

  render() {
    console.log("I AM IN THE INCREASE COUNT COMPONENT. THE COUNT IS:", this.props.count)
    return (
      <div>
        <h1>Increase Count!</h1>
        <h2>Click anywhere on this page to increase the count: {this.props.count}</h2>
      </div>
    )
  }
}

export default IncreaseCount
