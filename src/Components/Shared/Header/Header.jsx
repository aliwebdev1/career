import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../../../context/UserContext';
const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const navbar = <>
        <li><NavLink to='/'>Home </NavLink></li>
        <li><NavLink to='/jobs'>Applied Jobs</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
    </>
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navbar}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><span className='text-purple-600 font-bold'>Career</span> Network</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbar}
                    </ul>
                </div>

                {/*  */}

                <div className="navbar-end">
                    {
                        user?.uid || user?.emailVerified ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="profile"
                                        src={user?.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        {user?.displayName}
                                        <span className="badge">{user?.uid.slice(-10)}</span>
                                    </a>
                                </li>
                                <li><a>{user?.email}</a></li>
                                <li><a onClick={logOut}>Logout</a></li>
                            </ul>
                        </div> : <button className='bg-blue-600 text-white px-10 py-3 rounded-xl font-bold'><Link to='/login'>Sign In </Link></button>
                    }


                </div>
            </div>
        </div>
    );
};

export default Header;