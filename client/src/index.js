import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Client from "./components/client"
import LoginForm from "./components/LoginForm"
import Admin from "./components/admin"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      products: [],
    };
  }

  getUser = async ({ email, password }) => {
    return fetch('http://localhost:7070/api/login',{
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify({ email, password }),
    })
    .then((res) => res.json())
    .then((body) => {
      console.log(body);
      if (body.success) return body.user;
      return body.err;
    })
    .catch((err) => {
      console.error(err.message);
      return null;
    });
  };

  getProducts = async () => { return fetch('http://localhost:7070/api/products',{ method: 'GET', headers: { 'Content-Type': 'Application/JSON' }})
  .then((res) => res.json())};

  onProductsHandler = async () => {
    const products = await this.getProducts();
    if (!products) return;
    //for(let i=0; i<products.lenght; i++){
      //console.log(`Name: ${products[i].name}`);
    //}
    this.setState({ ...this.products, products });
  };

  onLoginHandler = async (data) => {
    const user = await this.getUser(data);
    if (!user) return;
    //console.log(`User: ${user.email}`);
    this.setState({ ...this.state, user });
  };

  render() {
    this.onProductsHandler();
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin">
            { !this.state.user && <LoginForm onSubmit={this.onLoginHandler}/> }
            { this.state.user && <Admin products={this.state.products} /> }
          </Route>
          <Route path="/">
          {<Client products={this.state.products}></Client>}
          </Route>
          
        </Switch>
      </BrowserRouter>
    );
  }

}
ReactDOM.render(<App />, document.getElementById("react-root"));
export default App;
