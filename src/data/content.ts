export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#ferramentas", label: "Ferramentas" },
  { href: "#contato", label: "Contato" },
] as const;

export const aboutText = {
  headline: "Engenharia mecânica, prototipagem e miniaturas com precisão.",
  body: `Sou engenheiro mecânico graduado na Universidade Federal de Itajubá (UNIFEI). Trabalho com projetos mecânicos, drones agrícolas e impressão 3D com diversos polímeros e resinas. Tenho grande experiência na confecção de miniaturas e maquetes de máquinas e veículos.

Durante a formação, participei de projeto de extensão com desenvolvimento de aeronave não tripulada — projetos mecânicos, seleção e ensaios de componentes, artigos e patente. Fui voluntário na Maker Space UNIFEI e desenvolvi TCC focado na instrumentação de túnel de vento.`,
};

export const timeline = [
  {
    year: "Jan 2022 — Atual",
    role: "Engenheiro Autônomo",
    description:
      "Modelagem 3D, prototipagem e impressão 3D. Miniaturas, maquetes e soluções mecânicas sob demanda — Poço Fundo, MG.",
  },
  {
    year: "Abr — Jul 2022",
    role: "Estagiário de Engenharia · MAHLE",
    description:
      "Departamento de Engenharia de Manufatura, com atuação na gestão de embalagens — Itajubá, MG.",
  },
  {
    year: "Mar — Abr 2022",
    role: "Estagiário de Engenharia · Mellos Industrial",
    description:
      "Desenvolvimento de projeto e manutenção de máquinas para processamento de cabos elétricos — Piranguçu, MG.",
  },
  {
    year: "2017 — 2022",
    role: "Bacharelado · UNIFEI",
    description:
      "Engenharia Mecânica na Universidade Federal de Itajubá. TCC em instrumentação de túnel de vento; extensão em drone híbrido pulverizador.",
  },
] as const;

export const stats = [
  { value: "UNIFEI", label: "Engenharia Mecânica" },
  { value: "1/10", label: "Miniaturas e maquetes" },
  { value: "FDM+", label: "Polímeros e resinas" },
  { value: "VANT", label: "Drones e prototipagem" },
] as const;

export const specialties = [
  {
    title: "Projetos Mecânicos",
    description:
      "Concepção, dimensionamento e desenvolvimento de conjuntos e sistemas sob medida.",
  },
  {
    title: "Modelagem CAD 3D",
    description:
      "Modelagem paramétrica em Inventor, Fusion 360 e SolidWorks para fabricação e documentação.",
  },
  {
    title: "Impressão 3D",
    description:
      "FDM mono e multimaterial, polímeros e resinas — do protótipo à peça acabada.",
  },
  {
    title: "Miniaturas e Maquetes",
    description:
      "Confecção detalhada de veículos e máquinas em escala, com alto nível de acabamento.",
  },
  {
    title: "Drones Agrícolas",
    description:
      "Projetos mecânicos, elementos de potência e ensaios para VANTs e sistemas híbridos.",
  },
  {
    title: "Prototipagem",
    description:
      "Do conceito ao protótipo funcional, com iterações ágeis e validação prática.",
  },
  {
    title: "Desenho Técnico",
    description:
      "Documentação clara, GD&T e desenhos prontos para manufatura e montagem.",
  },
  {
    title: "Instrumentação e Ensaios",
    description:
      "Seleção de instrumentos, montagem experimental e validação — inclusive túnel de vento.",
  },
] as const;

const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const projects = [
  {
    title: "Mitsubishi 3000GT VR-4 — Escala 1/10",
    category: "Miniatura · Modelagem 3D",
    image: asset("/images/projects/mitsubishi-3000gt.png"),
  },
  {
    title: "Toyota Bandeirante — Escala 1/10",
    category: "Miniatura · Impressão 3D",
    image: asset("/images/projects/bandeirante-frente.png"),
  },
  {
    title: "Volkswagen Gol Quadrado — Escala 1/10",
    category: "Miniatura · Prototipagem",
    image: asset("/images/projects/gol-quadrado-frente.png"),
  },
  {
    title: "Letreiro LED — Engrenagem Personalizada",
    category: "Impressão 3D · Eletrônica",
    image: asset("/images/projects/letreiro-led-engrenagem.png"),
  },
] as const;

export const academicProjects = [
  {
    title: "Instrumentação para Túnel de Vento",
    period: "Ago 2022 — Fev 2023",
    description:
      "Estudo, seleção e montagem de instrumentos em túnel de vento para experimentação de micro turbinas eólicas e validação de simulações CFD.",
  },
  {
    title: "Drone Híbrido Pulverizador",
    period: "Fev 2021 — Fev 2022",
    description:
      "Quadro mecânico, dimensionamento de potência e ensaios de motores para VANT híbrido de longa duração com gasolina.",
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
  "Fusion 360",
  "Autodesk Inventor",
  "Autodesk Vault",
  "Impressão 3D FDM",
  "Resinas",
  "Desenho Técnico",
  "Metrologia",
  "Microsoft Excel",
] as const;

export const gallery = [
  {
    src: asset("/images/projects/mitsubishi-3000gt.png"),
    category: "maquetes",
  },
  {
    src: asset("/images/projects/bandeirante-frente.png"),
    category: "maquetes",
  },
  {
    src: asset("/images/projects/bandeirante-traseira.png"),
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
