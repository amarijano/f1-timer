import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "src/context";
import { Row, Col } from "antd";
import "./raceInfoBody.scss";

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

  return (
    <>
      {race && (
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
                  <Row style={{ paddingBottom: "30px" }}>
                    First Practice
                    <br />
                    {race.raceFirstPr.time}
                    {", "}
                    {race.raceFirstPr.date}
                  </Row>
                  <Row style={{ paddingBottom: "30px" }}>
                    Second Practice
                    <br />
                    {race.raceSecondPr.time}
                    {", "}
                    {race.raceSecondPr.date}
                  </Row>
                  {!notIn.includes(raceNameId) && (
                    <Row style={{ paddingBottom: "30px" }}>
                      Third Practice
                      <br />
                      {race.raceThirdPr.time}
                      {", "}
                      {race.raceThirdPr.date}
                    </Row>
                  )}
                  {notIn.includes(raceNameId) && (
                    <Row style={{ paddingBottom: "30px" }}>
                      Sprint
                      <br />
                      {race.raceSprint.time}
                      {", "}
                      {race.raceSprint.date}
                    </Row>
                  )}
                  <Row>
                    Qualifying
                    <br />
                    {race.raceQualy.time}
                    {", "}
                    {race.raceQualy.date}
                  </Row>
                </Col>
              </Row>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default memo(RaceInfoBody);
