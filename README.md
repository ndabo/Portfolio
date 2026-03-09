# Personal Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Showcases data science projects, networking work, and background as a student athlete studying Computer Science and Economics.

## Features

- **Responsive Design**: Mobile-first approach, works on all devices
- **Project Filtering**: Filter projects by category (Data Science, Networking, Other)
- **Smooth Scrolling**: Seamless navigation between sections
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js (version 20.19+ or 22.12+ recommended)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:5173`

## Customization

### Update Personal Information

1. **Hero Section**: Edit [src/components/Hero.jsx](src/components/Hero.jsx)
   - Update your name, title, and description

2. **About Section**: Edit [src/components/About.jsx](src/components/About.jsx)
   - Customize your bio, skills, and highlights

3. **Projects**: Edit [src/data/projects.js](src/data/projects.js)
   - Add your own projects
   - Update titles, descriptions, technologies, and links
   - Add project images (place in `src/assets/` folder)

4. **Contact Info**: Edit [src/components/Contact.jsx](src/components/Contact.jsx) and [src/components/Footer.jsx](src/components/Footer.jsx)
   - Update email, GitHub, and LinkedIn links

### Add Project Images

1. Place your project images in the `public/` folder
2. Update the `image` field in [src/data/projects.js](src/data/projects.js) with the path: `/your-image.png`

### Customize Colors

Edit [tailwind.config.js](tailwind.config.js) to change the primary color scheme.

## Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to complete deployment

### Alternative Hosting Options

- **Netlify**: Drag and drop the `dist/` folder to Netlify
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

## Project Structure

```
portfolio/
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/            # Project data
│   │   └── projects.js
│   ├── assets/          # Images and media
│   ├── App.jsx          # Main app component
│   ├── index.css        # Global styles
│   └── main.jsx         # App entry point
├── public/              # Static assets
├── index.html
├── package.json
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## License

MIT License - feel free to use this template for your own portfolio!

## Next Steps

1. Update all placeholder text with your information
2. Add your actual projects to [src/data/projects.js](src/data/projects.js)
3. Add project screenshots/images
4. Update contact information
5. Customize colors and styling
6. Deploy to your preferred hosting platform

---

Built with React + Vite + Tailwind CSS
