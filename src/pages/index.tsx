import {graphql} from 'gatsby';
import styled from 'styled-components';
import * as React from 'react';
import {Button} from '../components';


const HeadingStyles = styled.div`
width: 100%;
max-width: 100vw;
min-height: 100vh;
margin: 0;
padding: 0;
padding-top: 80px;
background:red;
`;
export default ({data}: any) => {
  return (
    <HeadingStyles>
      <h1>Hello World s</h1>
      {data.allFile.edges.map(({node}: any) => (
        <>
          <h1>
            {node.id}
          </h1>
          <h3 >{node.relativePath} </h3>
          <Button />
        </>
      ))}
    </HeadingStyles>
  );
};

// export const query = graphql`
//   query FirstQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;

export const query = graphql`
  query FirstQuery {
    allFile {
      edges {
        node {
          id
          relativePath
        }
      }
    }
  }
`;

// export const query = graphql`
//   query FirstQuery {
//     allMarkdownRemark  {
//       edges {
//         node {
//           id
//           relativePath
//         }
//       }
//     }
//   }
// `;
