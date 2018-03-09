import React from 'react'

export default class PriceInput extends React.Component {

  handleChange = (ev) => {
    console.log(ev.type);
    this.props.onPriceInput(ev.target.value);
  }

  render(){

    const {price, scale} = this.props;

    return (
      <div className="priceInput">
        <legend>$/{scale}</legend>
        <input
          value={price}
          type="number"
          step="0.01"
          onChange={this.handleChange}>
        </input>
      </div>
    )
  }
}
