import './App.css';
import Home from './components/Home/Home';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import NotFound from './components/NotFound/NotFound';
import Deals from './components/Deals/Deals';
import Login from './components/Login/Login';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddProduct from './components/AddProduct/AddProduct';
import ManageProduct from './components/ManageProduct/ManageProduct';
import Header from './components/Header/Header';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/deals">
              <Deals />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/product/:byId">
              <CheckOut />
            </PrivateRoute>
            <Route path="/addProduct">
              <AddProduct />
            </Route>
            <Route path="/manageProduct">
              <ManageProduct />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
