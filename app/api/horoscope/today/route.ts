import { NextRequest, NextResponse } from "next/server";

interface HoroscopeData {
  sign: string;
  hindi: string;
  date: string;

  prediction: string;

  love: string;
  career: string;
  finance: string;
  health: string;

  luckyNumber: string;
  luckyColor: string;
  luckyTime: string;

  mood: string;
  advice: string;
}

const zodiacData: Record<
  string,
  {
    name: string;
    hindi: string;
  }
> = {
  aries: {
    name: "Aries",
    hindi: "मेष",
  },
  taurus: {
    name: "Taurus",
    hindi: "वृषभ",
  },
  gemini: {
    name: "Gemini",
    hindi: "मिथुन",
  },
  cancer: {
    name: "Cancer",
    hindi: "कर्क",
  },
  leo: {
    name: "Leo",
    hindi: "सिंह",
  },
  virgo: {
    name: "Virgo",
    hindi: "कन्या",
  },
  libra: {
    name: "Libra",
    hindi: "तुला",
  },
  scorpio: {
    name: "Scorpio",
    hindi: "वृश्चिक",
  },
  sagittarius: {
    name: "Sagittarius",
    hindi: "धनु",
  },
  capricorn: {
    name: "Capricorn",
    hindi: "मकर",
  },
  aquarius: {
    name: "Aquarius",
    hindi: "कुंभ",
  },
  pisces: {
    name: "Pisces",
    hindi: "मीन",
  },
};

const predictions = [
  "आज का दिन नई योजनाओं और सकारात्मक बदलावों के लिए अच्छा रहेगा। किसी महत्वपूर्ण निर्णय में धैर्य से काम लें।",
  "आज आपको अपने काम में नई ऊर्जा महसूस होगी। रुके हुए कार्यों को आगे बढ़ाने का अवसर मिल सकता है।",
  "आज बातचीत और समझदारी आपके लिए लाभदायक रहेगी। किसी पुराने मुद्दे को शांतिपूर्वक सुलझाने का प्रयास करें।",
  "आज मेहनत का अच्छा परिणाम मिलने के संकेत हैं। जल्दबाजी से बचें और अपने लक्ष्य पर ध्यान बनाए रखें।",
  "आज आपको किसी नए अवसर पर विचार करने का मौका मिल सकता है। निर्णय लेने से पहले सभी पहलुओं को समझें।",
  "आज का दिन आत्मविश्वास बढ़ाने वाला रहेगा। अपनी प्राथमिकताओं पर ध्यान देकर आगे बढ़ें।",
];

const lovePredictions = [
  "रिश्तों में खुलकर बातचीत करने से नजदीकियां बढ़ेंगी।",
  "अपने साथी की भावनाओं को समझने का प्रयास करें। छोटी बातों को लेकर तनाव से बचें।",
  "अविवाहित लोगों के लिए किसी नए व्यक्ति से बातचीत की शुरुआत हो सकती है।",
  "रिश्ते में भरोसा और सहयोग बनाए रखना आज महत्वपूर्ण रहेगा।",
  "परिवार और साथी के साथ अच्छा समय बिताने का अवसर मिलेगा।",
];

const careerPredictions = [
  "काम में नई जिम्मेदारी मिल सकती है। अपनी क्षमता दिखाने का अच्छा समय है।",
  "रुका हुआ प्रोजेक्ट आगे बढ़ सकता है। सहकर्मियों का सहयोग मिलेगा।",
  "नौकरी या व्यवसाय में नई संभावना पर विचार कर सकते हैं।",
  "आज महत्वपूर्ण कार्यों को प्राथमिकता देना आपके लिए फायदेमंद रहेगा।",
  "आपकी मेहनत वरिष्ठ लोगों की नजर में आ सकती है।",
];

const financePredictions = [
  "आर्थिक स्थिति सामान्य से बेहतर रह सकती है। अनावश्यक खर्चों पर नियंत्रण रखें।",
  "आज खर्च और बचत के बीच संतुलन बनाना जरूरी रहेगा।",
  "किसी पुराने भुगतान या आर्थिक मामले में प्रगति हो सकती है।",
  "निवेश संबंधी निर्णय में जल्दबाजी से बचें और पूरी जानकारी लें।",
  "आय के नए अवसरों पर ध्यान देने का अच्छा समय है।",
];

const healthPredictions = [
  "आज पर्याप्त आराम और पानी का ध्यान रखें।",
  "मानसिक तनाव कम करने के लिए थोड़ा समय अपने लिए निकालें।",
  "हल्की एक्सरसाइज और संतुलित भोजन आपके लिए लाभदायक रहेगा।",
  "काम के बीच पर्याप्त ब्रेक लेना जरूरी रहेगा।",
  "आज अपनी दिनचर्या को संतुलित रखने पर ध्यान दें।",
];

