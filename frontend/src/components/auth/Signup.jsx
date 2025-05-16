import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Do signup logic here, then redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <form onSubmit={handleSignUp} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl mb-6 font-semibold text-center">Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-4 w-full rounded"
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 mb-4 w-full rounded"
          required
        />
        <button type="submit" className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
