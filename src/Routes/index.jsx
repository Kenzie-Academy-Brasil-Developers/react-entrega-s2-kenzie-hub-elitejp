import { useEffect, useState } from "react";
import { Route, Router, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:Token");

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Home
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>

        <Route exact path="/register">
          <Register authenticated={authenticated} />
        </Route>

        <Route exact path="/dashboard">
          <Dashboard authenticated={authenticated} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
