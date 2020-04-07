import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Page Two</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>Page Two</h1>
        <p>Welcome to page 2</p>
        <p>You just hit a route that doesn&#39;t exist yet... the sadness.</p>
      </Container>
    </Layout>
  );
};

export default SecondPage;
