import { NextRequest, NextResponse } from "next/server";

interface LoveHoroscope {
  sign: string;
  hindi: string;
  date: string;
  prediction: string;
  relationship: string;
  singles: string;
  couples: string;
  communication: string;
  luckyColor: string;
  luckyNumber: string;
  loveAdvice: string;
  mood: string;
}

const zodiacSigns = [
  { id: "aries", name: "Aries", hindi: "मेष" },
  { id: "taurus", name: "Taurus", hindi: "वृषभ" },
  { id: "gemini", name: "Gemini", hindi: "मिथुन" },
  { id: "cancer", name: "Cancer", hindi: "कर्क" },
  { id: "leo", name: "Leo", hindi: "सिंह" },
  { id: "virgo", name: "Virgo", hindi: "कन्या" },
  { id: "libra", name: "Libra", hindi: "तुला" },
  { id: "scorpio", name: "Scorpio", hindi: "वृश्चिक" },
  { id: "sagittarius", name: "Sagittarius", hindi: "धनु" },
  { id: "capricorn", name: "Capricorn", hindi: "मकर" },
  { id: "aquarius", name: "Aquarius", hindi: "कुंभ" },
  { id: "pisces", name: "Pisces", hindi: "मीन" },
];

const dailyContent = [
  {
    prediction:
      "आज प्रेम संबंधों में सकारात्मक ऊर्जा बनी रहेगी। अपनी भावनाओं को खुलकर व्यक्त करने का अच्छा समय है।",

    relationship:
      "रिश्ते में भरोसा और समझ बढ़ेगी। छोटी बातों को लेकर बहस से बचें।",

    singles:
      "सिंगल लोगों की किसी खास व्यक्ति से बातचीत शुरू हो सकती है।",

    couples:
      "पार्टनर के साथ बिताया गया समय रिश्ते को और मजबूत कर सकता है।",

    communication:
      "आज स्पष्ट और शांत बातचीत आपके रिश्ते के लिए फायदेमंद रहेगी।",

    loveAdvice:
      "दिल की बात कहने से पहले सामने वाले की भावनाओं को भी समझें।",

    mood: "Romantic",
  },

  {
    prediction:
      "आज आपका आकर्षण बढ़ा हुआ रहेगा। प्रेम जीवन में कोई सुखद बदलाव देखने को मिल सकता है।",

    relationship:
      "पुरानी गलतफहमियां दूर करने का अवसर मिलेगा।",

    singles:
      "किसी नए व्यक्ति से मुलाकात आपके लिए खास हो सकती है।",

    couples:
      "पार्टनर के साथ रोमांटिक पल बिताने का अवसर मिलेगा।",

    communication:
      "सही शब्दों का चुनाव रिश्ते में सकारात्मक बदलाव ला सकता है।",

    loveAdvice:
      "अपने रिश्ते में ईमानदारी और धैर्य बनाए रखें।",

    mood: "Happy",
  },

  {
    prediction:
      "आज प्रेम जीवन में धैर्य रखने की जरूरत है। जल्दबाजी में कोई निर्णय न लें।",

    relationship:
      "भावनात्मक संवेदनशीलता अधिक रह सकती है। पार्टनर को समझने की कोशिश करें।",

    singles:
      "नई शुरुआत के लिए समय अच्छा है, लेकिन पहले सामने वाले को जानें।",

    couples:
      "छोटी गलतफहमियां बातचीत से आसानी से दूर हो सकती हैं।",

    communication:
      "बातचीत करते समय कठोर शब्दों से बचना बेहतर रहेगा।",

    loveAdvice:
      "रिश्ते में जीतने से ज्यादा जरूरी एक-दूसरे को समझना है।",

    mood: "Emotional",
  },

  {
    prediction:
      "आज प्रेम संबंधों के लिए दिन उत्साह और सकारात्मकता लेकर आ सकता है।",

    relationship:
      "रिश्ते में नई ऊर्जा महसूस होगी। साथ मिलकर भविष्य की योजना बना सकते हैं।",

    singles:
      "किसी पुराने परिचित से दोबारा संपर्क हो सकता है।",

    couples:
      "पार्टनर आपके प्रयासों की सराहना कर सकता है।",

    communication:
      "आपकी बातों का सकारात्मक प्रभाव सामने वाले पर पड़ेगा।",

    loveAdvice:
      "अपने प्रिय व्यक्ति के लिए थोड़ा समय जरूर निकालें।",

    mood: "Excited",
  },

  {
    prediction:
      "आज भावनात्मक जुड़ाव मजबूत होगा और अपने प्रिय व्यक्ति के करीब महसूस करेंगे।",

    relationship:
      "भरोसा और आपसी सम्मान रिश्ते को मजबूत बनाएगा।",

    singles:
      "किसी व्यक्ति के प्रति आपकी भावनाएं स्पष्ट हो सकती हैं।",

    couples:
      "साथ में कोई छोटा सा प्लान रिश्ते में खुशी ला सकता है।",

    communication:
      "दिल से की गई बातचीत आज खास परिणाम दे सकती है।",

    loveAdvice:
      "अपने रिश्ते में छोटी-छोटी खुशियों को महत्व दें।",

    mood: "Peaceful",
  },
];

function getDateSeed(date: string, signIndex: number) {
  let seed = 0;

  for (let i = 0; i < date.length; i++) {
    seed += date.charCodeAt(i) * (i + 1);
  }

  return Math.abs(seed + signIndex * 17);
}

function getDailyContent(date: string, signIndex: number) {
  const seed = getDateSeed(date, signIndex);

  return dailyContent[seed % dailyContent.length];
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const signParam =
      searchParams.get("sign")?.toLowerCase() || "aries";

    const signIndex = zodiacSigns.findIndex(
      (item) => item.id === signParam
    );

    if (signIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid zodiac sign.",
        },
        { status: 400 }
      );
    }

    /*
     * Server date.
     * India timezone is used so the horoscope
     * changes according to Indian calendar date.
     */
    const now = new Date();

    const date = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(now);

    const formattedDate = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(now);

    const content = getDailyContent(date, signIndex);

    const luckyNumber =
      ((getDateSeed(date, signIndex) % 9) + 1).toString();

    const colors = [
      "Golden",
      "White",
      "Pink",
      "Blue",
      "Green",
      "Yellow",
      "Orange",
      "Purple",
      "Silver",
    ];

    const luckyColor =
      colors[getDateSeed(date, signIndex + 3) % colors.length];

    const data: LoveHoroscope = {
      sign: zodiacSigns[signIndex].name,
      hindi: zodiacSigns[signIndex].hindi,
      date: formattedDate,

      prediction: content.prediction,
      relationship: content.relationship,
      singles: content.singles,
      couples: content.couples,
      communication: content.communication,

      luckyColor,
      luckyNumber,

      loveAdvice: content.loveAdvice,
      mood: content.mood,
    };

    return NextResponse.json(
      {
        success: true,
        data,
      },
      {
        status: 200,
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("LOVE HOROSCOPE API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to load today's love horoscope.",
      },
      { status: 500 }
    );
  }
}