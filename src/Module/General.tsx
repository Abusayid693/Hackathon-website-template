// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import hackathon_logo from './Assets/(no BG) Hack@Davidson_LOGO_Robotic.png';
import davidson from './Assets/sponsorsLogos/davidson.jpg';
import forest from './Assets/sponsorsLogos/forest-systems.png';
import hurthub from './Assets/sponsorsLogos/hurthub.jpg';
import mlh from './Assets/sponsorsLogos/mlhlogo.png';
import p2 from './Assets/sponsorsLogos/p2.jpeg';
import precisely from './Assets/sponsorsLogos/precisely.png';
import standoutstickers from './Assets/sponsorsLogos/stand-out-stickers-logo.svg';
import stellar from './Assets/sponsorsLogos/stellar.jpeg';
import summit from './Assets/sponsorsLogos/summit.png';
import alice from './Assets/teami/Alice.jpg';
import dmytro from './Assets/teami/Dmytro.jpg';
import kate from './Assets/teami/Kate.jpg';
import luke from './Assets/teami/Luke.jpg';
import niya from './Assets/teami/Niya.jpg';
import sky from './Assets/teami/Sky.jpg';
import wendy from './Assets/teami/Wendy.jpg';
import alp from './Assets/teami/alp.jpg';
import lorraine from './Assets/teami/lorraine.jpg';
import sunny from './Assets/teami/sunny.jpg';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

const TOP_SECTION = {
  TITLE: 'Hack@Davidson',
  Typed_effect: [
    'Over 3,000 worth of prizes',
    '48 hours of creation',
    'No coding needed'
  ],
  SHORT_DESCRIPTION:
    'Join us between February 2nd-4th 2024 for 48 hours of creation, innovation, & fun!',
  DISCORD_LINK: 'https://discord.gg/vhh4SrmJm9',
  HACKERS_REGISTRATION_FORM_LINK:
    'https://docs.google.com/forms/d/e/1FAIpQLSeiZrFXX8HXdHiJmbFfq30vrAYCNkGTZi_WznwryH0YF1EnNQ/viewform?usp=sf_link'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/hackatdavidson/',
  discord: 'https://discord.gg/vhh4SrmJm9',
  linkedin: 'https://www.linkedin.com/company/hackatdavidson/',
  devpost: 'https://hackatdavidson.devpost.com/',
  email: 'mailto:hack@davidson.edu',
  donate: 'https://community.davidson.edu/gift-form',
  SPONSOR_US_EMAIL:
    'https://drive.google.com/file/d/1b0bCTHFRiKwNLjBHwaJfDBuNe6Grds3-/view?usp=sharing',
  mail: 'hack@davidson.edu'
};

const MIDDLE_SECTION = {
  TITLE: 'What is Hack @ Davidson?',
  LONG_DESCRIPTION:
    'Hack@Davidson is the sole student-led hackathon at Davidson College and the only ongoing hackathon on Davidson campus. Initially created by computer science enthusiasts, it has grown to be inclusive, welcoming students regardless of their coding experience. ',
  LOGO: hackathon_logo
};

