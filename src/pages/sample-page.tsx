import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageProps } from 'gatsby';
import React from 'react';

const SamplePage: React.FC<PageProps> = ({ path }) => {
  return (
    <Layout>
      <SEO title="Sample Page" />
      <h1>Sample Page</h1>

      <p>
        You are here: <strong>{path}</strong>
      </p>
    </Layout>
  );
};

export default SamplePage;