const luckyColors = [
  "Yellow",
  "Blue",
  "Green",
  "White",
  "Red",
  "Orange",
  "Pink",
  "Purple",
];

const luckyTimes = [
  "7:00 AM - 9:00 AM",
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "1:00 PM - 3:00 PM",
  "4:00 PM - 6:00 PM",
  "6:00 PM - 8:00 PM",
];

const moods = [
  "Positive",
  "Calm",
  "Confident",
  "Focused",
  "Energetic",
  "Peaceful",
];

const adviceList = [
  "आज किसी भी बड़े निर्णय में धैर्य रखें।",
  "अपने लक्ष्य पर ध्यान रखें और नकारात्मक विचारों से बचें।",
  "आज समय का सही उपयोग आपकी सफलता में महत्वपूर्ण भूमिका निभाएगा।",
  "बातचीत में विनम्रता रखें और जल्दबाजी में प्रतिक्रिया न दें।",
  "आज अपनी प्राथमिकताओं को स्पष्ट रखें।",
  "छोटे कदमों से शुरुआत करें और निरंतरता बनाए रखें।",
];

// ---------------------------------------------------------
// DETERMINISTIC DAILY NUMBER
// ---------------------------------------------------------

function dailyIndex(
  date: string,
  sign: string,
  length: number,
  offset = 0
) {
  const value =
    `${date}-${sign}-${offset}`
      .split("")
      .reduce(
        (total, char) =>
          (total * 31 + char.charCodeAt(0)) %
          100000,
        7
      );

  return value % length;
}

// ---------------------------------------------------------
// GET INDIA DATE
// ---------------------------------------------------------

function getIndiaDate() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

// ---------------------------------------------------------
// FORMAT DATE
// ---------------------------------------------------------

function formatIndiaDate(date: string) {
  const [year, month, day] =
    date.split("-").map(Number);

  const localDate = new Date(
    year,
    month - 1,
    day
  );

  return new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(localDate);
}

// ---------------------------------------------------------
// GET
// ---------------------------------------------------------

export async function GET(
  request: NextRequest
) {
  try {
    const searchParams =
      request.nextUrl.searchParams;

    const signParam =
      searchParams.get("sign");

    const sign =
      signParam?.toLowerCase().trim() ||
      "aries";

    // Validate zodiac
    if (!zodiacData[sign]) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid zodiac sign.",
        },
        {
          status: 400,
        }
      );
    }

    // IMPORTANT:
    // Current date according to India
    const currentDate =
      getIndiaDate();

    const zodiac =
      zodiacData[sign];

    // -------------------------------------------------------
    // DAILY INDEXES
    // These automatically change when date changes.
    // -------------------------------------------------------

    const prediction =
      predictions[
        dailyIndex(
          currentDate,
          sign,
          predictions.length,
          1
        )
      ];

    const love =
      lovePredictions[
        dailyIndex(
          currentDate,
          sign,
          lovePredictions.length,
          2
        )
      ];

    const career =
      careerPredictions[
        dailyIndex(
          currentDate,
          sign,
          careerPredictions.length,
          3
        )
      ];

    const finance =
      financePredictions[
        dailyIndex(
          currentDate,
          sign,
          financePredictions.length,
          4
        )
      ];

    const health =
      healthPredictions[
        dailyIndex(
          currentDate,
          sign,
          healthPredictions.length,
          5
        )
      ];

    const luckyNumber = String(
      1 +
        dailyIndex(
          currentDate,
          sign,
          9,
          6
        )
    );

    const luckyColor =
      luckyColors[
        dailyIndex(
          currentDate,
          sign,
          luckyColors.length,
          7
        )
      ];

    const luckyTime =
      luckyTimes[
        dailyIndex(
          currentDate,
          sign,
          luckyTimes.length,
          8
        )
      ];

    const mood =
      moods[
        dailyIndex(
          currentDate,
          sign,
          moods.length,
          9
        )
      ];

    const advice =
      adviceList[
        dailyIndex(
          currentDate,
          sign,
          adviceList.length,
          10
        )
      ];

    // -------------------------------------------------------
    // RESPONSE
    // -------------------------------------------------------

    const data: HoroscopeData = {
      sign: zodiac.name,
      hindi: zodiac.hindi,
      date: formatIndiaDate(
        currentDate
      ),

      prediction,

      love,
      career,
      finance,
      health,

      luckyNumber,
      luckyColor,
      luckyTime,

      mood,
      advice,
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
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  } catch (error) {
    console.error(
      "TODAY HOROSCOPE API ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Unable to generate today's horoscope.",
      },
      {
        status: 500,
      }
    );
  }
}