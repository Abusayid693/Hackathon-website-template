import {Head, Html, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="https://i.imgur.com/KLinaFO.png"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <script
          src="https://kit.fontawesome.com/fc6a27a00b.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
