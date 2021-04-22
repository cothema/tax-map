import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons/faHandHoldingUsd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <h1>
          <FontAwesomeIcon icon={faHandHoldingUsd}/>&nbsp;
          Mapa daní
        </h1>

        <h2>Daň z příjmu</h2>

        <h2>Daň z nemovitých věcí</h2>

        <b>Příjemce:</b> obec

        <br />

        <b>Odkazy:</b>

        <ul>
          <li>
            <a href="https://cs.wikipedia.org/wiki/Da%C5%88_z_nemovit%C3%BDch_v%C4%9Bc%C3%AD" rel="noreferrer">
              Wikipedia
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

