import React from "react";
import PageLayout from "../../layout/PageLayout";
import { RaceInfoBody } from "src/containers/RaceInfoBody";
import { useParams } from "react-router-dom";
import "./raceInfo.scss";

function RaceInfo() {
  const { raceNameId } = useParams();

  return (
    <>
      <PageLayout>
        <RaceInfoBody />
      </PageLayout>
    </>
  );
}

export default RaceInfo;
