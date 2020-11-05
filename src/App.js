import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import Login from './pages/login/Login';  

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route  exact path='/shop/' component={Shop}/>
          <Route path='/login' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
