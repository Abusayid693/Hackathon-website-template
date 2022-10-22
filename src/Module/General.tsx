const hackathonBanner = '/Assets/hackathonBanner.jpeg';
const hackathonLogo = '/Assets/hackathonLogo.png';
const moinhoLogo = '/Assets/moinhoLogo.png';

// Camping
const camping1 = '/Assets/Camping/camping_1.jpeg';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

const gdgjf = '/Assets/sponsorsLogos/gdgjf.png';
const pfj = '/Assets/sponsorsLogos/pjf.png';
const zero40 = '/Assets/sponsorsLogos/zero40.png';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

const TOP_SECTION = {
  BANNER: hackathonBanner,
  TITLE: '1º Festival de Inovação Social',
  Typed_effect: [
    '24 horas de evento',
    '24 horas de aprendizado',
    '24 horas de diversão'
  ],
  LONG_DESCRIPTION:
    '24 horas de programação e inovação para resolver os principais problemas de saúde e educação da nossa região',
  SHORT_DESCRIPTION: 'Dias 19 e 20 de Novembro no Moinho Zona Norte',
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
  AGENDA_TITLE: 'Agenda simplificada',
  AGENDA: [
    {
      TITLE: 'Sábado, 19 de Novembro',
      DESCRIPTION:
        'Abriremos o espaço para o credenciamento pela manhã, e após o almoço teremos a abertura oficial do evento, com a largada para o Hackathon logo em seguida.'
    },
    {
      TITLE: 'Ideias, projetos e programação',
      DESCRIPTION:
        '24 horas para pensar em soluções, propor projetos, montar equipes e desenvolver inovações para melhorar nossa realiadade.'
    },
    {
      TITLE: 'Domingo, 20 de Novembro',
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
        icon: <i className="fourth fas fa-4x fa-user-astronaut"></i>,
        title: 'Competições paralelas'
      }, 
      {
        icon: <i className="second fas fa-4x fa-users"></i>,
        title: 'Roda de conversa com empreendedores'
      },
      {
        icon: <i className="third fas fa-4x fa-chalkboard-teacher"></i>,
        title: 'Interação com mentores'
      }
    ],
    [
      {
        icon: <i className="first fas fa-4x fa-walking"></i>,
        title: 'Just Dance Now'
      },
      {
        icon: <i className="third fas fa-4x fa-om"></i>,
        title: 'Prática de Yoga'
      },
      
      {
        icon: <i className="sixth fas fa-4x fa-couch"></i>,
        title: 'Espaço relax'
      }
    ]
  ]
};

const CAMPING_PARTY_SECTION = {
  imgs: [camping1],
  DESCRIPTION:
    'Na hora que bater aquele cansaço.. o que pode ser melhor que deitar na sua barraca e tirar um cochilo? Teremos um camping em uma área reservada do evento, um espaço para desligar e descansar.'
};

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsors = [
  [
    {
      src: pfj,
      name: 'Prefeitura de Juiz de Fora',
      link: 'https://www.pjf.mg.gov.br/'
    },
    {src: gdgjf, name: 'GDGJF', link: 'https://gdgjf.github.io/'},
    {src: zero40, name: 'Zero40', link: 'https://zero40.com.br/'}
  ]
];

const FORM_SECTION = {
  TITLE: 'Seja avisado quando abrirem as inscrições',
  IMG: hackathonBanner
};

const FOOTER = {
  realization: {
    name: 'Moinho',
    link: 'https://www.nossomoinho.com/'
  },
  organization: {
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
  CAMPING_PARTY_SECTION,
  FORM_SECTION,
  sponsors,
  FOOTER
};
