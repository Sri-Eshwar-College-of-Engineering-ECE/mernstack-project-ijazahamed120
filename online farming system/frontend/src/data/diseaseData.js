const diseaseData = {
  Tomato: {
    "Early Blight": {
      symptoms: [
        "Brown concentric spots on older leaves",
        "Yellowing of surrounding tissue",
        "Defoliation in severe cases"
      ],
      causes: ["Fungal infection (Alternaria solani)", "Wet conditions", "Poor air circulation"],
      prevention: ["Use certified seed/healthy transplants", "Avoid overhead irrigation", "Rotate crops"],
      treatment: ["Remove affected foliage", "Apply recommended fungicides (copper-based)", "Improve airflow"]
    },
    "Late Blight": {
      symptoms: ["Water-soaked lesions", "White fungal growth under leaves", "Rapid collapse of foliage"],
      causes: ["Phytophthora infestans (oomycete)", "Cool wet weather", "Infected tubers/seeds"],
      prevention: ["Plant resistant varieties", "Avoid wet foliage", "Ensure good drainage"],
      treatment: ["Copper fungicides or recommended systemic products", "Remove infected plants", "Destroy volunteer plants"]
    }
  },
  Potato: {
    "Late Blight": {
      symptoms: ["Dark lesions on leaves", "White sporulation on underside", "Tuber rot"],
      causes: ["Phytophthora infestans", "Cool wet weather"],
      prevention: ["Use certified seed", "Crop rotation", "Avoid prolonged leaf wetness"],
      treatment: ["Fungicide applications", "Remove/destroy infected tubers"]
    }
  },
  Banana: {
    "Yellow Sigatoka": {
      symptoms: ["Yellow streaks on leaves", "Necrotic brown spots", "Reduced photosynthesis"],
      causes: ["Fungal pathogen (Mycosphaerella) ", "Humid/wet conditions"],
      prevention: ["Remove infected leaves", "Plant resistant cultivars", "Good field sanitation"],
      treatment: ["Fungicide sprays", "Regular monitoring"]
    }
  },
  Chilli: {
    "Anthracnose": {
      symptoms: ["Sunken dark lesions on fruits", "Leaf spots", "Fruit rotting"],
      causes: ["Colletotrichum species (fungus)", "Warm wet weather"],
      prevention: ["Use disease-free seed", "Avoid overhead irrigation", "Harvest promptly"],
      treatment: ["Copper fungicides or biologicals", "Sanitation"]
    },
    "Powdery Mildew": {
      symptoms: ["White powdery coating on leaves", "Leaf curling", "Reduced growth"],
      causes: ["Fungal pathogen", "High humidity", "Poor air circulation"],
      prevention: ["Space plants apart", "Avoid overhead watering", "Remove infected foliage"],
      treatment: ["Apply sulfur spray", "Use neem oil", "Improve ventilation"]
    }
  },
  Rice: {
    "Rice Blast": {
      symptoms: ["Diamond-shaped lesions on leaves", "Neck rot on panicles", "Reduced grain filling"],
      causes: ["Magnaporthe oryzae (fungus)", "High humidity and nitrogen excess"],
      prevention: ["Resistant varieties", "Balanced fertilization", "Avoid dense planting"],
      treatment: ["Fungicide seed treatment", "Foliar fungicides as recommended"]
    }
  },
  Brinjal: {
    "Leaf Spot": {
      symptoms: ["Small dark circular spots", "Yellow halos", "Leaf drop in severe cases"],
      causes: ["Fungal or bacterial agents", "Wet conditions"],
      prevention: ["Improve air circulation", "Avoid overhead watering", "Use clean seedlings"],
      treatment: ["Remove affected leaves", "Apply appropriate fungicide/copper spray"]
    },
    "Bacterial Leaf Spot": {
      symptoms: ["Water-soaked lesions", "Dark irregular spots", "Yellowing between veins"],
      causes: ["Bacterial pathogen", "Rain splash", "Contaminated tools"],
      prevention: ["Use disease-free seedlings", "Avoid working in wet foliage", "Practice crop rotation"],
      treatment: ["Copper-based bactericide", "Remove infected leaves", "Maintain good field sanitation"]
    },
    "Wilt": {
      symptoms: ["Sudden wilting", "Yellowing and stunting", "Vascular browning"],
      causes: ["Soil-borne pathogens (Fusarium/Ralstonia)", "Contaminated soil or tools"],
      prevention: ["Crop rotation", "Use pathogen-free soil", "Solarize soil if possible"],
      treatment: ["Use resistant varieties", "Soil amendments and biocontrols"]
    }
  },
  Others: {
    "Leaf Spot Disease": {
      symptoms: ["Dark spots on leaves", "Yellow halos", "Leaf drop"],
      causes: ["Fungal or bacterial infection", "Wet weather", "Poor air circulation"],
      prevention: ["Improve drainage", "Space plants", "Remove infected foliage"],
      treatment: ["Apply organic fungicide", "Use copper spray", "Maintain field hygiene"]
    }
  }
};

export default diseaseData;
