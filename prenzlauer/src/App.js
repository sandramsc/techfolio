/* Designed & coded by Sandra Ashipala 03.02.2022 <https://github.com/sandramsc> */
import React, {useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import Orders from './Orders';
import Login from './Login';
import GlobalFonts from './fonts/fonts';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import {useStateValue} from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//StripeAPI
const promise = loadStripe('pk_test_51KqxrBDkf3mX4QD0t0yLWOsM2fuofAetl2q9uCzMUwT8QZHi0SLPUI7AWnDCcuIz9KXxJf4Eh3o2eq3JHylBUN4R00M5kTxmJl');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM naming convention
    <Router>
      <div className="app">
        <Switch>
        <Route path="/login">
          <Login />
           </Route>
           <Route path="/orders">
           <Header />
            <Orders />
            <GlobalFonts />
          </Route>
        <Route path="/checkout">
            <Header />
            <Checkout />
            <GlobalFonts />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <GlobalFonts />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <GlobalFonts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
