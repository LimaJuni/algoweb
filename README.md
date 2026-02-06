# AlgoTutor Landing Page

A modern Next.js landing page for the AlgoTutor mobile app - an AI-powered algorithm learning platform with Cameroonian cultural context.

## Features

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** for styling with glassmorphic effects
- **Framer Motion** for smooth animations and scroll effects
- **React Three Fiber** for 3D phone mockup
- **Lucide React** icons
- Mobile-first responsive design
- Performance optimize

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── 3D/
│   │   └── PhoneMockup.tsx
│   ├── AppPreview.tsx
│   ├── Download.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   └── Hero.tsx
└── public/
    └── images/
```

## Key Components

- **Hero**: Main landing section with 3D phone mockup
- **Features**: Glassmorphic cards showcasing app capabilities
- **AppPreview**: Screenshot carousel with 3D tilt effects
- **Download**: APK download and iOS waitlist signup
- **Footer**: Links and contact information

## Customization

- Colors defined in `tailwind.config.js`
- Glass effects in `globals.css`
- Animations using Framer Motion
- 3D elements with React Three Fiber

## Build

```bash
npm run build
```

## Deploy

The app is ready to deploy on Vercel, Netlify, or any static hosting platform.
