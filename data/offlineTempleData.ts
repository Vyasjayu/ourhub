export type TempleCategory =
  | "All Temples"
  | "Shiva Temple"
  | "Vishnu Temple"
  | "Devi Temple"
  | "Ganesh Temple";

export interface OfflineTemple {
  id: number;
  name: string;
  city: string;
  state: string;
  location: "Indore" | "Ujjain" | "Ratlam";
  distance: string;
  rating: string;
  category: TempleCategory;
  popular?: boolean;
  image: string;
  description: string;
}

export const offlineTemples: OfflineTemple[] = [
  {
    id: 1,
    name: "Mahakaleshwar Temple",
    city: "Ujjain",
    state: "MP",
    location: "Ujjain",
    distance: "3.2 KM",
    rating: "4.8",
    category: "Shiva Temple",
    popular: true,
    image: "/images/temples/mahakaleshwar.jpg",
    description:
      "One of the most sacred Shiva temples where devotees seek the blessings of Mahakal.",
  },

  {
    id: 2,
    name: "Omkareshwar Temple",
    city: "Khandwa",
    state: "MP",
    location: "Ujjain",
    distance: "8.5 KM",
    rating: "4.7",
    category: "Shiva Temple",
    image: "/images/temples/omkareshwar.jpg",
    description:
      "A sacred Jyotirlinga temple dedicated to Lord Shiva on the Narmada river.",
  },

  {
    id: 3,
    name: "Khajrana Ganesh Temple",
    city: "Indore",
    state: "MP",
    location: "Indore",
    distance: "5.1 KM",
    rating: "4.6",
    category: "Ganesh Temple",
    popular: true,
    image: "/images/temples/khajrana.jpg",
    description:
      "A famous Ganesh temple in Indore known for fulfilling devotees' wishes.",
  },

  {
    id: 4,
    name: "Annapurna Temple",
    city: "Indore",
    state: "MP",
    location: "Indore",
    distance: "6.8 KM",
    rating: "4.5",
    category: "Devi Temple",
    image: "/images/temples/annapurna.jpg",
    description:
      "A beautiful temple dedicated to Goddess Annapurna and divine abundance.",
  },

  {
    id: 5,
    name: "Kal Bhairav Temple",
    city: "Ujjain",
    state: "MP",
    location: "Ujjain",
    distance: "3.5 KM",
    rating: "4.6",
    category: "Shiva Temple",
    image: "/images/temples/kal-bhairav.jpg",
    description:
      "A revered temple dedicated to Lord Kal Bhairav in the holy city of Ujjain.",
  },

  {
    id: 6,
    name: "Vishnu Pad Temple",
    city: "Indore",
    state: "MP",
    location: "Indore",
    distance: "7.2 KM",
    rating: "4.4",
    category: "Vishnu Temple",
    image: "/images/temples/vishnu-pad.jpg",
    description:
      "A peaceful temple dedicated to Lord Vishnu.",
  },

  {
    id: 7,
    name: "Bade Ganesh Temple",
    city: "Indore",
    state: "MP",
    location: "Indore",
    distance: "6.1 KM",
    rating: "4.5",
    category: "Ganesh Temple",
    image: "/images/temples/bade-ganesh.jpg",
    description:
      "A popular Ganesh temple visited by devotees from Indore and nearby areas.",
  },

  {
    id: 8,
    name: "Chintaman Ganesh Temple",
    city: "Ujjain",
    state: "MP",
    location: "Ujjain",
    distance: "4.0 KM",
    rating: "4.6",
    category: "Ganesh Temple",
    image: "/images/temples/chintaman-ganesh.jpg",
    description:
      "An ancient and revered Ganesh temple near Ujjain.",
  },

  {
    id: 9,
    name: "Mahalakshmi Temple",
    city: "Ratlam",
    state: "MP",
    location: "Ratlam",
    distance: "2.8 KM",
    rating: "4.5",
    category: "Devi Temple",
    image: "/images/temples/mahalakshmi.jpg",
    description:
      "A peaceful temple dedicated to Goddess Lakshmi.",
  },

  {
    id: 10,
    name: "Shri Ram Temple",
    city: "Ratlam",
    state: "MP",
    location: "Ratlam",
    distance: "4.2 KM",
    rating: "4.4",
    category: "Vishnu Temple",
    image: "/images/temples/shri-ram.jpg",
    description:
      "A devotional temple dedicated to Lord Shri Ram.",
  },
];