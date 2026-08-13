export interface Pooja {
  id: number;
  name: string;
  icon: string;
  description: string;
  duration: string;
  price: number;
  category: string;
  benefits: string[];
}

export const allPoojas: Pooja[] = [
  {
    id: 1,
    name: "Ganesh Pooja",
    icon: "🙏",
    description:
      "Lord Ganesha pooja for removing obstacles, bringing prosperity and starting new beginnings with divine blessings.",
    duration: "45–60 Minutes",
    price: 1,
    category: "popular",
    benefits: [
      "Removes obstacles",
      "Brings prosperity",
      "Good for new beginnings",
      "Peace and positive energy",
    ],
  },

  {
    id: 2,
    name: "Lakshmi Pooja",
    icon: "🪔",
    description:
      "A sacred pooja dedicated to Goddess Lakshmi for prosperity, wealth and abundance.",
    duration: "45–60 Minutes",
    price: 1100,
    category: "lakshmi-pooja",
    benefits: [
      "Prosperity",
      "Financial growth",
      "Positive energy",
      "Peace at home",
    ],
  },

  {
    id: 3,
    name: "Saraswati Pooja",
    icon: "📚",
    description:
      "Dedicated to Goddess Saraswati for knowledge, wisdom, learning and concentration.",
    duration: "45–60 Minutes",
    price: 1100,
    category: "popular",
    benefits: [
      "Knowledge",
      "Better concentration",
      "Academic success",
      "Wisdom",
    ],
  },

  {
    id: 4,
    name: "Durga Pooja",
    icon: "🌺",
    description:
      "A devotional pooja dedicated to Maa Durga for strength, protection and positive energy.",
    duration: "60 Minutes",
    price: 1500,
    category: "popular",
    benefits: [
      "Protection",
      "Strength",
      "Positive energy",
      "Peace",
    ],
  },

  {
    id: 5,
    name: "Kali Pooja",
    icon: "🌹",
    description:
      "A sacred Maa Kali pooja performed for protection, courage and removal of negative influences.",
    duration: "60 Minutes",
    price: 1500,
    category: "popular",
    benefits: [
      "Protection",
      "Courage",
      "Removes negativity",
      "Mental strength",
    ],
  },

  {
    id: 6,
    name: "Shiv Pooja",
    icon: "🔱",
    description:
      "Lord Shiva pooja performed for peace, spiritual growth, health and divine blessings.",
    duration: "45–60 Minutes",
    price: 1100,
    category: "shiv-pooja",
    benefits: [
      "Peace of mind",
      "Spiritual growth",
      "Health",
      "Divine blessings",
    ],
  },

  {
    id: 7,
    name: "Hanuman Pooja",
    icon: "🚩",
    description:
      "Dedicated to Lord Hanuman for courage, strength, protection and removal of fear.",
    duration: "45–60 Minutes",
    price: 1100,
    category: "popular",
    benefits: [
      "Courage",
      "Protection",
      "Strength",
      "Removes fear",
    ],
  },

  {
    id: 8,
    name: "Ram Darbar Pooja",
    icon: "🏹",
    description:
      "A sacred Ram Darbar pooja for family harmony, peace and divine blessings.",
    duration: "60 Minutes",
    price: 1500,
    category: "popular",
    benefits: [
      "Family harmony",
      "Peace",
      "Positive environment",
      "Divine blessings",
    ],
  },

  {
    id: 9,
    name: "Krishna Pooja",
    icon: "🦚",
    description:
      "Lord Krishna pooja for love, happiness, peace and spiritual wellbeing.",
    duration: "45–60 Minutes",
    price: 1100,
    category: "popular",
    benefits: [
      "Happiness",
      "Love",
      "Peace",
      "Spiritual wellbeing",
    ],
  },

  {
    id: 10,
    name: "Satyanarayan Katha",
    icon: "🙏",
    description:
      "Sacred Satyanarayan Katha performed for prosperity, peace and fulfilment of wishes.",
    duration: "90–120 Minutes",
    price: 2100,
    category: "popular",
    benefits: [
      "Prosperity",
      "Family peace",
      "Fulfilment of wishes",
      "Positive energy",
    ],
  },

  {
    id: 11,
    name: "Rudrabhishek",
    icon: "🔱",
    description:
      "Traditional Rudrabhishek of Lord Shiva for peace, health and spiritual purification.",
    duration: "60–90 Minutes",
    price: 2100,
    category: "shiv-pooja",
    benefits: [
      "Peace",
      "Health",
      "Spiritual purification",
      "Divine blessings",
    ],
  },

  {
    id: 12,
    name: "Mahamrityunjaya Jaap",
    icon: "🕉️",
    description:
      "Sacred Mahamrityunjaya Jaap performed with devotion for health, peace and wellbeing.",
    duration: "90 Minutes",
    price: 2100,
    category: "shiv-pooja",
    benefits: [
      "Health",
      "Peace",
      "Wellbeing",
      "Spiritual protection",
    ],
  },

  {
    id: 13,
    name: "Navgraha Pooja",
    icon: "✨",
    description:
      "Navgraha pooja performed for planetary harmony and removal of negative planetary influences.",
    duration: "90 Minutes",
    price: 2500,
    category: "dosh-nivaran",
    benefits: [
      "Planetary harmony",
      "Peace",
      "Positive energy",
      "Removes obstacles",
    ],
  },

  {
    id: 14,
    name: "Vastu Pooja",
    icon: "🏡",
    description:
      "Vastu pooja performed to create a peaceful, positive and harmonious environment.",
    duration: "90 Minutes",
    price: 2100,
    category: "griha-pravesh",
    benefits: [
      "Positive energy",
      "Peace at home",
      "Harmony",
      "Vastu balance",
    ],
  },

  {
    id: 15,
    name: "Griha Pravesh",
    icon: "🏠",
    description:
      "Traditional Griha Pravesh pooja performed before entering a new home.",
    duration: "120 Minutes",
    price: 3100,
    category: "griha-pravesh",
    benefits: [
      "Auspicious beginning",
      "Peace",
      "Prosperity",
      "Positive energy",
    ],
  },

  {
    id: 16,
    name: "Bhoomi Poojan",
    icon: "🌿",
    description:
      "Sacred Bhoomi Poojan performed before construction or development of a property.",
    duration: "90 Minutes",
    price: 2100,
    category: "griha-pravesh",
    benefits: [
      "Auspicious beginning",
      "Positive energy",
      "Peace",
      "Divine blessings",
    ],
  },

  {
    id: 17,
    name: "Vivah Pooja",
    icon: "💍",
    description:
      "Traditional pooja performed for an auspicious and blessed marriage.",
    duration: "90 Minutes",
    price: 2500,
    category: "popular",
    benefits: [
      "Auspicious marriage",
      "Family harmony",
      "Divine blessings",
      "Positive energy",
    ],
  },

  {
    id: 18,
    name: "Engagement Pooja",
    icon: "💑",
    description:
      "Auspicious pooja performed for a blessed engagement ceremony.",
    duration: "60 Minutes",
    price: 1500,
    category: "popular",
    benefits: [
      "Auspicious beginning",
      "Family blessings",
      "Harmony",
      "Positive energy",
    ],
  },

  {
    id: 19,
    name: "Namkaran Sanskar",
    icon: "👶",
    description:
      "Traditional Namkaran Sanskar performed to bless a newborn child.",
    duration: "60–90 Minutes",
    price: 2100,
    category: "popular",
    benefits: [
      "Child blessings",
      "Family happiness",
      "Auspicious beginning",
      "Divine blessings",
    ],
  },

  {
    id: 20,
    name: "Mundan Sanskar",
    icon: "🪔",
    description:
      "Traditional Mundan Sanskar ceremony performed with Vedic rituals and blessings.",
    duration: "60–90 Minutes",
    price: 2100,
    category: "popular",
    benefits: [
      "Traditional ritual",
      "Child blessings",
      "Family happiness",
      "Positive energy",
    ],
  },

  {
    id: 21,
    name: "Annaprashan",
    icon: "🍚",
    description:
      "Sacred Annaprashan ceremony marking the first food of a child.",
    duration: "60 Minutes",
    price: 1500,
    category: "popular",
    benefits: [
      "Child blessings",
      "Good health",
      "Family happiness",
      "Auspicious beginning",
    ],
  },

  {
    id: 22,
    name: "Janeu Sanskar",
    icon: "🕉️",
    description:
      "Traditional Upanayan or Janeu Sanskar performed according to Vedic traditions.",
    duration: "90 Minutes",
    price: 2500,
    category: "popular",
    benefits: [
      "Traditional ceremony",
      "Spiritual growth",
      "Divine blessings",
      "Positive energy",
    ],
  },

  {
    id: 23,
    name: "Pitru Dosh Nivaran",
    icon: "🙏",
    description:
      "Traditional rituals performed for Pitru Dosh related spiritual concerns.",
    duration: "90 Minutes",
    price: 2500,
    category: "dosh-nivaran",
    benefits: [
      "Peace",
      "Family harmony",
      "Spiritual wellbeing",
      "Positive energy",
    ],
  },

  {
    id: 24,
    name: "Kaal Sarp Dosh",
    icon: "🐍",
    description:
      "Traditional Kaal Sarp Dosh shanti rituals performed with Vedic prayers.",
    duration: "90 Minutes",
    price: 2500,
    category: "dosh-nivaran",
    benefits: [
      "Peace",
      "Spiritual wellbeing",
      "Positive energy",
      "Divine blessings",
    ],
  },

  {
    id: 25,
    name: "Manglik Dosh Pooja",
    icon: "🔴",
    description:
      "Traditional Manglik Dosh shanti rituals performed with Vedic mantras.",
    duration: "90 Minutes",
    price: 2500,
    category: "dosh-nivaran",
    benefits: [
      "Peace",
      "Marriage harmony",
      "Positive energy",
      "Divine blessings",
    ],
  },

  {
    id: 26,
    name: "Shani Shanti",
    icon: "🪐",
    description:
      "Shani Shanti pooja performed with traditional prayers and offerings.",
    duration: "60–90 Minutes",
    price: 2100,
    category: "dosh-nivaran",
    benefits: [
      "Peace",
      "Positive energy",
      "Spiritual wellbeing",
      "Divine blessings",
    ],
  },

  {
    id: 27,
    name: "Rahu Ketu Shanti",
    icon: "☄️",
    description:
      "Traditional Rahu Ketu Shanti rituals performed for planetary harmony.",
    duration: "90 Minutes",
    price: 2500,
    category: "dosh-nivaran",
    benefits: [
      "Planetary harmony",
      "Peace",
      "Positive energy",
      "Spiritual wellbeing",
    ],
  },

  {
    id: 28,
    name: "Chandi Path",
    icon: "🕉️",
    description:
      "Sacred Chandi Path performed with devotional recitation and traditional rituals.",
    duration: "120 Minutes",
    price: 3100,
    category: "dosh-nivaran",
    benefits: [
      "Protection",
      "Strength",
      "Positive energy",
      "Divine blessings",
    ],
  },

  {
    id: 29,
    name: "Durga Saptashati",
    icon: "🌺",
    description:
      "Sacred Durga Saptashati recitation performed for divine protection and blessings.",
    duration: "120 Minutes",
    price: 3100,
    category: "dosh-nivaran",
    benefits: [
      "Protection",
      "Strength",
      "Peace",
      "Positive energy",
    ],
  },

  {
    id: 30,
    name: "Lakshmi Kuber Pooja",
    icon: "💰",
    description:
      "Lakshmi Kuber pooja performed for prosperity, wealth and abundance.",
    duration: "90 Minutes",
    price: 2500,
    category: "lakshmi-pooja",
    benefits: [
      "Prosperity",
      "Wealth",
      "Business growth",
      "Positive energy",
    ],
  },

  {
    id: 31,
    name: "Dhanteras Pooja",
    icon: "🪔",
    description:
      "Auspicious Dhanteras pooja dedicated to prosperity and wellbeing.",
    duration: "60 Minutes",
    price: 1500,
    category: "lakshmi-pooja",
    benefits: [
      "Prosperity",
      "Wealth",
      "Positive energy",
      "Family happiness",
    ],
  },

  {
    id: 32,
    name: "Diwali Lakshmi Pooja",
    icon: "🪔",
    description:
      "Traditional Diwali Lakshmi Pooja performed for prosperity and abundance.",
    duration: "60 Minutes",
    price: 1500,
    category: "lakshmi-pooja",
    benefits: [
      "Prosperity",
      "Wealth",
      "Peace",
      "Positive energy",
    ],
  },

  {
    id: 33,
    name: "Ganesh Visarjan Pooja",
    icon: "🙏",
    description:
      "Traditional Ganesh Visarjan prayers and rituals performed with devotion.",
    duration: "60 Minutes",
    price: 1500,
    category: "popular",
    benefits: [
      "Divine blessings",
      "Peace",
      "Positive energy",
      "Auspicious completion",
    ],
  },

  {
    id: 34,
    name: "Karwa Chauth Pooja",
    icon: "🌙",
    description:
      "Traditional Karwa Chauth pooja for marital happiness and blessings.",
    duration: "60 Minutes",
    price: 1100,
    category: "popular",
    benefits: [
      "Marital happiness",
      "Family harmony",
      "Blessings",
      "Positive energy",
    ],
  },

  {
    id: 35,
    name: "Raksha Bandhan Pooja",
    icon: "🪢",
    description:
      "Traditional Raksha Bandhan prayers for family love and protection.",
    duration: "45 Minutes",
    price: 999,
    category: "popular",
    benefits: [
      "Family bonding",
      "Protection",
      "Love",
      "Blessings",
    ],
  },

  {
    id: 36,
    name: "Navratri Pooja",
    icon: "🌺",
    description:
      "Sacred Navratri pooja dedicated to Maa Durga and her divine forms.",
    duration: "60–90 Minutes",
    price: 1500,
    category: "popular",
    benefits: [
      "Protection",
      "Strength",
      "Positive energy",
      "Divine blessings",
    ],
  },

  {
    id: 37,
    name: "Chhath Pooja",
    icon: "🌅",
    description:
      "Traditional Chhath Pooja performed with prayers and devotion.",
    duration: "90 Minutes",
    price: 1500,
    category: "popular",
    benefits: [
      "Family wellbeing",
      "Health",
      "Prosperity",
      "Divine blessings",
    ],
  },

  {
    id: 38,
    name: "Makar Sankranti Pooja",
    icon: "☀️",
    description:
      "Auspicious Makar Sankranti prayers performed for prosperity and wellbeing.",
    duration: "60 Minutes",
    price: 1100,
    category: "popular",
    benefits: [
      "Prosperity",
      "Positive energy",
      "Wellbeing",
      "Auspicious beginning",
    ],
  },

  {
    id: 39,
    name: "Akshaya Tritiya Pooja",
    icon: "✨",
    description:
      "Auspicious Akshaya Tritiya pooja performed for prosperity and success.",
    duration: "60 Minutes",
    price: 1500,
    category: "lakshmi-pooja",
    benefits: [
      "Prosperity",
      "Success",
      "Wealth",
      "Auspicious beginning",
    ],
  },

  {
    id: 40,
    name: "Janmashtami Pooja",
    icon: "🦚",
    description:
      "Devotional Janmashtami pooja celebrating the birth of Lord Krishna.",
    duration: "60 Minutes",
    price: 1100,
    category: "popular",
    benefits: [
      "Peace",
      "Family happiness",
      "Devotion",
      "Divine blessings",
    ],
  },

  {
    id: 41,
    name: "Ram Navami Pooja",
    icon: "🏹",
    description:
      "Sacred Ram Navami pooja dedicated to Lord Shri Ram.",
    duration: "60 Minutes",
    price: 1100,
    category: "popular",
    benefits: [
      "Peace",
      "Family harmony",
      "Devotion",
      "Divine blessings",
    ],
  },

  {
    id: 42,
    name: "Mahashivratri Pooja",
    icon: "🔱",
    description:
      "Special Mahashivratri pooja dedicated to Lord Shiva.",
    duration: "60–90 Minutes",
    price: 1500,
    category: "shiv-pooja",
    benefits: [
      "Peace",
      "Spiritual growth",
      "Divine blessings",
      "Positive energy",
    ],
  },

  {
    id: 43,
    name: "Hanuman Jayanti Pooja",
    icon: "🚩",
    description:
      "Special Hanuman Jayanti pooja performed with devotional prayers.",
    duration: "60 Minutes",
    price: 1100,
    category: "popular",
    benefits: [
      "Strength",
      "Courage",
      "Protection",
      "Divine blessings",
    ],
  },

  {
    id: 44,
    name: "Ganesh Chaturthi Pooja",
    icon: "🙏",
    description:
      "Traditional Ganesh Chaturthi pooja dedicated to Lord Ganesha.",
    duration: "60 Minutes",
    price: 1100,
    category: "popular",
    benefits: [
      "Prosperity",
      "Success",
      "Peace",
      "Removal of obstacles",
    ],
  },

  {
    id: 45,
    name: "Saraswati Puja",
    icon: "📚",
    description:
      "Saraswati Puja for knowledge, wisdom and learning.",
    duration: "60 Minutes",
    price: 1100,
    category: "popular",
    benefits: [
      "Knowledge",
      "Learning",
      "Concentration",
      "Wisdom",
    ],
  },

  {
    id: 46,
    name: "Business Success Pooja",
    icon: "💼",
    description:
      "Pooja performed for business growth, stability and prosperity.",
    duration: "60–90 Minutes",
    price: 2100,
    category: "business-pooja",
    benefits: [
      "Business growth",
      "Prosperity",
      "Stability",
      "Success",
    ],
  },

  {
    id: 47,
    name: "Career Growth Pooja",
    icon: "📈",
    description:
      "Pooja performed for career growth, opportunities and professional success.",
    duration: "60 Minutes",
    price: 1500,
    category: "business-pooja",
    benefits: [
      "Career growth",
      "Success",
      "New opportunities",
      "Confidence",
    ],
  },

  {
    id: 48,
    name: "Health & Wellness Pooja",
    icon: "🌿",
    description:
      "Traditional prayers performed for health, peace and overall wellbeing.",
    duration: "60–90 Minutes",
    price: 1500,
    category: "popular",
    benefits: [
      "Wellbeing",
      "Peace",
      "Positive energy",
      "Divine blessings",
    ],
  },

  {
    id: 49,
    name: "Marriage Blessing Pooja",
    icon: "💍",
    description:
      "Pooja performed for marital harmony, happiness and divine blessings.",
    duration: "60 Minutes",
    price: 1500,
    category: "popular",
    benefits: [
      "Marital harmony",
      "Love",
      "Family happiness",
      "Blessings",
    ],
  },

  {
    id: 50,
    name: "Family Peace Pooja",
    icon: "🕉️",
    description:
      "Sacred prayers performed for peace, harmony and happiness within the family.",
    duration: "60 Minutes",
    price: 1500,
    category: "popular",
    benefits: [
      "Family peace",
      "Harmony",
      "Positive energy",
      "Happiness",
    ],
  },
];