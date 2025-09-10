import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "imgverse",
    title: "IMGVERSE",
    period: {
      start: "01.2025",
    },
    link: "https://imgverse.vercel.app/",
    skills: [
      "React",
      "Vite",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
      "API Integration",
      "Frontend Development",
    ],
    description: `An all-in-one image browsing site with modern web technologies.

- 🚀 Built with React & Vite for fast development
- 🎨 Styled with Tailwind CSS for beautiful UI
- ⚡ Deployed on Vercel for optimal performance
- 🔗 API integration for backend connectivity
- 📱 Responsive design for all devices
- 🛠️ TypeScript for type safety and better DX

[View Source Code](https://github.com/LazyCr0w/IMGVERSE)`,
    screenshot: "/screenshots/imgverse.png",
  },
  {
    id: "dataflow",
    title: "DataFlow",
    period: {
      start: "01.2025",
    },
    link: "https://data-flow-blue.vercel.app/",
    skills: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Data Analytics",
      "Data Visualization",
      "CSV Processing",
      "Excel Integration",
      "Privacy-First",
    ],
    description: `A powerful, privacy-first data analytics platform that transforms CSV and Excel files into stunning visualizations and actionable insights.

- 📊 Advanced data visualization with interactive charts
- 📁 Seamless CSV and Excel file processing
- 📈 Comprehensive analytics suite with statistical tools
- 🎨 Modern UI/UX with responsive design
- 📤 Multiple export options for results
- 🔒 Complete privacy - all processing happens locally

Built with React, Vite, and modern web technologies for optimal performance.`,
    screenshot: "/screenshots/dataflow.png",
  },
  {
    id: "swiftpdf",
    title: "SwiftPDF",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/LazyCr0w/SwiftPDF",
    skills: [
      "JavaScript",
      "HTML",
      "CSS",
      "PDF Processing",
      "Client-Side",
      "Privacy-Focused",
      "Browser-Based",
    ],
    description: `A modern, privacy-focused PDF processing web application that works entirely in your browser. No uploads, no servers, complete privacy.

- 🔒 100% Private & Secure - All processing happens locally
- 🛠️ 12 Powerful PDF Tools for comprehensive document handling
- 🎨 Modern UI/UX with intuitive design
- ⚡ Lightning-fast performance with client-side processing
- 📱 Works on all modern browsers
- 🔄 No server dependencies or external services

Built with vanilla JavaScript, HTML, and CSS for maximum compatibility and minimal footprint.`,
    screenshot: "/screenshots/swiftpdf.png",
  },
  {
    id: "diabetes-prediction",
    title: "Diabetes Prediction ML",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/LazyCr0w/Diabetes_Prediction",
    skills: [
      "Machine Learning",
      "Python",
      "Streamlit",
      "Data Science",
      "Healthcare",
      "Ensemble Methods",
      "Predictive Modeling",
    ],
    description: `A comprehensive machine learning pipeline for diabetes prediction using ensemble methods with an interactive Streamlit web interface.

- 🏥 Healthcare-focused ML project for diabetes prediction
- 📊 Complete machine learning pipeline implementation
- 🎯 Ensemble methods for improved prediction accuracy
- 🌐 Interactive Streamlit web interface for easy access
- 📈 Data analysis and visualization capabilities
- 🔬 Based on Pima Indians Diabetes Database

Built with modern ML practices and user-friendly web interface for medical prediction applications.`,
    screenshot: "/screenshots/diabetes.png",
  },
];
