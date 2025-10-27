# FiveTwoGo - Food Donation Platform

FiveTwoGo is a real-time food donation tracking platform built with React and Vite.

**View the live app**: [http://localhost:3001](http://localhost:3001) (Currently running!)

## Features

-   🍽️ Food donation tracking in real-time
-   📱 Responsive mobile-first design
-   🎯 Delivery tracking with progress indicators
-   📊 CSR ranking and impact tracking
-   👤 User profile and donation history

## Tech Stack

-   React 18
-   TypeScript
-   Vite 4
-   Tailwind CSS
-   shadcn/ui components

## Getting Started

### Prerequisites

-   Node.js 16+

### Installation

1. Clone the repository:

```bash
git clone https://github.com/TeddyWChoi/fivetwogo.git
cd fivetwogo
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `build` directory.

## Project Structure

```
src/
├── components/       # React components
│   ├── HomeScreen.tsx
│   ├── DeliveryTracking.tsx
│   ├── DonationForm.tsx
│   └── ...
├── assets/           # Images and static assets
├── styles/           # Global styles
└── App.tsx           # Main application component
```

## Features in Detail

### Welcome Screen

-   Responsive onboarding with centered layout
-   Smooth scroll for content
-   Dark theme background

### Home Screen

-   Real-time donation status
-   Recent donors display
-   Food donation button
-   Navigation to different sections

### Delivery Tracking

-   Real-time progress updates
-   ETA calculation
-   Delivery status indicators
-   Confirmation photos

### My Page

-   User profile
-   Monthly impact statistics
-   Donation history
-   Tax deduction information

## Deployment

The application is built for static hosting. You can deploy to:

-   **Vercel**: Connect your GitHub repository and deploy automatically
-   **Netlify**: Connect your GitHub repository and deploy
-   **GitHub Pages**: Push to the `gh-pages` branch
-   **Any static hosting**: Upload the `build` directory

## View the Built App

If you've already built the app, you can view it locally:

```bash
npx serve -s build -l 3001
```

Then open [http://localhost:3001](http://localhost:3001)

## License

MIT
