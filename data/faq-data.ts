export interface FAQ {
  question: string
  answer: string
  tips?: string[]
  relatedLinks?: string[]
  tags?: string[]
}

export interface FAQCategory {
  id: string
  title: string
  description: string
  questions: FAQ[]
}

export const faqData: FAQCategory[] = [
  {
    id: "general",
    title: "General Health",
    description: "Common questions about health, wellness, and medical care",
    questions: [
      {
        question: "What should I do if I have a fever?",
        answer:
          "For fever, rest and stay hydrated. Take paracetamol as directed. If fever persists for more than 3 days, exceeds 102°F (39°C), or is accompanied by severe symptoms, consult a healthcare provider immediately.",
        tips: [
          "Drink plenty of fluids like water, herbal teas, or clear broths",
          "Get adequate rest and avoid strenuous activities",
          "Use a cool compress on your forehead",
          "Monitor your temperature regularly",
        ],
        tags: ["fever", "temperature", "symptoms", "treatment"],
      },
      {
        question: "How often should I get a health checkup?",
        answer:
          "Adults should have annual health checkups. Those with chronic conditions or risk factors may need more frequent visits. Children and elderly individuals may require more regular monitoring.",
        tips: [
          "Keep a record of your medical history",
          "Prepare questions before your appointment",
          "Bring a list of current medications",
          "Don't skip preventive screenings",
        ],
        tags: ["checkup", "prevention", "screening", "health monitoring"],
      },
      {
        question: "What are the warning signs of a heart attack?",
        answer:
          "Common signs include chest pain or discomfort, shortness of breath, pain in arms/back/neck/jaw, cold sweats, nausea, and lightheadedness. Call emergency services immediately if you experience these symptoms.",
        tips: [
          "Don't ignore chest discomfort",
          "Call 108 (emergency number) immediately",
          "Chew aspirin if not allergic (after calling emergency)",
          "Stay calm and avoid physical exertion",
        ],
        tags: ["heart attack", "emergency", "chest pain", "symptoms"],
      },
    ],
  },
  {
    id: "diseases",
    title: "Disease Prevention & Treatment",
    description: "Information about common diseases, their prevention, and treatment",
    questions: [
      {
        question: "How can I prevent dengue fever?",
        answer:
          "Prevent dengue by eliminating mosquito breeding sites. Remove stagnant water from containers, use mosquito repellents, wear long-sleeved clothing, and use bed nets. Keep surroundings clean and dry.",
        tips: [
          "Check and empty water containers weekly",
          "Use mosquito repellents containing DEET",
          "Install screens on windows and doors",
          "Report suspected cases to local health authorities",
        ],
        relatedLinks: ["Vaccination Schedules", "Health Alerts", "Disease Map"],
        tags: ["dengue", "mosquito", "prevention", "vector-borne"],
      },
      {
        question: "What are the symptoms of malaria?",
        answer:
          "Malaria symptoms include fever, chills, headache, muscle aches, fatigue, nausea, and vomiting. Symptoms typically appear 10-15 days after being bitten by an infected mosquito. Seek immediate medical attention if you suspect malaria.",
        tips: [
          "Get tested immediately if symptoms appear",
          "Take prescribed antimalarial medication completely",
          "Use insecticide-treated bed nets",
          "Seek medical care for persistent fever",
        ],
        tags: ["malaria", "fever", "symptoms", "mosquito-borne"],
      },
      {
        question: "How is diarrhea treated and prevented?",
        answer:
          "Treat diarrhea with oral rehydration solution (ORS), rest, and bland foods. Prevent it by drinking safe water, eating properly cooked food, washing hands frequently, and maintaining good hygiene.",
        tips: [
          "Drink ORS or homemade salt-sugar solution",
          "Avoid dairy products temporarily",
          "Eat bananas, rice, applesauce, and toast (BRAT diet)",
          "Wash hands with soap for at least 20 seconds",
        ],
        tags: ["diarrhea", "dehydration", "hygiene", "ORS"],
      },
    ],
  },
  {
    id: "vaccines",
    title: "Vaccination Information",
    description: "Questions about vaccines, schedules, and immunization",
    questions: [
      {
        question: "Which vaccines do adults need?",
        answer:
          "Adults need tetanus-diphtheria boosters every 10 years, annual flu vaccines, and may need hepatitis, pneumococcal, or other vaccines based on age, health conditions, and travel plans. Consult your healthcare provider for personalized recommendations.",
        tips: [
          "Keep your vaccination record updated",
          "Get annual flu shots",
          "Update tetanus boosters every 10 years",
          "Discuss travel vaccines before international trips",
        ],
        relatedLinks: ["Vaccination Schedules", "Find Vaccination Centers"],
        tags: ["adult vaccines", "immunization", "boosters", "schedule"],
      },
      {
        question: "Are vaccines safe during pregnancy?",
        answer:
          "Some vaccines are safe and recommended during pregnancy (like flu and Tdap), while others should be avoided. Always consult your healthcare provider before getting any vaccination during pregnancy.",
        tips: [
          "Get flu vaccine during any trimester",
          "Receive Tdap vaccine between 27-36 weeks",
          "Avoid live vaccines during pregnancy",
          "Discuss vaccination plans with your doctor",
        ],
        tags: ["pregnancy", "vaccines", "safety", "maternal health"],
      },
      {
        question: "What should I do if I miss a vaccination?",
        answer:
          "Contact your healthcare provider to catch up on missed vaccines. Most vaccines can be given later without restarting the series. It's important to complete the vaccination schedule for full protection.",
        tips: [
          "Don't restart the vaccine series",
          "Get the next dose as soon as possible",
          "Maintain your vaccination record",
          "Set reminders for future doses",
        ],
        tags: ["missed vaccine", "catch-up", "schedule", "immunization"],
      },
    ],
  },
  {
    id: "emergency",
    title: "Emergency Procedures",
    description: "What to do in medical emergencies and urgent situations",
    questions: [
      {
        question: "When should I call emergency services?",
        answer:
          "Call 108 immediately for chest pain, difficulty breathing, severe bleeding, unconsciousness, severe burns, suspected stroke, severe allergic reactions, or any life-threatening situation.",
        tips: [
          "Save emergency number 108 in your phone",
          "Stay calm and speak clearly",
          "Provide your exact location",
          "Follow dispatcher instructions",
        ],
        tags: ["emergency", "108", "urgent care", "life-threatening"],
      },
      {
        question: "How do I perform basic first aid?",
        answer:
          "For cuts: clean and bandage. For burns: cool with water. For choking: perform Heimlich maneuver. For unconsciousness: check breathing and pulse, call for help. Always prioritize calling emergency services for serious injuries.",
        tips: [
          "Take a first aid course",
          "Keep a first aid kit at home",
          "Don't move someone with suspected spinal injury",
          "Apply pressure to control bleeding",
        ],
        tags: ["first aid", "emergency care", "basic treatment", "safety"],
      },
      {
        question: "What information should I provide to emergency services?",
        answer:
          "Provide your location, nature of emergency, number of people involved, current condition of the patient, and any immediate dangers. Stay on the line until told to hang up.",
        tips: [
          "Know your address and nearby landmarks",
          "Describe symptoms clearly",
          "Mention any known medical conditions",
          "Follow dispatcher's instructions exactly",
        ],
        tags: ["emergency call", "information", "dispatcher", "communication"],
      },
    ],
  },
  {
    id: "app",
    title: "App Usage & Features",
    description: "How to use Swasthya Mitra app features and troubleshooting",
    questions: [
      {
        question: "How do I set up health alerts?",
        answer:
          "Go to the Alerts section, click 'Subscribe to Alerts', choose your location and diseases to monitor, provide your contact information, and select notification preferences. You'll receive alerts based on your settings.",
        tips: [
          "Enable push notifications for instant alerts",
          "Update your location if you move",
          "Choose appropriate alert levels",
          "Keep your contact information current",
        ],
        relatedLinks: ["Alert Subscription", "Notification Settings"],
        tags: ["alerts", "notifications", "subscription", "setup"],
      },
      {
        question: "How accurate is the health information provided?",
        answer:
          "Our information is sourced from reputable medical organizations and updated regularly. However, this app is for educational purposes only and should not replace professional medical advice. Always consult healthcare providers for medical decisions.",
        tips: [
          "Use information as a starting point",
          "Verify with healthcare professionals",
          "Report any inaccuracies you find",
          "Keep the app updated for latest information",
        ],
        tags: ["accuracy", "medical advice", "disclaimer", "reliability"],
      },
      {
        question: "Can I use the app offline?",
        answer:
          "Some features like vaccination schedules and basic health information are available offline. However, real-time alerts, maps, and chat features require an internet connection for the most current information.",
        tips: [
          "Download important information when online",
          "Check for updates when connected",
          "Use offline features for basic reference",
          "Ensure internet connection for emergency features",
        ],
        tags: ["offline", "internet", "connectivity", "features"],
      },
    ],
  },
]
