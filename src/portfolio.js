/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Shakeel Anjum",
  title: "Hi, I'm shakeel",
  subTitle: emoji(
    "A passionate front end Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1_TXNEAjSpYQADHsmgSahuzhauNYumypc/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/shakeel229",
  linkedin: "https://www.linkedin.com/in/shakeel-anjum-a638ba44/",
  gmail: "shakeel229@gmail.com",
  twitter: "https://twitter.com/shakeel229",
  facebook: "https://www.facebook.com/Shakeel229",
  instagram: "https://www.instagram.com/shakeel229/",
  stackoverflow: "",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle:
    "PASSIONATE FRONT END DEVELOPER WHO BELIEVE IN INTERACTIVE AND ENGAGING UI'S",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ React.js Applications"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap",
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker",
    // },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "30%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front End Development Student",
      company: "Generation Australia",
      companylogo: require("./assets/images/generation.jpg"),
      date: "June 2020 – Sept 2020",
      desc: `Engaged in an intensive youth training program designed to prepare participants for Junior
        front-end developer position in the IT industry by learning essential technical and non technical skills.`,
      descBullets: [
        `Technical Skills -  HTML, CSS, Bootstrap, JavaScript Programming`,
        `Non-Technical Skills -Professionalism, Persistence, and the essential behavioral skills
        and mindsets to be successful on the job.`,
      ],
    },
    {
      role: "Junior Android Developer",
      company: "Erudite Solutions",
      companylogo: require("./assets/images/erudite.png"),
      date: "Feb 2017 – Oct 2017",
      desc:
        "Work with senior developers and assist in developing front end of applications, debugging of applications, testing behaviour on different screen sizes",
      descBullets: [
        `Technical Stack -  XML, JAVA Programming, JSON, ANDROID STUDIO`,
        `Duties - Front-end designing, debugging, testing`,
      ],
    },
    {
      role: "Database Intern",
      company: "Masood Textiles Mills",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Nov 2013 – Feb 2014",
      desc:
        "worked as a internee in I.T department. Responsibilities include Database Management Systems Basic Troubleshooting. Client side application installation",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  // githubConvertedToken: `13bacd509ee601f00f2911c09b0852907d00f50a`,

  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "shakeel229", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "SOME TECH PROJECT I HAVE DONE SO FAR",
  projects: [
    {
      image: require("./assets/images/time.svg"),
      link: "https://taskplanner229.netlify.app/",
    },
    {
      image: require("./assets/images/superior.png"),
      link: "https://superior.netlify.app/",
    },
    {
      image: require("./assets/images/calc.svg"),
      link: "https://javascript-calculator-shakeel.netlify.app//",
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Certified Junior Front end Developer",
      subtitle:
        "Completed Font end development bootcamp from Generation Australia",
      image: require("./assets/images/generation.jpg"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://taskplanner229.netlify.app/",
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Favourite Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to read and learn cool new skills.",

  blogs: [
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
};

// Talks Sections

const talkSection = {
  title: "Favourite Talks",
  subtitle: emoji("I LOVE TO listen trending tech stuff 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss an oppurtunigy  or just want to say hi? My Inbox is open for all.",
  number: "+61-466349667",
  email_address: "shakeel229@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "shakeel229", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
