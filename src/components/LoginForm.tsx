import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  
  

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email || !password) {
        setError('Please fill in all fields');
        return;
      }
      try {
        const response = await axios.post('http://localhost:8000/api/users/login', {
          email,
          password,
        });
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/users');
        return;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data.message || 'An error occurred');
        } else {
          setError('An error occurred');
        }
      }
    };


  return (
    <div className="container mt-5 w-50">
      <h2 className="text-center">Welcome Back</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email Adress</label>
          <input type="email" className="form-control form-control-lg" onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control form-control-lg" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-outline-primary btn-lg w-50 ">
          Login
        </button>
        </form>
        </div>
  );
};

export default LoginForm;