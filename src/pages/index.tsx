// Libraries
import * as React from 'react';
import styled from 'styled-components';

// Style
import {Flexbox} from '../components/elements/Flexbox';

// Components
import Navbar from '../components/Navigation';
import {Calender} from '../components/Calender';

// Context API
import {CalenderContextProvider} from "../components/Context/calender.context"


const HeadingStyles = styled.div`
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  padding-top: 80px;
  background: #FFFAF2;
`;
export default () => {
  return (
    <CalenderContextProvider>
    <HeadingStyles>
      <Navbar />
      <Flexbox flexRowLg style={{padding: '0 2%'}}>
        <h1 style={{color: 'white'}}>Hello World s</h1>
        <Calender />
      </Flexbox>
    </HeadingStyles>
    </CalenderContextProvider>
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
