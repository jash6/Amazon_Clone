import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>checkout</h1>
          </Route>
          <Route path="/login">
            <h1>login page</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>Home Page!!!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;