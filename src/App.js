import React from "react";
import { connect } from "react-redux";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function App({ username, clearSavedTrips, clearSearch, clearUser }) {
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
              to="/savedtrips"
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
              }}
            >
              Logout
            </NavLink>
          </>
        )}
      </nav>
    </Router>
  );
}

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

export default App;
