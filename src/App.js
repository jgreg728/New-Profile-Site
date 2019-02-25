import React, { Component } from 'react';
import Home from "./components/Pages/home";
import Header from "./components/Header/header";
import About from "./components/Pages/about";
import Contact from "./components/Pages/contact";
import Portfolio from "./components/Pages/portfolio";
import Footer from "./components/Footer/footer";
import Wrapper from "./components/Wrapper/wrapper";
import './App.css'

class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
