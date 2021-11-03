import React from "react";

// dom
import { Switch, Route, Link } from "react-router-dom";

// Importing components
import Navbar from "./components/Navbar";

// Importing pages
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </>
  );
};

export default App;
