import PropTypes from "prop-types";
import { Layout } from "antd";
const { Content } = Layout;

function PageLayout(props) {
  const { children } = props;
  return (
    <Layout>
      <Content>{children}</Content>
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
