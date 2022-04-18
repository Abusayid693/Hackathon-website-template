// Importing all sponsors logos from Assets
// import taskade from "./Assets/sponsorsLogos/taskade.png";
// import Replit from "./Assets/sponsorsLogos/replit.png";
// import interviewC from "./Assets/sponsorsLogos/interview-cake.jpg";
// import echoAR from "./Assets/sponsorsLogos/echoAR.png";
import cfc from "./Assets/sponsorsLogos/cfc.png";
// import pass from "./Assets/sponsorsLogos/1pass.png";
// import glimpse from "./Assets/sponsorsLogos/glimpse.png";
// import qoom from "./Assets/sponsorsLogos/qoom.svg";
// import sublime from "./Assets/sponsorsLogos/sublime.png";
// import egg from "./Assets/sponsorsLogos/egg.png";
// import ll from "./Assets/sponsorsLogos/ll.png";
// import ACF from "./Assets/sponsorsLogos/ACF.png";

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets
import me from "./Assets/teami/me.png";
import moon from "./Assets/teami/moon.png";
import Ryah from "./Assets/teami/Ryah.jpg";
import lyin from "./Assets/teami/lyin.jpg";
import zoha from "./Assets/teami/zoha.png";

/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src alsoy
 */

import boy from "./Assets/boy.png";

const TOP_SECTION = {
  TITLE: "Hack The Crisis 2.0",
  Typed_effect: ["36 hours of creation", "Win awesome prizes"],
  SHORT_DESCRIPTION:
    "Join us on 21st April to 22 April 2022 with over 500 students from across the nation for 36 hours of creation, innovation, & fun.",
  IMG_SRC: boy,
  DISCORD_LINK: "",
  JUDGES_FORM_LINK:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNVRQMUg4VllMRURDN1lON0haNFVCQUgySC4u",
  HACKERS_REGISTRATION_FORM_LINK:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNTgyREk0VzdEMU9RVFlPMVNWVEJQUkNYMi4u"
};

const SOCIALS = {
  instagram: "https://instagram.com/hack_the_crisis_?igshid=YmMyMTA2M2Y=",
  discord: "",
  linkedin: "https://www.linkedin.com/in/hack-the-crisis-65b80b211",
  twitter: " https://twitter.com/HackTheCrisis1?t=EUvOgiyUAeuc_1l8NEKqAg&s=08",
  devpost: "",
  email: "mailto:hackthecrisis2021@gmail.com",
  mail: "hackthecrisis2021@gmail.com"
};

const MIDDLE_SECTION = {
  TITLE: "What is Hack the Crisis?",
  LONG_DESCRIPTION:
    "It is a virtual/online hackathon in which all the participants will work in a given timeline and develop strategies to cope up with the effects and after-effects of the ongoing crisis around the world on peoples lives.War has a catastrophic effect on the health and well being of nations.During war, people can be exposed to many different traumatic events. That raises the chances of developing mental health problems—like post-traumatic stress disorder (PTSD), anxiety, and depression—and poorer life outcomes as adults.Effects of war also include mass destruction of cities and have long lasting effects on a countrys economy. Armed conflict has important indirect negative consequences on infrastructure, public health provision, and social order.",
  LOGO_EFFECT: true,
  LOGO: ""
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u"
  },
  JOIN_TEAM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u"
  },
  Privacy_policy: {
    required: true,
    src: ""
  },
  Terms_of_use: {
    required: true,
    src: ""
  }
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
      type: "overall First",
      content:
        "First Overall prize will be given to a project that outstands all other submissions"
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: "overall Second",
      content:
        "Second Overall prize will be given to the second best project of the hackathon"
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Third Second",
      content:
        "Best third overall project of the hackathon will win some awesome prizes"
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: "Best Solo",
      content:
        "You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team"
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: " Best Beginner",
      content: "Your project will qualify for this category if atleast 50% "
    },
    {
      icon: <i className=" fifth fa-3x fas fa-book-open"></i>,
      type: "Best UI/UX",
      content: "Project with most creative designs will be UI/UX track"
    }
  ],
  [
    //Array 3
    {
      icon: <i className="fas fa-4x sixth fa-male"></i>,
      type: "Best Web App with Qoom",
      content: "Must use qoom in your project to win this category"
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: "More prizes",
      content: "More prizes will be revealed later"
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
      Name: "Rehan",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: me
    },
    {
      Name: "Moon",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: moon
    },
    {
      Name: "Erika",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: "Lyanola",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: lyin
    },
    {
      Name: "Zoheb",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: zoha
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: "Rehan",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: me
    },
    {
      Name: "Moon",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: moon
    },
    {
      Name: "Ryah Garcia",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: "Lyanola",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: lyin
    },
    {
      Name: "Zoheb",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: zoha
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: cfc}]
  // [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  // [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  // [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  // [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: "What is a hackathon?",
        content:
          "Hackathon is a tool to drive sustained innovation and crowdsource solutions to address pressing real-life business problems and social issues. A hackathon is typically a time-bound competitive event where participants collaborate to build proofs of concept and minimum viable products for a specific pre-defined problem or to innovate."
      },
      {
        label: "Who can attend?",
        content:
          "Hack the Crisis 2.0 is open to all undergraduate, high school students and middle school students from all schools."
      },
      {
        label: "I am a first time hacker, what should I do?",
        content:
          "No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general."
      },
      {
        label: "How team formation works?",
        content:
          "You can form team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
      }
    ],
    [
      {
        label: "How to register myself in the hackathon?",
        content:
          "All you need is to fill our form above and join Discord, we will guide you through everything there"
      },
      {
        label: "I have more questions?",
        content:
          "Reach us directly at (hacthecrisis email) we would happy to help you."
      },
      {
        label: "Can i volunteer?",
        content: "No."
      },
      {
        label: "Will there be swag?",
        content: "Yes! Participants will recieveing swag!."
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
  JudgesInfo,
  frequentlyAskedQuestions
};
