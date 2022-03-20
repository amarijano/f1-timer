import React, { memo } from "react";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import { countryCode } from "src/data/countryCode";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useDataContext } from "src/context";
import "./racesBody.scss";

const RacesBody = () => {
  const { races, areRacesLoading } = useDataContext();

  return (
    <div className="content-wrapper">
      {areRacesLoading && <div className="loader" />}
      {!areRacesLoading && (
        <table className="races-table">
          <thead className="season-table-header">
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
                    <InfoCircleOutlined style={{ color: "whitesmoke" }} />
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
