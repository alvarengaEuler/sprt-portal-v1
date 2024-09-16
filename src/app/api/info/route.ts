// app/api/data/route.ts
import { NextResponse } from 'next/server';

const data = {
  education: [
    {
      school: {
        en: "Instituto Federal do Sudeste de Minas Gerais",
        br: "Instituto Federal do Sudeste de Minas Gerais",
      },
      degree: {
        en: "Bachelor's Degree in Computer Science",
        br: "Bacharelado em Ciência da Computação",
      },
      start: "",
      end: "",
    },
  ],
  work: [
    {
      company: "Praxent LLC - TX",
      link: "https://praxent.com/",
      badges: ["Remote"],
      tech: ["React Native"],
      title: {
        en: "Mobile Software Engineer",
        br: "Engenheiro de Software Mobile",
      },
      start: "2024",
      end: "2024",
      description: {
        en: "Worked with the Pangea's app team to engineer and integrate a React Native application designed to replace existing native iOS and Android apps. Utilized Tamagui for responsive UI, ensuring seamless cross-platform functionality and enhanced user experience.",
        br: "Trabalhei com a equipe do App Pangea para projetar e integrar aplicação React Native projetada para substituir o atual aplicativo nativo iOS e Android. Utilizou-se Tamagui para UI, garantindo funcionalidade multiplataforma e experiência de usuário aprimorada.",
      },
    },
    {
      company: "Localiza & Co",
      link: "https://apps.apple.com/br/app/localiza-meoo/id1528537131",
      badges: ["Remote"],
      tech: ["ReactJS", "React Native"],
      title: {
        en: "Software Engineer",
        br: "Engenheiro de Software",
      },
      start: "2021",
      end: "2023",
      description: {
        en: "Developed, maintained, and shipped production code for multiple teams inside the company. Lead the development of a mobile-first web application responsible for car fix scheduling resulting in a 13% less in-house support schedulings calls and a rise in user engagement within six months.",
        br: "Trabalhei no desenvolvimento, manutenção e publicação em produção de aplicações para várias equipes dentro da empresa. Liderei o desenvolvimento de um aplicativo web mobile-first responsável pelo agendamento de consertos de carros, resultando em 13% menos chamadas de agendamento ao time de suporte e um aumento no engajamento do usuário em seis meses.",
      },
    },
    // {
    //   company: "Meta 3 → Localiza & Co",
    //   link: "https://apps.apple.com/br/app/localiza-meoo/id1528537131",
    //   badges: ["Remote"],
    //   title: {
    //     en: "Mobile Engineer",
    //     br: "Engenheiro de Software"
    //   },
    //   start: "2020",
    //   end: "2021",
    //   description:
    //     {
    //       en: "I was among the team of developers that developed and launched the first version of a cutting-edge mobile application in a field of car subscription, Meoo. Contributing to a new business branch in the company.Implemented advanced features and functionalities. Developed a robust testing framework, reducing testing time by 20% and ensuring product quality and reliability.",
    //       br: ""
    //     }
    // },
    {
      company: "Escola Em Movimento",
      link: "https://play.google.com/store/apps/details?id=br.com.eteg.escolaemmovimento.escolaEmMovimentoAgendaDigital&hl=pt_BR&gl=US",
      badges: ["on-site"],
      tech: ["React Native"],
      title: {
        en: "Mobile Engineer",
        br: "Engenheiro de Software"
      },      
      start: "2019",
      end: "2020",
      description:
        {
          en: "Worked with the development and UI team in a comprehensive mobile learning platform for a huge user base of 1M users, resulting in increase in student engagement and a improvement in academic performance. Integrated real-time communication features (Firestore) , facilitating seamless interaction between students and teachers, leading to a 10% increase in user activity. Optimized app performance by adopting ReactJS best practices.",
        br: "Trabalhei juntamente com a equipe de desenvolvimento e UI em plataforma de aprendizagem móvel para base de usuários de cerca de 1 milhão de usuários. Participei do planejamento e implementação de recursos de comunicação em tempo real (Firestore), facilitando a interação entre alunos e professores, levando ao aumento de 10% na atividade do usuário. Também atuei na revisão e otimização do aplicativo adotando as melhores práticas do ReactJS.",
        }
    },
    {
      company: "Mereo",
      link: "https://play.google.com/store/apps/details?id=com.mereomob&hl=pt_BR",
      badges: ["on-site"],
      tech: ["React Native"],
      title: {
        en: "Mobile Engineer",
        br: "Engenheiro de Software"
      },
      start: "2018",
      end: "2019",
      description:
        {
          en: "Developed, maintained and shipped a production Rect Native application for this client. Published the first version of a mobile app for this company increasing in 5% sales expansion of the customer base. Implemented push notification functionality, resulting in a increase of user retention.",
          br: "Desenvolvi, mantive e publiquei aplicativo Rect Native em produção para este cliente. Publiquei a primeira versão de um aplicativo móvel para esta empresa, aumentando em 5% a expansão de vendas da base de clientes. Implementei a funcionalidade de notificação push, resultando em um aumento da retenção de usuários."
        }
    },
  ],
};

// The GET handler for the API route
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const language = searchParams.get('lang') || 'br'; // Default to English

  // Process data based on the language
  const localizedData = {
    education: data.education.map((edu) => ({
      school: edu.school[language as 'en' | 'br'],
      degree: edu.degree[language as 'en' | 'br'],
      start: edu.start,
      end: edu.end,
    })),
    work: data.work.map((job) => ({
      company: job.company,
      link: job.link,
      badges: job.badges,
      title: job.title[language as 'en' | 'br'],
      start: job.start,
      end: job.end,
      description: job.description[language as 'en' | 'br'],
    })),
  };

  return NextResponse.json(localizedData);
}
