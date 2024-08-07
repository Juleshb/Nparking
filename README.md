<div align="center">
  

  <div>
    <img src="https://img.shields.io/badge/-React_Native-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
    <img src="https://img.shields.io/badge/NativeWind-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="nativewind" />
  </div>

  <h3 align="center">Video Sharing App</h3>

   <div align="center">
     Build this project step by step with our detailed tutorial on <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> YouTube. Join the JSM family!
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>


1. ⚙️ [Tech Stack](#tech-stack)
2. 🤸 [Quick Start](#quick-start)



## <a name="tech-stack">⚙️ Tech Stack</a>

- React Native
- Expo
- Nativewind
- Animatable
- Appwrite


## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/aora.git
cd aora
```
**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm start
```

**Expo Go**

Download the [Expo Go](https://expo.dev/go) app onto your device, then use it to scan the QR code from Terminal and run.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

</details>

<details>
<summary><code>Font Loaded</code></summary>

```javascript
const [fontsLoaded, error] = useFonts({
  "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
  "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
  "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
  "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
  "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
});

useEffect(() => {
  if (error) throw error;

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }
}, [fontsLoaded, error]);

if (!fontsLoaded && !error) {
  return null;
}
```

</details>

<details>
<summary><code>Dummy Videos for Appwrite</code></summary>

```javascript
const videos = [
  {
    title: "Get inspired to code",
    thumbnail:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660eff632e9b02fe90e3/preview?width=2000&height=2000&gravity=top&quality=100&project=660d0e00da0472f3ad52",
    video:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660f004955f51e7e3212/view?project=660d0e00da0472f3ad52",
    prompt:
      "Create a motivating AI driven video aimed at inspiring coding enthusiasts with simple language",
  },
  {
    title: "How AI Shapes Coding Future",
    thumbnail:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660f0294e36d80abfaa9/preview?width=2000&height=2000&gravity=top&quality=100&project=660d0e00da0472f3ad52",
    video:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660f032718759c0250ae/view?project=660d0e00da0472f3ad52",
    prompt: "Picture the future of coding with AI. Show AR VR",
  },
  {
    title: "Dalmatian's journey through Italy",
    thumbnail:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660f08374f22dab6ed8a/preview?width=2000&height=2000&gravity=top&quality=100&project=660d0e00da0472f3ad52",
    video:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660f093a03c20c7b2d12/view?project=660d0e00da0472f3ad52",
    prompt:
      "Create a heartwarming video following the travels of dalmatian dog exploring beautiful Italy",
  },
  {
    title: "Meet small AI friends",
    thumbnail:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660f0aef261367cdc1f5/preview?width=2000&height=2000&gravity=top&quality=100&project=660d0e00da0472f3ad52",
    video:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660f0b7855304dd4f802/view?project=660d0e00da0472f3ad52",
    prompt:
      "Make a video about a small blue AI robot blinking its eyes and looking at the screen",
  },
  {
    title: "Find inspiration in Every Line",
    thumbnail:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660fd243473318c9dde1/preview?width=2000&height=2000&gravity=top&quality=100&project=660d0e00da0472f3ad52",
    video:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660fd2cec9eb0298c9ac/view?project=660d0e00da0472f3ad52",
    prompt:
      "A buy working on his laptop that sparks excitement for coding, emphasizing the endless possibilities and personal growth it offers",
  },
  {
    title: "Japan's Blossoming temple",
    thumbnail:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660fd5105ae00135f9f1/preview?width=2000&height=2000&gravity=top&quality=100&project=660d0e00da0472f3ad52",
    video:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660fd543cc4792ba0611/view?project=660d0e00da0472f3ad52",
    prompt: "Create a captivating video journey through Japan's Sakura Temple",
  },
  {
    title: "A Glimpse into Tomorrow's VR World",
    thumbnail:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660fd68ced2adc48ace2/preview?width=2000&height=2000&gravity=top&quality=100&project=660d0e00da0472f3ad52",
    video:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660fd6b103374105e099/view?project=660d0e00da0472f3ad52",
    prompt: "An imaginative video envisioning the future of Virtual Reality",
  },
  {
    title: "A World where Ideas Grow Big",
    thumbnail:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660fd7cb71f83e85ec89/preview?width=2000&height=2000&gravity=top&quality=100&project=660d0e00da0472f3ad52",
    video:
      "https://cloud.appwrite.io/v1/storage/buckets/660d0e59e293896f1eaf/files/660fd84ce8c5ff020f71/view?project=660d0e00da0472f3ad52",
    prompt:
      "Make a fun video about hackers and all the cool stuff they do with computers",
  },
];
```

</details>


#
