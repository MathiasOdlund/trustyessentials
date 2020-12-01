import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Importing pages
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import About from "./Pages/About/About";
import Explore from "./Pages/Explore/Explore";
import Profile from "./Pages/Profile/Proifle";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/explore" component={Explore} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
