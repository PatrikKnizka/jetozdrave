# 🥗 JeToZdrave (Is It Healthy?)

A modern, interactive nutrition calculator built with React that helps you evaluate the healthiness of food products based on their nutritional values per serving size.

## 🌟 Features

- **📊 Nutrition Input**: Enter detailed nutritional information (calories, fats, carbs, sugars, fiber, protein) per 100g
- **⚖️ Weight Calculator**: Specify your actual serving size in grams
- **🎨 Color-Coded Results**: Visual health indicators with color-coded nutritional values:
  - 🟢 Excellent
  - 🔵 Good  
  - 🟡 Moderate
  - 🟠 Poor
  - 🔴 Bad
- **✨ Smooth Animations**: Beautiful page transitions powered by Framer Motion
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🧠 Smart State Management**: Powered by Zustand for efficient state handling

## 🚀 Live Demo

Visit the live application: [https://patrikknizka.github.io/jetozdrave/](https://patrikknizka.github.io/jetozdrave/)

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations and transitions
- **Zustand** - Lightweight state management
- **CSS Modules** - Scoped styling
- **GitHub Pages** - Deployment and hosting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PatrikKnizka/jetozdrave.git
   cd jetozdrave
   ```

2. **Navigate to the app directory**
   ```bash
   cd jetozdrave
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🎯 How to Use

1. **Enter Product Details**: Input nutritional information per 100g including:
   - Calories (kcal)
   - Fats (g)
   - Carbohydrates (g)
   - Sugars (g)
   - Fiber (g)
   - Protein (g)

2. **Specify Weight**: Enter the actual weight of your serving in grams

3. **View Results**: See calculated nutritional values for your serving size with color-coded health indicators

## 🏗️ Project Structure

```
jetozdrave/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components
│   │   ├── TableInput.tsx  # Nutritional data input
│   │   ├── WeightInput.tsx # Serving weight input
│   │   └── Result.tsx      # Results display
│   ├── store/              # Zustand state management
│   ├── styles/             # CSS modules
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   └── router.tsx          # Application routing
├── public/                 # Static assets
└── .github/workflows/      # CI/CD configuration
```

## 🎨 Health Rating System

The app uses a sophisticated color-coding system to evaluate nutritional values:

### 🔥 Calories (per serving)
- 🟢 Excellent: ≤ 100 kcal
- 🔵 Good: 101-200 kcal
- 🟡 Moderate: 201-300 kcal
- 🟠 Poor: 301-400 kcal
- 🔴 Bad: > 400 kcal

### 🧈 Fats (per serving)
- 🟢 Excellent: ≤ 3g
- 🔵 Good: 4-10g
- 🟡 Moderate: 11-17g
- 🟠 Poor: 18-25g
- 🔴 Bad: > 25g

### 🍞 Carbohydrates (per serving)
- 🟢 Excellent: ≤ 5g
- 🔵 Good: 6-15g
- 🟡 Moderate: 16-25g
- 🟠 Poor: 26-35g
- 🔴 Bad: > 35g

*(Similar ranges apply for sugars, fiber, and protein)*

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Patrik Knižka**
- GitHub: [@PatrikKnizka](https://github.com/PatrikKnizka)

## 🙏 Acknowledgments

- Nutrition guidelines based on standard dietary recommendations
- Icons and design inspiration from modern health apps
- Built with love for healthy living! 💚

---

*Made with ❤️ to help people make healthier food choices*