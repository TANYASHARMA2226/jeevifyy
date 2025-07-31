"use client"

import { useState } from "react"
import { Heart, Volume2, Play, Globe, ChevronRight, Phone, Clock, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

export default function FirstAid() {
  const [selectedLanguage, setSelectedLanguage] = useState<"en" | "hi">("en")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const categories = [
    {
      id: "cpr",
      title: { en: "CPR (Cardiopulmonary Resuscitation)", hi: "सीपीआर (हृदय फुफ्फुसीय पुनर्जीवन)" },
      icon: "❤️",
      emergency: true,
      description: {
        en: "Life-saving technique for cardiac arrest",
        hi: "हृदयाघात के लिए जीवन रक्षक तकनीक",
      },
      timeRequired: { en: "Critical - Start immediately", hi: "गंभीर - तुरंत शुरू करें" },
    },
    {
      id: "bleeding",
      title: { en: "Severe Bleeding", hi: "गंभीर रक्तस्राव" },
      icon: "🩸",
      emergency: true,
      description: {
        en: "Control heavy bleeding to prevent shock",
        hi: "शॉक से बचने के लिए भारी रक्तस्राव को नियंत्रित करें",
      },
      timeRequired: { en: "Urgent - Within 2 minutes", hi: "तत्काल - 2 मिनट के भीतर" },
    },
    {
      id: "choking",
      title: { en: "Choking", hi: "दम घुटना" },
      icon: "🫁",
      emergency: true,
      description: {
        en: "Clear airway obstruction quickly",
        hi: "वायुमार्ग की रुकावट को जल्दी साफ करें",
      },
      timeRequired: { en: "Critical - Act within 30 seconds", hi: "गंभीर - 30 सेकंड के भीतर कार्य करें" },
    },
    {
      id: "burns",
      title: { en: "Burns", hi: "जलना" },
      icon: "🔥",
      emergency: false,
      description: {
        en: "Cool and protect burned skin",
        hi: "जली हुई त्वचा को ठंडा करें और सुरक्षित रखें",
      },
      timeRequired: { en: "Important - Within 5 minutes", hi: "महत्वपूर्ण - 5 मिनट के भीतर" },
    },
    {
      id: "fractures",
      title: { en: "Fractures", hi: "हड्डी टूटना" },
      icon: "🦴",
      emergency: false,
      description: {
        en: "Immobilize and support broken bones",
        hi: "टूटी हुई हड्डियों को स्थिर करें और सहारा दें",
      },
      timeRequired: { en: "Stabilize - Within 10 minutes", hi: "स्थिर करें - 10 मिनट के भीतर" },
    },
    {
      id: "poisoning",
      title: { en: "Poisoning", hi: "विषाक्तता" },
      icon: "☠️",
      emergency: true,
      description: {
        en: "Identify poison and prevent absorption",
        hi: "जहर की पहचान करें और अवशोषण को रोकें",
      },
      timeRequired: { en: "Critical - Call poison control immediately", hi: "गंभीर - तुरंत पॉइज़न कंट्रोल को कॉल करें" },
    },
  ]

  const instructions = {
    cpr: {
      en: {
        steps: [
          "Check for responsiveness - tap shoulders and shout 'Are you okay?'",
          "Call emergency services (112/108) immediately",
          "Place heel of one hand on center of chest, between nipples",
          "Place other hand on top, interlacing fingers",
          "Push hard and fast at least 2 inches deep",
          "Allow complete chest recoil between compressions",
          "Compress at rate of 100-120 per minute",
          "Continue until emergency services arrive",
        ],
        audio: "Play CPR audio guide in English",
        warnings: [
          "Do not stop compressions unless the person starts breathing normally",
          "Switch with another person every 2 minutes to avoid fatigue",
          "Do not be afraid to push hard - broken ribs heal, but the brain needs oxygen",
        ],
      },
      hi: {
        steps: [
          "प्रतिक्रिया की जांच करें - कंधों को थपथपाएं और चिल्लाएं 'क्या आप ठीक हैं?'",
          "तुरंत आपातकालीन सेवाओं (112/108) को कॉल करें",
          "एक हाथ की एड़ी को छाती के केंद्र में, निप्पल के बीच रखें",
          "दूसरा हाथ ऊपर रखें, उंगलियों को आपस में मिलाएं",
          "कम से कम 2 इंच गहराई तक जोर से और तेज़ी से दबाएं",
          "संपीड़न के बीच छाती को पूरी तरह से वापस आने दें",
          "प्रति मिनट 100-120 की दर से संपीड़न करें",
          "आपातकालीन सेवाओं के आने तक जारी रखें",
        ],
        audio: "हिंदी में सीपीआर ऑडियो गाइड चलाएं",
        warnings: [
          "जब तक व्यक्ति सामान्य रूप से सांस लेना शुरू न करे तब तक संपीड़न न रोकें",
          "थकान से बचने के लिए हर 2 मिनट में दूसरे व्यक्ति के साथ बदलें",
          "जोर से दबाने से न डरें - टूटी पसलियां ठीक हो जाती हैं, लेकिन मस्तिष्क को ऑक्सीजन चाहिए",
        ],
      },
    },
    bleeding: {
      en: {
        steps: [
          "Apply direct pressure to the wound with clean cloth",
          "Elevate the injured area above heart level if possible",
          "Do not remove embedded objects",
          "Apply pressure to pressure points if bleeding continues",
          "Call emergency services (112/108)",
          "Monitor for signs of shock",
          "Keep the person warm and calm",
        ],
        audio: "Play bleeding control audio guide in English",
        warnings: [
          "Never remove objects stuck in wounds",
          "If blood soaks through bandage, add more layers - don't remove the first one",
          "Watch for signs of shock: pale skin, rapid pulse, confusion",
        ],
      },
      hi: {
        steps: [
          "साफ कपड़े से घाव पर सीधा दबाव डालें",
          "यदि संभव हो तो घायल क्षेत्र को हृदय के स्तर से ऊपर उठाएं",
          "धंसी हुई वस्तुओं को न हटाएं",
          "यदि रक्तस्राव जारी रहे तो दबाव बिंदुओं पर दबाव डालें",
          "आपातकालीन सेवाओं (112/108) को कॉल करें",
          "शॉक के संकेतों की निगरानी करें",
          "व्यक्ति को गर्म और शांत रखें",
        ],
        audio: "हिंदी में रक्तस्राव नियंत्रण ऑडियो गाइड चलाएं",
        warnings: [
          "घावों में फंसी वस्तुओं को कभी न हटाएं",
          "यदि पट्टी से खून निकले तो और परतें जोड़ें - पहली वाली न हटाएं",
          "शॉक के संकेतों पर ध्यान दें: पीली त्वचा, तेज नाड़ी, भ्रम",
        ],
      },
    },
    burns: {
      en: {
        steps: [
          "Remove the person from the source of the burn.",
          "Cool the burn with cool (not cold) running water for at least 10 minutes.",
          "Remove any clothing or jewelry near the burn, but do not remove anything stuck to the skin.",
          "Cover the burn loosely with a sterile, non-stick bandage or clean cloth.",
          "Do not apply creams, oils, or ice to the burn.",
          "Monitor for signs of shock and seek medical attention if necessary."
        ],
        audio: "Play burns first aid audio guide in English",
        warnings: [
          "Do not pop blisters.",
          "Do not apply ice directly to the burn.",
          "Seek medical help for large, deep, or facial burns."
        ],
      },
      hi: {
        steps: [
          "व्यक्ति को जलने के स्रोत से दूर करें।",
          "कम से कम 10 मिनट के लिए ठंडे (बहुत ठंडे नहीं) पानी से जले हुए स्थान को ठंडा करें।",
          "जलने के पास के कपड़े या गहने हटा दें, लेकिन त्वचा से चिपकी चीजें न हटाएं।",
          "जले हुए स्थान को ढीले, साफ कपड़े या बाँधने की पट्टी से ढकें।",
          "जलने पर क्रीम, तेल या बर्फ न लगाएं।",
          "शॉक के लक्षणों की निगरानी करें और आवश्यकता होने पर चिकित्सा सहायता लें।"
        ],
        audio: "हिंदी में जलने की प्राथमिक चिकित्सा ऑडियो गाइड चलाएं",
        warnings: [
          "फफोले न फोड़ें।",
          "जलने पर सीधे बर्फ न लगाएं।",
          "बड़े, गहरे या चेहरे के जलने पर चिकित्सा सहायता लें।"
        ],
      },
    },
    fractures: {
      en: {
        steps: [
          "Keep the person still and calm.",
          "Immobilize the injured area. Do not try to realign the bone.",
          "Apply a splint to support the limb if trained to do so.",
          "Apply ice packs to reduce swelling (wrap ice in cloth).",
          "Seek medical attention immediately.",
          "Monitor for signs of shock."
        ],
        audio: "Play fractures first aid audio guide in English",
        warnings: [
          "Do not move the person unless necessary.",
          "Do not try to push a protruding bone back in.",
          "Call emergency services for open, severe, or neck/back fractures."
        ],
      },
      hi: {
        steps: [
          "व्यक्ति को शांत और स्थिर रखें।",
          "चोटिल स्थान को स्थिर करें। हड्डी को सीधा करने की कोशिश न करें।",
          "अगर प्रशिक्षित हैं तो अंग को सहारा देने के लिए स्प्लिंट लगाएं।",
          "सूजन कम करने के लिए बर्फ लगाएं (कपड़े में लपेटकर)।",
          "तुरंत चिकित्सा सहायता लें।",
          "शॉक के लक्षणों की निगरानी करें।"
        ],
        audio: "हिंदी में हड्डी टूटने की प्राथमिक चिकित्सा ऑडियो गाइड चलाएं",
        warnings: [
          "जब तक आवश्यक न हो व्यक्ति को न हिलाएं।",
          "उभरी हुई हड्डी को अंदर न धकेलें।",
          "खुली, गंभीर या गर्दन/पीठ की हड्डी टूटने पर आपातकालीन सेवाओं को कॉल करें।"
        ],
      },
    },
    choking: {
      en: {
        steps: [
          "Ask 'Are you choking?' - if they can't speak, act immediately",
          "Stand behind the person and wrap arms around waist",
          "Make a fist with one hand, place thumb side against stomach",
          "Position fist above navel, below ribcage",
          "Grasp fist with other hand and thrust upward and inward",
          "Repeat thrusts until object is expelled or person becomes unconscious",
          "If unconscious, begin CPR and call emergency services",
        ],
        audio: "Play choking response audio guide in English",
        warnings: [
          "For pregnant women or obese people, place hands on chest instead of abdomen",
          "For infants, use back blows and chest thrusts, not abdominal thrusts",
          "If person becomes unconscious, start CPR immediately",
        ],
      },
      hi: {
        steps: [
          "पूछें 'क्या आपका दम घुट रहा है?' - यदि वे बोल नहीं सकते, तुरंत कार्य करें",
          "व्यक्ति के पीछे खड़े हों और कमर के चारों ओर बाहें लपेटें",
          "एक हाथ से मुट्ठी बनाएं, अंगूठे की तरफ पेट के खिलाफ रखें",
          "मुट्ठी को नाभि के ऊपर, पसली के नीचे रखें",
          "दूसरे हाथ से मुट्ठी को पकड़ें और ऊपर और अंदर की ओर धक्का दें",
          "तब तक धक्का दोहराएं जब तक वस्तु बाहर न निकल जाए या व्यक्ति बेहोश न हो जाए",
          "यदि बेहोश हो जाए, तो सीपीआर शुरू करें और आपातकालीन सेवाओं को कॉल करें",
        ],
        audio: "हिंदी में दम घुटने की प्रतिक्रिया ऑडियो गाइड चलाएं",
        warnings: [
          "गर्भवती महिलाओं या मोटे लोगों के लिए, पेट के बजाय छाती पर हाथ रखें",
          "शिशुओं के लिए, पेट के धक्के नहीं, बल्कि पीठ की थपकी और छाती के धक्के का उपयोग करें",
          "यदि व्यक्ति बेहोश हो जाए तो तुरंत सीपीआर शुरू करें",
        ],
      },
    },
    poisoning: {
      en: {
        steps: [
          "Call emergency services or poison control immediately (112/108).",
          "If possible, identify the type of poison (container, label, etc.).",
          "Do not induce vomiting unless instructed by a medical professional.",
          "If the poison is on the skin, remove contaminated clothing and rinse skin with water for 15 minutes.",
          "If the poison is in the eyes, rinse eyes with clean water for at least 15 minutes.",
          "If the person is unconscious, not breathing, or having seizures, start CPR and seek immediate help."
        ],
        audio: "Play poisoning first aid audio guide in English",
        warnings: [
          "Do not give anything by mouth unless told by poison control or a doctor.",
          "Do not try to neutralize the poison with other substances.",
          "Keep the poison container or label for medical personnel if possible."
        ],
      },
      hi: {
        steps: [
          "तुरंत आपातकालीन सेवाओं या ज़हर नियंत्रण केंद्र (112/108) को कॉल करें।",
          "यदि संभव हो तो ज़हर के प्रकार की पहचान करें (डिब्बा, लेबल आदि)।",
          "चिकित्सकीय सलाह के बिना उल्टी न कराएं।",
          "यदि ज़हर त्वचा पर है, तो दूषित कपड़े हटा दें और त्वचा को 15 मिनट तक पानी से धोएं।",
          "यदि ज़हर आंखों में है, तो आंखों को कम से कम 15 मिनट तक साफ पानी से धोएं।",
          "यदि व्यक्ति बेहोश है, सांस नहीं ले रहा है या दौरे पड़ रहे हैं, तो सीपीआर शुरू करें और तुरंत मदद लें।"
        ],
        audio: "हिंदी में विषाक्तता की प्राथमिक चिकित्सा ऑडियो गाइड चलाएं",
        warnings: [
          "डॉक्टर या ज़हर नियंत्रण केंद्र की सलाह के बिना कुछ भी मुंह से न दें।",
          "ज़हर को अन्य पदार्थों से निष्क्रिय करने की कोशिश न करें।",
          "संभव हो तो ज़हर का डिब्बा या लेबल चिकित्सा कर्मियों के लिए रखें।"
        ],
      },
    },
  }

  const playAudio = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = selectedLanguage === "hi" ? "hi-IN" : "en-US"
      speechSynthesis.speak(utterance)
    } else {
      alert(`Audio: ${text}`)
    }
  }

  const openCategoryDialog = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setIsDialogOpen(true)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-blue-600 dark:from-red-900 dark:to-blue-900 text-white py-8 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20 dark:from-red-900/20 dark:to-blue-900/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 animate-heartbeat" />
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 animate-slide-in-up">
              {selectedLanguage === "en" ? "Emergency First Aid" : "आपातकालीन प्राथमिक चिकित्सा"}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-6 sm:mb-8 animate-slide-in-up px-2" style={{ animationDelay: "0.2s" }}>
              {selectedLanguage === "en"
                ? "Step-by-step guidance when every second counts"
                : "जब हर सेकंड मायने रखता है तो चरणबद्ध मार्गदर्शन"}
            </p>

            {/* Language Toggle */}
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 animate-slide-in-up px-4" style={{ animationDelay: "0.4s" }}>
              <Button 
                className={`w-full sm:w-auto ${selectedLanguage === "en" ? "bg-white text-red-600 hover:bg-gray-100" : "bg-white/20 text-white border border-white/30 hover:bg-white/30"}`}
                onClick={() => setSelectedLanguage("en")}
              >
                <Globe className="w-4 h-4 mr-2" />
                English
              </Button>
              <Button 
                className={`w-full sm:w-auto ${selectedLanguage === "hi" ? "bg-white text-red-600 hover:bg-gray-100" : "bg-white/20 text-white border border-white/30 hover:bg-white/30"}`}
                onClick={() => setSelectedLanguage("hi")}
              >
                <Globe className="w-4 h-4 mr-2" />
                हिंदी
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Categories */}
      <section className="py-8 sm:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center animate-slide-in-up px-2">
              {selectedLanguage === "en" ? "Choose Emergency Type" : "आपातकाल का प्रकार चुनें"}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {categories.map((category, index) => (
                <Card
                  key={category.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 animate-slide-in-up bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 ${
                    category.emergency ? "border-red-200 dark:border-red-700 hover:border-red-400 dark:hover:border-red-500" : "border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openCategoryDialog(category.id)}
                >
                  <CardHeader className="text-center relative p-4 sm:p-6">
                    <div className="text-3xl sm:text-5xl mb-3 sm:mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                      {category.icon}
                    </div>
                    <CardTitle className={`text-base sm:text-lg mb-2 ${category.emergency ? "text-red-600 dark:text-red-400" : "text-blue-600 dark:text-blue-400"}`}>
                      {category.title[selectedLanguage]}
                    </CardTitle>
                    {category.emergency && (
                      <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                        {selectedLanguage === "en" ? "CRITICAL" : "गंभीर"}
                      </div>
                    )}
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-2">{category.description[selectedLanguage]}</p>
                    <div className="flex items-center justify-center mt-2">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-gray-500 dark:text-gray-400" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">{category.timeRequired[selectedLanguage]}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center p-4">
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-gray-400 dark:text-gray-500 animate-pulse" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instructions Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 mx-4 sm:mx-auto">
          {selectedCategory && instructions[selectedCategory as keyof typeof instructions] && (
            <>
              <DialogHeader className="p-4 sm:p-6">
                <DialogTitle className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 text-xl sm:text-2xl text-gray-900 dark:text-white">
                  <span className="text-3xl sm:text-4xl">{categories.find((c) => c.id === selectedCategory)?.icon}</span>
                  <span className="text-center sm:text-left">{categories.find((c) => c.id === selectedCategory)?.title[selectedLanguage]}</span>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                {/* Audio Control */}
                <div className="flex justify-center">
                  <Button
                    onClick={() =>
                      playAudio(instructions[selectedCategory as keyof typeof instructions][selectedLanguage].audio)
                    }
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                  >
                    <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    {selectedLanguage === "en" ? "Play Audio Guide" : "ऑडियो गाइड चलाएं"}
                  </Button>
                </div>

                {/* Steps */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    {selectedLanguage === "en" ? "Step-by-Step Instructions" : "चरणबद्ध निर्देश"}
                  </h3>
                  <ol className="space-y-2 sm:space-y-3">
                    {instructions[selectedCategory as keyof typeof instructions][selectedLanguage].steps.map((step, index) => (
                      <li key={index} className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold">
                          {index + 1}
                        </span>
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Warnings */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-red-600 dark:text-red-400 mb-3 sm:mb-4">
                    {selectedLanguage === "en" ? "Important Warnings" : "महत्वपूर्ण चेतावनियां"}
                  </h3>
                  <ul className="space-y-2">
                    {instructions[selectedCategory as keyof typeof instructions][selectedLanguage].warnings.map((warning, index) => (
                      <li key={index} className="flex items-start space-x-2 sm:space-x-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-red-700 dark:text-red-300">{warning}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Emergency Contact */}
                <div className="text-center p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-semibold text-blue-700 dark:text-blue-300 text-sm sm:text-base">
                      {selectedLanguage === "en" ? "Emergency Contact" : "आपातकालीन संपर्क"}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm">
                    {selectedLanguage === "en" ? "Call 112 or 108 immediately for emergency services" : "आपातकालीन सेवाओं के लिए तुरंत 112 या 108 पर कॉल करें"}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
