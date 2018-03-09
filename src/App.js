import React, { Component } from 'react';
import './App.css';
import PriceCalculator from './PriceCalculator';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { numCalculators: this.props.defaultNumCalculators }
  }

  addCalculator = () => {
    this.setState(prevState => {
      return {numCalculators: prevState.numCalculators + 1}
    })
  }

  removeCalculator = () => {
    if(this.state.numCalculators - 1 >= this.props.defaultNumCalculators) {
      this.setState(prevState => {
        return {numCalculators: prevState.numCalculators - 1}
      })
    }
  }

  render() {

    const priceCalculators = [];
    for(let i = 0; i < this.state.numCalculators; i++) {
      priceCalculators.push(<PriceCalculator key={i}/>)
    }

    return (
      <div className="App">
      <h1>Price-per-weight Conversion</h1>
        {priceCalculators}
        <div className="buttons">
          <button onClick={this.addCalculator}>+</button>
          <button onClick={this.removeCalculator}>-</button>
        </div>
      </div>
    );
  }
}

export default App;
