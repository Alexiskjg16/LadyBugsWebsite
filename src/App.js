import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Navbar';
import HomePage from './Pages/Homepage';
import About from './Pages/About';
import Calendar from './Pages/Calendar';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Newsletter from './Pages/Newsletter';
import ShopOnline from './Pages/ShopOnline';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <section>
        <NavBar />
      </section>
      <section>
         <header>Ladybugs Paper Crafts and More</header>
      </section>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/AboutUs" exact component={About} />
      <Route path="/Calendar" exact component={Calendar} />
      <Route path="/Contact" exact component={Contact} />
      <Route path="/Gallery" exact component={Gallery} />
      <Route path="/Newsletter" exact component={Newsletter} />
      <Route path="/Shop" exact component={ShopOnline} />
    </Switch>
      <section>
                    <h6>Copyright © 2007-2018 - Lady Bugs Paper Crafts & More</h6>
                    <h6>Website Design by Alexis Grisham</h6>
      </section>
      </div>
      </Router>
    );
  }
}

export default App;
