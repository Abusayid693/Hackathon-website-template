import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.css';

// Styles
import '../styles/about.scss';
import '../styles/banner.scss';
import '../styles/camping.scss';
import '../styles/prizes.scss';
import '../styles/enterprise.scss';
import '../styles/footer.scss';
import '../styles/form.scss';
import '../styles/global.scss';
import '../styles/home.scss';
import '../styles/landing.scss';
import '../styles/nav.scss';
import '../styles/partners.scss';
import '../styles/activities.scss';
import '../styles/socials.scss';
import '../styles/team.scss';
import '../styles/typed.scss';
import '../styles/collapse.scss';
import '../styles/subscription.scss';
import '../styles/subscriptionClosed.scss';
import '../styles/mentors.scss';
import '../styles/low_code.scss';
import '../styles/not_programmer.scss';
import '../styles/online-meetings.scss';

export default function MyApp({Component, pageProps}) {
  return (
    <div>
      <Head>
        <title>Hackathon de Inovação Social de Juiz de Fora, no Moinho</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta
          name="description"
          content="Ajude a resolver os principais problemas de saúde e educação usando tecnologia e inovação, nesta maratona de programação de 24 horas!"
        />
        <meta itemProp="name" content="HackathonMoinho" />
        <meta
          name="google-site-verification"
          content="bbrVrhB_49iICKc-JLwkQG6qCWAQABQpCJ_ghVXOi2E"
        />
        <meta property="og:image" content="https://i.imgur.com/cWY4Hlk.png" />
        <meta
          property="og:title"
          content="Hackathon de Inovação Social de Juiz de Fora, no Moinho"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Ajude a resolver os principais problemas de saúde e educação usando tecnologia e inovação, nesta maratona de programação de 24 horas!"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
