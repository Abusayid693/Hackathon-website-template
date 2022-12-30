const hackathonBanner = '/Assets/hackathonBanner.png';
const hackathonLogo = '/Assets/hackthon_branco.png';

// Camping
const camping1 = '/Assets/Camping/camping_1.jpg';

// Prizes
const firstPrize = '/Assets/prizes/mouse.png';
const secondPrize = '/Assets/prizes/cafeteira.png';
const thirdPrize = '/Assets/prizes/teclado.png';
const fourthPrize = '/Assets/prizes/headset.png';
const fifthPrize = '/Assets/prizes/fone.png';
const sixthPrize = '/Assets/prizes/mouse_pad.jpg';

const lowCode = '/Assets/low_code.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

const gdgjf = '/Assets/sponsorsLogos/gdgjf.png';
const pfj = '/Assets/sponsorsLogos/pjf.png';
const zero40 = '/Assets/sponsorsLogos/zero40.png';
const critt = '/Assets/sponsorsLogos/critt.jpeg';
const sebrae = '/Assets/sponsorsLogos/sebrae.png';

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
    '24 horas de diversão',
    '24 horas de programação',
    '24 horas de tecnologia',
    '24 horas de inovação'
  ],
  LONG_DESCRIPTION:
    '24 horas de programação e inovação para projetar soluções para problemas de saúde e educação da nossa cidade',
  SHORT_DESCRIPTION: 'Dias 21 e 22 de Janeiro no Moinho',
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
    'O Hackathon contará com equipes formadas por estudantes, profissionais e empreendedores, visando desenvolver projetos de tecnologia focadas em demanda reais nas áreas de saúde e educação, que possam deixar um legado para a cidade. ',
    '“As equipes que mais se destacarem serão convidadas para compor a comunidade do Hub de Inovação do Moinho por seis meses, incluindo o acesso ao coworking, a eventos e a muito networking. O objetivo é que os projetos sejam validados no mundo real e, ao final deste período, poderão ser apresentados para possíveis investidores. '
  ],
  COLLAPSE_DESCRIPTION_PARAGRAPHS: [
    'Nos dias 3 e 4 de novembro acontecerá o **festival de inovação social de Juiz de Fora,** com foco nas áreas de **saúde** e **educação**. Neste evento serão apresentadas demandas e oportunidades da Zona Norte e cidade, bem como discutidas possíveis soluções, que servirão de insights para o Hackathon. ',
    'Anteriormente ao  festival, jovens da Zona Norte farão um levantamento dos problemas da região. Durante o festival acontecerão mesas redondas com a participação de empresas, especialistas nas áreas e da prefeitura. ',
    'Na esteira das demandas e ideas, virá o Hackathon nos dias 21 e 22 de Janeiro, com equipes formadas por estudantes, profissionais e empreendedores, visando desenvolver projetos de tecnologia focadas nas demanda reais, que possam deixar um legado para a cidade. ',
    'As soluções desenvolvidas serão testadas nos meses seguintes ao hackathon pelas secretarias de saúde e educação juntamente com possíveis empresas interessadas, com objetivo de validar a ideia em campo, mostrando assim o seu valor. ',
    'Após o hackathon, as equipes que mais se destacarem poderão ser convidadas a ter acesso completo ao programa Moinho Lab por seis meses, incluindo coworking, eventos exclusivos e muito networking. Ao final deste período os projetos poderão ser apresentados para possíveis investidores. '
  ],
  AGENDA_TITLE: 'Agenda',
  AGENDA: [
    {
      TITLE: 'Sábado, 21 de Janeiro',
      DESCRIPTION:
        'Abriremos o espaço para o credenciamento pela manhã, e após o almoço teremos a abertura oficial do evento, com a largada para o Hackathon logo em seguida.'
    },
    {
      TITLE: 'Ideias, projetos e programação',
      DESCRIPTION:
        '24 horas para pensar em soluções, propor projetos, montar equipes e desenvolver inovações para melhorar nossa realiadade.'
    },
    {
      TITLE: 'Domingo, 22 de Janeiro',
      DESCRIPTION:
        'Antes do almoço fecharemos o envio de projetos, com apresentação de alguns dos projetos desenvolvidos. Em seguida haverá a premiação dos melhores projetos e de todos os demais participantes.'
    }
  ],
  AGENDA_FOOTER: 'Os horários exatos ainda serão divulgados',
  LOGO: hackathonLogo
};

