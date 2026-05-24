/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../components/store/Navigation/Nav';
import Basket from '../components/store/Basket';
import Products from '../components/store/Categories/ProductsList/Products';
import ProductDesc from '../components/store/Categories/ProductsListItems/ProductDesc';
import '../App.css';
import Payment from '../components/store/NavItems/miniBasketItems/Payment';
import FourOFour from './FourOFour';

export class Main extends Component {
  constructor(props){
    super(props);
    //enbales currency change in respective component
    this.state = {
      shownCurrency: "",
      shownCategory: "",
      basket: [],
    };
  }

  // add item to cart with selected atrributes
  addToBasket = (product) => {
    let addedToBasket = false;
    this.state.basket.forEach((itemAddedToBasket, iIdx) => {
      if (product.id === itemAddedToBasket.product.id) {
        const basketChoice = itemAddedToBasket.product.chosenAttributes;
        addedToBasket = true;
        // increase qnty if item already in cart
        product.chosenAttributes.forEach((attribute, aIdx) => {
          if (attribute !== basketChoice[aIdx]) {
            addedToBasket = false;
          }
        });
        if(addedToBasket) {
          this.plusQnty(iIdx)
        }
      }
    });
    if (!addedToBasket) {
      this.setState((exist)=> {
        const basket = [...exist.basket];
        basket.push({product, qnty: 1 });
        return { ...exist, basket }
      });
    }
  };

  // Basket item quantity increase
  plusQnty = (idx) => {
    this.setState((exist) => {
      const basket = [...exist.basket];
      const product = exist.basket[idx].product;
      const qnty = exist.basket[idx].qnty + 1;
      basket[idx] = {product, qnty};
      return { ...exist, basket }
    });
  };

  // Basket item quantity decrease
  minusQnty = (idx) => {
    if (this.state.basket[idx].qnty > 1) {
    this.setState((exist) => {
      const basket = [...exist.basket];
      const product = exist.basket[idx].product;
      const qnty = exist.basket[idx].qnty - 1;
      basket[idx] = {product, qnty};
      return { ...exist, basket }
    });
 } else {
   this.setState((exist) => {
     const basket = exist.basket.filter((item, itemIdx) => {
       return idx !== itemIdx;
     });
     return { ...exist, basket }
   });
  }
};

  // currency label
  setCurrency = (shownCurrency) => {
    this.setState((previous) => {
      return { ...previous, shownCurrency };
    });
  };

  // category list
  setCategory = (shownCategory) => {
    this.setState((previous) => {
      return { ...previous, shownCategory };
    });
  }

    // order basket clears main basket
    order = () => {
      this.state((previous)=> {
        const basket = [];
        return { ...previous, basket }
      })
    }

  // amount total based on set qnty & currency
  sumTotal = () => {
    let sum = 0;
    let symbol = "";
    this.state.basket.forEach((item) => {
      let price = item.product.prices.filter((due)=> {
        return due.currency.label === this.state.shownCurrency;
      });
      sum = sum + item.qnty * price[0].amount;
      symbol = price[0].currency.symbol;
    });
    return symbol + "" + sum.toFixed(2);
  };

    // quantity sum
    sumQnty = () => {
      let totalItems = 0;
      let sum = 0;
      this.state.basket.forEach((item) => {
        let price = item.product.prices.filter((due)=> {
          return due.currency.label === this.state.shownCurrency;
        })
        sum = sum + item.qnty * price[0].amount;
        totalItems += item.qnty;
    })
    return  "" + totalItems.toFixed(0);
    };

  // tax
  taxSum = () => {
    let tax = 0;
    let sum = 0;
    let symbol = "";
    this.state.basket.forEach((item) => {
      let price = item.product.prices.filter((due)=> {
        return due.currency.label === this.state.shownCurrency;
      })
      sum = sum + item.qnty * price[0].amount;
      symbol = price[0].currency.symbol;
      tax = (sum + item.qnty * price[0].amount ) * 0.21;
  })
  return symbol + "" + tax.toFixed(2);
  };

  render() {
    const {  shownCurrency, shownCategory } = this.state;

    return(
      <Router>
          <Nav
            basket={this.state.basket}
            plusQnty={this.plusQnty}
            minusQnty={this.minusQnty}
            shownCurrency={this.state.shownCurrency}
            setCurrency={this.setCurrency}
            shownCategory={this.state.shownCategory}
            setCategory={this.setCategory}
            sumTotal={this.sumTotal}
            taxSum={this.taxSum}
            order={this.order}
          />
          
          {
            shownCategory !== "" && shownCurrency !=="" ? (
              <Routes>
                <Route 
                  path="/basket"
                  element={
                    <Basket 
                    basket={this.state.basket}
                    shownCurrency={this.state.shownCurrency}
                    plusQnty={this.plusQnty}
                    minusQnty={this.minusQnty}
                    sumTotal={this.sumTotal}
                    taxSum={this.taxSum}
                    sumQnty={this.sumQnty}
                    order={this.order}
                    />}
                />
                <Route
                  exact path="/" 
                  element={
                    <Products
                    shownCurrency={this.state.shownCurrency}
                    shownCategory={this.state.shownCategory}
                    addToBasket= {this.addToBasket}
                    />}
                >
                </Route>
                <Route
                  path="/payment" 
                  element={<Payment />}>
                </Route>
                <Route
                  path="*"
                  element={<FourOFour />} />
                <Route 
                  path="/product/:productID"
                  element={
                    <ProductDesc 
                    shownCurrency={this.state.shownCurrency}
                    addToBasket = {this.addToBasket}
                    />}
                />
              </Routes>
            ) : ("")
          }
      </Router>
    );
  }
}

export default Main;