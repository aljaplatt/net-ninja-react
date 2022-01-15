// AKA ROOT COMPONENT
import Navbar from "../Navbar";
import Home from "../Home";
import "./style.css";
/* a component is a function, we must return something - usually a JSX template. The component is the exported to be used else where. */

function App() {
  const title = "Welcome to the new blog";
  const likes = 50; /* React will convert this to a string - the only things React cannot convert are objects & booleans.
 We can also put valid javascript statement straight in the JSX - wrapped in { } - check img for more notes */
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
// exported to global index.js file
export default App;
