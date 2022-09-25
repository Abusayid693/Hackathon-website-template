// import { MDXProvider } from '@mdx-js/react';
import {Fragment} from 'react';
// import Post from '../../blog/post.mdx';
// import Content from "!babel-loader!@mdx-js/loader!../../blog/post.mdx";
// ^-- Assumes an integration is used to compile MDX to JS, such as
// `@mdx-js/esbuild`, `@mdx-js/loader`, `@mdx-js/node-loader`, or
// `@mdx-js/rollup`, and that it is configured with
// `options.providerImportSource: '@mdx-js/react'`.

const components = {
  h1: (props: any) => <h1 {...props} />
};

export const MdxContent = () => {
  return (
    <Fragment>
      <h1>cgdsjhgfchds</h1>
      <h1>cgdsjhgfchds</h1>
      <h1>cgdsjhgfchds</h1>
      <h1>cgdsjhgfchds</h1>
      <h1>cgdsjhgfchds</h1>
      <h1>cgdsjhgfchds</h1>
      <h1>cgdsjhgfchds</h1>
      <h1>cgdsjhgfchds</h1>
    </Fragment>
  );
};
