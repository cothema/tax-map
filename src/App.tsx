import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/about">
            <About/>
          </Route>
        </Switch>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;

