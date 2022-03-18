import React, { memo } from "react";
import ReactCountryFlag from "react-country-flag";
import { useParams } from "react-router-dom";
import { useDataContext } from "src/context";
import { driverCountryCode } from "src/data/countryCode";
import "./resultsTable.scss";

const ResultsTable = () => {
  const { raceNameId } = useParams();
  const { results, areResultsLoading } = useDataContext();

  const raceResult = results.find((el) => el.raceId === raceNameId);
  console.log(raceResult);
  console.log(driverCountryCode["HAM"]);
  return (
    <div className="content-wrapper">
      {!areResultsLoading && (
        <table className="results-table">
          <thead className="results-table-header">
            <tr>
              <th>POS</th>
              <th />
              <th>DRIVER</th>
              <th>CONSTRUCTOR</th>
              <th style={{ paddingLeft: "20px" }}>POINTS</th>
            </tr>
          </thead>
          <tbody className="results-table-body">
            {raceResult?.results.map((el, index) => (
              <tr key={index}>
                <td>{el.position}</td>
                <td>
                  <ReactCountryFlag
                    countryCode={driverCountryCode[el.Driver.code]}
                    svg
                    style={{ width: "2em", height: "2em" }}
                  />
                </td>
                <td>
                  {el.Driver.givenName} {el.Driver.familyName}
                </td>
                <td>{el.Constructor.name}</td>
                <td>{el.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default memo(ResultsTable);
