// Libraries
import * as React from 'react';
import styled from 'styled-components';

// Style
import {Flexbox} from '../components/elements/Flexbox';

// Components
import Navbar from '../components/Navigation';
import {Calender} from '../components/Calender';

const HeadingStyles = styled.div`
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  padding-top: 80px;
  background: #121930;
`;
export default () => {
  return (
    <HeadingStyles>
      <Navbar />
      <Flexbox flexRowLg style={{padding: '0 2%'}}>
        <h1 style={{color: 'white'}}>Hello World s</h1>
        <Calender />
      </Flexbox>
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
