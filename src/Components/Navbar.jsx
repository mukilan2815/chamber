import React, { useState } from "react";
import logo from "../Assets/icci.jpg";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  const [token, setToken] = useState("");

  return (
    <div className="flex px-20 items-center justify-evenly">
      <div className="w-fit">
        <img src={logo} alt="" className="h-[20%] w-[80%]" />
      </div>
      <div className="w-full ml-36">
        <ul className="flex justify-evenly items-center">
          <li className="hover:cursor-pointer">Home</li>
          <li className="hover:cursor-pointer">
            <a
              href="https://iccicbe.in/wp-content/uploads/2024/04/Application-Form-.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Application
            </a>
          </li>
          {token ? (
            <li className="hover:cursor-pointer">Logout</li>
          ) : (
            <Link to="/membershipform">
              <li className="px-7  hover:bg-transparent border-2 cursor-pointer transition-all text-white font-bold hover:text-black border-blue-600 py-2 bg-blue-600 hover:rounded-none rounded-lg">
                To know about application
                <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
              </li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
