import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons/faHandHoldingUsd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App bg-light">
      <Router>
        <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <FontAwesomeIcon icon={faHandHoldingUsd}/>&nbsp;
              Mapa daní
            </Link>
            <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="offcanvas"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Dashboard <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="container">
          <Switch>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/about">
              <About/>
            </Route>

          </Switch>

        </main>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;

