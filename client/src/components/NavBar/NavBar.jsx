import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import "./NavBar.css"
import { Link } from "react-router-dom";
import { RiFolderUserFill } from 'react-icons/ri';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';


export default function NavBar() {

    return (
      <nav className="navigation">
        <span className="brand-name">App Foods</span>
        <div className="sBar">
          <SearchBar />
        </div>
        <Link to="/myRecipe">
          <div className="create">Create-Recipe</div>
        </Link>
        <div className="navigation-menu">
          <ul>
            <li>
              <Link to="/myRecipe">
                <span>Create-Recipe</span>
              </Link>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://portfoliofcm.vercel.app/"
              >
                <RiFolderUserFill size={30}  />
              </a>
              
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/lvlaciel"
              >
                <FaGithubSquare size={30}  />
              </a>
              </li>
            <li>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/facundo-maciel-desarrollador-fullstack/"
              >
                <FaLinkedin size={30}  />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}