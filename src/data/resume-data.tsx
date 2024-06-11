import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Euler Alvarenga",
  initials: "EA",
  location: "Pedro Leopoldo, MG, Brazil",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Mobile Engineer focused on building products with extra attention to detail",
  summary:
    "I'm a React Native Developer with over 5 years of experience, aiming to use my expertise to build top-notch, smooth-running mobile apps that users love. With a history of driving revenue, improving efficiency, and delivering impactful solutions for big-name companies, I'm ready to bring my skills to your team.",
  avatarUrl: "https://avatars.githubusercontent.com/u/2926662?v=4",
  personalWebsiteUrl: "https://alvarenga.hashnode.dev/",
  contact: {
    email: "euler.sistemas@gmail.com",
    tel: "+5531999402034",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/alvarengaEuler/",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/euler-alvarenga-b9704467/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Instituto Federal do Sudeste de Minas Gerais",
      degree: "Bachelor's Degree in Computer Science",
      start: "",
      end: "",
    },
  ],
  work: [
    {
      company: "Localiza & Co",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "2021",
      end: "2023",
      description:
        "Collaborated with cross-functional teams to integrate third-party Rest APIs, streamlining processes and reducing development time. Lead the development of a customer-facing mobile application, resulting in a 13% increase in app usage and a rise in user engagement within six months. Implemented performance optimizations, reducing app load time, enhancing overall user experience.",
    },
    {
      company: "Meta 3 → Localiza & Co",
      link: "https://apps.apple.com/br/app/localiza-meoo/id1528537131",
      badges: ["Remote"],
      title: "Mobile Engineer",
      logo: ClevertechLogo,
      start: "2020",
      end: "2021",
      description:
        "I was among the team of developers that developed and launched the first version of a cutting-edge mobile application in a field of car subscription, Meoo. Contributing to a new business branch in the company.Implemented advanced features and functionalities. Developed a robust testing framework, reducing testing time by 20% and ensuring product quality and reliability.",
    },
    {
      company: "Escola Em Movimento",
      link: "https://play.google.com/store/apps/details?id=br.com.eteg.escolaemmovimento.escolaEmMovimentoAgendaDigital&hl=pt_BR&gl=US",
      badges: [],
      title: "Mobile Developer (React Native)",
      logo: JojoMobileLogo,
      start: "2019",
      end: "2020",
      description:
        "Architected and developed a comprehensive mobile learning platform for a huge user base of 1M users, resulting in increase in student engagement and a improvement in academic performance. Integrated real-time communication features, facilitating seamless interaction between students and teachers, leading to a 10% increase in user activity. Optimized app performance, reducing server response time by and enhancing scalability to accommodate a growing user base.",
    },
    {
      company: "Mereo",
      link: undefined,
      badges: [],
      title: "Mobile Developer (React Native)",
      logo: NSNLogo,
      start: "2018",
      end: "2019",
      description:
        "Engineered a cross-platform mobile application, contributing to the first launch of a mobile app for this company increasing in 5% sales expansion of the customer base. Implemented push notification functionality, resulting in a increase of user retention. Collaborated with design and marketing teams to enhance brand visibility and user engagement.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React Native",
    "CI/CD",
    "TDD",
    "React/Next.js",
    "Node.js",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: undefined,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
