import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Signup failed');
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/dashboard');
    } catch (err) {
      alert(err.message || 'Signup error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={handleSignUp} className="clean-card w-full max-w-md">
        <h2 className="text-2xl mb-4" style={{fontWeight:800,textAlign:'center'}}>Create an account</h2>
        <label className="form-label">Name</label>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="clean-input mb-3" required />
        <label className="form-label">Email</label>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="clean-input mb-3" required />
        <label className="form-label">Password</label>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="clean-input mb-4" required />
        <button type="submit" className="clean-btn" disabled={loading}>{loading ? 'Creating…' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default SignUp;
