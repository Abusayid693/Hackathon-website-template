/*---------------------------------------------------------------------------------------------
 *  This higher order component formats the data received from mdx files using graphQL
 *  query into desired JSON object to be used by Calender component to display events
 *  to users, in any case you dont have to mess with this file
 *  
 *  You can see the data in graphQL playground using the following query : --> http://localhost:8000/___graphql
 *    query MyQuery {
 *      allMdx(filter: {fileAbsolutePath: {regex: "/content/schedule/"}}) {
 *        edges {
 *          node {
 *            frontmatter {
 *              title
 *              day
 *              timings
 *              content
 *              organizer
 *              role
 *              company
 *              image
 *            }
 *          }
 *        }
 *      }
 *    }
 *--------------------------------------------------------------------------------------------*/

import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {Calender} from './calender.component';


// @ts-ignore
const CalenderDataLogic = ({data}, {...props}) => {
  console.log('How may time rendeing');

  // @ts-ignore
  const temporaryStructure = [];

  for (let i = 0; i < data.allMdx.edges.length; i++) {
    console.log(`Mdx file ${i} : ${data.allMdx.edges[i].node.frontmatter.day}`);
    const day = data.allMdx.edges[i].node.frontmatter.day;
    let label = 1;
    // @ts-ignore
    temporaryStructure.some(function (entry, i) {
      if (entry.day === day) {
        // @ts-ignore
        temporaryStructure[i].events.push({
          title: data.allMdx.edges[i].node.frontmatter.title,
          timings: data.allMdx.edges[i].node.frontmatter.timings,
          content: data.allMdx.edges[i].node.frontmatter.content,
          image: data.allMdx.edges[i].node.frontmatter.image,
          organizer: data.allMdx.edges[i].node.frontmatter.organizer,
          role: data.allMdx.edges[i].node.frontmatter.role,
          company: data.allMdx.edges[i].node.frontmatter.company,
        });
        console.log('Dublicate found', i);
        label = 0;
      }
    });

    if (!label) continue;

    let events = [
      {
        title: data.allMdx.edges[i].node.frontmatter.title,
        timings: data.allMdx.edges[i].node.frontmatter.timings,
        content: data.allMdx.edges[i].node.frontmatter.content,
        image: data.allMdx.edges[i].node.frontmatter.image,
        organizer: data.allMdx.edges[i].node.frontmatter.organizer,
        role: data.allMdx.edges[i].node.frontmatter.role,
        company: data.allMdx.edges[i].node.frontmatter.company,
      },
    ];

    const pushStruct = {
      day: data.allMdx.edges[i].node.frontmatter.day,
      events: events,
    };
    temporaryStructure.push(pushStruct);
  }

  temporaryStructure.forEach(element =>
    console.log(`Temporary struct :${element.events.length}`),
  );
  return <Calender data={temporaryStructure} {...props} />;
};

// @ts-ignore
export default function MyCalender(props) {
  console.log('How may time rendeing');
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allMdx(filter: {fileAbsolutePath: {regex: "/content/schedule/"}}) {
            edges {
              node {
                frontmatter {
                  title
                  day
                  timings
                  content
                  organizer
                  role
                  company
                  image
                }
              }
            }
          }
        }
      `}
      render={data => <CalenderDataLogic data={data} {...props} />}
    />
  );
}
