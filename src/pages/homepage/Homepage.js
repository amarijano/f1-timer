import React from "react";
import { HomepageBody } from "src/containers/HomepageBody";
import PageLayout from "../../layout/PageLayout";
import "./homepage.scss";

function Homepage() {
  return (
    <>
      <PageLayout>
        <HomepageBody />
      </PageLayout>
    </>
  );
}

export default Homepage;
