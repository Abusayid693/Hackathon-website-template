const hackathonBanner = '/Assets/hackathonBanner.jpg';
const hackathonLogo = '/Assets/hackthon_branco.png';

// Camping
const camping1 = '/Assets/Camping/camping_1.jpg';

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
  ACTION_BTN: '#subscription',
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
    'Um hackathon é um grande evento cultural, onde nerds, estudantes, programadores, empreendedores, acadêmicos e demais pessoas falam, vivem e criam inovação. Muito além de código, teremos outras atividades, veja algumas delas.',
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
    ],
    [
      {
        icon: <i className="fifth fas fa-4x fa-chess-knight"></i>,
        title: 'Jogos de tabuleiro'
      }
    ]
  ]
};

const CAMPING_PARTY_SECTION = {
  img: camping1,
  LONG_DESCRIPTION:
    'Se bater aquele cansaço, o que pode ser melhor que deitar na sua barraca e tirar um cochilo? Teremos um camping em uma área reservada do evento, um espaço para desligar e descansar.',
  SHORT_DESCRIPTION:
    'Sinta-se a vontade para leva sua barraca e colchão e poder recarregar as baterias quando necessário.'
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

const MENTORS_SECTION = {
  TITLE: 'Mentores',
  DESCRIPTION:
    'Você não estará sozinho! Contará com o suporte e apoio de mentores com longa experiência nas áreas de saúde, educação, design e tecnologia',
  MENTOR_ACTION: {
    PRE: 'Se você acredita que pode auxiliar os times a alcançarem o sucesso, se ofereça para ser também um de nossos mentores',
    TEXT: 'Quero ser um mentor',
    LINK: 'https://forms.gle/'
  },
  VOLUNTEER_ACTION: {
    TEXT: 'Quero ser um voluntário',
    LINK: 'https://forms.gle/8yGjTd88aSv4dp5C6'
  },
  MENTORS: [
    {
      NAME: 'Anderson Mattozinhos',
      SRC: 'https://media-exp1.licdn.com/dms/image/D4E03AQF-tVtaJjir6Q/profile-displayphoto-shrink_200_200/0/1632371269187?e=1672272000&v=beta&t=pOQi7h9MNe1_PQTMr0A07Ya94W6E1AGYYCbyhnzF-gE',
      DESCRIPTION: 'Sócio Gerente',
      COMPANY: 'Ultrimagem Juiz de Fora',
      LINKEDIN: 'https://www.linkedin.com/in/mattozinhos/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Roberto Fortuci',
      SRC: 'https://media-exp1.licdn.com/dms/image/C4E03AQG7dJpTcJhIIg/profile-displayphoto-shrink_200_200/0/1538396064117?e=1672272000&v=beta&t=GTD2zJwkAvbBc8ZekWb-ex2M0Sphy6hfb_OupXD7x_U',
      DESCRIPTION: 'Coordenador de TI',
      COMPANY: 'Laboratório Côrtes Villela',
      LINKEDIN: 'https://www.linkedin.com/in/robertofortucilopes/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Gustavo Oliveira',
      SRC: 'https://media-exp1.licdn.com/dms/image/C4D03AQHjYitJmiuUzg/profile-displayphoto-shrink_200_200/0/1516279947889?e=1672272000&v=beta&t=Tlox70kS6xKRBHdKnxBF-0127_6jgDd71B5XZSnU34Y',
      DESCRIPTION: 'Co-Founder',
      COMPANY: 'Smart Retail',
      LINKEDIN: 'https://www.linkedin.com/in/gugaoliveira/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Leandro Simões',
      SRC: 'https://media-exp1.licdn.com/dms/image/D4D03AQGP3cHBxlfxoA/profile-displayphoto-shrink_200_200/0/1663348110128?e=1672272000&v=beta&t=dvSiJDLpdCTD5mJQlO_w8ByGJfCowoCM4ZQ3jlyHkVI',
      DESCRIPTION: 'Professor and Software Developer',
      COMPANY: 'Driven Education',
      LINKEDIN: 'https://www.linkedin.com/in/lesimoess/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Leandro Campos',
      SRC: 'https://media-exp1.licdn.com/dms/image/C4D03AQGq17_naGMkng/profile-displayphoto-shrink_200_200/0/1620149651761?e=1672272000&v=beta&t=_y_37oj3NyKpAMTFF6JNB3LqgkoFgH33r85ThuY9VwY',
      DESCRIPTION: 'CEO',
      COMPANY: 'Nvoip',
      LINKEDIN: 'https://www.linkedin.com/in/leandro-campos/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Daniela Fabri',
      SRC: 'https://media-exp1.licdn.com/dms/image/D4D03AQHGbcVh4dVQvw/profile-displayphoto-shrink_200_200/0/1665960214058?e=1672272000&v=beta&t=I8le4BEURYpCgNcmH1RvPYMjvjkpAcO65XAFFSnfrcQ',
      DESCRIPTION: 'Analista',
      COMPANY: 'Sebrae-MG',
      LINKEDIN:
        'https://www.linkedin.com/in/daniela-fabri-ferreira-mba-a7603989/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Débora Marques',
      SRC: 'https://media-exp1.licdn.com/dms/image/C4D03AQG3EOeLpvruOg/profile-displayphoto-shrink_200_200/0/1618661428591?e=1672272000&v=beta&t=uENbAD7HanMSKEekcQp2PfLN-6RBjKEMfwxhuFZp79s',
      DESCRIPTION: 'Planning and Management Manager',
      COMPANY: 'UFJF',
      LINKEDIN: 'https://www.linkedin.com/in/débora-marques-28786b49/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Rodrigo Nunes',
      SRC: 'https://media-exp1.licdn.com/dms/image/C4D03AQF6xoT-B6JhrQ/profile-displayphoto-shrink_200_200/0/1530292900831?e=1672272000&v=beta&t=ud2KhJq_G9-jpODb4-TtBAFG3Kfp3BnZUanIvWzF4uw',
      DESCRIPTION: 'Co-Founder',
      COMPANY: 'Reportei.com',
      LINKEDIN: 'https://www.linkedin.com/in/fnnrodrigo/',
      GITHUB: '',
      INSTAGRAM: ''
    }
  ],
  OTHER_MENTORS: [
    {
      NAME: 'Yuri Thielmann',
      SRC: 'https://media-exp1.licdn.com/dms/image/C5603AQEU99bGnhmy_g/profile-displayphoto-shrink_200_200/0/1517037262843?e=1672272000&v=beta&t=aKmdIjOaeNyrqhsET-rgwFfapTHezC1ukWcnTQQm3xM',
      DESCRIPTION: 'Developer senior',
      COMPANY: 'CI&T',
      LINKEDIN: 'https://www.linkedin.com/in/yuri-duque/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Humberto Sales',
      SRC: 'https://media-exp1.licdn.com/dms/image/C4E03AQHruN7VHESoVA/profile-displayphoto-shrink_200_200/0/1585834425185?e=1672272000&v=beta&t=GEqh3hkpgX2qAf3O-gUcBVaAfkPXDXj1f9LBI1MNYQI',
      DESCRIPTION: 'Head de Inovação',
      COMPANY: 'Quokka',
      LINKEDIN: 'https://www.linkedin.com/in/humbertosalesdealmeida/',
      GITHUB: '',
      INSTAGRAM: ''
    }
  ],
  PARTNERS: [
    {
      NAME: 'Carlos Alexandre',
      SRC: 'https://media-exp1.licdn.com/dms/image/C4D03AQFFRVZohEzSLQ/profile-displayphoto-shrink_200_200/0/1617742581518?e=1672272000&v=beta&t=J8IcWb7LfMdBbcVnGp9b5Zc2Xyj2oqzU4JvOq8tpnYQ',
      LINKEDIN: 'https://www.linkedin.com/in/carlosalexandre94/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Douglas Novato',
      SRC: 'https://media-exp1.licdn.com/dms/image/C5603AQH47ynuwrY_1g/profile-displayphoto-shrink_200_200/0/1578078703662?e=1672272000&v=beta&t=XuuVfvMrAhbfrbAEdgGK7FQUtQtj5g5grWPrJ0MtvHI',
      LINKEDIN: 'https://www.linkedin.com/in/douglasabnovato/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Vinicius Carlos',
      SRC: 'https://media-exp1.licdn.com/dms/image/C4E03AQFNcF05elAjDA/profile-displayphoto-shrink_200_200/0/1649509770307?e=1672272000&v=beta&t=gjdwopoYULfA12agHnDS1Q07-fmTzia3W3u05Ys-MZE',
      LINKEDIN: 'https://www.linkedin.com/in/vinicius-carlos/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Giordano Bruno',
      SRC: 'https://media-exp1.licdn.com/dms/image/C4D03AQFknLEtKZQ4Ig/profile-displayphoto-shrink_200_200/0/1516545273931?e=1672272000&v=beta&t=_owR0bgVPMB64wGqBENWZInmq7tHvaUbviIsenf0HCo',
      LINKEDIN: 'https://www.linkedin.com/in/giordano-bruno-vieira-88699614/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Ramon Xavier',
      SRC: 'https://media-exp1.licdn.com/dms/image/C4D03AQFu48_gAOb_Mg/profile-displayphoto-shrink_200_200/0/1596754239475?e=1672272000&v=beta&t=BzXAObIRccKTYMRBmRMEcnLz8GNTXqw2SBShsRpQZeE',
      LINKEDIN: 'https://www.linkedin.com/in/ramonxavier/',
      GITHUB: '',
      INSTAGRAM: ''
    }
  ]
};

const FORM_SECTION = {
  TITLE: 'Seja avisado quando abrirem as inscrições',
  IMG: hackathonBanner
};

const SUBSCRIPTION_SECTION = {
  TITLE: 'As inscrições estão abertas!',
  DESCRIPTION:
    'Os ingressos serão liberados em dois ou três lotes para participação. O número de vagas é limitado em quatro categorias:',
  VALUE:
    'O valor da inscrição no primeiro lote é de R$80,00 inteira e R$40,00 para estudantes.',
  DRAW: 'Não perca essa oportunidade de conhecer gente nova, ficar imerso em cultura inovadora, se divertir, ajudar a cidade e fazer história!',
  CATEGORIES: [
    'Desenvolvedores',
    'Empreendedores',
    'Estudantes',
    'Entusiastas'
  ],
  SUBSCRIBE_LINK:
    'https://www.sympla.com.br/hackaton-de-inovacao-social-de-juiz-de-fora__1766078',
  TERMS_LINK: ''
};

const FOOTER = {
  realization: {
    name: 'Moinho',
    link: 'https://www.nossomoinho.com/'
  },
  organization: {
    name: 'Tiago Gouvêa',
    link: 'https://www.linkedin.com/in/tiagogouvea/'
  },
  github: {
    name: 'GitHub',
    link: 'https://github.com/TiagoGouvea/hackathon-moinho-website-template'
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
  SUBSCRIPTION_SECTION,
  sponsors,
  MENTORS_SECTION,
  FOOTER
};
