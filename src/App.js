import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {useState, useEffect} from 'react';
import AddMovieForm from './components/AddMovieForm';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import About from './components/About';
import RentLinkForm from './components/RentLinkForm';


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
      
        <Switch>
          <Route exact path="/">
           <Header welcomeMessage="Free Movies"
        clickToEnter="Click To Enter!" />
        </Route>
        <Route exact path="/about">
          <About AboutMessage="I have created this website simply because of my love for movies. People have the 
          right to download and post as much movies as they want. Each Movie will cost you........ $0 to download! FREE! FREE! FREE! "/>

        </Route>
          <Route exact path="/home">
            <Home  />
          </Route>
          <Route exact path = "/movies/new">
            <AddMovieForm  />
          </Route>
          <Route exact path = "/movies/rent">
            <RentLinkForm/>
          </Route>

          
        </Switch>
      </Router>
    </div>
  );;
}

export default App;
