import Head from 'next/head';

// Styles
import '../styles/about.scss';
import '../styles/banner.scss';
import '../styles/camping.scss';
import '../styles/enterprise.scss';
import '../styles/footer.scss';
import '../styles/form.scss';
import '../styles/global.scss';
import '../styles/home.scss';
import '../styles/landing.scss';
import '../styles/nav.scss';
import '../styles/partners.scss';
import '../styles/prizes.scss';
import '../styles/socials.scss';
import '../styles/team.scss';
import '../styles/typed.scss';

export default function MyApp({Component, pageProps}) {
  return (
    <div>
      <Head>
        <title>Moinho Hackathon</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta
          name="description"
          content="24 horas de programação e inovação para resolver os principais problemas de saúde e educação da nossa região."
        />
        <meta itemProp="name" content="HackathonMoinho" />
        <meta
          name="google-site-verification"
          content="bbrVrhB_49iICKc-JLwkQG6qCWAQABQpCJ_ghVXOi2E"
        />
        <meta property="og:title" content="Hackathon Moinho 2022" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.nossomoinho.com" />
        <meta
          property="og:description"
          content="24 horas de programação e inovação para resolver os principais problemas de saúde e educação da nossa região."
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
