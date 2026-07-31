export interface Astrologer {
  id: string;
  name: string;
  slug: string;

  phone: string;

  image: string;
  cover: string;

  rating: number;
  reviews: number;

  experience: number;

  languages: string[];

  expertise: string[];

  pricePerMinute: number;

  online: boolean;

  about: string;

  totalConsultations: number;

  followers: number;

  responseTime: string;

  freeKundli: boolean;
  videoCall: boolean;
  voiceCall: boolean;
  chat: boolean;
}

export const astrologers: Astrologer[] = [
  {
    id: "6a6b922182d22a9d780d6fb9",

    name: "Pandit Rohit Sharma",

    slug: "pandit-rohit-sharma",

    phone: "9302552375",

    image: "/astrologers/rahul.png",

    cover: "/astrologers/banner1.jpg",

    rating: 4.9,

    reviews: 15248,

    experience: 15,

    languages: [
      "Hindi",
      "English"
    ],

    expertise: [
      "Love",
      "Marriage",
      "Career",
      "Business",
      "Finance",
      "Health",
      "Education",
      "Kundli",
      "Vastu",
      "Numerology"
    ],

    pricePerMinute: 25,

    online: true,

    about:
      "Pandit Rohit Sharma is a renowned Vedic astrologer with over 15 years of experience in Kundli Analysis, Marriage Matching, Career Guidance, Finance, Business and Spiritual Remedies.",

    totalConsultations: 50231,

    followers: 25400,

    responseTime: "30 sec",

    freeKundli: true,

    videoCall: true,

    voiceCall: true,

    chat: true,
  },

  {
    id: "2",

    name: "Shastri Rohit Sharma",

    slug: "shastri-rohit-sharma",

    phone: "9876543210",

    image: "/astrologers/amit.png",

    cover: "/astrologers/banner2.jpg",

    rating: 4.8,

    reviews: 10421,

    experience: 12,

    languages: [
      "Hindi"
    ],

    expertise: [
      "Career",
      "Business",
      "Job",
      "Education",
      "Gemstone"
    ],

    pricePerMinute: 20,

    online: false,

    about:
      "Shastri Rohit Sharma specializes in Career Astrology, Job Problems, Business Growth and Gemstone Consultation.",

    totalConsultations: 31880,

    followers: 18400,

    responseTime: "1 min",

    freeKundli: true,

    videoCall: true,

    voiceCall: true,

    chat: true,
  },

  {
    id: "3",

    name: "Acharya Jitendra Rawal",

    slug: "acharya-jitendra-rawal",

    phone: "9999999999",

    image: "/astrologers/neha.png",

    cover: "/astrologers/banner3.jpg",

    rating: 5,

    reviews: 8954,

    experience: 10,

    languages: [
      "Hindi",
      "English",
      "Gujarati"
    ],

    expertise: [
      "Love",
      "Relationship",
      "Marriage",
      "Tarot",
      "Numerology"
    ],

    pricePerMinute: 30,

    online: true,

    about:
      "Acharya Jitendra Rawal is an expert Tarot Reader and Numerologist helping people solve relationship and marriage issues.",

    totalConsultations: 21500,

    followers: 12000,

    responseTime: "20 sec",

    freeKundli: true,

    videoCall: true,

    voiceCall: true,

    chat: true,
  }
];

export function getAstrologerBySlug(slug: string) {
  return astrologers.find(
    (item) =>
      item.slug.toLowerCase() ===
      decodeURIComponent(slug).toLowerCase()
  );
}

export function getAstrologerById(id: string) {
  return astrologers.find(
    (item) => item.id === id
  );
}