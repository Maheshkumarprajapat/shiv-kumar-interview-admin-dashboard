import { Link, NavLink } from "react-router-dom";
import React from "react";

import { IconAdd, IconBell, IconLogo } from '../../Assets/images/icons/index'
import user from '../../Assets/images/user.jpg'
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: IconAdd,
  },
  {
    path: "/users",
    name: "Users",
    icon: IconAdd,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: IconAdd,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: IconAdd,
  },
  {
    path: "/file-manager",
    name: "File Manager",
    icon: IconAdd,
  }
];

const SideBar = ({ children }) => {

  return (
    <>
      <div className="main-container">
        <div
          className={`sidebar `}>
          <section className="routes">
            <Link to='/' className="logo"><img src={IconLogo} alt="" /></Link>
            {routes.map((route, index) => {
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon"><img src={route.icon} alt='' /></div></NavLink>
              );
            })}
            <div className="sidebar_footer">
              <NavLink className="link"
                activeClassName="active" to='/bell'>
                <div className="icon"><img src={IconBell} alt='' /></div>
              </NavLink>
              <div className="user-img">
                <img src={user} alt='' />
              </div>

            </div>
          </section>
        </div>

        <main>{children}</main>
      </div >
    </>
  );
};

export default SideBar;
