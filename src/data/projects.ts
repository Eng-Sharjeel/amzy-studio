
export interface Project {
  id: string;

  title: string;
  location: string;

  // ✅ CLEAN CATEGORY SYSTEM
  category: "Residential" | "Commercial" | "Interior";

  year: string;
  area: string;

  description: string;
  challenge: string;
  solution: string;

  coverImage: string;
  images: string[];

  tags?: string[];
}

/* =========================
   PROJECT DATA
========================= */

export const projects: Project[] = [
  {
    id: "the-noir-residence",
    title: "The Noir Residence",
    location: "Faisalabad, Pakistan",
    category: "Residential",
    year: "2025",
    area: "3135 sqft",

    description: "Luxury residential project with refined modern minimalism.",
    challenge: "Balancing openness and privacy.",
    solution: "Controlled light + layered spatial planning.",

    coverImage: "/projects/noir-residence/1.webp",
    images: [
      "/projects/noir-residence/1.webp",
      "/projects/noir-residence/2.webp",
      "/projects/noir-residence/3.webp",
    ],

    tags: ["Luxury", "Minimal", "Residential"],
  },

  {
    id: "vertex-workspace",
    title: "Vertex Workspace",
    location: "Faisalabad, Pakistan",
    category: "Commercial",
    year: "2026",
    area: "576 sqft",

    description: "High-performance collaborative workspace.",
    challenge: "Scalable office flexibility.",
    solution: "Modular + biophilic integration.",

    coverImage: "/projects/vertex-workspace/1.webp",
    images: [
      "/projects/vertex-workspace/1.webp",
      "/projects/vertex-workspace/2.webp",
      "/projects/vertex-workspace/3.webp",
      "/projects/vertex-workspace/4.webp",
      "/projects/vertex-workspace/5.webp",
      "/projects/vertex-workspace/6.webp",
    ],

    tags: ["Office", "Modern", "Biophilic"],
  },

  {
    id: "urban-crest-residence",
    title: "Urban Crest Residence",
    location: "Faisalabad, Pakistan",
    category: "Residential",
    year: "2026",
    area: "3922 sqft",

    description: "Luxury urban penthouse residence.",
    challenge: "Low Light and Compact Area",
    solution: "Double Height and Large Opening Driven Design",

    coverImage: "/projects/urban-crest/1.webp",
    images: [
      "/projects/urban-crest/1.webp",
      "/projects/urban-crest/2.webp",
      "/projects/urban-crest/3.webp",
    ],

    tags: ["Penthouse", "Urban", "Luxury"],
  },

  {
    id: "urban-oasis",
    title: "Urban Oasis",
    location: "Lahore, Pakistan",
    category: "Commercial",
    year: "2024",
    area: "162,806 sqft",

    description: "Cultural-commercial hybrid landmark.",
    challenge: "Strong identity in dense urban context.",
    solution: "Dynamic Sitting Spaces and Water Bodies",

    coverImage: "/projects/urban-oasis/1.webp",
    images: [
      "/projects/urban-oasis/1.webp",
      "/projects/urban-oasis/2.webp",
      "/projects/urban-oasis/3.webp",
      "/projects/urban-oasis/4.webp",
      "/projects/urban-oasis/5.webp",
    ],

    tags: ["Cultural", "Urban", "Landmark"],
  },

  {
    id: "atelier-plaza",
    title: "Atelier Plaza",
    location: "Sahiwal, Pakistan",
    category: "Commercial",
    year: "2024",
    area: "12,760 sqft",

    description: "Premium mixed-use development.",
    challenge: "Luxury feel in commercial density.",
    solution: "Minimal geometry + premium materials.",

    coverImage: "/projects/atelier-plaza/1.webp",
    images: [
      "/projects/atelier-plaza/1.webp",
      "/projects/atelier-plaza/2.webp",
      "/projects/atelier-plaza/3.webp",
    ],

    tags: ["Retail", "Premium", "Minimal"],
  },

  {
    id: "casa-fratelli",
    title: "Casa Fratelli",
    location: "Lahore, Pakistan",
    category: "Residential",
    year: "2024",
    area: "10,450 sqft",

    description: "Twin-brother architectural residence.",
    challenge: "Dual identity in one structure.",
    solution: "Symmetry + shared central spine.",

    coverImage: "/projects/casa-fratelli/1.webp",
    images: [
      "/projects/casa-fratelli/1.webp",
      "/projects/casa-fratelli/2.webp",
      "/projects/casa-fratelli/3.webp",
      "/projects/casa-fratelli/4.webp",
    ],

    tags: ["Villa", "Symmetry", "Family Home"],
  },
];