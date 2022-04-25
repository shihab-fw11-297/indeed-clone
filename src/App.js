import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './Pages/Landing';
import {SignUp} from './Pages/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
