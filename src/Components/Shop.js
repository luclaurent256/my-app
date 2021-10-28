import React, { Component } from 'react'

export class Shop extends Component {
  constructor(props) {
    super(props);
    this.state ={
      shopP: 'Sirop eternité',
      basketP: '',
      btnB: false,
      btnD: true,
    }
  }
  render() {
    return (
      <>
      <p>Liste produits:</p>
      <ul>
          <li>{this.state.shopP}
            <button type="button" disabled={this.state.btnB}
            onClick={(event) => this.setState({
               basketP : this.state.shopP,
               shopP : '',
               btnB : true,
               btnD : false,
               })}> Buy </button>
          </li>
      </ul>
      <p>Panier:</p>
      <ul>
          <li>{this.state.basketP } 
            <button type="button" disabled={this.state.btnD}
            onClick={(event) => this.setState({
               shopP : this.state.basketP,
               basketP :'',
               btnD : true,
               btnB : false,
                })}> Cancel </button>
          </li>
      </ul>
      </>
    )
  }
}

export default Shop
