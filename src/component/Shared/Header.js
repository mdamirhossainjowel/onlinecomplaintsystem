import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start justify-between lg:justify-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="complaint" className="btn-ghost">
                Complaint
              </Link>
            </li>
            <li>
              <Link to="notices" className="btn-ghost">
                Notices
              </Link>
            </li>
            <li>
              <Link to="contact" className="btn-ghost">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="profile" className="btn-ghost">
                Profile
              </Link>
            </li>
            {!user ? (
              <li>
                <Link to="login" className="btn-ghost">
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <Link to="login" className="btn-ghost">
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Online Complaint
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="complaint" className="btn-ghost mr-2">
              Complaint
            </Link>
          </li>
          <li>
            <Link to="notices" className="btn-ghost mr-2">
              Notices
            </Link>
          </li>
          <li>
            <Link to="contact" className="btn-ghost mr-2">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="profile" className="btn-ghost mr-2">
              Profile
            </Link>
          </li>
          {!user ? (
              <li>
                <Link to="login" className="btn-ghost">
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <Link to="login" className="btn-ghost" onClick={() => signOut(auth)}>
                  Logout
                </Link>
              </li>
            )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
