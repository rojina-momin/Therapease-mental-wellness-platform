import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const validatePassword = (value) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // Requires at least 6 characters including a number and a character
    return regex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      !validatePassword(password)
    ) {
      setError(true);
    } else {
      setError(false);
      console.log(
        "\nFirst Name: ",
        firstName,
        "\nLast Name: ",
        lastName,
        "\nEmail: ",
        email,
        "\nPassword: ",
        password
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`md:w-[332px] md:h-[520px] ss:w-full  flex flex-col space-y-2`}>
      <div>
      <h2 className="text-3xl font-bold mb-4 md:bg-graylight">Register</h2>
      <p className='text-gray leading-20 pt-2 max-w-[250px]'>Welcome! Please Register to your account.</p>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="firstName" className="block mb-0.2 py-0.2 text-gray">First Name</label>
          <input
            type="text"
            id="firstName"
            className={`w-full px-3  py-2 border rounded-md ${error ? 'border-red' : 'border-gray'}`}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {error && firstName.trim() === '' && <p className="text-red">First Name is required</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-0.2 py-0.2 text-gray">Last Name</label>
          <input
            type="text"
            id="lastName"
            className={`w-full px-3 py-2 border rounded-md ${error ? 'border-red' : 'border-gray'}`}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {error && lastName.trim() === '' && <p className="text-red">Last Name is required</p>}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block mb-0.2 py-0.2 text-gray">Email</label>
        <input
          type="email"
          id="email"
          className={`w-full px-3 py-2 border rounded-md ${error ? 'border-red' : 'border-gray'}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && email.trim() === '' && <p className="text-red">Email is required</p>}
      </div>
      <div>
        <label htmlFor="password" className="block mb-0.2 py-0.2 text-gray">
          Password
        </label>
        <input
          type="password"
          id="password"
          className={`w-full px-3 py-2 border rounded-md ${
            error ? 'border-red' : 'border-gray'
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
      <div className='mt-4'>
        <label></label>
        <button
          type="submit"
          className="w-full bg-red mt-2 text-white py-2 rounded-md hover:bg-red focus:outline-none focus:ring focus:ring-red focus:ring-opacity-50"
        >
          Register
        </button>
      </div>
      
      
      <p className='text-gray md:py-3 py-5'>Already Register? <Link to='/LoginPage' className='text-red'>Login</Link></p>
    </form>
  );
};

export default RegisterForm;
