import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, PageProps } from 'gatsby';
import React from 'react';

type DataProps = {
  site: {
    host: string;
    port: number;
  };
};

export const query = graphql`
  {
    site {
      host
      port
    }
  }
`;

const SamplePage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  const { host, port } = data.site;

  return (
    <Layout>
      <SEO title="Sample Page" />
      <h1>Sample Page</h1>

      <p>
        Your current location is{' '}
        <strong>
          {host}:{port}
          {path}
        </strong>
      </p>
    </Layout>
  );
};

export default SamplePage;
