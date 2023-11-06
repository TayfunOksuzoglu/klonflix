import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await logIn(email, password);
      navigate('/');
    } catch (error) {
      // Handle specific Firebase errors
      switch (error.code) {
        case 'auth/too-many-requests':
          setError(
            "You've made too many requests. Wait before you make another."
          );
          break;
        case 'auth/invalid-login-credentials':
          setError('Wrong email and/or password.');
          break;
        default:
          setError('An error occurred during sign-in.');
          break;
      }
    }
  };
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold ">Sign In</h1>
            {error ? (
              <p className="p-1 bg-red-600 mt-2 text-center">{error}</p>
            ) : null}
            <form onSubmit={handleSignIn} className="w-full flex flex-col py-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="Email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="Password"
              />
              <button className="bg-red-600 hover:bg-red-700 active:bg-red-600 duration-200 py-3 my-6 rounded font-bold">
                Sign In
              </button>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <p className="flex items-center ">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    className="accent-red-600 cursor-pointer "
                  />
                  <label className="cursor-pointer pl-2" htmlFor="rememberMe">
                    Remember Me
                  </label>
                </p>
                <p>Need Help?</p>
              </div>
              <p className="my-8">
                <span className="text-gray-400 mr-2">New to Klonflix?</span>
                <Link to="/signup" className="text-gray-200">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
