import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { useMemo } from 'react';

interface IImageProps {
  readonly src?: string;
}

const Image: React.FC<IImageProps> = ({ src = 'web-dev.png', ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const match = useMemo(
    () =>
      data.allFile.edges.find(
        ({ node }: { node: any }) => src === node.relativePath
      ),
    [data, src]
  );

  return <Img fluid={match.node.childImageSharp.fluid} {...props} />;
};

export default Image;
