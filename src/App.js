import React from "react";
import { connect } from "react-redux";
import { clearUser, clearSearch, clearSavedTrips } from "./redux/actions";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SavedTrips from "./components/SavedTrips";
import Search from "./components/Search";
import ProtectedRoute from "./shared/ProtectedRoute";

function App({ username, clearUser, clearSearch, clearSavedTrips }) {
  //   const [loggedInUser, setLoggedInUser] = useState(null);
  //   const [savedTrips, setSavedTrips] = useState([]);
  //   const addSavedTrips = useCallback((toAdd) => {
  //     setSavedTrips((curr) => [...curr, toAdd]);
  //   }, []);

  //   const deleteSavedTrips = useCallback((city) => {
  //     setSavedTrips((curr) => curr.filter((val) => val.city !== city));
  //   }, []);
  return (
    <Router>
      <nav className="flex-wrap">
        {!username && (
          <NavLink
            activeClassName="active"
            className="link text-center"
            to="/login"
          >
            Login
          </NavLink>
        )}
        {username && (
          <>
            <NavLink
              activeClassName="active"
              className="link text-center"
              to="/search"
            >
              Search
            </NavLink>

            <NavLink
              activeClassName="active"
              className="link text-center"
              to="/savedTrips"
            >
              Saved Trips
            </NavLink>

            <NavLink
              className="link text-center"
              to="/login"
              onClick={() => {
                clearSavedTrips();
                clearSearch();
                clearUser();
                // setLoggedInUser(null);
                // setSavedTrips([]);
              }}
            >
              Logout
            </NavLink>
          </>
        )}
      </nav>

      <header>img.src = "./"</header>

      <main>
        <Switch>
          <ProtectedRoute path="/login" reqUser={false} component={Login} />
          {/* <Login setLoggedInUser={setLoggedInUser} /> */}

          <ProtectedRoute
            path="/search"
            reqUser={true}
            component={Search}
            // loggedInUser={loggedInUser}
          />

          <ProtectedRoute
            path="/savedTrips"
            reqUser={true}
            component={SavedTrips}
            // loggedInUser={loggedInUser}
          />

          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    username: state.user.username,
  };
}

const mapDispatchToProps = {
  clearUser,
  clearSearch,
  clearSavedTrips,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
