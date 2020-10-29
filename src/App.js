import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import ProfileDashboard from './components/profile/ProfileDashboard'

//COMPONENTS
import Navbar from './components/layout/Navbar'

//MATERIAL UI IMPORTS

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route path='/signin' component={SignIn}></Route>
          <Route path='/signup' component={SignUp}></Route>
          <Route path='/profile/:id' component={ProfileDashboard}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
