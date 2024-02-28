import { useState } from 'react';
import Input from './Input';

const Login = () => {
  const [credintials, setCredintials] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!credintials.email || !credintials.password) {
      alert('Please fill in all field');
    }
    // send data to backend api
    const { email, password } = credintials;
    console.log(
      JSON.stringify({
        email,
        password,
      })
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            type='email'
            placeholder='Enter your email'
            required
            onChange={(e) =>
              setCredintials((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          />
          {!credintials.email ? (
            <p style={{ color: 'red' }}>Please write an email</p>
          ) : null}
        </div>
        <div>
          <Input
            type='password'
            required
            placeholder='Enter your password'
            onChange={(e) =>
              setCredintials((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
          />
          {credintials.password.length < 6 ? (
            <p style={{ color: 'red' }}>Password at least 6 charts</p>
          ) : null}
        </div>
        <button type='submit'>Login</button>
        {/* <input type='submit' /> */}
      </form>
    </div>
  );
};

export default Login;
