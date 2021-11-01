import React, { Component } from 'react'

export class Shop extends Component {
  constructor(props) {
    super(props);
    this.state ={
      products: [
        {
          id: Math.random(),
          label: 'Ordinateur Dell',
          btnB: false,
          btnD: false,
        },
        {
          id: Math.random(),
          label: 'Ordinateur HP',
          btnB: false,
          btnD: false,
        },
        {
          id: Math.random(),
          label: 'Ordinateur Boulanger',
          btnB: false,
          btnD: false,
        }
      ],
      basketItems: [],
    };
    /**
     * Add item to cart if not already there
     * @param {Object} item 
     */
     this.buyItem = (item) => {
      if (!this.state.basketItems.find((basketItem) => basketItem.id === item.id)) {
        this.setState({
          basketItems: [...this.state.basketItems, item],
        });
      }
    };
        /**
     * Remove item from cart
     * @param {Object} item 
     */
      this.removeItem = (item) => {
        this.setState({
          basketItems: this.state.basketItems.filter((basketItem) => basketItem.id !== item.id)
        });
      };

  }
  render() {
    return (
      <>
       //Shop
       <p className="Shop">Liste produits:</p>
       <ul className="Products">
         {
           this.state.products.map (
             (product) => {
               return(
                 <li key={product.id}>{product.label}
                   <button type="button" disabled={product.btnB}
                   onClick={() => this.buyItem(product)}> Buy </button>
                 </li>
               )
             }
           )  
         }
        </ul>
       //panier
       <p className="Shop">Panier:</p>
       <ul className="BasketItems">
        {
           this.state.basketItems.map (
             (basketItem) => {
               return(
                 <li key={basketItem.id}>{basketItem.label } 
                 <button type="button" disabled={basketItem.btnD}
                 onClick={() => this.removeItem(basketItem)}> Cancel </button>
                 </li>
               )
             }
           )  
         }
        </ul>
      </>
    )
  }
}

export default Shop
