import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignUpPage/SignupPage";

const Authpage = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Authpage;
