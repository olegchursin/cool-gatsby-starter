import Footer from './footer';
import Header from './header';
import { GlobalStyles, theme } from '../styles';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const GlobalWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
`;

const FooterWrapper = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: 1080px;
  padding: 2rem;
`;

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyles />
      <GlobalWrapper>
        <div>
          <Header siteTitle={title || `Title`} />
          <Main>{children}</Main>
        </div>

        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </GlobalWrapper>
    </ThemeProvider>
  );
};

export default Layout;