const ENTERPRISE_SECTION = {
  TITLE: 'Hora de empreender!',
  LONG_DESCRIPTION:
    'Imagine como seria se um dos nossos projetos seguisse adiante e se tornasse uma solução amplamente utilizada na cidade, estado e até no pais? Estamos aqui pra isso!',
  SHORT_DESCRIPTION: 'Os melhores projetos receberão nosso apoio',
  TOPICS: [
    {
      ICON: <i className="fas fa-3x fa-gift"></i>,
      DESCRIPTION: (
        <p className="topicText">
          Participação no{' '}
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.nossomoinho.com/moinho-lab-coworking/"
          >
            Hub de Inovação do Moinho
          </a>{' '}
          por 6 meses
        </p>
      )
    },
    {
      ICON: <i className="fas fa-3x fa-lightbulb"></i>,
      DESCRIPTION: (
        <p className="topicText">
          Busca para <span className="link">validar</span> a ideia junto às
          organizações parceiras do festival
        </p>
      )
    },
    {
      ICON: <i className="fas fa-3x fa-hand-holding-usd"></i>,
      DESCRIPTION: (
        <p className="topicText">
          Possibilidade de apresentação do projeto para{' '}
          <span className="link">investidores</span>
        </p>
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
        icon: <i className="second fas fa-4x fa-users"></i>,
        title: 'Roda de conversa com empreendedores'
      },
      {
        icon: <i className="third fas fa-4x fa-chalkboard-teacher"></i>,
        title: 'Interação com mentores'
      },
      {
        icon: <i className="first fas fa-4x fa-walking"></i>,
        title: 'Just Dance Now'
      }
    ],
    [
      {
        icon: <i className="third fas fa-4x fa-om"></i>,
        title: 'Prática de Yoga'
      },

      {
        icon: <i className="sixth fas fa-4x fa-couch"></i>,
        title: 'Espaço relax'
      },
      {
        icon: <i className="fifth fas fa-4x fa-chess-knight"></i>,
        title: 'Jogos de tabuleiro'
      }
    ],
    [
      {
        icon: <i className="sixth fas fa-4x fa-dumbbell"></i>,
        title: 'Momento funcional'
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

const LOW_CODE_SECTION = {
  TITLE: 'No-code e low-code',
  SRC: lowCode,
  DESCRIPTION:
    'Queremos te incentivar ao máximo a participar, se expressar e solucionar problemas com a tecnologia. Por isso permitiremos projetos desenvolvidos usando ferramentas no-code ou low-code. Ou seja, não é preciso ser programador para implementar algo realmente incrível!'
};

const NOT_PROGRAMMER_SECTION = {
  TITLE: 'Não é programador?',
  SHORT_DESCRIPTION: 'Entusiastas são bem vindos!',
  LONG_DESCRIPTION: (
    <>
      <p>
        Os times serão formados por um desenvolvedor, um empreendedor e um
        estudante ao menos, mas podem ter ainda outros 3 membros de outras áreas
        quaisquer.
      </p>
      <p>
        Além disso, criamos a inscrição de &quot;entusiasta&quot; , que permite
        você participar do evento sem necessariamente competir. Te dá a opção de
        vivenciar o evento, sentir a energia e criar conexões sem precisar
        entregar algo em 24 horas.
      </p>
      <p>Curtiu? Então se inscreva agora.</p>
    </>
  ),
  ACTION: {
    LABEL: 'Me inscrever agora',
    LINK: '#subscription'
  }
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
  ],
  [
    {
      src: critt,
      name: 'CRITT',
      link: 'https://www2.ufjf.br/critt/'
    },
    {
      src: sebrae,
      name: 'Sebrae',
      link: 'https://sebrae.com.br/sites/PortalSebrae/ufs/mg?codUf=14'
    }
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
  SUPPORTERS_DESCRIPTION:
    'Apenas com o apoio destas pessoas incríveis é possível fazer um evento tão especial!',
  VOLUNTEER_ACTION: {
    TEXT: 'Quero ser um voluntário',
    LINK: 'https://forms.gle/8yGjTd88aSv4dp5C6'
  },
  MENTORS: [
    {
      NAME: 'Anderson Mattozinhos',
      SRC: '/Assets/People/anderson.jpeg',
      DESCRIPTION: 'Sócio Gerente',
      COMPANY: 'Ultrimagem Juiz de Fora',
      LINKEDIN: 'https://www.linkedin.com/in/mattozinhos/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Roberto Fortuci',
      SRC: '/Assets/People/roberto.jpeg',
      DESCRIPTION: 'Coordenador de TI',
      COMPANY: 'Laboratório Côrtes Villela',
      LINKEDIN: 'https://www.linkedin.com/in/robertofortucilopes/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Gustavo Oliveira',
      SRC: '/Assets/People/gustavo.jpeg',
      DESCRIPTION: 'Co-Founder',
      COMPANY: 'Smart Retail',
      LINKEDIN: 'https://www.linkedin.com/in/gugaoliveira/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Leandro Campos',
      SRC: '/Assets/People/leandro_campos.jpeg',
      DESCRIPTION: 'CEO',
      COMPANY: 'Nvoip',
      LINKEDIN: 'https://www.linkedin.com/in/leandro-campos/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Daniela Fabri',
      SRC: '/Assets/People/daniela.jpeg',
      DESCRIPTION: 'Analista',
      COMPANY: 'Sebrae-MG',
      LINKEDIN:
        'https://www.linkedin.com/in/daniela-fabri-ferreira-mba-a7603989/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Yuri Thielmann',
      SRC: '/Assets/People/yuri.jpeg',
      DESCRIPTION: 'Developer senior',
      COMPANY: 'CI&T',
      LINKEDIN: 'https://www.linkedin.com/in/yuri-duque/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Humberto Sales',
      SRC: '/Assets/People/humberto.jpeg',
      DESCRIPTION: 'Head de Inovação',
      COMPANY: 'Quokka',
      LINKEDIN: 'https://www.linkedin.com/in/humbertosalesdealmeida/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Chay Azevedo',
      SRC: '/Assets/People/chay.jpeg',
      DESCRIPTION: 'Agente Local de Inovação',
      COMPANY: 'Sebrae',
      LINKEDIN: 'https://www.linkedin.com/in/chayazevedo/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Kyro Caram',
      SRC: '/Assets/People/kyro.jpeg',
      DESCRIPTION: 'Fundador',
      COMPANY: 'Collision',
      LINKEDIN: 'https://www.linkedin.com/in/kyrocaram/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Lucas Mattos',
      SRC: '/Assets/People/lucas.jpeg',
      DESCRIPTION: 'Senior Product Manager',
      COMPANY: 'Loft',
      LINKEDIN: 'https://www.linkedin.com/in/luccmattos/',
      GITHUB: '',
      INSTAGRAM: ''
    }
  ],

  OTHER_MENTORS: {
    TITLE: 'Mentores Desenvolvedores',
    DESCRIPTION:
      'Quando se trata de código, conte com alguns dos melhores devs da cidade',
    MENTORS: [
      {
        NAME: 'Leandro Simões',
        SRC: '/Assets/People/leandro.jpeg',
        DESCRIPTION: 'Professor and Software Developer',
        COMPANY: 'Driven Education',
        LINKEDIN: 'https://www.linkedin.com/in/lesimoess/',
        GITHUB: '',
        INSTAGRAM: ''
      },
      {
        NAME: 'Rodrigo Nunes',
        SRC: '/Assets/People/rodrigo.jpeg',
        DESCRIPTION: 'Co-Founder',
        COMPANY: 'Reportei.com',
        LINKEDIN: 'https://www.linkedin.com/in/fnnrodrigo/',
        GITHUB: '',
        INSTAGRAM: ''
      },
      {
        NAME: 'Yuri Thielmann',
        SRC: '/Assets/People/yuri.jpeg',
        DESCRIPTION: 'Developer senior',
        COMPANY: 'CI&T',
        LINKEDIN: 'https://www.linkedin.com/in/yuri-duque/',
        GITHUB: '',
        INSTAGRAM: ''
      },
      {
        NAME: 'Lesley Andreza',
        SRC: '/Assets/People/lesley.jpeg',
        DESCRIPTION: 'Desenvolvedor Javascript',
        COMPANY: 'ProDoctor Software S/A',
        LINKEDIN: 'https://www.linkedin.com/in/lesley-andreza-a05b89bb/',
        GITHUB: '',
        INSTAGRAM: ''
      },
      {
        NAME: 'Isabela Santos',
        SRC: '/Assets/People/isabela.jpeg',
        DESCRIPTION: 'Desenvolvedora front-end',
        COMPANY: 'Globo',
        LINKEDIN: 'https://www.linkedin.com/in/isabela-santos-2b4058150/',
        GITHUB: '',
        INSTAGRAM: ''
      }
    ]
  },
  PARTNERS: [
    {
      NAME: 'Carlos Alexandre',
      SRC: '/Assets/People/carlos_alexandre.jpeg',
      LINKEDIN: 'https://www.linkedin.com/in/carlosalexandre94/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Douglas Novato',
      SRC: '/Assets/People/douglas.jpeg',
      LINKEDIN: 'https://www.linkedin.com/in/douglasabnovato/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Vinicius Carlos',
      SRC: '/Assets/People/vinicius.jpeg',
      LINKEDIN: 'https://www.linkedin.com/in/vinicius-carlos/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Giordano Bruno',
      SRC: '/Assets/People/giordano.jpeg',
      LINKEDIN: 'https://www.linkedin.com/in/giordano-bruno-da-rosa-vieira-88699614/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Ramon Xavier',
      SRC: '/Assets/People/ramon.jpeg',
      LINKEDIN: 'https://www.linkedin.com/in/ramonxavier/',
      GITHUB: '',
      INSTAGRAM: ''
    },
    {
      NAME: 'Eduardo Alexandre',
      SRC: '/Assets/People/eduardo.jpeg',
      LINKEDIN: 'https://www.linkedin.com/in/eduardotecnologo/',
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
    'O valor da inscrição no primeiro lote é de R$80,00 inteira e R$40,00 para estudantes. Neste valor estão inclusas as alimentações (biscoitos, frutas, pizza, sanduiches, café e agua).',
  DRAW: 'Não perca essa oportunidade de conhecer gente nova, ficar imerso em cultura inovadora, se divertir, ajudar a cidade e fazer história!',
  CATEGORIES: [
    'Desenvolvedores',
    'Designers',
    'Empreendedores',
    'Estudantes',
    'Entusiastas'
  ],
  SUBSCRIBE_LINK:
    'https://www.sympla.com.br/hackaton-de-inovacao-social-de-juiz-de-fora__1766078',
  TERMS_LINK:
    'https://docs.google.com/document/d/1KJT25ANYLSM8n4U1TAkmvh_qok8Ps_SYEfklffgKk_0/edit?usp=sharing'
};

const PRIZES_SECTION = {
  TITLE: 'Premiação',
  LONG_DESCRIPTION:
    'Sendo um hackathon colaborativo, o maior objetivo é ajudar a cidade e a comunidade de forma geral! ',
  SHORT_DESCRIPTION:
    'Mas, nem por isso deixaríamos de ter prêmios. Neste evento haverão dezenas de prêmios e quase todos poderão ser premiados.',
  IMGS: [
    {
      SRC: firstPrize,
      ALT: '1º prêmio'
    },
    {
      SRC: secondPrize,
      ALT: '2º prêmio'
    },
    {
      SRC: thirdPrize,
      ALT: '3º prêmio'
    },
    {
      SRC: fourthPrize,
      ALT: '4º prêmio'
    },
    {
      SRC: fifthPrize,
      ALT: '5º prêmio'
    },
    {
      SRC: sixthPrize,
      ALT: '6º prêmio'
    }
  ]
};

const FOOTER = {
  PRE_FOOTER: {
    content: (
      <p className="m-0">
        Em caso de duvidas sobre o evento, entre em{' '}
        <a
          className="pre-footer-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send?phone=5532988735683&text=Gostaria%20de%20saber%20mais%20sobre%20o%20Hackathon"
        >
          <u>contato</u>
        </a>{' '}
        conosco
      </p>
    )
  },
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
  LOW_CODE_SECTION,
  NOT_PROGRAMMER_SECTION,
  sponsors,
  MENTORS_SECTION,
  PRIZES_SECTION,
  FOOTER
};
