import React from "react";
import PageLayout from "../../layout/PageLayout";
import { RaceInfoBody } from "src/containers/RaceInfoBody";
import "./raceInfo.scss";

function RaceInfo() {
  return (
    <>
      <PageLayout>
        <RaceInfoBody />
      </PageLayout>
    </>
  );
}

export default RaceInfo;
