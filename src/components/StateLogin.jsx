import { useState } from "react";

export default function Login() {

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');

  // here we use a combined state 
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    paswword: false
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleInputChange = (identifier, value) => {
    setEnteredValues(prevValue => ({
      ...prevValue, 
      [identifier]: value
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false
    }));
  }

  const handleEmailBluh = (identifier) => {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email"
            onBlur={() => handleEmailBluh('email')}
            onChange={(e) => handleInputChange('email', e.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            onChange={(e) => handleInputChange('password', e.target.value)}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
