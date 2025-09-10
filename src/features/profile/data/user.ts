import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Sumon",
  lastName: "Deb",
  displayName: "Sumon Deb",
  username: "LazyCr0w",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Front-End Developer",
    "Open Source Contributor",
  ],
  address: "Borjalenga Silchar, Assam, India",
  phoneNumber: "KzkxIDY5MDkyNTEzMDk=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "c2Quc3Vtb24uZGViLjIwMDFAZ21haWwuY29t", // base64 encoded
  website: "https://sumon-deb.vercel.app",
  jobTitle: "Design Engineer",
  jobs: [
    {
      title: "Aspiring Frontend Developer",
      company: "",
      website: "",
    },
  ],
  about: `
Hello, World! I’m Sumon Deb — an aspiring Frontend Developer passionate about building user-friendly and high-performance web applications.

I hold a Master’s degree in Computer Science and focus on creating intuitive, responsive, and visually appealing interfaces using modern frontend technologies like React, Next.js, Tailwind CSS, HTML, and Git.
I’ve also used Python for machine learning projects, exploring data-driven solutions and automating tasks.

I’m eager to learn, grow, and contribute to exciting projects while continuously exploring new tools and frameworks to turn ideas into reality.

Let’s connect and build something great together!
  `,
  avatar: "/profile-pic.png",
  ogImage: "https://sumon-deb.vercel.app/og-image.png",
  namePronunciationUrl: "/audio/sumon-pronunciation.mp3",
  keywords: [
    "sumon deb",
    "sumon",
    "deb",
    "lazycr0w",
    "frontend developer",
    "react developer",
    "nextjs developer",
    "web developer",
    "computer science",
    "assam university",
    "silchar",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
};
