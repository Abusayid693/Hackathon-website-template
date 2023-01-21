import ccad_logo from './Assets/ccad-logo.jpeg';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';
import davidson from './Assets/sponsorsLogos/davidson.jpg';
import forest from './Assets/sponsorsLogos/forest-systems.png';
import git from './Assets/sponsorsLogos/github.png';
import hurthub from './Assets/sponsorsLogos/hurthub.jpg';
import launch from './Assets/sponsorsLogos/launch.png';
import mlh from './Assets/sponsorsLogos/mlhlogo.png';
import proctorfree from './Assets/sponsorsLogos/proctorfree.jpeg';
import quoin from './Assets/sponsorsLogos/quoin.png';
import techdom from './Assets/sponsorsLogos/radixlogo.png';
import stack from './Assets/sponsorsLogos/stackoverflow.png';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

const TOP_SECTION = {
  TITLE: 'Hack@Davidson',
  Typed_effect: ['Over $5,000 worth of prizes', '48 hours of creation'],
  SHORT_DESCRIPTION:
    'Join us between 10 - 12th February 2023 for 48 hours of creation, innovation, & fun!',
  IMG_SRC: boy,
  DISCORD_LINK: 'https://discord.gg/jStqwW4Ys8',
  HACKERS_REGISTRATION_FORM_LINK:
    'https://docs.google.com/forms/d/e/1FAIpQLSelJfCzPekj2Od_LkEK2IuhoiFa-OAcaJF7cPYQlyms4ICacw/viewform?usp=sf_link'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/hack_davidson/',
  discord: 'https://discord.gg/jStqwW4Ys8',
  linkedin: 'https://www.linkedin.com/company/competitive-coding-at-davidson/',
  devpost: 'https://hackdavidson.devpost.com/',
  email: 'mailto:hack@davidson.edu',
  SPONSOR_US_EMAIL:
    'https://drive.google.com/file/d/13198_fVN5rE2lgUc9HnbLT2UNN4MneyT/view?usp=sharing',
  mail: 'hack@davidson.edu'
};

const MIDDLE_SECTION = {
  TITLE: 'What is Hack@Davidson?',
  LONG_DESCRIPTION:
    'Hack@Davidson is the first student-run, non-profit hackathon at Davidson College organized by Competitive Coding at Davidson (C-CAD). We are excited to host Hack@Davidson in the Davidson area to connect hackers, mentors, and sponsors from all around the globe. In the span of 48 hours, the best and brightest students from the NC area will create, code, and collaborate to build the projects of their dreams. We want you to be a part of this incredible experience!',
  LOGO: ccad_logo
};

const FOOTER = {
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 12,
  year: 2021
};

const schedule = [
  {
    day: '8-11-2021',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '5-12-2021',
    events: [
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      },
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '3-12-2021',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '1-12-2021',
    events: [
      {
        title: 'Intro to deep learning',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '1-1-2022',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  }
];

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
      type: 'TBD',
      content: ''
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: 'TBD',
      content: ''
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: 'TBD',
      content: ''
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: 'TBD',
      content: ''
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'TBD',
      content: ''
    },
    {
      icon: <i className=" fifth fa-3x fas fa-book-open"></i>,
      type: 'TBD',
      content: ''
    }
  ],
  [
    //Array 3
    {
      icon: <i className="fas fa-4x sixth fa-male"></i>,
      type: 'TBD',
      content: ''
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: 'More prizes',
      content: 'More prizes will be revealed later'
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      name: 'Olsen',
      role: 'Founder & Advisor  ',
      github: 'https://github.com/olsenbudanur',
      linkedin: 'https://www.linkedin.com/in/olsenbudanur/',
      img: 'https://i.imgur.com/3zoARcK.png'
    },
    {
      name: 'Anh',
      role: 'President',
      github: '',
      linkedin: 'https://www.linkedin.com/in/anhhoang1402/',
      img: 'https://i.imgur.com/XoeFQAO.jpg'
    },
    {
      name: 'Spencer',
      role: 'Sponsorship & Rewards Manager',
      github: '',
      linkedin: 'https://www.linkedin.com/in/spencer-hawkins-b12b9b1a4/',
      img: 'https://i.imgur.com/afB8IDd.png'
    }
  ],
  [
    //Array 2
    {
      name: 'Pauline',
      role: 'Marketing Manager',
      github: '',
      linkedin: 'https://www.linkedin.com/in/pauline-cha/',
      img: 'https://i.imgur.com/62MNEEU.jpg'
    },
    {
      name: 'Trey',
      role: 'Logistics Manager',
      github: '',
      linkedin: 'https://www.linkedin.com/in/trey-noe/',
      img: 'https://i.imgur.com/eQ8v4DR.jpg'
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: forest}, {src: hurthub}, {src: proctorfree}], //Array 1
  [{src: davidson}, {src: launch}, {src: quoin}], //Array 2
  [{src: mlh}, {src: stack}, {src: techdom}], //Array 3
  [{src: git}]
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'Do I have to know how to program?',
        content:
          'No!! Hack@Davidson welcomes people from all background to compete in our no-code categories where no code is requited, or even allowed!'
      },
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is event where "hackers" will collaborate on creating a functioning software and hardware or coming up with a bright idea by the end of the event.'
      },
      {
        label: 'Who can attend?',
        content: 'Hack@Davidson is open to everyone!'
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          'No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general.'
      }
    ],
    [
      {
        label: 'How to register myself in the hackathon?',
        content:
          'All you need is to fill our form above and join Discord, we will guide you through everything there'
      },
      {
        label: 'I have more questions?',
        content:
          'Reach us directly at (hack@davidson.edu or olbudanur@davidson.edu) we would happy to help you.'
      },
      {
        label: 'Will there be swag?',
        content:
          'Yes! Participants will recieveing Hack@Davidson swag (T-shirts, stickers, etc.!).'
      },
      {
        label: 'How team formation works?',
        content:
          "You can form team with 3 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};
