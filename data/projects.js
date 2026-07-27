export const projects = [
  {
    slug: "medicore",
    name: "MediCore",
    tagline: "Plataforma full-stack de gestão de equipamentos médicos hospitalares",
    description:
      "Aplicação full-stack para gestão do parque de equipamentos médicos de um hospital, unindo experiência prática em engenharia clínica a engenharia de software. Calcula automaticamente MTBF e MTTR, reúne os indicadores em um dashboard de BI, simula cenários financeiros de manutenção e gera relatórios em PDF — tudo protegido por autenticação JWT e já em produção.",
    highlights: [
      "Cálculo automático de MTBF e MTTR para acompanhar a saúde do parque de equipamentos",
      "Dashboard de BI com indicadores de desempenho em tempo real",
      "Simulador financeiro para projeção de custos de manutenção",
      "Geração de relatórios em PDF",
      "Autenticação segura via JWT",
    ],
    stack: ["Python", "FastAPI", "React", "Vite", "PostgreSQL", "JWT"],
    stackMix: [
      { name: "FastAPI / Python", value: 45 },
      { name: "React / Vite", value: 35 },
      { name: "PostgreSQL", value: 20 },
    ],
    media: { type: "video", src: "https://www.youtube.com/embed/9rhbb4AvgGo?si=s4FMjTChKBUEbQp8" },
    logo: "/img/medicore-logo.png",
    status: "Concluído",
    year: "2026",
  },
  {
    slug: "dollarbot",
    name: "DollarBot",
    tagline: "Chatbot com IA para cotação de câmbio em tempo real",
    description:
      "Bot em Python com IA que responde perguntas e atualiza em tempo real a cotação do Dólar (USD) para Real (BRL). Integra uma API de câmbio ao vivo e um sistema de logging que registra interações do usuário e respostas do modelo, formando uma base sólida para novas funcionalidades.",
    highlights: [
      "Integração com API de câmbio em tempo real",
      "Sistema de logging estruturado para auditoria de interações",
      "Arquitetura pensada para evoluir com novas skills",
    ],
    stack: ["Python", "IA / NLP", "REST API", "Logging"],
    stackMix: [
      { name: "Python", value: 65 },
      { name: "API Integração", value: 20 },
      { name: "Logging", value: 15 },
    ],
    media: { type: "image", src: "/img/prototipo_dllbot.jpeg" },
    logo: "/img/dllbot.jpeg",
    status: "Concluído",
    year: "2025",
  },
  {
    slug: "coffes",
    name: "Coffe's",
    tagline: "E-commerce de cafeteria com autenticação e banco relacional",
    description:
      "Site completo para uma cafeteria com foco em responsividade e experiência do usuário. Login e registro persistidos em MySQL via XAMPP, comunicação entre front-end e banco de dados feita em Python com Flask, e carrinho de compras dinâmico implementado em JavaScript puro.",
    highlights: [
      "Autenticação de usuários com sessões via Flask",
      "Banco de dados relacional MySQL",
      "Carrinho de compras dinâmico em JavaScript",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Python", "Flask", "MySQL"],
    stackMix: [
      { name: "Front-end (HTML/CSS/JS)", value: 40 },
      { name: "Python / Flask", value: 35 },
      { name: "MySQL", value: 25 },
    ],
    media: {
      type: "video",
      src: "https://www.youtube.com/embed/Dh8gHcLjDwA?si=JncIC2t9yXc-VXtY",
    },
    logo: "/img/wcff.jpeg",
    status: "Concluído",
    year: "2025",
  },
  {
    slug: "burgerdevs",
    name: "Burger Dev's",
    tagline: "Cardápio digital com checkout direto para WhatsApp",
    description:
      "Cardápio interativo onde o cliente monta o pedido, escolhe a forma de pagamento (Pix, débito ou crédito) em um checkout simplificado, e o pedido é formatado automaticamente e enviado para o WhatsApp do vendedor — agilizando atendimento e logística.",
    highlights: [
      "Carrinho inteligente com cálculo automático do total",
      "Checkout modal com seleção de forma de pagamento",
      "Integração direta com WhatsApp para envio do pedido",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "WhatsApp API"],
    stackMix: [
      { name: "HTML5", value: 30 },
      { name: "CSS3", value: 30 },
      { name: "JavaScript", value: 40 },
    ],
    media: {
      type: "video",
      src: "https://www.youtube.com/embed/1cH31On1-Yc?si=rzis0j_pod6oZKKR",
    },
    logo: "/img/bdevs.jpeg",
    link: "https://vinidev23.github.io/site_burger_auto/",
    status: "Concluído",
    year: "2025",
  },
  {
    slug: "webscraper",
    name: "Web Scraper",
    tagline: "Extração automática de conteúdo a partir de uma URL",
    description:
      "Aplicação que recebe uma URL e extrai automaticamente citações e conteúdo, exibindo tudo diretamente na interface — sem etapas manuais de coleta de dados.",
    highlights: [
      "Entrada de URL livre para scraping sob demanda",
      "Parsing e exibição estruturada do conteúdo extraído",
    ],
    stack: ["Python", "Web Scraping", "HTML"],
    stackMix: [
      { name: "Python", value: 75 },
      { name: "Parsing / Scraping", value: 15 },
      { name: "HTML", value: 10 },
    ],
    media: { type: "none" },
    logo: "/img/wscrp.jpeg",
    status: "Sem protótipo público",
    year: "2025",
  },
  {
    slug: "taskflow",
    name: "TaskFlow",
    tagline: "Gestão de tarefas com backend Flask e SQLite",
    description:
      "Aplicação web para cadastro, acompanhamento e conclusão de tarefas, pensada tanto para uso pessoal quanto para equipes. Backend em Python com Flask, persistência em SQLite e um front-end moderno consumindo a API.",
    highlights: [
      "CRUD completo de tarefas com status de conclusão",
      "Persistência em SQLite",
      "Pensado para uso individual ou em equipe",
    ],
    stack: ["Python", "Flask", "SQLite", "JavaScript"],
    stackMix: [
      { name: "Python / Flask", value: 45 },
      { name: "SQLite", value: 20 },
      { name: "Front-end", value: 35 },
    ],
    media: {
      type: "video",
      src: "https://www.youtube.com/embed/QvN9xBCP498?si=DeKgdMpKCotAUIjF",
    },
    logo: "/img/tflow.jpeg",
    status: "Concluído",
    year: "2025",
  },
  {
    slug: "whub",
    name: "WorkSync Hub",
    tagline: "Monorepo full-stack para gestão de conteúdo em equipes",
    description:
      "Solução full-stack para criação, organização e distribuição de conteúdo dentro de equipes. Construído como monorepo, integrando um backend robusto em Django com um front-end dinâmico em React.",
    highlights: [
      "Arquitetura monorepo (backend + frontend)",
      "API em Django servindo um front-end React",
      "Gestão de conteúdo colaborativa entre equipes",
    ],
    stack: ["Python", "Django", "React", "REST API"],
    stackMix: [
      { name: "Django / Python", value: 50 },
      { name: "React", value: 40 },
      { name: "Banco de dados", value: 10 },
    ],
    media: {
      type: "video",
      src: "https://www.youtube.com/embed/rhIouBcFDsY?si=jvd2XoE64M-sQpCX",
    },
    logo: "/img/whub.jpeg",
    status: "Concluído",
    year: "2025",
  },
  {
    slug: "bshop",
    name: "Marcão BarberShop",
    tagline: "Projeto real em produção para uma barbearia",
    description:
      "Homepage funcional entregue para um cliente real. Ver o projeto em operação e o impacto positivo gerado para o cliente reforça como tecnologia bem aplicada resolve problemas reais e impulsiona negócios.",
    highlights: [
      "Projeto entregue e em uso por um cliente real",
      "Foco em performance e clareza de informação para o usuário final",
    ],
    stack: ["HTML5", "CSS3", "JavaScript"],
    stackMix: [
      { name: "HTML5", value: 34 },
      { name: "CSS3", value: 33 },
      { name: "JavaScript", value: 33 },
    ],
    media: {
      type: "video",
      src: "https://www.youtube.com/embed/F8cTxBVLybY?si=4LKIw8ge-eSDm3bj",
    },
    logo: "/img/bshop.png",
    status: "Concluído",
    year: "2025",
  },
];

export const skills = [
  { name: "Python", level: 90 },
  { name: "Flask", level: 80 },
  { name: "Django", level: 70 },
  { name: "JavaScript", level: 82 },
  { name: "React.js", level: 78 },
  { name: "Next.js", level: 72 },
  { name: "PostgreSQL", level: 75 },
  { name: "MySQL", level: 75 },
  { name: "Node.js", level: 65 },
];

export const stats = [
  { label: "Projetos entregues", value: projects.length.toString().padStart(2, "0") },
  { label: "Em produção agora", value: projects.filter(p => p.status === "Em produção").length.toString().padStart(2, "0") },
  { label: "Stacks dominadas", value: "06" },
  { label: "Foco atual", value: "Full Stack" },
];
