import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.header`
  background: ${(props) => props.theme.colors.blue};
  margin-block-end: 1.5rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1080px;
  padding: 2rem;
`;

const Title = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  margin-inline-end: 20px;
`;

interface IHeader {
  readonly siteTitle: string;
}

const Header: React.FC<IHeader> = ({ siteTitle }) => (
  <MainWrapper>
    <InnerWrapper>
      <Title>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </Title>
      <div>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/sample-page">Sample page</StyledLink>
      </div>
    </InnerWrapper>
  </MainWrapper>
);

export default Header;
