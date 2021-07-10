import React, { useState, useCallback } from "react";
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

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [savedTrips, setSavedTrips] = useState([]);
  const addSavedTrips = useCallback((toAdd) => {
    setSavedTrips((curr) => [...curr, toAdd]);
  }, []);

  const deleteSavedTrips = useCallback((name) => {
    setSavedTrips((curr) => curr.filter((val) => val.name !== name));
  }, []);
  return (
    <Router>
      <nav className="flex-wrap">
        {!loggedInUser && (
          <NavLink
            activeClassName="active"
            className="link text-center"
            to="/login"
          >
            Login
          </NavLink>
        )}
        {loggedInUser && (
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
              to="/savedtrips"
            >
              Saved Trips
            </NavLink>

            <NavLink
              className="link text-center"
              to="/login"
              onClick={() => {
                setLoggedInUser(null);
                setSavedTrips([]);
              }}
            >
              Logout
            </NavLink>
          </>
        )}
      </nav>

      <main>
        <Switch>
          <ProtectedRoute
            path="/login"
            reqUser={false}
            loggedInUser={loggedInUser}
          >
            <Login setLoggedInUser={setLoggedInUser} />
          </ProtectedRoute>

          <ProtectedRoute
            path="/search"
            reqUser={true}
            loggedInUser={loggedInUser}
          >
            <Search
              loggedInUser={loggedInUser}
              addSavedTrips={addSavedTrips}
              deleteSavedTrips={deleteSavedTrips}
              savedTrips={savedTrips}
            />
          </ProtectedRoute>

          <ProtectedRoute
            path="/savedTrips"
            reqUser={true}
            loggedInUser={loggedInUser}
          >
            <SavedTrips
              loggedInUser={loggedInUser}
              savedTrips={savedTrips}
              deleteSavedTrips={deleteSavedTrips}
            />
          </ProtectedRoute>

          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

// function mapStateToProps(state) {
//   return {
//     username: state.user.username,
//   };
// }

// // const mapDispatchToProps = {
// //   clearUser,
// //   clearSearch,
// //   clearSavedTrips,
// // };

// export default connect(mapStateToProps)(App);

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
