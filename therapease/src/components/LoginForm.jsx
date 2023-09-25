import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const validatePassword = (value) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; 
    return regex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '' || !validatePassword(password)) {
      setError(true);
    } else {
      setError(false);
      console.log("\nEmail: ", email, "\nPassword: ", password);
      
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className={`w-[332px] h-[413px] flex  flex-col  `}>
      <div className=''>
        <h2 className="text-3xl font-bold mb-3 md:bg-graylight">Login</h2>
        <p className='text-gray leading-20 py-2 max-w-[255px]'>Welcome back! Please login to your account.</p>
      </div>
      <div className="mb-4 grid ">
        <label htmlFor="email" className="block mb-1 py-2 text-gray">Email</label>
        <input
          type="email"
          id="email"
          className={`w-full px-3 py-1.5 border rounded-md ${error ? 'border-red-500' : 'border-gray'}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && email.trim() === '' && <p className="text-red">Email is required</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1 text-gray">
          Password
        </label>
        <input
          type="password"
          id="password"
          className={`w-full px-3 py-1.5 border rounded-md ${
            error ? 'border-red-500' : 'border-gray'
          }`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && password.trim() === '' && (
          <p className="text-red"></p>
        )}
        {error && !validatePassword(password) && (
          <p className="text-red">
            Password must be at least 6 characters long and include both numbers and characters.
          </p>
        )}
      </div>
      <div className="flex items-center justify-between mb-4 py-2">
        <label htmlFor="remember" className="flex items-center   text-gray">
          <input type="checkbox" id="remember" 
          className={`mr-2 mt-1 bg-red ${error ? 'bg-red' : 'bg-white'} checked `}
           />
          Remember me
        </label>
        <Link to='/forgot-password' className='text-gray'>forgot-password?</Link>
      </div>
      <button type="submit" className="w-full bg-red text-white py-2 rounded-md ">Login</button>
      <p className='text-gray py-4'>New user? <Link to='/register' className='text-red'>Register</Link></p>
    </form>
  );
};

export default LoginForm;

