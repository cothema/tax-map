import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="Footer bd-footer p-3 p-md-5 mt-5 bg-light text-center text-sm-start">
      <div className="container">
        <ul className="bd-footer-links ps-0 mb-3">
          <li className="d-inline-block ms-3">
            <Link to="/">Home</Link>
          </li>
          <li className="d-inline-block ms-3">
            <Link to="/about">About</Link>
          </li>
        </ul>

        <ul className="bd-footer-links ps-0 mb-3">
          <li className="d-inline-block">
            <a href="https://github.com/cothema/tax-map" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub}/>&nbsp;
              GitHub
            </a>
          </li>
        </ul>

        <p className="mb-0">
          Code license:
          <a href="https://github.com/cothema/tax-map/main/LICENSE"
          target="_blank"
          rel="license noopener noreferrer">MIT</a>,
          text content:
          <a href="https://creativecommons.org/licenses/by/3.0/"
                           target="_blank"
             rel="license noopener noreferrer">CC BY 3.0</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

