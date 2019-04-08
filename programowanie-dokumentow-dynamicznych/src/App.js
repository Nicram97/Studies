import React from 'react';
import Navbar from './components/navbar/Navbar'
import Content from './components/content/content'
import Footer from './components/footer/footer';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Modal from 'react-modal';
import ItemsContext from './context/itemsList';

Modal.setAppElement('#root')

class App extends React.Component {
  state = {
    products: [],
    cart: []
  };

  changeProductsList = products => {
    this.setState((state, props) => {
      return {products: products, cart: products};
    }, () => {
      // Put the object into storage
      localStorage.setItem('products', JSON.stringify(this.state.products));
    })
  };

  enterCart = (products) => {
    this.setState((state, props) => {
      return { cart: products };
    }, () => {
      localStorage.setItem('cart', JSON.stringify(this.state.cart));
    })
  }

  cartBuy = () => {
    this.setState((state, props) => {
      return { cart: [] };
    }, () => {
      localStorage.removeItem('cart');
    })
  }

  componentDidMount() {
    const savedCart = JSON.parse(localStorage.getItem('products'));
    if (savedCart) {
      this.changeProductsList(JSON.parse(localStorage.getItem('products')))
    }
  }

  render() {
    return (
      <ItemsContext.Provider value={{
        products: this.state.products,
        cart: this.state.cart,
        changeProductsList: this.changeProductsList,
        cartBuy: this.cartBuy,
        enterCart: this.enterCart,
      }}>
        <Navbar />
        <Content />
        <Footer />
      </ItemsContext.Provider>
    );
  }
}

export default App;
