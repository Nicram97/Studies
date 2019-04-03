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
      return {products: products};
    }, () => {
      // Put the object into storage
      localStorage.setItem('testCart', JSON.stringify(this.state));
    })
  };

  cartBuy = () => {
    this.setState((state, props) => {
      return { products: [], cart: [] };
    }, () => {
      localStorage.removeItem('testCart');
    })
  }

  componentDidMount() {
    const savedCart = JSON.parse(localStorage.getItem('testCart'));
    if (savedCart) {
      this.changeProductsList(JSON.parse(localStorage.getItem('testCart')).products)
    }
  }

  render() {
    return (
      <ItemsContext.Provider value={{
        products: this.state.products,
        changeProductsList: this.changeProductsList,
        cartBuy: this.cartBuy,
      }}>
        <Navbar />
        <Content />
        <Footer />
      </ItemsContext.Provider>
    );
  }
}

export default App;
