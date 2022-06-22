import React, { useState, useEffect, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import { auth } from "./firebase/Firebase.utils";

function App() {
  const [currentUserState, setCurrentUserState] = useState(null);

  let unsubscribeFromAuth = useRef(null);

  useEffect(() => {
    if (currentUserState === null) {
      unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
        setCurrentUserState({ user });

        console.log("fgfgfgfgfgfgfgsfsfsfsfsf");
      });
    }
  }, [currentUserState]);

  useEffect(() => {
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUserState} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/" component={Shop} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
