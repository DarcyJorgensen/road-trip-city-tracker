import React, { useState } from "react";
import { connect } from "react-redux";
import { setUser } from "../redux/actions";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h3 className="text-center">Login</h3>
      <form className="form">
        <div className="form-field flex-wrap">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            placeholder="Eneter username at least 6 characters"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>

        <div className="form-field flex-wrap">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Minimum of 6 characters"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            if (username.length > 5 && password.length > 4) {
              setUser(username);
            }
          }}
        >
          Login
        </button>
      </form>
    </>
  );
};

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
