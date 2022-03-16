import React, { memo } from "react";
import { useDataContext } from "src/context";
import ReactCountryFlag from "react-country-flag";
import { countryCode } from "src/data/countryCode";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./racesBody.scss";

const RacesBody = () => {
  const { races, areRacesLoading } = useDataContext();
  console.log(races);

  console.log(areRacesLoading);

  return (
    <div className="content-wrapper">
      {areRacesLoading && <div className="loader" />}
      {!areRacesLoading && (
        <table style={{ width: "35%" }}>
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
                <td style={{ width: "10%" }}>
                  <Link to={`/races/${el.raceNameId}`}>
                    <InfoCircleOutlined />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default memo(RacesBody);
