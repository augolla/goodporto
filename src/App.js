import React from 'react'
import './App.css';
import './NavBar.css'
import {BrwowserRouter,Switch,Route} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'
import About from './components/About/About'
import Whole from './components/Whole'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/home' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contacts' component={Contacts}></Route>
        <Route exact path='/projects' component={Projects}></Route>
      </Switch>
    </div>
  );
}

export default App;
