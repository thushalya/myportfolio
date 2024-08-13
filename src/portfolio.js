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
  username: "Thushalya Weerasuriya",
  title: "Hi all, I'm Thushalya",
  subTitle: emoji(
    "A self-motivated Full Stack and Research Developer 🚀 with experience in building Web 🌐 and Mobile 📱 applications using JavaScript 🧩, React.js ⚛️, Node.js 🌲, and other cool libraries and frameworks 🛠️."
  ),
  
  resumeLink:
    "https://drive.google.com/drive/folders/1cLN2JYoAVUKD61f4z2_Xsgbr02VZhnGv?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/thushalya",
  linkedin: "https://www.linkedin.com/in/thushalya-weerasuriya/",
  gmail: "thushalya.19@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@thushalya",
  stackoverflow: "https://stackoverflow.com/users/19701296/thushalya-weerasuriya",
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
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "java",
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
      schoolName: "University of Moratuwa",
      logo: require("./assets/images/University_of_Moratuwa.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2020 - December 2024",
      desc: "Deans list in 6 out of 8 semesters in the program. Took courses about Software Engineering, Web Security, Operating Systems, Linear Alegbra, Concurrent Programming...",
      descBullets: ["Overall GPA - 3.82/4.2 - First Class"]
    },
    {
      schoolName: "Taxila Central College - Horana",
      logo: require("./assets/images/tcc.jpeg"),
      // subHeader: "Master of Science in Computer Science",
      duration: "September 2009 - December 2018",
      desc: "Combined Mathematics, Physics, Chemistry",
      descBullets: [
        "5 times section first in Mathematics area"
      ]
    }
   
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "HTML5", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "CSS3",
      progressPercentage: "90%"
    },
    {
      Stack: "JavaScript",
      progressPercentage: "90%"
    },
    {
      Stack: "React",
      progressPercentage: "80%"
    },
    {
      Stack: "Nodejs",
      progressPercentage: "90%"
    },
    {
      Stack: "MongoDB",
      progressPercentage: "80%"
    },
    {
      Stack: "MySQL",
      progressPercentage: "90%"
    },
    {
      Stack: "Competitive Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "System Designing",
      progressPercentage: "40%"
    },
    {
      Stack: "Security",
      progressPercentage: "60%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "WSO2 (PVT) LTD",
      companylogo: require("./assets/images/wso2.png"),
      date: "Jan 2023 – June 2023",
      desc: "Research and generate a CMD tool to convert Ballerina Websocket service into AsyncAPI specification and convert that AsyncAPI specification to Ballerina Websocket client and service.",
      descBullets: [
"Contribute to the Ballerina Websocket by mapping “dispatcherStreamId” functionality.",
"268 commits/ 210+ test cases / 200K+ code lines.",
"Java | Ballerina | AsyncAPI | OpenAPI | Gradle | Jackson | Apicurio | TestNG | Queues"

      ]
    },
    {
      role: "Software Engineer",
      company: "Jaseci Labs",
      companylogo: require("./assets/images/jaseci_labs.jpeg"),
      date: "April 2024 – August 2024",
      desc: "Make Jaclang language capable of calling large language models through Jaseci framework, create Jaseci Studio capable to jaclang-jaseci",
      descBullets:[
        "Convert Myca code base from Jac version 1.0 to Jac version 2.0",
"RAG (Retrieval Augmented Generation)",
"JacLang | LangChain | FastAPI | OpenAI | Groq | Anthropic| Python | TypeScript | Tauri | Data-spatial programming"

      ]
    },
    {
      role: "Software Engineer",
      company: "Crytec-Labs",
      companylogo: require("./assets/images/crytec_labs_logo.jpeg"),
      date: "August 2022 – Oct 2023",
      desc: "Lead a skilled team of developers committed to dynamic and user-friendly applications, Proficient in both front-end and back-end development.",
      descBullets: [
        "Travel Up mobile application"
        , "Miha Institute Tuition Application",
        "Flutter | Microservices | Node.js, HTML | CSS | JavaScript | Typescript | Angular | RxJs | NgRx | React | Nodejs | PostgreSQL | Graphql |REST | Lodash | OAuth | Amazon Cognito | Microservices Architecture | Serverless | Kafka"

      ]
    },
    {
      role: "Software Engineer",
      company: "Nerexco",
      companylogo: require("./assets/images/Nerexco.jpeg"),
      date: "Aug 2021 – Dec 2023",
      desc: "15+ Fiverr projects",
      descBullets:[
        "Object detection video player system",
        "Prompt engineering support Chrome extension",
        "Bus booking system",
"Nextjs | Javascript | Java | Firebase | Heroku"
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
  title: "Big Projects",
  subtitle: "My passion is about solving problems. Please give me a problem to solve",
  projects: [
    {
      image: require("./assets/images/Fyp.png"),
      projectName: "AiLERT Final Year project",
      projectDesc: "Detect hate speech using Twitter data, we employ a novel approach that integrates dual contrastive learning with emotion analysis, author profiling, and transfer learning to enhance the F1 score. Our method utilizes dual contrastive learning to better distinguish between hate speech and non-hate speech, while emotion analysis helps capture the nuanced emotional context of tweets. Author profiling adds an additional layer by considering the user's historical behavior and tendencies, and transfer learning enables the model to adapt and improve its performance on various datasets. This comprehensive approach aims to significantly increase the accuracy and reliability of hate speech detection on Twitter.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://huggingface.co/spaces/Thushalya/AiLERT"
        },
        {
          name: "GitHub",
          url: "https://github.com/pasan-SK/AiLERT-FYP"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "foodie",
      projectDesc: "Social Media Application to Store Memories of Travelling for Food",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://foodie1999.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/asyncapi.png"),
      projectName: "Ballerina Websocket to AsyncAPI definition and otherway round ",
      projectDesc: "Research and generate a CMD tool to convert Ballerina Websocket service into AsyncAPI specification and convert that AsyncAPI specification to Ballerina Websocket client and service. Contribute to the Ballerina Websocket by mapping “dispatcherStreamId” functionality. 268 commits/ 210+ test cases / 200K+ code lines. Java | Ballerina | AsyncAPI | OpenAPI | Gradle | Jackson | Apicurio | TestNG | Queues",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/thushalya/asyncapi-tools"
        }
      ]
    },
    {
      image: require("./assets/images/crypstoxplorer.png"),
      projectName: "Market Data Explorer System (CryptoCurrencies and Stocks) ",
      projectDesc: "Our platform, Crypstoxplorer, enables users to effortlessly view and analyze cryptocurrency and stock market data with key features such as real-time candlestick and line charts using data from the Binance Websocket, historical stock price data sourced from Kaggle, and a watchlist with real-time alerts powered by Firebase Notification Service. It seamlessly integrates a React frontend with a Flask backend, employing an efficient publisher-subscriber design pattern where the Binance Websocket acts as the publisher and the backend serves as the broker. During this project, we utilized resources like Firebase Cloud Messaging, Flask server, WebSocket, Docker, Amazon EC2, Progressive Web Apps (PWA), React.js, and MongoDB.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/SEP-Group-28"
        }
      ]
    },
    {
      image: require("./assets/images/mosip.png"),
      projectName: "Mosip",
      projectDesc: "The Mosip Student Management System is a project designed for efficient student administration, employing Spring Boot for a robust backend infrastructure.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/cse-mosip"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/chromextension.png"),
      projectName: "Chatgpt Prompt Engineering Chrome Extension",
      projectDesc: "ChatGPT Chrome Extension, from this application you can effortlessly store your frequent using prompts engage in dynamic conversations, and obtain instant assistance, all without leaving your favorite browser. You can categorize them into different categories using their topics as well as subcategories.With this ChatGPT Chrome Extension, you can effortlessly store your frequent using prompts engage in dynamic conversations, and obtain instant assistance, all without leaving your favorite browser. You can categorize them into different categories using their topics as well as subcategories. Technologies used :- JavaScript · HTML5 · Cascading Style Sheets (CSS)",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "https://foodie1999.netlify.app/"
        // }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "1st place in RealHack5.0 Competition 2023",
      subtitle:
        "Our team, 'Encounters' representing the University of Moratuwa, secured First place in the 2024 RealHack 5.0 Competition, surpassing over 300+ other teams.",
      image: require("./assets/images/encounters.jpeg"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "3rd place at Idealize 2023",
      subtitle:
        "Team Nerexco Developers has secured the prestigious title of second runners-up, at Idealize 2023!",
      image: require("./assets/images/team_nerexco.jpeg"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "AI Mastery Award -Idealize 2023",
      subtitle:
        "Team Nerexco achieved AI mastery award among 150+ teams",
      image: require("./assets/images/AI_mastery_award.jpeg"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "5th place in Datacom Networking Competition 2023 ",
      subtitle:
        "3-hour Computer/ telecommunication networking competition.",
      // image: require("./assets/images/crypto_knights.jpeg"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "9th Place in CyberZee’23 Competition",
      subtitle:
        "Crypto Knights, our team, secured the 9th position, making it to the semifinals among more than 40 teams. The competition included individual quiz rounds for each team member and a group quiz for the entire team.",
      image: require("./assets/images/crypto_knights.jpeg"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Huawei ICT networking competition",
      subtitle:
        "55th place in the Huawei ICT networking competition",
      // image: require("./assets/images/crypto_knights.jpeg"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Taxila Central College -Competitions",
      subtitle:
        "3 times Section first in Advance level Mathematics Stream, 3 times Highest grade in Physics, Combined mathematics Stream, Attend 2017 Vishaka Maha Vidyalaya Quiz competition, Winners of 2017 Vidya Exhibition (Paramount Quiz competition) made by University of Kelaniya among 26 schools Runners up in 2017 University of Moratuwa TLM Quiz competition",
      image: require("./assets/images/paramount.jpeg"),
      // imageAlt: "Google Assistant Action Logo",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    {
      title: "Azure Fundamentals",
      subtitle: "Certifcation of AZ-900",
      image: require("./assets/images/AZ900.png"),
      // imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        {
          name: "Credentials",
          url: "https://learn.microsoft.com/en-us/users/thushalyaweerasuriya-5655/credentials/7c819fe3915ca6c3?ref=https%3A%2F%2Fwww.linkedin.com%2F"
        }
      ]
    },
    {
      title: "Azure AI Fundamentals",
      subtitle: "Certifcation of AI-900",
      image: require("./assets/images/AI900.png"),
      // imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        {
          name: "Credentials",
          url: "https://learn.microsoft.com/en-us/users/ThushalyaWeerasuriya-5655/credentials/4CFB18324D8CAA50?ref=https%3A%2F%2Fwww.linkedin.com%2F"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all. 'https://github.com/thushalya'",
  number: "+94754365392",
  email_address: "thushalya.19@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "thushalya", //Replace "twitter" with your twitter username without @
  display: false// Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
