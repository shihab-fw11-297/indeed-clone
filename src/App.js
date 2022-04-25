import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './Pages/Landing';
import {SignUp} from './Pages/SignUp';
import {Login} from './Pages/Login';

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

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route exact path="/login">
              <Login />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
