import PageLayout from "../../layout/PageLayout";
import { RacesBody } from "src/containers/RacesBody";
import "./races.scss";

function races() {
  return (
    <>
      <PageLayout>
        <RacesBody />
      </PageLayout>
    </>
  );
}

export default races;
