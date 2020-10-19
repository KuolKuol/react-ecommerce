import React, {Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import Navbar from './components/Navbar';
import ProductList from './components/ProductList'
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Details from './components/Details';
import {Switch,Route} from 'react-router-dom';
// import Modal from './components/Modal';
// import Studio from './Studio/Studio';




class App extends Component {
  render(){
    return(
      <React.Fragment>

        {/* <Navbar/>
        <Modal/> */}

        <Switch>
          <Route exact path="/" component={ProductList}/>      
          <Route path="/cart" component={Cart}/>      
          <Route path="/details" component={Details}/> 
          {/* <Route path="/studio" component={Studio}/>  */}
          <Route component={Default}/>           
        </Switch>

      </React.Fragment>
    )
  }
}

export default App;