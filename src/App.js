import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Component/Home/Home";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
