import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from './components/SearchPage'
export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route path="/search" component={SearchPage}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
