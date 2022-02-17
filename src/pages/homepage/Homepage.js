import Navbar from "../../components/Navbar/Navbar";
import Timer from "../../components/Timer/Timer";
import { FieldTimeOutlined } from "@ant-design/icons";
import "./homepage.scss";

import PageLayout from "../../layout/PageLayout";
const Homepage = () => {
  return (
    <>
      <PageLayout>
        <Navbar />
        <h1 className="title">
          F1 TIMER
          <i className="timer-logo">
            <FieldTimeOutlined style={{ fontSize: "7rem" }} />
          </i>
        </h1>
        <h2 className="race-name">
          FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2022
        </h2>
        <Timer />
      </PageLayout>
    </>
  );
};

export default Homepage;
