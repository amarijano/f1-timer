import PropTypes from "prop-types";
import { Layout } from "antd";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
const { Content } = Layout;

function PageLayout(props) {
  const { children } = props;
  return (
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
}
PageLayout.propTypes = {
  children: PropTypes.node,
};

PageLayout.defaultProps = {
  children: null,
};

export default PageLayout;
