// AKA ROOT COMPONENT
import Navbar from "../Navbar";
import Home from "../Home";
import "./style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* a component is a function, we must return something - usually a JSX template. The component is the exported to be used else where. */

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
// exported to global index.js file
export default App;
