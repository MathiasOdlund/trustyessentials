import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//Importing pages
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
function App() {
  return (
    <div>
      <Router>
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/products"  component={Products} />
       </Switch>
      </Router>
    </div>
  );
}

export default App;
