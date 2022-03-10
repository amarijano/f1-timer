import React, { memo } from "react";
import "./season2022Body.scss";

const Season2022Body = () => {
  return (
    <div className="content-wrapper">
      <table style={{ width: "40%" }}>
        <thead>
          <tr>
            <th style={{ width: "20%", borderRight: "" }}>TEAM</th>
            <th colSpan="3">DRIVERS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mercedes</td>
            <td style={{ backgroundColor: "#00d2be", width: "1%" }}></td>
            <td>Lewis Hamilton</td>
            <td>George Russell</td>
          </tr>
          <tr>
            <td>Red Bull Racing</td>
            <td style={{ backgroundColor: "#0600ef", width: "1%" }}></td>
            <td>Max Verstappen</td>
            <td>Sergio Perez</td>
          </tr>
          <tr>
            <td>Ferrari</td>
            <td style={{ backgroundColor: "#dc0000", width: "1%" }}></td>
            <td>Charles Leclerc</td>
            <td>Carlos Sainz</td>
          </tr>
          <tr>
            <td>McLaren</td>
            <td style={{ backgroundColor: "#FF9800", width: "1%" }}></td>
            <td>Lando Norris</td>
            <td>Daniel Ricciardo</td>
          </tr>
          <tr>
            <td>Alpine</td>
            <td style={{ backgroundColor: "#0090ff", width: "1%" }}></td>
            <td>Esteban Ocon</td>
            <td>Fernando Alonso</td>
          </tr>
          <tr>
            <td>AlphaTauri</td>
            <td style={{ backgroundColor: "#2b4562", width: "1%" }}></td>
            <td>Pierre Gasly</td>
            <td>Yuki Tsunoda</td>
          </tr>
          <tr>
            <td>Aston Martin</td>
            <td style={{ backgroundColor: "#006f62", width: "1%" }}></td>
            <td>Lance Stroll</td>
            <td>Sebastian Vettel</td>
          </tr>
          <tr>
            <td>Williams</td>
            <td style={{ backgroundColor: "#005aff", width: "1%" }}></td>
            <td>Alexandar Albon</td>
            <td>Nicholas Latifi</td>
          </tr>
          <tr>
            <td>Alfa Romeo</td>
            <td style={{ backgroundColor: "#900000", width: "1%" }}></td>
            <td>Valtteri Bottas</td>
            <td>Guanyu Zhou</td>
          </tr>
          <tr>
            <td>HAAS</td>
            <td style={{ backgroundColor: "#ffffff", width: "1%" }}></td>
            <td>Mick Schumacher</td>
            <td>Kevin Magnussen</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default memo(Season2022Body);
