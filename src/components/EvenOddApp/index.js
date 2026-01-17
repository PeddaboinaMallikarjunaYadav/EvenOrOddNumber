import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrease = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(previousState => ({
      count: previousState.count + randomNumber,
    }))
  }

  render() {
    const {count} = this.state
    const evenOrOdd = () => (count % 2 ? 'Even' : 'Odd')
    return (
      <div className="Container">
        <div className="cardContainer">
          <h1 className="heading">
            Count <span>{count}</span>
          </h1>
          <p className="description">
            Count is <span>{evenOrOdd()}</span>
          </p>
          <button className="btn" onClick={this.onIncrease} type="button">
            Increment
          </button>
          <p className="des">*Increase By Random Number from 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
