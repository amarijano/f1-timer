import React, { memo } from "react";
import { teams } from "../../data/teams";
import "./season2022Body.scss";

const Season2022Body = () => {
  return (
    <div className="content-wrapper">
      <table style={{ width: "40%" }}>
        <thead className="season-table-header">
          <tr>
            <th style={{ width: "20%", borderRight: "" }}>TEAM</th>
            <th colSpan="3">DRIVERS</th>
          </tr>
        </thead>
        <tbody className="season-table-body">
          {teams.map((el, index) => (
            <tr key={index}>
              <td>{el.teamName}</td>
              <td style={{ backgroundColor: el.color, width: "1%" }} />
              <td>{el.driverOne}</td>
              <td>{el.driverTwo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(Season2022Body);
