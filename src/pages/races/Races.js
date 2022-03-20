import React from "react";
import PageLayout from "../../layout/PageLayout";
import { RacesBody } from "src/containers/RacesBody";
import "./races.scss";

function Races() {
  return (
    <>
      <PageLayout>
        <RacesBody />
      </PageLayout>
    </>
  );
}

export default Races;
