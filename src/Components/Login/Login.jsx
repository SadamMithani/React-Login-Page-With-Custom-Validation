import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Replace these demo credentials with your actual demo credentials
    const demoCredentials = {
      email: 'demo@example.com',
      password: 'demoPassword',
    };
  
    try {
      console.log('Entered Credentials:', credentials);
      console.log('Demo Credentials:', demoCredentials);
  
      // Check if the entered credentials match the demo credentials
      if (
        credentials.email === demoCredentials.email &&
        credentials.password === demoCredentials.password
      ) {
        // Authentication successful
        onLogin(); // Notify the parent component about the successful login
      } else {
        // Authentication failed
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Error during login');
    }
  };
  

  return (
    <div className="login-area">
      <div className="container">
        <div className="login-box ptb--100">
          <form onSubmit={handleLogin}>
            <div className="login-form-head">
              <h4>Sign In</h4>
              <p>Hello there, Sign in and start managing your Admin Template</p>
            </div>
            <div className="login-form-body">
              <div className="form-gp">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  id="exampleInputEmail1"
                  name="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                />
                <i className="ti-email"></i>
                <div className="text-danger"></div>
              </div>
              <div className="form-gp">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  id="exampleInputPassword1"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                />
                <i className="ti-lock"></i>
                <div className="text-danger"></div>
              </div>
              <div className="row mb-4 rmber-area">
                {/* ... your existing code for remember me and forgot password */}
              </div>
              <div className="submit-btn-area">
                <button type="submit">Submit <i className="ti-arrow-right"></i></button>
                <div className="login-other row mt-4">
                  {/* ... your existing code for login with Facebook and Google */}
                </div>
              </div>
              <div className="form-footer text-center mt-5">
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <p className="text-muted">
                  Don't have an account? <a href="register.html">Sign up</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
