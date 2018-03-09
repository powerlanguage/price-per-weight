import React from 'react'
import PriceInput from './PriceInput'

export default class PriceCalculator extends React.Component {

  state = {
    pricePerPound: '',
    pricePerOz: ''
  }

  formatCurrency = price => {
    return Number(price).toLocaleString('en-US', {style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2});
  }

  handlePerPoundChange = (pricePerPound) => {
    const pricePerOz = this.formatCurrency(pricePerPound / 16);
    this.setState({
      pricePerPound: pricePerPound,
      pricePerOz: pricePerOz,
    })
  }


  handlePerOzChange = (pricePerOz) => {
    const pricePerPound = this.formatCurrency(pricePerOz * 16);
    this.setState({
      pricePerPound: pricePerPound,
      pricePerOz: pricePerOz
    })
  }

  render() {

    const {pricePerOz, pricePerPound} = this.state;

    return (
      <div>
      <fieldset>
        <PriceInput scale="oz" price={pricePerOz} onPriceInput={this.handlePerOzChange} />
        <PriceInput scale="lb" price={pricePerPound} onPriceInput={this.handlePerPoundChange} />
      </fieldset>
      </div>
    )
  }

}