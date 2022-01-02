import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "./Pages/AppContainer/Dashboard";
import NotFound from "./Pages/AppContainer/NotFound";
import { auth } from "./firebase";
import Authpage from "./Pages/Auth/Authpage";
import Loader from "./Components/Loader/Loader";


function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => setUser(user));

    // console.log("UID ", user && user.uid);
    user && localStorage.setItem("loggedIn", "yes");
    // it will run when component unmounts like componentDidUnmount()
    return () => {
      unsub();
    };
  });
  // console.log(user);
  const loggedIn = localStorage.getItem("loggedIn");
  if (loggedIn === "yes" && !user) return <Loader />;

  return (
    <div>
      {/* <div className="text-xs font-medium z-50 fixed bottom-1 left-1 w-36 py-1 px-2 rounded-sm text-black bg-red-200 mr-1">
        <p className="text-gray-900 leading-none">&copy; Made by ⚡</p>
        <a href="https://github.com/anurodh437" target="_blank" rel="noreferrer" className="hover:text-gray-700 text-red-900 hover:underline pr-1">Anurodh</a>
        and
        <a href="https://github.com/utqrsh04" target="_blank" rel="noreferrer" className="pl-1 text-red-900 hover:underline hover:text-gray-700">Utkarsh</a>
      </div> */}
      <Router>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>

          <Route path={["/login", "/signup"]} exact>
            {user ? <Redirect to="/dashboard" /> : <Authpage />}
          </Route>

          <Route
            exact
            path={[
              "/dashboard",
              "/trends",
              "/connections",
              "/profile",
              "/settings",
              "/settings/personal",
              "/settings/updatepassword",
              "/contests",
            ]}
          >
            {user ? <Dashboard /> : <Redirect to="/login" />}
          </Route>       
          <Route path="/notFound" exact>
            <NotFound />
          </Route>
          <Route>
            <Redirect to="/notFound" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
