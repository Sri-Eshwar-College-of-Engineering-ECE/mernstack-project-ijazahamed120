import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./CropDetail.css";



const CropDetail = () => {
  const { id } = useParams();
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ta" : "en"));
  };

  const cropData = {
    rice: {
      en: {
        title: "Rice Cultivation Details",
        season: "🌾 Cropping Seasons",
        seasonDesc:
          "Rice is grown in three main seasons: Kharif (June - October), Rabi (November - February), and Summer (March - June), depending on the region.",
        disease: "🦠 Diseases & 🧪 Fertilizers",
        diseaseDesc:
          "Common rice diseases include bacterial leaf blight and blast. Use fertilizers like Urea, DAP, and Potash. For fungal control, use Tricyclazole or Carbendazim.",
        tractor: "🚜 Tractors Used",
        weather: "🌦️ Weather Pattern",
        weatherDesc:
          "Rice requires a hot and humid climate with rainfall of 100-200 cm. It grows best in temperatures between 20°C to 35°C.",
        yield: "📊 Yield",
        yieldDesc: "Average yield is 2500–6000 kg/ha depending on variety and practices.",
        products: "🛒 Value-Added Products",
        buy: "Buy Now",
        productList: [
          {
            name: "Rice Flour",
            image: "https://images-cdn.ubuy.co.in/6575e02683298e5daa7f0ef8-eastern-feast-rice-flour-1-81-kg-4.jpg"
          },
          {
            name: "Puffed Rice",
            image: "https://m.media-amazon.com/images/I/71NQY2q8jcL.jpg"
          },
          {
            name: "Idiyappam Flour",
            image: "https://bigbullmart.com/image/cache/catalog/Product1/anil-idiyappam-flour-700x800.jpeg"
          }
        ]
      },
      ta: {
        title: "அரிசி பயிரிடும் விவரங்கள்",
        season: "🌾 பயிரிடும் பருவங்கள்",
        seasonDesc:
          "அரிசி மூன்று பருவங்களில் பயிரிடப்படுகிறது: கார்த்திகை (ஜூன் - அக்டோபர்), ரபி (நவம்பர் - பிப்ரவரி), கோடை (மார்ச் - ஜூன்).",
        disease: "🦠 நோய்கள் மற்றும் 🧪 உரங்கள்",
        diseaseDesc:
          "அரிசி நோய்களில் பாக்டீரியா இலையடி அழுகல், பிளாஸ்ட் முக்கியமானவை. யூரியா, டிஏபி, மற்றும் பொடாஷ் போன்ற உரங்களை பயன்படுத்தலாம். பூஞ்சை நோய்களுக்கு டிரைசைகிளசோல் அல்லது கார்பென்டஸிம் பயன்படுத்தலாம்.",
        tractor: "🚜 பயன்படுத்தப்படும் டிராக்டர்கள்",
        weather: "🌦️ வானிலை நிலை",
        weatherDesc:
          "அரிசிக்கு அதிக ஈரப்பதம் மற்றும் 100-200 செ.மீ. மழை தேவை. வெப்பநிலை 20°C - 35°C இடையே சிறந்தது.",
        yield: "📊 அளவு (Yield)",
        yieldDesc:
          "சராசரி மகசூல்: 2500–6000 கி/ஹெக்டேர் (வகை மற்றும் பராமரிப்புக்கு ஏற்ப மாறும்).",
        products: "🛒 மதிப்பூட்டப்பட்ட தயாரிப்புகள்",
        buy: "வாங்கு",
        productList: [
          {
            name: "அரிசி மாவு",
            image: "https://images-cdn.ubuy.co.in/6575e02683298e5daa7f0ef8-eastern-feast-rice-flour-1-81-kg-4.jpg"
          },
          {
            name: "பொங்கல் அரிசி",
            image: "https://m.media-amazon.com/images/I/71NQY2q8jcL.jpg"
          },
          {
            name: "இடியாப்பம் மாவு",
            image: "https://bigbullmart.com/image/cache/catalog/Product1/anil-idiyappam-flour-700x800.jpeg"
          }
        ]
      }
    },

    wheat: {
      en: {
        title: "Wheat Cultivation Details",
        season: "🌾 Cropping Seasons",
        seasonDesc:
          "Wheat is mainly grown in the Rabi season (October to March). Sowing usually begins in November and harvesting starts from March onwards.",
        disease: "🦠 Diseases & 🧪 Fertilizers",
        diseaseDesc:
          "Wheat diseases include rusts and smuts. Fertilizers like Urea, DAP, and Zinc Sulphate are recommended. Fungicides like Propiconazole help control fungal infections.",
        tractor: "🚜 Tractors Used",
        weather: "🌦️ Weather Pattern",
        weatherDesc:
          "Wheat requires cool and dry weather. Optimal temperature is 10°C to 25°C with moderate irrigation.",
        yield: "📊 Yield",
        yieldDesc: "Average wheat yield ranges between 2500–5000 kg/ha depending on farming practices.",
        products: "🛒 Value-Added Products",
        buy: "Buy Now",
        productList: [
          {
            name: "Wheat Flour",
            image: "https://health-fields.com/wp-content/uploads/2025/02/wheat-atta-1.jpg"
          },
          {
            name: "Wheat Rava",
            image: "https://s7ap1.scene7.com/is/image/itcportalprod/aashirvaad%20%20samba%20rava?fmt=webp-alpha"
          },
          {
            name: "Whole Wheat Atta",
            image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/flour/g/q/j/-original-imagwfbmwb5t4dsg.jpeg?q=20&crop=false"
          }
        ]
      },
      ta: {
        title: "கோதுமை பயிரிடும் விவரங்கள்",
        season: "🌾 பயிரிடும் பருவங்கள்",
        seasonDesc:
          "கோதுமை முக்கியமாக ரபி பருவத்தில் (அக்டோபர் முதல் மார்ச் வரை) பயிரிடப்படுகிறது. நவம்பர் மாதத்தில் விதை இட்டல் தொடங்கி மார்ச் மாதத்தில் அறுவடை தொடங்குகிறது.",
        disease: "🦠 நோய்கள் மற்றும் 🧪 உரங்கள்",
        diseaseDesc:
          "கோதுமையில் ரஸ்ட் மற்றும் ஸ்மட் போன்ற நோய்கள் ஏற்படுகின்றன. யூரியா, டிஏபி மற்றும் சிங்க் சல்பேட் உரங்களை பயன்படுத்தலாம். புழுங்கல் கட்டுப்பாட்டுக்கு ப்ரொபிகோனஜோல் போன்ற பூஞ்சை மருந்துகள் பயன்படும்.",
        tractor: "🚜 பயன்படுத்தப்படும் டிராக்டர்கள்",
        weather: "🌦️ வானிலை நிலை",
        weatherDesc:
          "கோதுமைக்கு குளிர்ந்த மற்றும் உலர்ந்த வானிலை தேவை. வெப்பநிலை 10°C முதல் 25°C வரை சிறந்தது.",
        yield: "📊 அளவு (Yield)",
        yieldDesc:
          "சராசரி மகசூல்: 2500–5000 கி/ஹெக்டேர் (பயிர் முறைப்படி மாறும்).",
        products: "🛒 மதிப்பூட்டப்பட்ட தயாரிப்புகள்",
        buy: "வாங்கு",
        productList: [
          {
            name: "கோதுமை மாவு",
            image: "https://health-fields.com/wp-content/uploads/2025/02/wheat-atta-1.jpg"
          },
          {
            name: "ரவை",
            image: "https://s7ap1.scene7.com/is/image/itcportalprod/aashirvaad%20%20samba%20rava?fmt=webp-alpha"
          },
          {
            name: "முழு கோதுமை ஆட்டா",
            image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/flour/g/q/j/-original-imagwfbmwb5t4dsg.jpeg?q=20&crop=false"
          }
        ]
      }
    },
    sugarcane: {
        en: {
          title: "Sugarcane Cultivation Details",
          season: "🌾 Cropping Seasons",
          seasonDesc:
            "Sugarcane is typically planted during spring (February - March) and autumn (September - October) in tropical regions.",
          disease: "🦠 Diseases & 🧪 Fertilizers",
          diseaseDesc:
            "Red rot, smut, and wilt are common diseases. Fertilizers like nitrogen, phosphorus, and potassium are essential. Use Trichoderma for fungal infections.",
          tractor: "🚜 Tractors Used",
          weather: "🌦️ Weather Pattern",
          weatherDesc:
            "Sugarcane requires a warm and humid climate with annual rainfall of 75-150 cm and temperature between 20°C to 40°C.",
          yield: "📊 Yield",
          yieldDesc:
            "Average yield is around 60–100 tons per hectare depending on variety and soil condition.",
          products: "🛒 Value-Added Products",
          buy: "Buy Now",
          productList: [
            {
              name: "Jaggery",
              image: "https://www.dhampurgreen.com/cdn/shop/files/Jaggery-Cubes-650g-Life-style-5_1_750.webp?v=1738047752"
            },
            {
              name: "Sugar Cubes",
              image: "https://m.media-amazon.com/images/I/51Je1fVR-SL.jpg"
            },
            {
              name: "Molasses Bottle",
              image: "https://m.media-amazon.com/images/I/71yndUZaYVL._AC_UF1000,1000_QL80_.jpg"
            }
          ]
        },
        ta: {
          title: "கரும்பு பயிரிடும் விவரங்கள்",
          season: "🌾 பயிரிடும் பருவங்கள்",
          seasonDesc:
            "கரும்பு பொதுவாக வசந்தத்தில் (பிப்ரவரி - மார்ச்) மற்றும் சரத்காலத்தில் (செப்டம்பர் - அக்டோபர்) பயிரிடப்படுகிறது.",
          disease: "🦠 நோய்கள் மற்றும் 🧪 உரங்கள்",
          diseaseDesc:
            "சிகப்பு அழுகல், சுருங்கல், மற்றும் வாடல் நோய்கள் பொதுவானவை. நைட்ரஜன், பாஸ்பரஸ், மற்றும் பொட்டாசியம் உரங்கள் தேவை. பூஞ்சை நோய்களுக்கு டிரைகோடெர்மா பயன்படுத்தலாம்.",
          tractor: "🚜 பயன்படுத்தப்படும் டிராக்டர்கள்",
          weather: "🌦️ வானிலை நிலை",
          weatherDesc:
            "கரும்பு கிழக்கு மற்றும் ஈரப்பதமுள்ள காலநிலையை விரும்புகிறது. வருடத்திற்கு 75-150 செ.மீ. மழை மற்றும் 20°C - 40°C வெப்பநிலை தேவை.",
          yield: "📊 மகசூல்",
          yieldDesc:
            "சராசரி மகசூல் 60–100 டன்/ஹெக்டேர் (வகை மற்றும் நிலத்திற்கேற்ப மாறும்).",
          products: "🛒 மதிப்பூட்டப்பட்ட தயாரிப்புகள்",
          buy: "வாங்கு",
          productList: [
            {
              name: "வெல்லம்",
              image: "https://www.dhampurgreen.com/cdn/shop/files/Jaggery-Cubes-650g-Life-style-5_1_750.webp?v=1738047752"
            },
            {
              name: "சர்க்கரை கனிகள்",
              image: "https://m.media-amazon.com/images/I/51Je1fVR-SL.jpg"
            },
            {
              name: "கரும்பு சாறு (மோலாசஸ்)",
              image: "https://m.media-amazon.com/images/I/71yndUZaYVL._AC_UF1000,1000_QL80_.jpg"
            }
          ]
        }
      },
      cotton: {
        en: {
          title: "Cotton Cultivation Details",
          season: "🌾 Cropping Seasons",
          seasonDesc:
            "Cotton is typically grown during the Kharif season (June to September). Sowing starts with the onset of monsoon and harvesting is done between October and February.",
          disease: "🦠 Diseases & 🧪 Fertilizers",
          diseaseDesc:
            "Major diseases affecting cotton include boll rot and leaf curl virus. Recommended fertilizers are Urea, DAP, and Potash. Insecticides like Imidacloprid and fungicides like Mancozeb are also used.",
          weather: "🌦️ Weather Pattern",
          weatherDesc:
            "Cotton thrives in a warm climate with temperatures between 21°C to 30°C. Requires 50–100 cm of rainfall and well-drained soil.",
          yield: "📊 Yield",
          yieldDesc:
            "The average yield of cotton ranges between 400–800 kg/ha depending on the variety and cultivation practices.",
          products: "🛒 Value-Added Products",
          buy: "Buy Now",
          productList: [
            {
              name: "Cotton Fabric",
              image: "https://i.etsystatic.com/7803375/r/il/f56a0f/2496827625/il_570xN.2496827625_pvwx.jpg"
            },
            {
              name: "Cotton Balls",
              image: "https://breeze-media.vega.co.in/media/catalog/product/cache/1ef41c8834aa6b772f4686b0f4051c34/C/o/Cotton_Balls-01.jpg"
            },
            {
              name: "Cotton Seed Oil",
              image: "https://m.media-amazon.com/images/I/713OWX8sh9L._AC_UF1000,1000_QL80_.jpg"
            }
          ]
        },
        ta: {
          title: "பருத்தி பயிரிடும் விவரங்கள்",
          season: "🌾 பயிரிடும் பருவங்கள்",
          seasonDesc:
            "பருத்தி பொதுவாக காரிஃப் பருவத்தில் (ஜூன் - செப்டம்பர்) பயிரிடப்படுகிறது. மழைக்கால தொடங்கும்போது விதை இடப்படுகிறது மற்றும் அக்டோபர் முதல் பிப்ரவரி வரை அறுவடை செய்யப்படுகிறது.",
          disease: "🦠 நோய்கள் மற்றும் 🧪 உரங்கள்",
          diseaseDesc:
            "பருத்தியில் ஏற்படும் முக்கிய நோய்களில் பந்தல் அழுகல் மற்றும் இலை சுருக்கு வைரஸ் அடங்கும். யூரியா, டிஏபி மற்றும் பொடாஷ் போன்ற உரங்கள் பரிந்துரைக்கப்படுகின்றன. இமிடாக்ளோபிரிட் போன்ற பூச்சிக்கொல்லிகள் மற்றும் மான்கோசெப் போன்ற பூஞ்சை மருந்துகள் பயன்படுத்தப்படுகின்றன.",
          weather: "🌦️ வானிலை நிலை",
          weatherDesc:
            "பருத்தி வெப்பமான வானிலையில் நன்றாக வளர்கிறது, வெப்பநிலை 21°C முதல் 30°C வரை சிறந்தது. 50–100 செ.மீ. மழை மற்றும் நன்கு வடிகாலையுடைய மண் தேவை.",
          yield: "📊 மகசூல்",
          yieldDesc:
            "பருத்தியின் சராசரி மகசூல் 400–800 கி/ஹெக்டேர் வரை இருக்கும், இது பயிர் வகை மற்றும் பராமரிப்புகள் அடிப்படையில் மாறும்.",
          products: "🛒 மதிப்பூட்டப்பட்ட தயாரிப்புகள்",
          buy: "வாங்கு",
          productList: [
            {
              name: "பருத்தி துணி",
              image: "https://i.etsystatic.com/7803375/r/il/f56a0f/2496827625/il_570xN.2496827625_pvwx.jpg"
            },
            {
              name: "பருத்தி பந்துகள்",
              image: "https://breeze-media.vega.co.in/media/catalog/product/cache/1ef41c8834aa6b772f4686b0f4051c34/C/o/Cotton_Balls-01.jpg"
            },
            {
              name: "பருத்தி விதை எண்ணெய்",
              image: "https://m.media-amazon.com/images/I/713OWX8sh9L._AC_UF1000,1000_QL80_.jpg"
            }
          ]
        }
      },
      maize: {
  en: {
    title: "Maize (Corn) Cultivation Details",
    season: "🌾 Cropping Seasons",
    seasonDesc:
      "Maize is grown in all three seasons – Kharif, Rabi, and Zaid. Kharif (June to September) is the most common season due to favorable rainfall conditions.",
    disease: "🦠 Diseases, 🧪 Fertilizers & 🚜 Tractors",
    diseaseDesc:
      "Common maize diseases include Turcicum leaf blight and Downy mildew. Recommended fertilizers are Urea, DAP, and Potash. Tractors like Mahindra Yuvo and John Deere 5050D are used for sowing and harvesting.",
    weather: "🌦️ Weather Pattern",
    weatherDesc:
      "Maize grows well in warm weather, requiring temperatures between 18°C to 27°C and 50–100 cm rainfall. It prefers well-drained loamy soil.",
    yield: "📊 Yield",
    yieldDesc:
      "Average maize yield ranges between 2,500–3,500 kg/ha depending on the hybrid variety and cultivation methods.",
    products: "🛒 Value-Added Products",
    buy: "Buy Now",
    productList: [
      {
        name: "Corn Flour",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRwcbwTIsN-voTs4hMXTx65_-8VgCIdSG8Sg&s"
      },
      {
        name: "Popcorn Kernels",
        image: "https://m.media-amazon.com/images/I/61Ftn8qXPRL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        name: "Corn Oil",
        image: "https://www.bigbasket.com/media/uploads/p/l/40046687_2-tirupati-active-corn-oil.jpg"
      }
    ]
  },
  ta: {
    title: "சோளம் பயிரிடும் விவரங்கள்",
    season: "🌾 பயிரிடும் பருவங்கள்",
    seasonDesc:
      "சோளம் மூன்று பருவங்களிலும் பயிரிடப்படுகிறது – காரிஃப் (ஜூன் - செப்டம்பர்), ரபி, மற்றும் சைட் பருவங்கள். காரிஃப் பருவம் பொதுவாக மழைக்காலத்தில் அதிகமாக பயிரிடப்படுகிறது.",
    disease: "🦠 நோய்கள், 🧪 உரங்கள் மற்றும் 🚜 டிராக்டர்கள்",
    diseaseDesc:
      "சோளத்தில் ஏற்படும் பொதுவான நோய்களில் டர்சிகம் இலை கறுப்பு மற்றும் டவுனி மில்ட்யூ அடங்கும். யூரியா, டிஏபி மற்றும் பொடாஷ் போன்ற உரங்கள் பரிந்துரைக்கப்படுகின்றன. மஹிந்திரா யுவோ மற்றும் ஜான் டியர் 5050D போன்ற டிராக்டர்கள் விதை இடவும் அறுவடைக்கும் பயன்படுத்தப்படுகின்றன.",
    weather: "🌦️ வானிலை நிலை",
    weatherDesc:
      "சோளம் வெப்பமான வானிலையில் நன்றாக வளரும், வெப்பநிலை 18°C முதல் 27°C வரை மற்றும் 50–100 செ.மீ. மழை தேவை. நன்கு வடிகாலையுடைய லோமி மண் விருப்பம்.",
    yield: "📊 மகசூல்",
    yieldDesc:
      "சோளத்தின் சராசரி மகசூல் 2,500–3,500 கி/ஹெக்டேர் வரை இருக்கும், இது பயிர் வகை மற்றும் பராமரிப்புகள் அடிப்படையில் மாறும்.",
    products: "🛒 மதிப்பூட்டப்பட்ட தயாரிப்புகள்",
    buy: "வாங்கு",
    productList: [
      {
        name: "சோள மாவு",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRwcbwTIsN-voTs4hMXTx65_-8VgCIdSG8Sg&s"
      },
      {
        name: "பாப்கார்ன் விதைகள்",
        image: "https://m.media-amazon.com/images/I/61Ftn8qXPRL._AC_UF1000,1000_QL80_.jpg"
      },
      {
        name: "சோள எண்ணெய்",
        image: "https://www.bigbasket.com/media/uploads/p/l/40046687_2-tirupati-active-corn-oil.jpg"
      }
    ]
  }
},
millet: {
    en: {
      title: "Millet Cultivation Details",
      season: "🌾 Cropping Seasons",
      seasonDesc:
        "Millets are primarily grown during the Kharif season (June to September), though some types like Ragi and Foxtail millet can also be cultivated in Rabi and Summer seasons.",
      disease: "🦠 Diseases, 🧪 Fertilizers & 🚜 Tractors",
      diseaseDesc:
        "Millets are relatively resistant to pests but may suffer from blast disease and smut. Recommended fertilizers include FYM, Urea, and Potash. Mini tractors and rotary tillers are used for land preparation and sowing.",
      weather: "🌦️ Weather Pattern",
      weatherDesc:
        "Millets thrive in hot and dry climates with rainfall between 40–60 cm. They can grow in poor soils and require minimal water.",
      yield: "📊 Yield",
      yieldDesc:
        "Average millet yield is around 1,200–1,800 kg/ha, depending on the millet type and soil conditions.",
      products: "🛒 Value-Added Products",
      buy: "Buy Now",
      productList: [
        {
          name: "Foxtail Millet",
          image: "https://m.media-amazon.com/images/I/61LCiomMtpL._AC_UF1000,1000_QL80_.jpg"
        },
        {
          name: "Millet Flour",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaDT0KMllIxEDuKjg6jq9cmeg435CLAJZWQ&s"
        },
        {
          name: "Millet Snacks",
          image: "https://www.roastytasty.com/cdn/shop/files/Bajra01_720x.jpg?v=1724756028"
        }
      ]
    },
    ta: {
      title: "சிறுதானியங்கள் பயிரிடும் விவரங்கள்",
      season: "🌾 பயிரிடும் பருவங்கள்",
      seasonDesc:
        "சிறுதானியங்கள் பெரும்பாலும் காரிஃப் பருவத்தில் (ஜூன் - செப்டம்பர்) பயிரிடப்படுகின்றன. ராகி மற்றும் தீனாங்கு போன்றவை ரபி மற்றும் கோடை பருவங்களிலும் பயிரிடலாம்.",
      disease: "🦠 நோய்கள், 🧪 உரங்கள் மற்றும் 🚜 டிராக்டர்கள்",
      diseaseDesc:
        "சிறுதானியங்கள் பூச்சிகளுக்கு மிகுந்த எதிர்ப்பு கொண்டவை. இருப்பினும் பிளாஸ்ட் நோய் மற்றும் ச்மைட் ஏற்படலாம். எஃஎம்எம், யூரியா, மற்றும் பொடாஷ் போன்ற உரங்கள் பரிந்துரைக்கப்படுகின்றன. மினி டிராக்டர்கள் மற்றும் ரோட்டரி டில்லர்கள் நிலத்தை தயார் செய்யும் போது பயன்படுத்தப்படுகின்றன.",
      weather: "🌦️ வானிலை நிலை",
      weatherDesc:
        "சிறுதானியங்கள் வெப்பமான மற்றும் உலர்ந்த காலநிலையிலும் 40–60 செ.மீ. மழையிலும் நன்கு வளரும். குறைந்த அளவு நீருடன் கூட கெட்ட நிலத்திலும் வளர முடியும்.",
      yield: "📊 மகசூல்",
      yieldDesc:
        "சிறுதானியங்களின் சராசரி மகசூல் 1,200–1,800 கி/ஹெக்டேர் வரை இருக்கும், இது வகை மற்றும் நில நிலைமைகளின் அடிப்படையில் மாறும்.",
      products: "🛒 மதிப்பூட்டப்பட்ட தயாரிப்புகள்",
      buy: "வாங்கு",
      productList: [
        {
          name: "தீனாங்கு",
          image: "https://m.media-amazon.com/images/I/61LCiomMtpL._AC_UF1000,1000_QL80_.jpg"
        },
        {
          name: "சிறுதானிய மாவு",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaDT0KMllIxEDuKjg6jq9cmeg435CLAJZWQ&s"
        },
        {
          name: "சிறுதானிய ஸ்நாக்ஸ்",
          image: "https://www.roastytasty.com/cdn/shop/files/Bajra01_720x.jpg?v=1724756028"
        }
      ]
    }
  },
  groundnut: {
    en: {
      title: "Groundnut Cultivation Details",
      season: "🌾 Cropping Seasons",
      seasonDesc:
        "Groundnuts are grown during the Kharif season (June–September), Rabi (October–February), and Summer (March–June) depending on the region. Well-drained sandy loam soil is ideal.",
      disease: "🦠 Diseases, 🧪 Fertilizers & 🚜 Tractors",
      diseaseDesc:
        "Common diseases include leaf spot, rust, and collar rot. Recommended fertilizers are gypsum, SSP (Single Super Phosphate), and compost. Tractors with disc ploughs and cultivators are used for land preparation and sowing.",
      weather: "🌦️ Weather Pattern",
      weatherDesc:
        "Groundnuts need a warm and dry climate with 60–100 cm of rainfall. They are sensitive to waterlogging but drought-tolerant to an extent.",
      yield: "📊 Yield",
      yieldDesc:
        "Average groundnut yield is about 1,500–3,000 kg/ha under good management practices.",
      products: "🛒 Value-Added Products",
      buy: "Buy Now",
      productList: [
        {
          name: "Raw Groundnut",
          image: "https://m.media-amazon.com/images/I/81U6Z-BqLlL.jpg"
        },
        {
          name: "Groundnut Oil",
          image: "https://www.olixir.in/cdn/shop/files/olixir_1L-creatives_website_cold_pressed_sept-23_06-05.jpg?v=1701414413&width=1946"
        },
        {
          name: "Peanut Butter",
          image: "https://m.media-amazon.com/images/I/81+67cSDGvL.jpg"
        }
      ]
    },
    ta: {
      title: "நிலக்கடலை பயிரிடும் விவரங்கள்",
      season: "🌾 பயிரிடும் பருவங்கள்",
      seasonDesc:
        "நிலக்கடலை காரிஃப் (ஜூன்–செப்டம்பர்), ரபி (அக்டோபர்–பிப்ரவரி), மற்றும் கோடை (மார்ச்–ஜூன்) பருவங்களில் பயிரிடப்படலாம். நன்கு வடிகாலான மணல்-கரி மண் சிறந்தது.",
      disease: "🦠 நோய்கள், 🧪 உரங்கள் மற்றும் 🚜 டிராக்டர்கள்",
      diseaseDesc:
        "இலை மாசு, இம்பல் நோய் மற்றும் கால்மை அழுகல் போன்றவை பொதுவான நோய்கள். ஜிப்சம், எஸ்.எஸ்.பி மற்றும் கூழ் உரம் பரிந்துரைக்கப்படுகிறது. நிலத்தை தயார் செய்யவும் விதைப்பதற்கும் டிராக்டர்கள், டிஸ்க் ப்ளவ் மற்றும் கல்டிவேட்டர்கள் பயன்படுத்தப்படுகின்றன.",
      weather: "🌦️ வானிலை நிலை",
      weatherDesc:
        "நிலக்கடலை வளர வளர வெப்பமான மற்றும் உலர்ந்த காலநிலை தேவைப்படுகிறது. 60–100 செ.மீ. மழை தேவையாகும். நீர் தேக்கம் தவிர்க்கப்பட வேண்டும்.",
      yield: "📊 மகசூல்",
      yieldDesc:
        "நல்ல மேலாண்மை நடைமுறைகளில், நிலக்கடலையின் சராசரி மகசூல் 1,500–3,000 கி/ஹெக்டேர் வரை இருக்கும்.",
      products: "🛒 மதிப்பூட்டப்பட்ட தயாரிப்புகள்",
      buy: "வாங்கு",
      productList: [
        {
          name: "மூல நிலக்கடலை",
          image: "https://m.media-amazon.com/images/I/81U6Z-BqLlL.jpg"
        },
        {
          name: "நிலக்கடலை எண்ணெய்",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYAHm-ix7nanr76OR6IoRObyWvL5E3mr2Ww&s"
        },
        {
          name: "நிலக்கடலை பட்டர்",
          image: "https://m.media-amazon.com/images/I/81+67cSDGvL.jpg"
        }
      ]
    }
  },
  soybean: {
    en: {
      title: "Soybean Cultivation Details",
      season: "🌾 Cropping Seasons",
      seasonDesc:
        "Soybeans are primarily grown during the Kharif season (June to October). They prefer well-drained loamy soil with moderate organic matter. Early sowing ensures better yield.",
      disease: "🦠 Diseases, 🧪 Fertilizers & 🚜 Tractors",
      diseaseDesc:
        "Common soybean diseases include rust, bacterial blight, and root rot. Recommended fertilizers are DAP (Di-Ammonium Phosphate), Potash, and organic compost. Tractors with rotavators and seed drills are used for land preparation and sowing.",
      weather: "🌦️ Weather Pattern",
      weatherDesc:
        "Soybeans grow well in warm and moist climates. Ideal rainfall ranges from 60 to 80 cm, and a temperature of 26–30°C is optimal during the growing season.",
      yield: "📊 Yield",
      yieldDesc:
        "Average yield of soybeans ranges between 2,000–3,000 kg/ha under good cultivation practices.",
      products: "🛒 Value-Added Products",
      buy: "Buy Now",
      productList: [
        {
          name: "Raw Soybeans",
          image: "https://m.media-amazon.com/images/I/71pNmw7lSkL.jpg"
        },
        {
          name: "Soybean Oil",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYAHm-ix7nanr76OR6IoRObyWvL5E3mr2Ww&s"
        },
        {
          name: "Soya Chunks",
          image: "https://www.bigbasket.com/media/uploads/p/xxl/257382-2_5-nutrela-soya-chunks.jpg"
        }
      ]
    },
    ta: {
      title: "சோயா பயிரிடும் விவரங்கள்",
      season: "🌾 பயிரிடும் பருவங்கள்",
      seasonDesc:
        "சோயா பெரும்பாலும் காரிஃப் பருவத்தில் (ஜூன் முதல் அக்டோபர் வரை) பயிரிடப்படுகிறது. நன்கு வடிகாலான கரி மண் மற்றும் சிறுமட்டமான கூழ் பொருள் உள்ள மண் ஏற்றது. விரைவாக விதைத்தால் அதிக மகசூல் கிடைக்கும்.",
      disease: "🦠 நோய்கள், 🧪 உரங்கள் மற்றும் 🚜 டிராக்டர்கள்",
      diseaseDesc:
        "சோயாவின் பொதுவான நோய்கள் ரஸ்ட், பாக்டீரியா பிளைட் மற்றும் ரூட் ராட் ஆகும். பரிந்துரைக்கப்படும் உரங்கள் DAP, பொட்டாஷ் மற்றும் கூழ் உரம். நிலத்தை தயார் செய்ய மற்றும் விதைக்க டிராக்டர், ரோட்டாவேட்டர் மற்றும் சீட் ட்ரில் பயன்படுத்தப்படுகின்றன.",
      weather: "🌦️ வானிலை நிலை",
      weatherDesc:
        "சோயா வெப்பமான மற்றும் ஈரமான காலநிலையிலும் சிறந்த வளர்ச்சி பெறுகிறது. 60 முதல் 80 செ.மீ. மழை மற்றும் 26–30°C வெப்பநிலை சிறந்தது.",
      yield: "📊 மகசூல்",
      yieldDesc:
        "நல்ல பராமரிப்பு முறைகளில், சோயாவின் சராசரி மகசூல் 2,000–3,000 கிலோ/ஹெக்டேருக்கு இடையில் இருக்கும்.",
      products: "🛒 மதிப்பூட்டப்பட்ட தயாரிப்புகள்",
      buy: "வாங்கு",
      productList: [
        {
          name: "மூல சோயா முளைகள்",
          image: "https://m.media-amazon.com/images/I/71pNmw7lSkL.jpg"
        },
        {
          name: "சோயா எண்ணெய்",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYAHm-ix7nanr76OR6IoRObyWvL5E3mr2Ww&s"
        },
        {
          name: "சோயா துண்டுகள்",
          image: "https://www.bigbasket.com/media/uploads/p/xxl/257382-2_5-nutrela-soya-chunks.jpg"
        }
      ]
    }
  }
  
  
  

      
    };
  
    const crop = cropData[id];
    if (!crop) return <div>Coming soon...</div>;
  
    const content = crop[language];
  
    return (
      <div className="crop-detail-white">
        <button onClick={toggleLanguage} className="lang-toggle">
          {language === "en" ? "தமிழ்" : "English"}
        </button>
  
        <h1>{content.title}</h1>
  
        <section>
          <h2>{content.season}</h2>
          <p>{content.seasonDesc}</p>
        </section>
  
        <section>
          <h2>{content.disease}</h2>
          <p>{content.diseaseDesc}</p>
        </section>
  
       
  
        <section>
          <h2>{content.weather}</h2>
          <p>{content.weatherDesc}</p>
        </section>
  
        <section>
          <h2>{content.yield}</h2>
          <p>{content.yieldDesc}</p>
        </section>
  
        <section>
          <h2>{content.products}</h2>
          <div className="product-list">
            {content.productList.map((product, index) => (
              <div className="product" key={index}>
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <button>{content.buy}</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };
  
  export default CropDetail;