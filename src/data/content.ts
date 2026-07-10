export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#ferramentas", label: "Ferramentas" },
  { href: "#contato", label: "Contato" },
] as const;

export const timeline = [
  {
    year: "2023 — Atual",
    role: "Projetos Independentes",
    description:
      "Desenvolvimento de soluções mecânicas personalizadas para clientes e parceiros.",
  },
  {
    year: "2021 — 2023",
    role: "Projetos e Consultoria",
    description:
      "Atuação em projetos mecânicos, modelagem CAD e suporte técnico especializado.",
  },
  {
    year: "2018 — 2021",
    role: "Graduação em Engenharia Mecânica",
    description:
      "Formação sólida em projeto, manufatura, materiais e análise estrutural.",
  },
] as const;

export const stats = [
  { value: "+50", label: "Projetos Desenvolvidos" },
  { value: "100%", label: "Compromisso com a qualidade" },
  { value: "100%", label: "Projetos Personalizados" },
  { value: "Inovação", label: "Soluções inteligentes e eficientes" },
] as const;

export const specialties = [
  {
    title: "Projetos Mecânicos",
    description: "Concepção e desenvolvimento de sistemas e conjuntos sob medida.",
  },
  {
    title: "Modelagem CAD 3D",
    description: "Modelos precisos para visualização, fabricação e documentação.",
  },
  {
    title: "Desenho Técnico",
    description: "Documentação clara para manufatura, montagem e controle dimensional.",
  },
  {
    title: "Impressão 3D",
    description: "Prototipagem rápida para validar geometria, encaixes e ergonomia.",
  },
  {
    title: "Prototipagem",
    description: "Do conceito ao protótipo funcional, com iterações ágeis.",
  },
  {
    title: "Desenvolvimento de Dispositivos",
    description: "Dispositivos de fixação, posicionamento e auxílio à produção.",
  },
  {
    title: "Engenharia Reversa",
    description: "Reconstrução digital de peças e conjuntos a partir do físico.",
  },
  {
    title: "Projetos Personalizados",
    description: "Soluções sob demanda alinhadas ao problema real do cliente.",
  },
] as const;

const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const projects = [
  {
    title: "Mitsubishi 3000GT VR-4 — Escala 1/10",
    category: "Modelagem & Prototipagem",
    image: asset("/images/projects/mitsubishi-3000gt.png"),
  },
  {
    title: "Volkswagen Gol Quadrado — Escala 1/10",
    category: "Modelagem & Prototipagem",
    image: asset("/images/projects/gol-quadrado-frente.png"),
  },
  {
    title: "Letreiro LED — Engrenagem Personalizada",
    category: "Impressão 3D & Eletrônica",
    image: asset("/images/projects/letreiro-led-engrenagem.png"),
  },
] as const;

export const processSteps = [
  { title: "Briefing", description: "Entendimento do problema e dos objetivos." },
  { title: "Pesquisa", description: "Análise técnica, normas e referências." },
  { title: "Concepção", description: "Definição da solução e requisitos." },
  { title: "Sketch", description: "Ideação visual e estudo de formas." },
  { title: "CAD", description: "Modelagem 3D precisa e detalhada." },
  { title: "Simulação", description: "Validação estrutural e funcional." },
  { title: "Protótipo", description: "Materialização para testes reais." },
  { title: "Validação", description: "Ajustes com base em evidências." },
  { title: "Entrega", description: "Documentação e projeto final." },
] as const;

export const tools = [
  "SolidWorks",
  "AutoCAD",
  "Fusion 360",
  "Inventor",
  "ANSYS",
  "Excel",
  "Power BI",
  "Arduino",
  "Impressão 3D",
] as const;

export const gallery = [
  {
    src: asset("/images/projects/mitsubishi-3000gt.png"),
    category: "maquetes",
  },
  {
    src: asset("/images/projects/gol-quadrado-frente.png"),
    category: "maquetes",
  },
  {
    src: asset("/images/projects/gol-quadrado-traseira.png"),
    category: "maquetes",
  },
  {
    src: asset("/images/projects/letreiro-led-engrenagem.png"),
    category: "projetos",
  },
] as const;
