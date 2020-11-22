import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ImgWrapper = styled.section`
  max-width: 500px;
  margin: 1.5rem 0;
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteDescriptionQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);

  const { description } = data.site.siteMetadata;

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home Page</h1>
      <p>{description}</p>

      <ImgWrapper>
        <Image />
      </ImgWrapper>
    </Layout>
  );
};

export default IndexPage;
