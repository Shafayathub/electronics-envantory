import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase/firebase.config';

const Nav = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const logout = () => {
    const agree = window.confirm('Are you sure?');
    if (agree) {
      signOut(auth);
    }
  };
  return (
    <>
      <div className="navbar bg-base-100 max-w-screen-xl mx-auto sticky top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/envantory">Envantory</Link>
              </li>

              <li>
                <Link>Manage Items</Link>
              </li>
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">
            Electronics Envantory
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/envantory">Envantory</Link>
            </li>

            <li>
              <Link to="/manage">Manage Items</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost rounded-full">
                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <img
                      src="https://i.ibb.co/3kgbGtt/MD-Shafayat-Islam.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li>{user?.displayName}</li>
                <li className="text-center">{user?.email}</li>
                <li>
                  <button className="btn" onClick={logout}>
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn">
              Login/Register
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
