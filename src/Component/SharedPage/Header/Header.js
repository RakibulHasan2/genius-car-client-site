import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../assets/logo.svg'
import { FaSearch } from 'react-icons/fa';
import { BsHandbag } from 'react-icons/bs';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
const Header = () => {
const {user} = useContext(AuthContext)
    const menuItems = <>
    <li className='font-semibold  text-2xl'><Link to='/'>Home</Link></li>
    {
            user?.email ? 
            <>
            <li className='font-semibold'><Link to='/orders'>Orders</Link></li>
            </>
            :
            <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 h-20 mb-8 ">
  <div className="navbar-start nav">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link to = '/' className="btn btn-ghost normal-case text-xl">
        <img src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
     {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
    <BsHandbag className='mr-5 text-xl'></BsHandbag>
    <FaSearch className='mr-5 text-xl'></FaSearch>
  <Link to='/login'>
  <button className="bg-transparent hover:bg-red-600 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded">Login</button>
  </Link>
  </div>
</div>
    );
};

export default Header;