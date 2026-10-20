"use client"

export function FAQSchema() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What technologies does Tej R specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Tej R specializes in React, Next.js (v15+ App Router), TypeScript, Tailwind CSS, JavaScript (ES6+), Node.js, Git/GitHub, Figma, SASS/SCSS, jQuery, Bootstrap, WordPress (ACF, Elementor), PHP, SQL, and modern frontend development practices including responsive design, component architecture, and performance optimization.",
        },
      },
      {
        "@type": "Question",
        name: "Is Tej R available for freelance work?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, Tej R is available for freelance frontend development projects. Contact via the contact form on this website, via LinkedIn (linkedin.com/in/tej-radadiya), or GitHub (github.com/tejr).",
        },
      },
      {
        "@type": "Question",
        name: "What kind of projects has Tej R worked on?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Tej R has worked on 8+ production projects including: Teahouse (Next.js 15 App Router, Vercel, Neon Postgres), ReactGarden (React + WordPress Headless via WPGraphQL/ACF, Netlify), wpacfpro (WordPress ACF + PHP on Pantheon), nextDeshboard (Next.js 15 Dashboard with Neon Postgres), TailwindBurger (Tailwind CSS + jQuery), Blutique (SASS/SCSS), BootstrapVibe (Bootstrap + SASS), and CareHTML (vanilla HTML/CSS/jQuery). Expertise spans responsive web applications, e-commerce sites, dashboard UIs, landing pages, headless CMS implementations, and custom React/Next.js components for clients worldwide.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Tej R?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You can contact Tej R through the contact form on this website, via LinkedIn (linkedin.com/in/tej-radadiya), or GitHub (github.com/tejr).",
        },
      },
      {
        "@type": "Question",
        name: "What is Tej R's professional experience and current role?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Tej R has 10+ years of professional experience. Currently working as Sr. Frontend enginner (with React.js and Next.js) at Uplers Solutions Pvt. Ltd. (Mavlers) since October 2017. Previously worked as Web Designer at Lujayn Infoways (May 2015 – Sep 2017) and App/Web Designer at Little Play Studio (Jan 2015 – May 2015). Extensive experience in SASS, Foundation, WordPress Frontend, JavaScript, jQuery, TypeScript, React, Next.js, Git, GitHub, Figma, and TailwindCSS.",
        },
      },
      {
        "@type": "Question",
        name: "What certifications does Tej R hold?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Tej R holds 8 verified certifications from Codecademy: React.js Certification, TypeScript Certification, Async JavaScript Certification, Node.js Certification, Express.js Certification, PHP Certification, and SQL Certification. All certificates are publicly verifiable via Codecademy profile.",
        },
      },
      {
        "@type": "Question",
        name: "What awards and recognitions has Tej R received?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Tej R has received 6 workplace awards: Take Charge (2025), Focus on Growth (2024), Customer Service Excellence (2023), Care to Help (2022), Process & Data Driven (2022), and Client Partnership (2022). These recognize leadership, customer focus, process improvement, and partnership skills.",
        },
      },
      {
        "@type": "Question",
        name: "What is Tej R's educational background?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Tej R completed Web Design & Frontend Development training from Institute of Computer Training (ICT) Ahmedabad (2014), holds a D.M.E. in Mechanical Engineering (71.0%, Rajkot, 2011), H.S.C. 12th Class (49.80%, Jetpur Rajkot, 2008), and S.S.C. 10th Class (80.14%, Jetpur Rajkot, 2006).",
        },
      },
      {
        "@type": "Question",
        name: "Does Tej R have experience with headless CMS and modern deployment platforms?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, Tej R has hands-on experience with headless WordPress using WPGraphQL and WPACF (ReactGarden project), deployed on Netlify and Pantheon. Proficient with Vercel (Next.js native deployment), Netlify, Neon (serverless Postgres), GitHub Pages, and GitHub Actions for CI/CD pipelines.",
        },
      },
      {
        "@type": "Question",
        name: "What frontend architecture and performance practices does Tej R follow?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Tej R follows modern frontend best practices: Next.js 15 App Router with React Server Components, TypeScript for type safety, Tailwind CSS for utility-first styling, responsive mobile-first design, image optimization via next/image, code splitting, static generation (SSG) and server-side rendering (SSR), accessibility (semantic HTML, ARIA), and performance monitoring via Lighthouse/Core Web Vitals.",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
    />
  )
}