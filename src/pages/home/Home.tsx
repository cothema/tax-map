import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <div className="bg-dark text-white rounded box-shadow py-3 my-3">
        <form>
          <div className="form-row">
            <div className="col-1 pt-2 text-right">
              <b>Model:</b>
            </div>

            <div className="col">
              <select className="form-control d-inline">
                <option>Stát</option>
                <option>Ideologie</option>
                <option>Simulace</option>
              </select>
            </div>

            <div className="col">
              <select className="form-control d-inline">
                <option>Česká republika: 2021</option>
                <option>Česká republika: ANO - program volby 2021</option>
                <option>Česká republika: ODS - program volby 2021</option>
                <option>Česká republika: ČSSD - program volby 2021</option>
                <option>Česká republika: Piráti - program volby 2021</option>
                <option>Anarchokapitalismus</option>
              </select>
            </div>

            <div className="col-1 text-left"></div>
          </div>
        </form>
      </div>

      <div className="bg-white shadow-sm p-4 rounded">
        <h2>Daň z příjmu</h2>

        <h2>Daň z nemovitých věcí</h2>

        <b>Příjemce:</b> obec

        <br/>

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

