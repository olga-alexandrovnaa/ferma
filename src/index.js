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
    this.getProducts();
  }

  async getUser({ email, password }) {
    return fetch('https://floating-taiga-00115/api/login',{
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

  async getProducts() {
    return fetch(
      'https://floating-taiga-00115/api/products',
      {
        method: 'GET',
        headers: { 'Content-Type': 'Application/JSON' },
      },
    ).then((res) => res.json())
    .then((products) => this.setState({ ...this.state, products }));
  }

  onProductsHandler = async () => {
    const products = await this.getProducts();
    if (!products) return;
    //for(let i=0; i<products.lenght; i++){
      //console.log(`Name: ${products[i].name}`);
    //}
    this.setState({ ...this.state, products });
  };

  onLoginHandler = async (data) => {
    const user = await this.getUser(data);
    if (!user) return;
    //console.log(`User: ${user.email}`);
    this.setState({ ...this.state, user });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin">
            { !this.state.user && <LoginForm onSubmit={this.onLoginHandler}/> }
            { this.state.user && <Admin products={this.state.products} /> }
          </Route>
          <Route path="/">
            <Client products={this.state.products} />
          </Route>
          
        </Switch>
      </BrowserRouter>
    );
  }

}

ReactDOM.render(<App />, document.getElementById("react-root"));
export default App;

