export interface Astrologer {
  id: string;
  name: string;
  slug: string;

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
    id: "1",
    slug: "acharya Hemant Vyas",

    name: "Acharya Hemant Vyas",

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
      "Acharya Rahul Sharma is a renowned Vedic astrologer with over 15 years of experience in Kundli Analysis, Marriage Matching, Career Guidance, Finance, Business and Spiritual Remedies. Thousands of people have consulted him for accurate predictions and practical guidance.",

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
    slug: "Shastri Rohit Sharma",

    name: "Shastri Rohit Sharma",

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
      "Pandit Amit Joshi specializes in Career Astrology, Job Problems, Business Growth and Gemstone Consultation.",

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
    slug: "acharya Jitendra Rawal",

    name: "Acharya Jitendra Rawal",

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
      "Acharya Neha Verma is an expert Tarot Reader and Numerologist helping people solve relationship and marriage issues.",

    totalConsultations: 21500,

    followers: 12000,

    responseTime: "20 sec",

    freeKundli: true,

    videoCall: true,

    voiceCall: true,

    chat: true,
  }
];

// export function getAstrologerBySlug(slug:string){

//   return astrologers.find(
//     (astrologer)=>astrologer.slug === slug
//   );

// }
export function getAstrologerBySlug(slug:string){

  return astrologers.find(
    (item)=> item.slug === slug
  );

}

export function getAstrologerById(id:string){

  return astrologers.find(
    (astrologer)=>astrologer.id === id
  );

}