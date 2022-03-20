import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { driverCountryCode } from "src/data/countryCode";
import { WarningOutlined } from "@ant-design/icons";
import ReactCountryFlag from "react-country-flag";
import { useDataContext } from "src/context";
import "./resultsTable.scss";

const ResultsTable = () => {
  const { raceNameId } = useParams();
  const { results, areResultsLoading, results2021, areResults2021Loading } =
    useDataContext();

  const raceResult = results.find((el) => el.raceId === raceNameId);
  const raceResult2021 = results2021.find((el) => el.raceId === raceNameId);

  return (
    <div className="content-wrapper">
      {!areResultsLoading && raceResult && (
        <>
          <table className="results-table">
            <thead className="results-table-header">
              <tr>
                <th>POS</th>
                <th />
                <th>DRIVER</th>
                <th className="results-table-constructor-col">CONSTRUCTOR</th>
                <th>POINTS</th>
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
        </>
      )}
      {!areResults2021Loading && !raceResult && raceResult2021 && (
        <>
          <table className="results-table">
            <thead className="results-table-header">
              <tr>
                <th>POS</th>
                <th />
                <th>DRIVER</th>
                <th className="results-table-constructor-col">CONSTRUCTOR</th>
                <th>POINTS</th>
              </tr>
            </thead>
            <tbody className="results-table-body">
              {raceResult2021?.results.map((el, index) => (
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
        </>
      )}
      {!raceResult2021 && (
        <div className="race-not-held">
          <WarningOutlined className="warning-icon" />
          <br />
          Race was not <br />
          held last season.
        </div>
      )}
    </div>
  );
};

export default memo(ResultsTable);
