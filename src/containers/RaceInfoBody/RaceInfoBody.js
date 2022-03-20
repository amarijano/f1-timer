import React, { memo, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDataContext } from "src/context";
import { Row, Col } from "antd";
import "./raceInfoBody.scss";
import { ResultsTable } from "../../components/ResultsTable";

const RaceInfoBody = () => {
  let { raceNameId } = useParams();
  const { races, areRacesLoading, results, areResultsLoading, screenWidth } =
    useDataContext();
  const history = useHistory();

  const raceResultDate = results.find((el) => el.raceId === raceNameId)?.date;

  const images = require.context("../../data/images", true);
  const race = races.find((el) => el.raceNameId === raceNameId);
  console.log("race", race);
  console.log(raceNameId);
  let raceImg = images(`./${raceNameId}.png`).default;

  const sprintRaces = [
    "SãoPauloGrandPrix",
    "EmiliaRomagnaGrandPrix",
    "AustrianGrandPrix",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    history.push("/races");
  };

  function myTime(el) {
    const raceStart = el.date + "T" + el.time;
    const startDate = new Date(Date.parse(raceStart));
    return `${startDate.getHours()}:${
      startDate.getMinutes() === 0
        ? "0" + startDate.getMinutes()
        : startDate.getMinutes()
    }`;
  }

  // const raceTimesInfoCol = (
  //   <>
  //     <Row style={{ paddingBottom: "40px", paddingLeft: "80px" }}>
  //       <u>FIRST PRACTICE</u>
  //       <br />
  //       {myTime(race.raceFirstPr)}
  //       {", "}
  //       {race.raceFirstPr.date}
  //     </Row>
  //     <Row style={{ paddingBottom: "40px", paddingLeft: "80px" }}>
  //       <u>SECOND PRACTICE</u>
  //       <br />
  //       {myTime(race.raceSecondPr)}
  //       {", "}
  //       {race.raceSecondPr.date}
  //     </Row>
  //     {!sprintRaces.includes(raceNameId) && (
  //       <Row style={{ paddingBottom: "40px", paddingLeft: "80px" }}>
  //         <u>THIRD PRACTICE</u>
  //         <br />
  //         {myTime(race.raceThirdPr)}
  //         {", "}
  //         {race.raceThirdPr.date}
  //       </Row>
  //     )}
  //     {sprintRaces.includes(raceNameId) && (
  //       <Row style={{ paddingBottom: "40px", paddingLeft: "80px" }}>
  //         <u>SPRINT</u>
  //         <br />
  //         {myTime(race.raceSprint)}
  //         {", "}
  //         {race.raceSprint.date}
  //       </Row>
  //     )}
  //     <Row style={{ paddingLeft: "80px" }}>
  //       <u style={{ color: "rgb(225,6,0" }}>QUALIFYING</u>
  //       <br />
  //       {myTime(race.raceQualy)}
  //       {", "}
  //       {race.raceQualy.date}
  //     </Row>
  //   </>
  // );

  return (
    <>
      {!race && <div className="loader" />}
      {!raceImg && <div className="loader" />}
      {race && raceImg && !areRacesLoading && !areResultsLoading && (
        <div className="content-wrapper-info">
          <Row>
            <div className="back" onClick={handleClick}>
              {"<<"}
            </div>
          </Row>

          <Row className="ant-row-info-title" style={{ marginTop: "40px" }}>
            <Col span={8}>
              {race.raceLocation.country}
              {", "}
              {race.raceLocation.locality}
            </Col>
            {raceResultDate && screenWidth > 1650 && (
              <Col span={8} offset={8} style={{ fontSize: "30px" }}>
                Last time out {raceResultDate}
              </Col>
            )}
          </Row>

          {screenWidth > 1650 && (
            <Row justify="space-between" gutter={40} className="ant-row-info">
              <Col span={8} className="race-img-col">
                <img className="track-img" alt="trackImage" src={raceImg} />
              </Col>
              <Col span={8} className="race-info-col">
                {/* {raceTimesInfoCol} */}
                <Row style={{ paddingBottom: "40px", paddingLeft: "80px" }}>
                  <u>FIRST PRACTICE</u>
                  <br />
                  {myTime(race.raceFirstPr)}
                  {", "}
                  {race.raceFirstPr.date}
                </Row>
                <Row style={{ paddingBottom: "40px", paddingLeft: "80px" }}>
                  <u>SECOND PRACTICE</u>
                  <br />
                  {myTime(race.raceSecondPr)}
                  {", "}
                  {race.raceSecondPr.date}
                </Row>
                {!sprintRaces.includes(raceNameId) && (
                  <Row style={{ paddingBottom: "40px", paddingLeft: "80px" }}>
                    <u>THIRD PRACTICE</u>
                    <br />
                    {myTime(race.raceThirdPr)}
                    {", "}
                    {race.raceThirdPr.date}
                  </Row>
                )}
                {sprintRaces.includes(raceNameId) && (
                  <Row style={{ paddingBottom: "40px", paddingLeft: "80px" }}>
                    <u>SPRINT</u>
                    <br />
                    {myTime(race.raceSprint)}
                    {", "}
                    {race.raceSprint.date}
                  </Row>
                )}
                <Row style={{ paddingLeft: "80px" }}>
                  <u style={{ color: "rgb(225,6,0" }}>QUALIFYING</u>
                  <br />
                  {myTime(race.raceQualy)}
                  {", "}
                  {race.raceQualy.date}
                </Row>
              </Col>
              <Col span={8} className="race-results-col">
                <ResultsTable />
              </Col>
            </Row>
          )}

          {screenWidth < 421 && (
            <>
              <Col span={24} className="race-info-col">
                {/* {raceTimesInfoCol} */}
                <Row style={{ paddingBottom: "40px", paddingLeft: "80px" }}>
                  <u>FIRST PRACTICE</u>
                  <br />
                  {myTime(race.raceFirstPr)}
                  {", "}
                  {race.raceFirstPr.date}
                </Row>
                <Row style={{ paddingBottom: "40px", paddingLeft: "80px" }}>
                  <u>SECOND PRACTICE</u>
                  <br />
                  {myTime(race.raceSecondPr)}
                  {", "}
                  {race.raceSecondPr.date}
                </Row>
                {!sprintRaces.includes(raceNameId) && (
                  <Row style={{ paddingBottom: "40px", paddingLeft: "80px" }}>
                    <u>THIRD PRACTICE</u>
                    <br />
                    {myTime(race.raceThirdPr)}
                    {", "}
                    {race.raceThirdPr.date}
                  </Row>
                )}
                {sprintRaces.includes(raceNameId) && (
                  <Row style={{ paddingBottom: "40px", paddingLeft: "80px" }}>
                    <u>SPRINT</u>
                    <br />
                    {myTime(race.raceSprint)}
                    {", "}
                    {race.raceSprint.date}
                  </Row>
                )}
                <Row style={{ paddingLeft: "80px" }}>
                  <u style={{ color: "rgb(225,6,0" }}>QUALIFYING</u>
                  <br />
                  {myTime(race.raceQualy)}
                  {", "}
                  {race.raceQualy.date}
                </Row>
              </Col>
              <Col span={24} className="race-img-col">
                <img className="track-img" alt="trackImage" src={raceImg} />
              </Col>
              <Col span={24} className="race-result-col">
                <ResultsTable className="race-result-table" />
              </Col>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default memo(RaceInfoBody);
