import { navigate } from '@reach/router';
import { useState } from 'react';
import { getAllUsers } from './api';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameNotFound, setUsernameNotFound] = useState(false);
  const [passwordIsBlank, setPasswordIsBlank] = useState(false);
  const [usernameIsBlank, setUserNameIsBlank] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    getAllUsers().then((users) => {
      users.forEach((user) => {
        if (user.username === username && password.length > 0) {
          props.setUsername(username);
          navigate(-1);
        } else {
          setUsernameNotFound(true);
        }
      });
    });
  };

  const handleChange = ({ target: { id, value } }) => {
    if (id === 'username') {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  const handleBlurPassword = ({ target }) => {
    if (target.value.length < 1) {
      setPasswordIsBlank(true);
    } else if (target.value.length >= 1) {
      setPasswordIsBlank(false);
    }
  };

  const handleBlurUsername = () => {
    if (username.length < 1) {
      setUserNameIsBlank(true);
    } else {
      setUserNameIsBlank(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username" className="username-lbl">
          Username
        </label>
        <input
          type="text"
          className="username-tb"
          id="username"
          value={username}
          onChange={handleChange}
          onBlur={handleBlurUsername}
        />
        <label htmlFor="password" className="password-lbl">
          Password
        </label>
        <input
          type="password"
          className="password-tb"
          id="password"
          value={password}
          onChange={handleChange}
          onBlur={handleBlurPassword}
        />
        <button type="submit" className="login-button">
          Login
        </button>
        <hr className="login-hr"></hr>
        <button
          className="login-register"
          onClick={() => {
            navigate('/register');
          }}
        >
          Register
        </button>
        {usernameNotFound ? (
          <p className="login-invalid-username">Username not recognised</p>
        ) : null}{' '}
        {!usernameIsBlank ? null : (
          <p className="register-username-blank">Please enter a username</p>
        )}
        {!passwordIsBlank ? null : (
          <p className="register-passwords-blank">Please enter a password</p>
        )}
      </form>
    </div>
  );
};

export default Login;
