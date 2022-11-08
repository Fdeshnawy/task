import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import logo from "./images/logo.png";
import Menu from "./Components/Canvas/Menu";
import navigate from "./Navigate";
function App(props) {
  
  return (
    <Router>
      <div className="App">
        <Menu className="menu" logo={logo} navigate={navigate} />
        <Route path="/" component={Home} />
        <Route path="/Home/:id" component={Home} />
      </div>
    </Router>
  );
}
export default App;
