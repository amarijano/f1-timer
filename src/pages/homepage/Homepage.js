import { HomepageBody } from "src/containers/HomepageBody";
import "./homepage.scss";
import PageLayout from "../../layout/PageLayout";

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
