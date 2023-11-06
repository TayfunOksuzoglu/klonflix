import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600  text-2xl min-[425px]:text-3xl sm:text-4xl lg:text-5xl  font-bold cursor-pointer">
          KLONFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white mr-2 min-[425px]:mr-4 lg:text-xl">
              Account
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 active:bg-red-600 duration-200 px-3 py-1  min-[425px]:px-6 min-[425px]:py-2 lg:text-xl rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white mr-2 min-[425px]:mr-4 lg:text-xl">
              Sign in
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 hover:bg-red-700 active:bg-red-600 duration-200 px-3 py-1  min-[425px]:px-6 min-[425px]:py-2 lg:text-xl rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
