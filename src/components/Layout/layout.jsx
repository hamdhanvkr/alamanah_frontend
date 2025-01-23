import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt, } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useParams, Outlet, useNavigate } from 'react-router-dom';
import Logo from '../../assets/trustlogo.jpeg';
import './layout.css';


function SideLayout() {

  const { username } = useParams();
  const navigate = useNavigate();

  const sidemenus = [
    {
      icon: faHome,
      name: 'Dashboard',
      path: `/alamanah/${username}/dashboard`,
    },
    {
      icon: faFileAlt,
      name: 'Member Details',
      path: `/alamanah/${username}/members`,
    },
    {
      icon: faFileAlt,
      name: 'Amount Entry',
      path: `/alamanah/${username}/amountentry`,
    },
    {
      icon: faFileAlt,
      name: 'Distribution Details',
      path: `/alamanah/${username}/distribution`,
    }
  ];

  const handleLogout = () => {
    navigate('/');

  }



  return (
    <div className='layout-container'>
      <div className='layout-sidemenus'>
        <div className='layout-logoimages'>
          <img src={Logo} className='logos' />
        </div>
        {sidemenus.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => `layout-menus-item ${isActive ? 'layout-menus-active' : ''}`}
          >
            <FontAwesomeIcon icon={item.icon} className="layout-icons" />
            <label className="menu-label">{item.name}</label>
          </NavLink>
        ))}
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className='layout-right'>
        <div className='layout-content'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default SideLayout