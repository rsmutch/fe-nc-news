import { Link, navigate } from '@reach/router';
import { useState } from 'react';
import { getAllUsers } from './api';
import Loading from './Loading';

const Login = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameNotFound, setUsernameNotFound] = useState(false);
  const [passwordIsBlank, setPasswordIsBlank] = useState(false);
  const [usernameIsBlank, setUserNameIsBlank] = useState(false);

  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();
    if (password.length < 1) {
      setPasswordIsBlank(true);
    } else if (password.length > 0) {
      setPasswordIsBlank(false);
      getAllUsers().then((users) => {
        users.forEach((user) => {
          if (user.username === username) {
            props.setUsername(username);
            navigate(-1);
          }
        });
        setUsernameNotFound(true);
      });
    }
    setIsLoading(false);
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
      setUsernameNotFound(false);
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
        />{' '}
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <button type="submit" className="login-button">
              Login
            </button>
            <hr className="login-hr"></hr>
            <Link className="login-register" to="/register">
              Register
            </Link>
          </>
        )}
        {usernameNotFound && (
          <p className="login-invalid-username">Username not recognised</p>
        )}{' '}
        {usernameIsBlank && (
          <p className="register-username-blank">Please enter a username</p>
        )}
        {passwordIsBlank && (
          <p className="register-passwords-blank">Please enter a password</p>
        )}
      </form>
    </div>
  );
};

export default Login;
