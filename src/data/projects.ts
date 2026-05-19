import noir1 from "@/assets/projects/noir-residence/1.jpg";
import noir2 from "@/assets/projects/noir-residence/2.jpg";
import noir3 from "@/assets/projects/noir-residence/3.jpg";

import vertex1 from "@/assets/projects/vertex-workspace/1.jpg";
import vertex2 from "@/assets/projects/vertex-workspace/2.jpg";
import vertex3 from "@/assets/projects/vertex-workspace/3.jpg";
import vertex4 from "@/assets/projects/vertex-workspace/4.jpg";
import vertex5 from "@/assets/projects/vertex-workspace/5.jpg";
import vertex6 from "@/assets/projects/vertex-workspace/6.jpg";

import crest1 from "@/assets/projects/urban-crest/1.jpg";
import crest2 from "@/assets/projects/urban-crest/2.jpg";
import crest3 from "@/assets/projects/urban-crest/3.jpg";

import oasis1 from "@/assets/projects/urban-oasis/1.jpg";
import oasis2 from "@/assets/projects/urban-oasis/2.jpg";
import oasis3 from "@/assets/projects/urban-oasis/3.jpg";
import oasis4 from "@/assets/projects/urban-oasis/4.jpg";
import oasis5 from "@/assets/projects/urban-oasis/5.jpg";
import oasis6 from "@/assets/projects/urban-oasis/6.jpg";

import atelier1 from "@/assets/projects/atelier-plaza/1.jpg";
import atelier2 from "@/assets/projects/atelier-plaza/2.jpg";
import atelier3 from "@/assets/projects/atelier-plaza/3.jpg";

import casa1 from "@/assets/projects/casa-fratelli/1.jpg";
import casa2 from "@/assets/projects/casa-fratelli/2.jpg";
import casa3 from "@/assets/projects/casa-fratelli/3.jpg";
import casa4 from "@/assets/projects/casa-fratelli/4.jpg";

/* =========================
   TYPE (PROFESSIONAL MODEL)
========================= */

export interface Project {
  id: string;

  // BASIC INFO
  title: string;
  location: string;
  category: "Residential" | "Commercial" | "Interior" | "Mixed Use";
  year: string;
  area: string;

  // STORY CONTENT
  description: string;
  challenge: string;
  solution: string;

  // VISUAL SYSTEM
  coverImage: string;   // HERO + CARDS (important)
  images: string[];     // FULL GALLERY (slider)

  // OPTIONAL FUTURE EXTENSION
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
    area: "650 m²",

    description: "Luxury residential project with refined modern minimalism.",
    challenge: "Balancing openness and privacy.",
    solution: "Controlled light + layered spatial planning.",

    coverImage: noir1,
    images: [noir1, noir2, noir3],

    tags: ["Luxury", "Minimal", "Residential"],
  },

  {
    id: "vertex-workspace",
    title: "Vertex Workspace",
    location: "Faisalabad, Pakistan",
    category: "Commercial",
    year: "2025",
    area: "12,000 m²",

    description: "High-performance collaborative workspace.",
    challenge: "Scalable office flexibility.",
    solution: "Modular + biophilic integration.",

    coverImage: vertex1,
    images: [vertex1, vertex2, vertex3, vertex4, vertex5, vertex6],

    tags: ["Office", "Modern", "Biophilic"],
  },

  {
    id: "urban-crest-residence",
    title: "Urban Crest Residence",
    location: "Faisalabad, Pakistan",
    category: "Residential",
    year: "2026",
    area: "420 m²",

    description: "Luxury urban penthouse residence.",
    challenge: "Light vs privacy balance.",
    solution: "Courtyard-driven design.",

    coverImage: crest1,
    images: [crest1, crest2, crest3],

    tags: ["Penthouse", "Urban", "Luxury"],
  },

  {
    id: "urban-oasis",
    title: "Urban Oasis",
    location: "Lahore, Pakistan",
    category: "Commercial",
    year: "2025",
    area: "8,500 m²",

    description: "Cultural-commercial hybrid landmark.",
    challenge: "Strong identity in dense urban context.",
    solution: "Dynamic facade system.",

    coverImage: oasis1,
    images: [oasis1, oasis2, oasis3, oasis4, oasis5, oasis6],

    tags: ["Cultural", "Mixed Use", "Landmark"],
  },

  {
    id: "atelier-plaza",
    title: "Atelier Plaza",
    location: "Islamabad, Pakistan",
    category: "Commercial",
    year: "2024",
    area: "6,200 m²",

    description: "Premium mixed-use development.",
    challenge: "Luxury feel in commercial density.",
    solution: "Minimal geometry + premium materials.",

    coverImage: atelier1,
    images: [atelier1, atelier2, atelier3],

    tags: ["Retail", "Premium", "Minimal"],
  },

  {
    id: "casa-fratelli",
    title: "Casa Fratelli",
    location: "Islamabad, Pakistan",
    category: "Residential",
    year: "2025",
    area: "780 m²",

    description: "Twin-brother architectural residence.",
    challenge: "Dual identity in one structure.",
    solution: "Symmetry + shared central spine.",

    coverImage: casa1,
    images: [casa1, casa2, casa3, casa4],

    tags: ["Villa", "Symmetry", "Family Home"],
  },
];