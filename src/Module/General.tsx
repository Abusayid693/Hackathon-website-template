const hackathonBanner = '/Assets/hackathonBanner.jpg';
const hackathonLogo = '/Assets/hackthon_branco.png';

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
  SHORT_DESCRIPTION: 'Dias 12 e 13 de Novembro no Moinho Zona Norte',
  ACTION_BTN: '#form',
  LOGO: hackathonLogo
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
  COLLAPSE_TITLE_PARAGRAPHS: [
    'O Hackathon contará com equipes formadas por estudantes, profissionais e empreendedores, visando desenvolver projetos de tecnologia focadas em demanda reais nas áreas de saúde e educação , que possam deixar um legado para a cidade. ',
    'As equipes que mais se destacarem poderão ser convidadas para o programa Moinho Lab por seis meses, incluindo coworking, eventos exclusivos e muito networking. Seus projetos serão validados no mundo real, e ao final deste período poderão ser apresentados para possíveis investidores.'
  ],
  COLLAPSE_DESCRIPTION_PARAGRAPHS: [
    'Nos dias 3 e 4 de novembro acontecerá o **festival de inovação social de Juiz de Fora,** com foco nas áreas de **saúde** e **educação**. Neste evento serão apresentadas demandas e oportunidades da Zona Norte e cidade, bem como discutidas possíveis soluções, que servirão de insights para o Hackathon.',
    'Anteriormente ao  festival, jovens da Zona Norte farão um levantamento dos problemas da região. Durante o festival acontecerão mesas redondas com a participação de empresas, especialistas nas áreas e da prefeitura.',
    'Na esteira das demandas e ideas, virá o Hackathon nos dias 19 e 20 de novembro, com equipes formadas por estudantes, profissionais e empreendedores, visando desenvolver projetos de tecnologia focadas nas demanda reais, que possam deixar um legado para a cidade.',
    'As soluções desenvolvidas serão testadas nos meses seguintes ao hackathon pelas secretarias de saúde e educação juntamente com possíveis empresas interessadas, com objetivo de validar a ideia em campo, mostrando assim o seu valor.',
    'Após o hackathon, as equipes que mais se destacarem poderão ser convidadas a ter acesso completo ao programa Moinho Lab por seis meses, incluindo coworking, eventos exclusivos e muito networking. Ao final deste período os projetos poderão ser apresentados para possíveis investidores.'
  ],
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
        icon: <i className="first fas fa-4x fa-walking"></i>,
        title: 'Just Dance Now'
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
        icon: <i className="fourth fas fa-4x fa-user-astronaut"></i>,
        title: 'Competições paralelas'
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
