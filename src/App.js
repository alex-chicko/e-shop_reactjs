import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';

const HatsPage = () => {
 return(
      <div>
        <h1>HATS PAGE</h1>
      </div>
 ) 
}

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route  exact path='/shop/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
