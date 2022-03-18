import React, { memo } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDataContext } from "src/context";
import { Row, Col } from "antd";
import "./raceInfoBody.scss";
import { DoubleLeftOutlined } from "@ant-design/icons";

const RaceInfoBody = () => {
  const { raceNameId } = useParams();

  const { races, areRacesLoading } = useDataContext();

  const images = require.context("../../data/images", true);
  const race = races.find((el) => el.raceNameId === raceNameId);
  console.log(race);
  console.log(raceNameId);
  let raceImg = images(`./${raceNameId}.png`).default;

  const notIn = [
    "BrazilianGrandPrix",
    "EmiliaRomagnaGrandPrix",
    "AustrianGrandPrix",
  ];

  const history = useHistory();

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

  return (
    <>
      {!race && <div className="loader" />}
      {!raceImg && <div className="loader" />}
      {race && raceImg && (
        <div className="content-wrapper-info">
          {!areRacesLoading && (
            <>
              <Row
                className="ant-row-info-title"
                style={{ marginTop: "40px" }}
                gutter={40}
              >
                {race.raceLocation.country}
                {", "}
                {race.raceLocation.locality}
              </Row>
              <Row justify="space-between" gutter={40} className="ant-row-info">
                <Col span={12}>
                  <img className="track-img" src={raceImg} />
                </Col>
                <Col span={12} className="race-info-col">
                  <Row style={{ paddingBottom: "40px" }}>
                    <u>FIRST PRACTICE</u>
                    <br />
                    {myTime(race.raceFirstPr)}
                    {", "}
                    {race.raceFirstPr.date}
                  </Row>
                  <Row style={{ paddingBottom: "40px" }}>
                    <u>SECOND PRACTICE</u>
                    <br />
                    {myTime(race.raceSecondPr)}
                    {", "}
                    {race.raceSecondPr.date}
                  </Row>
                  {!notIn.includes(raceNameId) && (
                    <Row style={{ paddingBottom: "40px" }}>
                      <u>THIRD PRACTICE</u>
                      <br />
                      {myTime(race.raceThirdPr)}
                      {", "}
                      {race.raceThirdPr.date}
                    </Row>
                  )}
                  {notIn.includes(raceNameId) && (
                    <Row style={{ paddingBottom: "40px" }}>
                      <u>SPRINT</u>
                      <br />
                      {myTime(race.raceSprint)}
                      {", "}
                      {race.raceSprint.date}
                    </Row>
                  )}
                  <Row>
                    <u style={{ color: "rgb(225,6,0" }}>QUALIFYING</u>
                    <br />
                    {myTime(race.raceQualy)}
                    {", "}
                    {race.raceQualy.date}
                  </Row>
                </Col>
              </Row>
              <div className="back" onClick={handleClick}>
                {"<<"}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default memo(RaceInfoBody);
