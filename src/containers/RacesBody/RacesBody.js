import React, { memo } from "react";
import { useDataContext } from "src/context";
import ReactCountryFlag from "react-country-flag";
import { countryCode } from "src/data/countryCode";
import "./racesBody.scss";

const RacesBody = () => {
  const { races } = useDataContext();
  console.log(races);

  return (
    <div className="content-wrapper">
      <table style={{ width: "30%" }}>
        <thead>
          <tr>
            <th style={{ width: "60%", borderRight: "" }}>RACE</th>
            <th />
            <th>DATE</th>
          </tr>
        </thead>
        <tbody>
          {races.map((el, index) => (
            <tr key={index}>
              <td>{el.raceName}</td>
              <td>
                <ReactCountryFlag
                  countryCode={countryCode[index]}
                  svg
                  style={{ width: "2em", height: "2em" }}
                />
              </td>
              <td>{el.raceDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(RacesBody);
