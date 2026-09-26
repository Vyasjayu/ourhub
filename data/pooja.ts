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

/**

* ============================================================
* POoja DATA
* ============================================================
*
* Original English data is kept unchanged so existing:
* * IDs
* * prices
* * categories
* * routes
* * localStorage
* * booking logic
*
* continue to work without any changes.
  */

export const allPoojas: Pooja[] = [
{
id: 1,
name: "Ganesh Pooja",
icon: "🙏",
description:
"Lord Ganesha pooja for removing obstacles, bringing prosperity and starting new beginnings with divine blessings.",
duration: "45–60 Minutes",
price: 1100,
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

/**

* ============================================================
* HINDI TRANSLATIONS
* ============================================================
*
* Use these in UI components with:
*
* language === "hi"
* ? poojaHindiTranslations[pooja.name]
* : pooja.name
  */

export interface PoojaHindiTranslation {
name: string;
description: string;
benefits: string[];
}

export const poojaHindiTranslations: Record<
  string,
  {
    name: string;
    description: string;
    benefits: string[];
    duration?: string;
  }
> = {
 "Ganesh Pooja": {
name: "गणेश पूजा",
 description:
 "भगवान गणेश की पूजा बाधाओं को दूर करने, समृद्धि लाने और नए कार्यों की शुभ शुरुआत के लिए की जाती है।",
 benefits: [
 "बाधाएं दूर होती हैं",
  "समृद्धि आती है",
 "नई शुरुआत के लिए शुभ",
 "शांति और सकारात्मक ऊर्जा",
 ],
 },

"Lakshmi Pooja": {
name: "लक्ष्मी पूजा",
description:
"माता लक्ष्मी को समर्पित पवित्र पूजा, जो समृद्धि, धन और ऐश्वर्य के लिए की जाती है।",
benefits: [
"समृद्धि",
"आर्थिक उन्नति",
"सकारात्मक ऊर्जा",
"घर में शांति",
],
},

"Saraswati Pooja": {
name: "सरस्वती पूजा",
description:
"माता सरस्वती को समर्पित पूजा, जो ज्ञान, बुद्धि, शिक्षा और एकाग्रता के लिए की जाती है।",
benefits: [
"ज्ञान",
"बेहतर एकाग्रता",
"शैक्षणिक सफलता",
"बुद्धि",
],
},

"Durga Pooja": {
name: "दुर्गा पूजा",
description:
"मां दुर्गा को समर्पित भक्ति पूजा, जो शक्ति, सुरक्षा और सकारात्मक ऊर्जा के लिए की जाती है।",
benefits: [
"सुरक्षा",
"शक्ति",
"सकारात्मक ऊर्जा",
"शांति",
],
},

"Kali Pooja": {
name: "काली पूजा",
description:
"मां काली की पवित्र पूजा सुरक्षा, साहस और नकारात्मक प्रभावों को दूर करने के लिए की जाती है।",
benefits: [
"सुरक्षा",
"साहस",
"नकारात्मकता से मुक्ति",
"मानसिक शक्ति",
],
},

"Shiv Pooja": {
name: "शिव पूजा",
description:
"भगवान शिव की पूजा शांति, आध्यात्मिक उन्नति, स्वास्थ्य और दिव्य आशीर्वाद के लिए की जाती है।",
benefits: [
"मन की शांति",
"आध्यात्मिक उन्नति",
"स्वास्थ्य",
"दिव्य आशीर्वाद",
],
},

"Hanuman Pooja": {
name: "हनुमान पूजा",
description:
"भगवान हनुमान को समर्पित पूजा साहस, शक्ति, सुरक्षा और भय से मुक्ति के लिए की जाती है।",
benefits: [
"साहस",
"सुरक्षा",
"शक्ति",
"भय से मुक्ति",
],
},

"Ram Darbar Pooja": {
name: "राम दरबार पूजा",
description:
"राम दरबार की पवित्र पूजा परिवार में प्रेम, शांति और दिव्य आशीर्वाद के लिए की जाती है।",
benefits: [
"पारिवारिक सद्भाव",
"शांति",
"सकारात्मक वातावरण",
"दिव्य आशीर्वाद",
],
},

"Krishna Pooja": {
name: "कृष्ण पूजा",
description:
"भगवान कृष्ण की पूजा प्रेम, खुशी, शांति और आध्यात्मिक कल्याण के लिए की जाती है।",
benefits: [
"खुशी",
"प्रेम",
"शांति",
"आध्यात्मिक कल्याण",
],
},

"Satyanarayan Katha": {
name: "सत्यनारायण कथा",
description:
"पवित्र सत्यनारायण कथा समृद्धि, शांति और मनोकामना पूर्ण होने के लिए की जाती है।",
benefits: [
"समृद्धि",
"पारिवारिक शांति",
"मनोकामना पूर्ण होना",
"सकारात्मक ऊर्जा",
],
},

"Rudrabhishek": {
name: "रुद्राभिषेक",
description:
"भगवान शिव का पारंपरिक रुद्राभिषेक शांति, स्वास्थ्य और आध्यात्मिक शुद्धि के लिए किया जाता है।",
benefits: [
"शांति",
"स्वास्थ्य",
"आध्यात्मिक शुद्धि",
"दिव्य आशीर्वाद",
],
},

"Mahamrityunjaya Jaap": {
name: "महामृत्युंजय जाप",
description:
"पवित्र महामृत्युंजय जाप स्वास्थ्य, शांति और कल्याण के लिए श्रद्धापूर्वक किया जाता है।",
benefits: [
"स्वास्थ्य",
"शांति",
"कल्याण",
"आध्यात्मिक सुरक्षा",
],
},

"Navgraha Pooja": {
name: "नवग्रह पूजा",
description:
"नवग्रह पूजा ग्रहों में सामंजस्य और नकारात्मक ग्रह प्रभावों को दूर करने के लिए की जाती है।",
benefits: [
"ग्रहों में सामंजस्य",
"शांति",
"सकारात्मक ऊर्जा",
"बाधाओं से मुक्ति",
],
},

"Vastu Pooja": {
name: "वास्तु पूजा",
description:
"वास्तु पूजा घर या स्थान में शांतिपूर्ण, सकारात्मक और सामंजस्यपूर्ण वातावरण बनाने के लिए की जाती है।",
benefits: [
"सकारात्मक ऊर्जा",
"घर में शांति",
"सामंजस्य",
"वास्तु संतुलन",
],
},

"Griha Pravesh": {
name: "गृह प्रवेश",
description:
"नए घर में प्रवेश करने से पहले पारंपरिक गृह प्रवेश पूजा की जाती है।",
benefits: [
"शुभ शुरुआत",
"शांति",
"समृद्धि",
"सकारात्मक ऊर्जा",
],
},

"Bhoomi Poojan": {
name: "भूमि पूजन",
description:
"किसी संपत्ति के निर्माण या विकास से पहले पवित्र भूमि पूजन किया जाता है।",
benefits: [
"शुभ शुरुआत",
"सकारात्मक ऊर्जा",
"शांति",
"दिव्य आशीर्वाद",
],
},

"Vivah Pooja": {
name: "विवाह पूजा",
description:
"शुभ और मंगलमय विवाह के लिए पारंपरिक पूजा की जाती है।",
benefits: [
"शुभ विवाह",
"पारिवारिक सद्भाव",
"दिव्य आशीर्वाद",
"सकारात्मक ऊर्जा",
],
},

"Engagement Pooja": {
name: "सगाई पूजा",
description:
"सगाई समारोह को शुभ और मंगलमय बनाने के लिए पूजा की जाती है।",
benefits: [
"शुभ शुरुआत",
"परिवार का आशीर्वाद",
"सद्भाव",
"सकारात्मक ऊर्जा",
],
},

"Namkaran Sanskar": {
name: "नामकरण संस्कार",
description:
"नवजात शिशु के आशीर्वाद और मंगलमय जीवन के लिए पारंपरिक नामकरण संस्कार किया जाता है।",
benefits: [
"बच्चे का आशीर्वाद",
"पारिवारिक खुशी",
"शुभ शुरुआत",
"दिव्य आशीर्वाद",
],
},

"Mundan Sanskar": {
name: "मुंडन संस्कार",
description:
"वैदिक रीति-रिवाजों और आशीर्वाद के साथ पारंपरिक मुंडन संस्कार किया जाता है।",
benefits: [
"पारंपरिक संस्कार",
"बच्चे का आशीर्वाद",
"पारिवारिक खुशी",
"सकारात्मक ऊर्जा",
],
},

"Annaprashan": {
name: "अन्नप्राशन",
description:
"बच्चे के पहली बार अन्न ग्रहण करने के अवसर पर पवित्र अन्नप्राशन संस्कार किया जाता है।",
benefits: [
"बच्चे का आशीर्वाद",
"अच्छा स्वास्थ्य",
"पारिवारिक खुशी",
"शुभ शुरुआत",
],
},

"Janeu Sanskar": {
name: "जनेऊ संस्कार",
description:
"वैदिक परंपराओं के अनुसार पारंपरिक उपनयन या जनेऊ संस्कार किया जाता है।",
benefits: [
"पारंपरिक समारोह",
"आध्यात्मिक उन्नति",
"दिव्य आशीर्वाद",
"सकारात्मक ऊर्जा",
],
},

"Pitru Dosh Nivaran": {
name: "पितृ दोष निवारण",
description:
"पितृ दोष से संबंधित आध्यात्मिक चिंताओं के लिए पारंपरिक अनुष्ठान किए जाते हैं।",
benefits: [
"शांति",
"पारिवारिक सद्भाव",
"आध्यात्मिक कल्याण",
"सकारात्मक ऊर्जा",
],
},

"Kaal Sarp Dosh": {
name: "काल सर्प दोष",
description:
"वैदिक मंत्रों और प्रार्थनाओं के साथ पारंपरिक काल सर्प दोष शांति अनुष्ठान किया जाता है।",
benefits: [
"शांति",
"आध्यात्मिक कल्याण",
"सकारात्मक ऊर्जा",
"दिव्य आशीर्वाद",
],
},

"Manglik Dosh Pooja": {
name: "मांगलिक दोष पूजा",
description:
"वैदिक मंत्रों के साथ पारंपरिक मांगलिक दोष शांति पूजा की जाती है।",
benefits: [
"शांति",
"विवाह में सद्भाव",
"सकारात्मक ऊर्जा",
"दिव्य आशीर्वाद",
],
},

"Shani Shanti": {
name: "शनि शांति",
description:
"पारंपरिक प्रार्थनाओं और पूजन सामग्री के साथ शनि शांति पूजा की जाती है।",
benefits: [
"शांति",
"सकारात्मक ऊर्जा",
"आध्यात्मिक कल्याण",
"दिव्य आशीर्वाद",
],
},

"Rahu Ketu Shanti": {
name: "राहु केतु शांति",
description:
"ग्रहों में सामंजस्य के लिए पारंपरिक राहु केतु शांति अनुष्ठान किए जाते हैं।",
benefits: [
"ग्रहों में सामंजस्य",
"शांति",
"सकारात्मक ऊर्जा",
"आध्यात्मिक कल्याण",
],
},

"Chandi Path": {
name: "चंडी पाठ",
description:
"भक्ति पाठ और पारंपरिक अनुष्ठानों के साथ पवित्र चंडी पाठ किया जाता है।",
benefits: [
"सुरक्षा",
"शक्ति",
"सकारात्मक ऊर्जा",
"दिव्य आशीर्वाद",
],
},

"Durga Saptashati": {
name: "दुर्गा सप्तशती",
description:
"दिव्य सुरक्षा और आशीर्वाद के लिए पवित्र दुर्गा सप्तशती का पाठ किया जाता है।",
benefits: [
"सुरक्षा",
"शक्ति",
"शांति",
"सकारात्मक ऊर्जा",
],
},

"Lakshmi Kuber Pooja": {
name: "लक्ष्मी कुबेर पूजा",
description:
"समृद्धि, धन और ऐश्वर्य के लिए लक्ष्मी कुबेर पूजा की जाती है।",
benefits: [
"समृद्धि",
"धन",
"व्यापार में वृद्धि",
"सकारात्मक ऊर्जा",
],
},

"Dhanteras Pooja": {
name: "धनतेरस पूजा",
description:
"समृद्धि और कल्याण के लिए शुभ धनतेरस पूजा की जाती है।",
benefits: [
"समृद्धि",
"धन",
"सकारात्मक ऊर्जा",
"पारिवारिक खुशी",
],
},

"Diwali Lakshmi Pooja": {
name: "दिवाली लक्ष्मी पूजा",
description:
"समृद्धि और ऐश्वर्य के लिए पारंपरिक दिवाली लक्ष्मी पूजा की जाती है।",
benefits: [
"समृद्धि",
"धन",
"शांति",
"सकारात्मक ऊर्जा",
],
},

"Ganesh Visarjan Pooja": {
name: "गणेश विसर्जन पूजा",
description:
"श्रद्धा और भक्ति के साथ पारंपरिक गणेश विसर्जन पूजा एवं प्रार्थना की जाती है।",
benefits: [
"दिव्य आशीर्वाद",
"शांति",
"सकारात्मक ऊर्जा",
"शुभ समापन",
],
},

"Karwa Chauth Pooja": {
name: "करवा चौथ पूजा",
description:
"वैवाहिक सुख और आशीर्वाद के लिए पारंपरिक करवा चौथ पूजा की जाती है।",
benefits: [
"वैवाहिक सुख",
"पारिवारिक सद्भाव",
"आशीर्वाद",
"सकारात्मक ऊर्जा",
],
},

"Raksha Bandhan Pooja": {
name: "रक्षाबंधन पूजा",
description:
"परिवार में प्रेम और सुरक्षा के लिए पारंपरिक रक्षाबंधन प्रार्थना एवं पूजा की जाती है।",
benefits: [
"पारिवारिक जुड़ाव",
"सुरक्षा",
"प्रेम",
"आशीर्वाद",
],
},

"Navratri Pooja": {
name: "नवरात्रि पूजा",
description:
"मां दुर्गा और उनके दिव्य स्वरूपों को समर्पित पवित्र नवरात्रि पूजा की जाती है।",
benefits: [
"सुरक्षा",
"शक्ति",
"सकारात्मक ऊर्जा",
"दिव्य आशीर्वाद",
],
},

"Chhath Pooja": {
name: "छठ पूजा",
description:
"प्रार्थना और श्रद्धा के साथ पारंपरिक छठ पूजा की जाती है।",
benefits: [
"पारिवारिक कल्याण",
"स्वास्थ्य",
"समृद्धि",
"दिव्य आशीर्वाद",
],
},

"Makar Sankranti Pooja": {
name: "मकर संक्रांति पूजा",
description:
"समृद्धि और कल्याण के लिए शुभ मकर संक्रांति पूजा एवं प्रार्थना की जाती है।",
benefits: [
"समृद्धि",
"सकारात्मक ऊर्जा",
"कल्याण",
"शुभ शुरुआत",
],
},

"Akshaya Tritiya Pooja": {
name: "अक्षय तृतीया पूजा",
description:
"समृद्धि और सफलता के लिए शुभ अक्षय तृतीया पूजा की जाती है।",
benefits: [
"समृद्धि",
"सफलता",
"धन",
"शुभ शुरुआत",
],
},

"Janmashtami Pooja": {
name: "जन्माष्टमी पूजा",
description:
"भगवान श्री कृष्ण के जन्मोत्सव के अवसर पर भक्ति भाव से जन्माष्टमी पूजा की जाती है।",
benefits: [
"शांति",
"पारिवारिक खुशी",
"भक्ति",
"दिव्य आशीर्वाद",
],
},

"Ram Navami Pooja": {
name: "राम नवमी पूजा",
description:
"भगवान श्री राम को समर्पित पवित्र राम नवमी पूजा की जाती है।",
benefits: [
"शांति",
"पारिवारिक सद्भाव",
"भक्ति",
"दिव्य आशीर्वाद",
],
},

"Mahashivratri Pooja": {
name: "महाशिवरात्रि पूजा",
description:
"भगवान शिव को समर्पित विशेष महाशिवरात्रि पूजा की जाती है।",
benefits: [
"शांति",
"आध्यात्मिक उन्नति",
"दिव्य आशीर्वाद",
"सकारात्मक ऊर्जा",
],
},

"Hanuman Jayanti Pooja": {
name: "हनुमान जयंती पूजा",
description:
"भक्ति और प्रार्थना के साथ विशेष हनुमान जयंती पूजा की जाती है।",
benefits: [
"शक्ति",
"साहस",
"सुरक्षा",
"दिव्य आशीर्वाद",
],
},

"Ganesh Chaturthi Pooja": {
name: "गणेश चतुर्थी पूजा",
description:
"भगवान गणेश को समर्पित पारंपरिक गणेश चतुर्थी पूजा की जाती है।",
benefits: [
"समृद्धि",
"सफलता",
"शांति",
"बाधाओं से मुक्ति",
],
},

"Saraswati Puja": {
name: "सरस्वती पूजा",
description:
"ज्ञान, बुद्धि और शिक्षा के लिए सरस्वती पूजा की जाती है।",
benefits: [
"ज्ञान",
"शिक्षा",
"एकाग्रता",
"बुद्धि",
],
},

"Business Success Pooja": {
name: "व्यापार सफलता पूजा",
description:
"व्यापार में वृद्धि, स्थिरता और समृद्धि के लिए पूजा की जाती है।",
benefits: [
"व्यापार में वृद्धि",
"समृद्धि",
"स्थिरता",
"सफलता",
],
},

"Career Growth Pooja": {
name: "करियर वृद्धि पूजा",
description:
"करियर में वृद्धि, नए अवसरों और पेशेवर सफलता के लिए पूजा की जाती है।",
benefits: [
"करियर में वृद्धि",
"सफलता",
"नए अवसर",
"आत्मविश्वास",
],
},

"Health & Wellness Pooja": {
name: "स्वास्थ्य एवं कल्याण पूजा",
description:
"स्वास्थ्य, शांति और समग्र कल्याण के लिए पारंपरिक प्रार्थना एवं पूजा की जाती है।",
benefits: [
"कल्याण",
"शांति",
"सकारात्मक ऊर्जा",
"दिव्य आशीर्वाद",
],
},

"Marriage Blessing Pooja": {
name: "विवाह आशीर्वाद पूजा",
description:
"वैवाहिक सद्भाव, खुशी और दिव्य आशीर्वाद के लिए पूजा की जाती है।",
benefits: [
"वैवाहिक सद्भाव",
"प्रेम",
"पारिवारिक खुशी",
"आशीर्वाद",
],
},

"Family Peace Pooja": {
name: "पारिवारिक शांति पूजा",
description:
"परिवार में शांति, सद्भाव और खुशी के लिए पवित्र प्रार्थना एवं पूजा की जाती है।",
benefits: [
"पारिवारिक शांति",
"सद्भाव",
"सकारात्मक ऊर्जा",
"खुशी",
],
},
};
