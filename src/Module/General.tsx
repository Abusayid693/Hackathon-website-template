import hackathonBanner from './Assets/hackathonBanner.jpeg';
import hackathonLogo from './Assets/hackathonLogo.png';
import moinhoLogo from './Assets/moinhoLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import cfc from './Assets/sponsorsLogos/cfc.png';
import echoAR from './Assets/sponsorsLogos/echoAR.png';
import sublime from './Assets/sponsorsLogos/sublime.png';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

const TOP_SECTION = {
  BANNER: hackathonBanner,
  TITLE: 'Moinho',
  Typed_effect: [
    '24 horas de evento',
    '24 horas de aprendizado',
    '24 horas de diversão'
  ],
  LONG_DESCRIPTION:
    '24 horas de programação e inovação para resolver os principais problemas de saúde e educação da nossa região',
  SHORT_DESCRIPTION: 'Dias 12 e 13 de Novembro no Moinho Zona Norte',
  ACTION_BTN: '#form',
  LOGO: moinhoLogo
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/limbohacks/',
  discord: 'https://discord.com/invite/8XJSzmtWPp',
  linkedin: 'https://www.linkedin.com/company/limbo-hacks/',
  twitter: 'https://twitter.com/HacksLimbo',
  devpost: 'https://limbo-hacks-12968.devpost.com/',
  email: 'mailto:hello@limbohacks.tech',
  mail: 'hello@limbohacks.tech'
};

const MIDDLE_SECTION = {
  TITLE: 'O Hackathon',
  LONG_DESCRIPTION:
    'Nosso hackathon será colaborativo, onde todos juntos buscam solucionar os problemas reais que serão apresentados no inicio do evento.',
  AGENDA_TITLE: 'Agenda (preliminar)',
  AGENDA: [
    {
      TITLE: 'Sábado, 12 de Novembro',
      DESCRIPTION:
        'Abriremos o espaço para o credenciamento pela manhã, e após o almoço teremos a abertura oficial do evento, com a largada para o Hackathon logo em seguida.'
    },
    {
      TITLE: 'Ideias, projetos e programação',
      DESCRIPTION:
        '24 horas para pensar em soluções, propor projetos, montar equipes e desenvolver.'
    },
    {
      TITLE: 'Domingo, 13 de Novembro',
      DESCRIPTION:
        'Antes do almoço fecharemos o envio de projetos, com apresentação de cada projeto desenvolvido. Em seguida haverá a premiação dos melhores projetos e de todos os demais participantes.'
    }
  ],
  LOGO: hackathonLogo
};

const ENTERPRISE_SECTION = {
  TITLE: 'Hora de empreender!',
  SHORT_DESCRIPTION: 'Os  melhores projetos receberão nosso apoio:',
  TOPICS: [
    {
      ICON: <i className="fas fa-3x fa-gift"></i>,
      DESCRIPTION: (
        <p className="topicText">
          Apoio do moinho com acesso ao{' '}
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="#a"
          >
            Pacote Moinho
          </a>{' '}
          gratuito por seis meses
        </p>
      )
    },
    {
      ICON: <i className="fas fa-3x fa-lightbulb"></i>,
      DESCRIPTION: (
        <p className="topicText">
          Validação da ideia pelas secretarias de Saúde e Educação da Prefeitura
          de Juiz de Fora
        </p>
      )
    },
    {
      ICON: <i className="fas fa-3x fa-hand-holding-usd"></i>,
      DESCRIPTION: (
        <p className="topicText">Apresentação para possíveis investidores</p>
      )
    }
  ]
};

const EVENT_SECTION = {
  TITLE: 'O evento',
  DESCRIPTION:
    'Um hackathon não é só uma maratona de programação e inovação, é também um espaço repleto de pessoas inteligentes, nerds, pensadores, empreenderores, estudantes, de todas as raças e classes sociais. Este grande evento terá diversas atividades para informar, entreter e motivar os participantes. Dentre elas:',
  ACTIVITIES: [
    [
      {
        icon: 'fas fa-award',
        title: 'Just Dance Now'
      },
      {
        icon: 'fas fa-award',
        title: 'Roda de conversa com empreendedores'
      },
      {
        icon: 'fas fa-award',
        title: 'Interação com mentores'
      }
    ],
    [
      {
        icon: 'fas fa-award',
        title: 'Competições paralelas'
      },
      {
        icon: <i className="fa-sharp fa-solid fa-om"></i>,
        title: 'Prática de Yoga'
      },
      {
        icon: 'fas fa-award',
        title: 'Espaço relax'
      }
    ]
  ]
};

const CAMPING_PARTY_SECTION = {
  imgs: [],
  DESCRIPTION:
    'Na hora que bater aquele cansaço.. o que pode ser melhor que deitar na sua barraca e tirar um cochilo? Teremos um camping em uma área reservada do evento, um espaço para desligar e descansar.'
};

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'overall First',
      content:
        'First Overall prize will be given to a project that outstands all other submissions'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: 'overall Second',
      content:
        'Second Overall prize will be given to the second best project of the hackathon'
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: 'Third Second',
      content:
        'Best third overall project of the hackathon will win some awesome prizes'
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: 'Best Solo',
      content:
        'You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team'
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: ' Best Beginner',
      content: 'Your project will qualify for this category if atleast 50% '
    },
    {
      icon: <i className=" fifth fa-3x fas fa-book-open"></i>,
      type: 'Best UI/UX',
      content: 'Project with most creative designs will be UI/UX track'
    }
  ],
  [
    //Array 3
    {
      icon: <i className="fas fa-4x sixth fa-male"></i>,
      type: 'Best Web App with Qoom',
      content: 'Must use qoom in your project to win this category'
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: 'More prizes',
      content: 'More prizes will be revealed later'
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsors = [
  [
    {
      src: cfc,
      name: 'Prefeitura de Juiz de Fora',
      link: 'https://www.pjf.mg.gov.br/'
    },
    {src: sublime, name: 'GDGJF', link: 'https://gdgjf.github.io/'},
    {src: echoAR, name: 'Zero40', link: 'https://zero40.com.br/'}
  ] //Array 1
];

const FORM_SECTION = {
  TITLE: 'Seja avisado quando abrirem as inscrições'
};

const FOOTER = {
  realization: {
    name: 'Moinho',
    link: 'https://www.nossomoinho.com/'
  },
  organizer: {
    name: 'Tiago Gouvêa',
    link: 'https://www.linkedin.com/in/tiagogouvea/'
  }
};

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  ENTERPRISE_SECTION,
  EVENT_SECTION,
  SOCIALS,
  Prizeinfo,
  FORM_SECTION,
  sponsors,
  FOOTER
};
