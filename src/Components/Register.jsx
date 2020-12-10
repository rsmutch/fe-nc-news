import { useState } from 'react';
import { navigate } from '@reach/router';
import { postNewUser } from './api';

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordIsBlank, setPasswordIsBlank] = useState(false);
  const [usernameIsBlank, setUserNameIsBlank] = useState(false);

  const validateForm = () => {
    return (
      username.length > 0 && password.length > 0 && password === passwordRepeat
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postNewUser(username);
    if (validateForm()) {
      navigate('/', { state: { username } });
    }
  };

  const handleChange = ({ target: { id, value } }) => {
    if (id === 'register-username') {
      setUsername(value);
    } else if (id === 'register-password') {
      setPassword(value);
    } else {
      setPasswordRepeat(value);
    }
  };

  const handleBlurPassword = ({ target }) => {
    if (target.value.length < 1) {
      setPasswordIsBlank(true);
    } else if (target.value.length >= 1) {
      setPasswordIsBlank(false);
    }

    if (password !== passwordRepeat) {
      setPasswordsMatch(false);
    } else if (password === passwordRepeat) {
      setPasswordsMatch(true);
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
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="register-username" className="register-username-lbl">
          Username
        </label>
        <input
          type="text"
          className="register-username-tb"
          id="register-username"
          value={username}
          onChange={handleChange}
          onBlur={handleBlurUsername}
        />
        <label htmlFor="register-password" className="register-password-lbl">
          Password
        </label>
        <input
          type="password"
          className="register-password-tb"
          id="register-password"
          value={password}
          onChange={handleChange}
        />
        <label
          htmlFor="register-password-rpt"
          className="register-password-lbl-rpt"
        >
          Repeat Password
        </label>
        <input
          type="password"
          className="register-password-tb-rpt"
          id="register-password-rpt"
          value={passwordRepeat}
          onChange={handleChange}
          onBlur={handleBlurPassword}
        />
        <button type="submit" className="register-login-button">
          Register
        </button>
        {!usernameIsBlank ? null : (
          <p className="register-username-blank">Please enter a username</p>
        )}
        {passwordsMatch ? null : (
          <p className="register-passwords-match">
            Those passwords didn't match. Try again.
          </p>
        )}
        {!passwordIsBlank ? null : (
          <p className="register-passwords-blank">Please enter a password</p>
        )}
      </form>
    </div>
  );
};

export default Register;
