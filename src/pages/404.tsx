import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';
import React from 'react';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default NotFoundPage;
