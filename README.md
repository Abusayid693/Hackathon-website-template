# Hackathon website Folio template ⚡️

![](https://img.shields.io/github/repo-size/Limbo-Hacks/Hackathon-website-template)
![](https://img.shields.io/github/commit-activity/m/Limbo-Hacks/Hackathon-website-template)

## A clean, beautiful and mobile responsive portfolio template for your upcoming hackathon!

#### Demo view

![gifs](https://github.com/Limbo-Hacks/Hackathon-website-template/blob/main/Resources/Screen%20Recording%202021-08-14%20at%2010.42.16%20PM.gif)

**For help you can join our discord [click here](https://discord.com/invite/8XJSzmtWPp)**

Just change `src/Module/general.js` to get your hackathon portfolio. Customize and your sponsors, team-member and judges by adding images in `src/Module/Assets` . Feel free to use it as-is or personalize it as much as you want.

## [Prerequisites]()

- Node js : 8.1.0
- NPM : 8.1.0

## [Netlify configuration variables](https://docs.netlify.com/configure-builds/environment-variables/)

- CI: false
- NODE_VERSION: 8.1.0
- NPM : 8.1.0

## Table of Contents

- [Sections]()
- [Getting started]()
- [Change and Customize]()
- [Deployment]()
- [Technologies Used]()
- [Contributors]()

---

## [Website Sections]()

✔️ General hackathon Info.

✔️ Hackathon calender with schedule.

✔️ Registrations links.

✔️ Socials.

✔️ Description and logo.

✔️ Frequently asked questions.

✔️ Prize section.

✔️ Sponsors & Partners.

✔️ Judges.

✔️ Volunteers.

✔️ Organizers.

✔️ Footer

To view a live example, [click here](https://limbohacks.tech).

## [Getting Started]()

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need `Git` and `Node.js` (which comes with npm) installed on your computer.

```bash
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher

```

1. Clone the repo.

```bash
git clone https://github.com/Abusayid693/Hackathon-website-template.git
```

2.Starting the Client application.

```bash
cd Hackathon-website-template

# install all packages

npm install

# start the server
npm start
```

`This will start client app on localhost:3000`

## [Linking Portfolio to your Github]()

In order to deploy the website in github pages you need to set you few things.

Make sure you are on the root directory.

```bash
#remove the remote repository
git remote rm origin

git remote -v
```

1. Then create your [own repository on GitHub]() (don't initialise repo with README)
2. After creating the repository, copy the repo URL.

```bash
> git remote add origin "YOUR REPO URL"

# you should see your repo here
> git remote -v

# Now you can push/publish it to your own repository!
git push origin master

# Wolla! It’s committed to your GitHub repository.
```

If you are having any difficulties [click here](https://dev.to/dance2die/push-git-cloned-repository-to-your-own-on-github-1ili)

## [Change and customize every section according to your need]()

Now once you have project running on your local environment and repo in github you are all set to customize and publish your hackathon website.

Personalize page content in `/src/Module/general.js` & modify it as per your need. You will also need to add your sponsors, team-members, judges, volunteer images in assets or you can provide a cloud link, dont worry we will guide you in the section.

#### **Please follow the instructions given in `src/Module/general.js` file.**

```javascript
/* Change this file to get your hackthon Porfolio */

import boy from "./Assets/boy.png";
/* Change top section of the website  */
const TOP_SECTION = {
  TITLE: "Join Limbo Hacks",
  // Typing effect
  Typed_effect: ["24 hours of creation", "Win awesome prizes"],
  SHORT_DESCRIPTION:
    "Join us on 20th November 2021 with over 300 students from across the nation for 24 hours of creation, innovation, & fun.",
  // This image will be used for top section right side image
  IMG_SRC:boy ,
  DISCORD_LINK: "",
  JUDGES_FORM_LINK:"",
  HACKERS_REGISTRATION_FORM_LINK:""
};




/* Add all your social media handels*/
const SOCIALS = {
  instagram: "https://www.instagram.com/limbohacks/",
  discord: "https://discord.com/invite/8XJSzmtWPp",
  linkedin: "https://www.linkedin.com/company/limbo-hacks/",
  twitter: "https://twitter.com/HacksLimbo",
  devpost: "https://limbo-hacks-12968.devpost.com/",
  email: "mailto:hello@limbohacks.tech",
  mail:"hello@limbohacks.tech"
};




/* Customize middle section of your website */
const MIDDLE_SECTION = {
  TITLE: "What is Limbo hacks?",
  LONG_DESCRIPTION:
    "Hack Limbo is 24 hour long running hackathon will be held on November 20th & 21th ........",
  // keep LOGO_EFFECT to false
  LOGO_EFFECT: false,
  // Your hackathon logo src
  LOGO: ""
};




/* Customize footer section */
const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: ""
  },
  JOIN_TEAM: {
    required: true,
    src: ""
  }
  {........
};




/* Add your prize descriptions,
 *INFORTANT : please follow the instructions provided in Genereal.js file above Prizeinfo  */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: "overall First",
      content:
        "First Overall prize .."
    },{....




/*Add your team members
 *INFORTANT : please follow the instructions provided in Genereal.js file above TeamInfo  */

/*Put your team member images in Assets/team and simply import them*/
import Rehan from "./Assets/team/me.png";
import moon from "./Assets/team/moon.png";


 const TeamInfo = [
  [
    //Array 1
    {
      Name: "Rehan",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Rehan
    },




/*Put your sponsors logos in Assets/sponsors and simply import them*/
import interviewCake from "./Assets/sponsorsLogos/interview-cake.jpg";
import echoAR from "./Assets/sponsorsLogos/echoAR.png";

 const sponsorLogos = [
  [{src: interviewCake}, {src: echoAR}, {src: echoAR}], //Array 1
  [....


/* Add or change frequently asked questions */
const frequentlyAskedQuestions  = [
  [
    [
      {
        label: "What is a hackathon?",
        content:
          'Icons are everywhere
      },
      {
        label: "I have no idea what coding is?",
        content: "Thats why you must attend our "
      },....
```

#### Using General logos.

We have used social and prize sections logos from [Fontawesome](http://fontawesome.com), you just need to create a free account and copy paste ` <i class="fab fourth fa-3x fa-wpbeginner"></i>` tag from fontawesome.
Feel free to make changes in logos

## [Meta Tags]()

Change meta tags content in `/public/index.html`

```html
<meta name="author" content="LimboHacks" />
<meta
  name="description"
  content="Join us on 20th November 2021 with over 300 students from across the nation for 24 hours of creation, innovation, & fun."
/>
<meta itemprop="name" content="LimboHacks" />
<meta
  name="google-site-verification"
  content="bbrVrhB_49iICKc-JLwkQG6qCWAQABQpCJ_ghVXOi2E"
/>
<meta property="og:title" content="Limbo Hacks 2021" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@limbohacks" />
<meta name="twitter:creator" content="@limbohacks" />
<meta property="og:url" content="https://limbohacks.tech" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="851" />
<meta property="og:image:height" content="315" />
<meta property="og:image:alt" content="Limbo hacks" />
<meta property="og:image" content="https://i.imgur.com/bxP3Jz1.png" />
<meta
  property="og:image:secure_url"
  content="https://i.imgur.com/bxP3Jz1.png"
/>
<meta name="twitter:image" content="https://i.imgur.com/bxP3Jz1.png" />
<meta
  property="og:description"
  content="Join us on 20th November 2021 with over 300 students from across the nation for 24 hours of creation, innovation & fun."
/>
```

## [Technologies Used]()

<p>

<img src ="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>

<img src ="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>

<img src ="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"/>

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>

<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>

<img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"/>

</p>

- [React]()
- [Bootstrap]()
- [React Routers]()
- [Material UI]()

## Project Maintainers

<table>
  <tr>
    <td align="center"><a href="https://github.com/Abusayid693"><img src="https://github.com/Abusayid693.png?size=460" width="100px;" alt=""/><br /><sub><b>Rehan </b></sub></a></td>
    <td align="center"><a href="https://github.com/ZohebMOPO"><img src="https://github.com/ZohebMOPO.png?size=460" width="100px;" alt=""/><br /><sub><b>Zoheb</b></sub></a></td>
    <td align="center"><a href="https://github.com/adityamangal1"><img src="https://github.com/adityamangal1.png?size=460" width="100px;" alt=""/><br /><sub><b>Aditya</b></sub></a></td>

  </tr>
</table>
