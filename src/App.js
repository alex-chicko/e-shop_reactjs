import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';



function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route  exact path='/shop/' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
