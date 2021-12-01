import Authpage from "./Pages/Auth/Authpage.jsx";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Dashboard from "./Pages/AppContainer/Dashboard";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Login from "./Pages/Auth/Loginpage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Authpage />
          </Route>
          <Route exact path="/login">
            <Authpage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
