// Libraries
import * as React from 'react';
import styled from 'styled-components';

// Components
// import {Button} from '../components';
import Navbar from "../components/Navigation"

const HeadingStyles = styled.div`
width: 100%;
max-width: 100vw;
min-height: 100vh;
margin: 0;
padding: 0;
padding-top: 80px;
background:#121930;
`;
export default () => {
  return (
    <HeadingStyles>
      <Navbar/>
      <h1 style={{color:"white"}}>Hello World s</h1>
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

// export const query = graphql`
//   query FirstQuery {
//     allFile {
//       edges {
//         node {
//           id
//           relativePath
//         }
//       }
//     }
//   }
// `;

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
