import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  year: string;
  area: string;
  description: string;
  challenge: string;
  solution: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "The Noir Residence",
    title: "The Noir Residence",
    location: "Faisalabad, Pakistan",
    category: "Residential",
    image: project1,
    year: "2025",
    area: "650 m²",
    description: "A breathtaking Mediterranean villa that harmonizes modern minimalism with the warmth of coastal living. Floor-to-ceiling glass walls dissolve the boundary between interior and exterior, while the infinity pool creates a seamless connection to the horizon.",
    challenge: "The client envisioned a home that could serve as both a private retreat and an entertainment space for hosting guests, all while maintaining an intimate, serene atmosphere.",
    solution: "We designed a flowing open-plan layout with strategically placed courtyards that create pockets of privacy. The material palette of white concrete, natural stone, and warm timber balances grandeur with comfort.",
    images: [project1],
  },
  {
    id: "Vertex Workspace",
    title: "Vertex Workspace",
    location: "Faisalabad, Pakistan",
    category: "Commercial",
    image: project2,
    year: "2025",
    area: "12,000 m²",
    description: "A landmark commercial hub designed to foster collaboration and innovation. The soaring atrium floods the interior with natural light, while the modular floor plates offer maximum flexibility for diverse tenant needs.",
    challenge: "Creating a commercial space in a competitive market that would attract premium tenants while setting a new standard for workplace design in the region.",
    solution: "We introduced a biophilic design approach with integrated green walls, operable facades for natural ventilation, and collaborative zones on every floor that encourage spontaneous interaction.",
    images: [project2],
  },
  {
    id: "Urban Crest Residence",
    title: "Urban Crest Residence",
    location: "Faisalabad, Pakistan",
    category: "Residential",
    image: project3,
    year: "2026",
    area: "420 m²",
    description: "A luxury penthouse that redefines urban living at 800 feet above Manhattan. Every detail was curated to create an atmosphere of refined elegance, from the custom millwork to the panoramic city views framed as living artworks.",
    challenge: "Transforming a raw concrete shell into an ultra-luxury residence that feels warm and inviting despite its dramatic scale and elevation.",
    solution: "We layered natural materials — walnut paneling, honed marble, brushed brass — to create intimate zones within the expansive floor plan. Motorized curtain walls and ambient lighting systems adapt the space from day to night.",
    images: [project3],
  },
  {
    id: "Urban Oasis",
    title: "Urban Oasis",
    location: "Lahore, Pakistan",
    category: "Commercial",
    image: project4,
    year: "2025",
    area: "8,500 m²",
    description: "A civic landmark that serves as a beacon for arts and community. The angular facade, clad in weathering steel and glass, shifts in appearance with the Nordic light, creating an ever-changing dialogue with its surroundings.",
    challenge: "Designing a public building that could house diverse cultural programs — from exhibitions to performances — while creating a strong architectural identity for the neighborhood.",
    solution: "The building is organized around a central public forum that connects all program areas. The facade's geometry channels daylight deep into the interior, reducing energy consumption while creating dramatic spatial experiences.",
    images: [project4],
  },
  {
    id: "forest-retreat",
    title: "Forest Haven Retreat",
    location: "Kalam, Pakistan",
    category: "Commercial",
    image: project5,
    year: "2024",
    area: "380 m²",
    description: "An eco-conscious mountain retreat that sits lightly on the land. The living roof blends the structure into the forest canopy, while generous glazing invites the surrounding nature inside.",
    challenge: "Building a sustainable home in a sensitive ecological area with extreme weather conditions, while meeting the client's desire for luxury and comfort.",
    solution: "We used locally sourced timber and stone, passive solar design principles, and a green roof system that manages stormwater naturally. The result is a home that achieves net-zero energy while feeling anything but austere.",
    images: [project5],
  },
  {
    id: "grand-hotel",
    title: "The Grand Atelier Hotel",
    location: "Islamabad, Pakistan",
    category: "Hospitality",
    image: project6,
    year: "2023",
    area: "15,000 m²",
    description: "A five-star boutique hotel that reinterprets Parisian elegance for the contemporary traveler. The lobby's double-height marble atrium sets the tone for an experience of understated luxury throughout.",
    challenge: "Renovating a historic Haussmann building into a world-class hotel while respecting the architectural heritage and meeting modern hospitality standards.",
    solution: "We preserved the original facade and principal rooms while inserting a contemporary glass pavilion in the courtyard. The interiors blend period detailing with modern materials, creating a dialogue between past and present.",
    images: [project6],
  },
];
