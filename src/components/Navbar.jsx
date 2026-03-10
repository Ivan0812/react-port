/* eslint-disable no-unused-vars */
import React from "react";
/* eslint-enable no-unused-vars */
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/Profile" },
  { name: "About me", path: "/AboutMe" },
  { name: "Projects", path: "/Projects" },
];

function Navbar() {
  return (
    <nav>
      <ul className="navlist">
        {links.map((link) => (
          <li key={link.path} className="nav-item">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                "nav-link " + (isActive ? "is-active" : "")
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="nav-underline"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.4,
                      }}
                    />
                  )}
                  <span className="nav-label">{link.name}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;