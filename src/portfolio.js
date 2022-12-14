/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Trung Dang",
  title: "Howdy, it's Trung Dang 🚀",
  subTitle: emoji(
    "A passionate Software Developer 🚀 who happens to be a Mathematician and Pentester. I have developing experience in Python, Java, NodeJS, and I also love Algorithms and CTFs so much!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1UP5nFgeNDaCbZY4dIiZ2Z_5T6BzXywv4/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dmtrung14",
  linkedin: "https://www.linkedin.com/in/dmtrung14/",
  gmail: "trungdangminh14012004@gmail.com",
  facebook: "https://www.facebook.com/the.matheMagicia/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Protect the safety and integrity of the web environment"
    ),
    emoji("⚡ Apply progressive APIs to implement groundbreaking ideas "),
    emoji(
      "⚡ Integration of third party services such as MongoDB and Netlify"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName:"java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Univeristy of Massachusetts-Amherst",
      logo: require("./assets/images/UMassLogo.png"),
      subHeader: "BS in Computer Science",
      duration: "September 2022 - Expected May 2025",
      desc: "",
      descBullets: [
        "UMass CTF Team, OSINT and Cryptography solver",
        "UMass Data Science Club Executive Board"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Mathematics",
      progressPercentage: "95%"
    },
    {
      Stack: "Information Security",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cybersecurity and Software Development Intern",
      company: "FPT Information System",
      companylogo: require("./assets/images/fptLogo.png"),
      date: "January 2022 – August 2022",
      desc: "Cybersecurity Department, Pentesting Team",
      descBullets: [
        "Applied XXE, CRSF, XSS to pentest banking system for TPBank",
        "Overhauled real-time security management system for 20+ partner companies",
        "Security researcher, gave 2 presentations on padding oracle attacks and length extension attack to the Executive Board"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Individual Projects",
  subtitle: "MY HANDS-ON EXPERIENCE SHOWCASED THROUGH PROJECTS",
  projects: [
    {
      image: require("./assets/images/bigbrothers.png"),
      projectName: "Big Brothers Network",
      projectDesc: "Interact with helpful and interesting Facebook posts to earn tokens",
      footerLink: [
        {
          name: "Visit Repository",
          url: "https://github.com/nhdtxdy/Stats-Improver-Network"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/youtube.png"),
      projectName: "Cool Playback Sync",
      projectDesc: "Syncing Playback for up to 10 users",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://cool-playbacksync-chat.herokuapp.com/"
        },
        {
          name: "Visit Repository",
          url: "https://github.com/dmtrung14/playback-sync-main"
        }
      ]
    },
    {
      image: require("./assets/images/mathinspiration.png"),
      projectName: "Math Inspiration",
      projectDesc: "Math-Coding Learning platform for Vietnamese students",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://dmtrung14.github.io/mathinspiration"
        },
        {
          name: "Visit Repository",
          url: "https://github.com/dmtrung14/mathinspiration"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Awards 🏆 "),
  subtitle:
    "Me being an Olympiad Champ!",

  achievementsCards: [
    {
      title: "Vietnam National Mathematical Olympiad",
      subtitle:
        "Second Prize, top 30 students invited to the Final Round of Vietnam Team Selection Test for IMO 2021 and IMO 2022",
      image: require("./assets/images/imoLogo.png"),
      imageAlt: "IMO Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1CcjSXxGRPnWg4zXwahFCQj9MAwT-Mano/view?usp=sharing"
        },
        {
          name: "Odon Vallet Award",
          url: "https://drive.google.com/file/d/1MlS145JLSMrlD_zJFnZz_vX7JrI8uDuv/view?usp=sharing"
        },
      ]
    },
    {
      title: "International Junior Science Olympiad",
      subtitle:
        "One of six students represented Vietnam at IJSO 2019 in Doha, Qatar. Silver Medalist. Overall ranking: 39/409",
      image: require("./assets/images/ijso2019.png"),
      imageAlt: "IJSO 2019 Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1GIbkORew4674VdlPc7plYOrwd4YptdFm/view?usp=sharing"
        }
      ]
    },

    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Research Papers",
  subtitle:
    "I am also a researcher with a passion for Math and Physics!",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://drive.google.com/file/d/1f8_K2lTnauq4Ahz4YuLfazfaIqmy8QZO/view?usp=sharing",
      title: "Quantum Shannon Theory in Secure Transmission Scheme",
      description:
        "Nobel Prize winning topic in a Nutshell. How can we defy the capability of future quantum computing? And how can we harness its power to derive the strongest key-distribution scheme ever?"
    },
    {
      url: "https://drive.google.com/file/d/1ygeG9s8DKiEdjaOWc3B_rVsh9DClVl5s/view?usp=sharing",
      title: "Generalizing Geometrical Probability Problem from Putnam 1992 A6",
      description:
        "The notoriously difficult problem could be solved in the perspective of an 8th grader. Yet, how can we apply truly complex mathematics to push it to the limit?"
    },
    {
      url: "https://lab.krastanov.org/independentstudy/",
      title: "A Zoo of quantum Error Correcting Code",
      description:
        "Upcoming Spring 2023"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Happy to discuss any innovative idea!",
  number: "+1-413-472-6360",
  email_address: "trungdangminh14012004@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
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
  isHireable
};
