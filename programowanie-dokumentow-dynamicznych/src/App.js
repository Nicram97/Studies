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
  constructor (props) {
    super(props);
    this.upload = React.createRef();
    this.onChangeFile = this.onChangeFile.bind(this);
  }
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
    const savedProducts = JSON.parse(localStorage.getItem('products'));
    if (savedProducts) {
      this.changeProductsList(JSON.parse(localStorage.getItem('products')))
    }
  }

  onChangeFile(event) {
    event.stopPropagation();
    event.preventDefault();
    event.persist()
    const file = event.target.files[0];
    const reader = new FileReader();
    const setFromFile = this.changeProductsList;

    reader.onload = function(e) {
      const text = reader.result;
      const productsFromFile = JSON.parse(text);
      setFromFile(productsFromFile);
      event.target.value = null;
    }
    reader.readAsText(file);
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
        <input id="myInput"
          type="file"
          ref={(ref) => this.upload = ref}
          style={{display: 'none'}}
          onChange={this.onChangeFile.bind(this)}
        />
        <Navbar upload={this.upload}/>
        <Content />
        <Footer />
      </ItemsContext.Provider>
    );
  }
}

export default App;

function preventRecursiveEventHandler(eventHandler) {
  let recursive = false;

  return (...args) => {
      if (!recursive) {
          recursive = true;

          eventHandler.apply(this, args);

          recursive = false;
      }
  };
}