const FOOTER = {
  Code_of_conduct: {
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
      type: 'Best AI Project',
      content: '3x Meta Oculus Quest 2'
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'Best Accessibility Tool',
      content: '3x Apple Watch SE 2nd Gen'
    },
    {
      icon: <i className=" second fas fa-4x fa-trophy"></i>,
      type: 'Best Finance Hack',
      content: '3x AirPods 3rd Gen'
    }
  ],
  [
    //Array 2
    {
      icon: <i className=" third fas fa-4x fa-trophy"></i>,
      type: 'Best First Time',
      content: '3x JBL Flip 6 Speaker'
    },
    {
      icon: <i className="fab fourth fas fa-4x fa-trophy"></i>,
      type: 'Best No-Code Hack',
      content: '3x Logitech MX Master 3S Wireless Mouse'
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'Top Workshop Engagement (3 individuals)',
      content: '3x Apple AirTag '
    }
  ],
  [
    //Array 3
    {
      icon: <i className=" fifth fas fa-4x fa-trophy"></i>,
      type: '4-6 MLH Categories',
      content: 'Google Cloud Backpacks, Mechanical Keyboards, and more!'
    }
    //   {
    //     icon: <i className="fas fa-4x fa-trophy"></i>,
    //     type: 'TBD',
    //     content: ''
    //   },
    //   {
    //     icon: <i className="fas fas fa-4x fa-trophy "></i>,
    //     type: 'More prizes',
    //     content: 'More prizes will be revealed later'
    //   }
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
      name: 'Niya',
      role: 'President',
      github: 'https://github.com/niya-ma-1/',
      linkedin: 'https://www.linkedin.com/in/niya-ma/',
      img: niya
    },
    {
      name: 'Sunny',
      role: 'Marketing Lead',
      github: '',
      linkedin: 'https://www.linkedin.com/in/sunny-baek-62bbb925b/',
      img: sunny
    },
    {
      name: 'Sky',
      role: 'Sponsorship Lead',
      github: 'https://github.com/skyyylaw',
      linkedin: 'https://linkedin.com/in/skyluo24',
      img: sky
    },
    {
      name: 'Lorraine',
      role: 'Logistics Lead',
      github: '',
      linkedin: 'https://www.linkedin.com/in/lorraine-xu-87a755243/',
      img: lorraine
    },
    {
      name: 'Alp',
      role: 'Web Designer',
      github: 'https://github.com/alpnix',
      linkedin: 'https://linkedin.com/in/alpniksarli/',
      img: alp
    },
    {
      name: 'Kate',
      role: 'Graphic Designer',
      github: 'https://github.com/katehynes',
      linkedin: 'https://www.linkedin.com/in/kathleen-hynes/',
      img: kate
    },
    {
      name: 'Olsen',
      role: 'Founder & Advisor',
      github: 'https://github.com/olsenbudanur',
      linkedin: 'https://www.linkedin.com/in/olsenbudanur/',
      img: 'https://i.imgur.com/3zoARcK.png'
    },
    {
      name: 'Alice',
      role: 'Catering',
      github: '',
      linkedin: 'https://www.linkedin.com/in/aliceying114/',
      img: alice
    },
    {
      name: 'Wendy',
      role: 'Influencer',
      github: 'https://github.com/WendyXpenguin',
      linkedin: 'https://www.linkedin.com/in/yuxin-xu-034345288',
      img: wendy
    },
    {
      name: 'Luke',
      role: 'Scheduling',
      github: '',
      linkedin: 'https://www.linkedin.com/in/lukeadamhorne/',
      img: luke
    },
    {
      name: 'Dmytro',
      role: 'Logistics',
      github: '',
      linkedin: 'https://www.linkedin.com/in/dmytro-davydenko-061ab7246/',
      img: dmytro
    },
    {
      name: 'Daniel',
      role: 'Sponsorship',
      github: '',
      linkedin: '',
      img: hackathon_logo
    },
    {
      name: 'Emilio',
      role: 'Treasurer',
      github: '',
      linkedin: '',
      img: hackathon_logo
    },
    {
      name: 'Edwin',
      role: 'Logistics',
      github: '',
      linkedin: 'https://www.linkedin.com/in/edwin-ojeda-herrera-37b91928b',
      img: hackathon_logo
    },
    {
      name: 'Maria',
      role: 'Web Designer',
      github: '',
      linkedin: '',
      img: ''
    },
    {
      name: 'Akshan',
      role: 'Sponsorship',
      github: '',
      linkedin: '',
      img: hackathon_logo
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [
    {
      src: precisely,
      link: 'https://www.precisely.com/?utm_source=Online-Advertising&utm_medium=CPC&utm_campaign=Corp_Global_Digital-Ads-Google-Brand_2022&gad_source=1&gclid=Cj0KCQiAgK2qBhCHARIsAGACuzk5w7f9bYjGNwCYK6PZP03oZxyKmll7iQ5ce1hqKdB-82Ox-pszf0gaAoY3EALw_wcB'
    },
    {
      src: forest,
      link: 'https://forestsystems.com/'
    },
    {
      src: p2,
      link: 'https://p2ibank.com/'
    }
  ], //Array 1
  [
    {
      src: stellar,
      link: 'https://www.getstellar.ai/'
    },
    {
      src: hurthub,
      link: 'https://hurthub.davidson.edu/'
    },
    {
      src: mlh,
      link: 'https://mlh.io/'
    }
  ], //Array 2
  [
    {
      src: summit,
      link: 'https://www.summitcoffee.com/'
    },
    {
      src: standoutstickers,
      link: 'http://hackp.ac/mlh-StandOutStickers-hackathons'
    },
    {src: davidson, link: 'https://www.davidson.edu/'}
    // {src: quoin, link: 'https://quoininc.com/'},
  ]
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'Do I have to know how to program/code?',
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
          'Reach us directly at hack@davidson.edu, we would happy to help you.'
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
  FOOTER,
  MIDDLE_SECTION,
  Prizeinfo,
  SOCIALS,
  TOP_SECTION,
  TeamInfo,
  calenderStartingDate,
  frequentlyAskedQuestions,
  schedule,
  sponsorLogos
};
