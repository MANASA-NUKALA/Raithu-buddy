import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would normally validate and authenticate the user
    if(phone.trim().length === 10){  // simple validation example
      // On success, redirect to dashboard
      navigate('/dashboard');
    } else {
      alert('Please enter a valid 10-digit phone number');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 px-4">
      <h2 className="text-3xl mb-6 text-green-700 font-bold">Login</h2>
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <label className="block mb-2 font-semibold">Phone Number</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter 10-digit phone number"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
