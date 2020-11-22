import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  margin-top: 2rem;
  font-size: ${(props) => (props.theme.screens.sm ? '.8rem' : '1rem')};
  color: ${(props) => props.theme.colors.darkGray};
  background-color: ${(props) => props.theme.colors.lightBlue};
`;

const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 2rem;
`;

const Footer: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SiteBuildTimeQuery {
      site {
        buildTime(formatString: "YYYY-MM-DD hh:mm a z")
      }
    }
  `);

  const buildTime = data.site.buildTime;

  return (
    <FooterWrapper>
      <InnerWrapper>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        on <strong>{buildTime}</strong>.
      </InnerWrapper>
    </FooterWrapper>
  );
};

export default Footer;
