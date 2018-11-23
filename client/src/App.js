import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Homepage from "../src/Pages/Homepage";
import SavedPage from "../src/Pages/Savedpage";
import Navbar from "./Components/Navbar";

const App = () =>(
  <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/Main" component={Homepage}/>
          <Route path="/Saved" component={SavedPage}/>
        </Switch>
      </div>
  </Router>
);
export default App;
