import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Shelf from './pages/Shelf';
import About from './pages/About';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Detail from './pages/Detail';
import GamesByOwner from './pages/GamesByOwner';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shelf" component={Shelf} />
          <Route exact path="/collection" component={Collection} />
          <Route exact path="/about" component={About} />
          <Route exact path="/games/:id" component={Detail} />
          <Route exact path="/owners/:id" component={GamesByOwner} />
        </Switch>
        <Footer />
      </div>
    </Router>
    );
}

export default App;