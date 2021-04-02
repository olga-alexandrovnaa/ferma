import React    from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import Navbar from './navbar'
import BottomBar from './BottomBar'
import Welcome from './Welcome'
import Meat from './ProductsList'
import AboutUs from './AboutUs'
import Basket from './Basket'
import Delivery from './Delivery'

class Admin extends React.Component {
  constructor(props) {
    super();
    this.user = props.user;
    this.products = props.products;
  }

  render() {
    
    return (
     <>
     </>
    );
  }
}

export default Admin;

