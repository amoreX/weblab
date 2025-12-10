# Resume Portfolio - React App

A simple React.js resume portfolio website built with Vite and React Router.

## Features

- 🏠 Home page with team member cards
- 📄 Individual resume pages for each team member
- 🎨 Beautiful vintage/earthy color scheme
- ✨ Smooth CSS animations
- 📱 Fully responsive design
- ⚡ Fast builds with Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd resume-react

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
# Build the app
npm run build

# Preview the production build
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and deploy

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Update `vite.config.js` base to your repo name: `base: '/your-repo-name/'`
4. Run: `npm run deploy`

## Project Structure

```
resume-react/
├── public/
├── src/
│   ├── assets/
│   │   ├── avatar1.png
│   │   └── avatar2.png
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Resume1.jsx
│   │   └── Resume2.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- React 18
- React Router DOM 6
- Vite 5
- CSS3 (with animations)

## Authors

- Mohammed Asadullah
- MD Nihal Rahman

## License

This project is part of Web Lab Assignment - CMR Institute of Technology

# weblab

