import {Head, Html, Main, NextScript} from 'next/document';
import Script from 'next/script';

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
        {/*<!-- Google tag (gtag.js) -->*/}
        <Script
          async
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-HTWRB8Q6KD"
        />
        <Script id="analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HTWRB8Q6KD');
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
