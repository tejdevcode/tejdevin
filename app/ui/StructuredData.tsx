"use client"

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        url: "https://tejdevin.vercel.app",
        name: "Tej R Portfolio",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://tejdevin.vercel.app/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Person",
        name: "Tej R",
        url: "https://tejdevin.vercel.app",
        image: "https://tejdevin.vercel.app/tej_pic.jpg",
        sameAs: [
          "https://linkedin.com/in/tej-radadiya",
          "https://github.com/tejr",
        ],
        jobTitle: "Web Developer",
        worksFor: {
          "@type": "Organization",
          name: "Freelance",
        },
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "JavaScript",
          "Node.js",
        ],
      },
      {
        "@type": "ProfessionalService",
        name: "Web Development Services",
        provider: {
          "@type": "Person",
          name: "Tej R",
        },
        areaServed: "Worldwide",
        serviceType:
          "Frontend Development, React/Next.js Applications, UI/UX Implementation",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
          addressRegion: "Gujarat",
          addressLocality: "Ahmedabad",
        },
        priceRange: "$$$",
        telephone: "+91-XXXXXXXXXX",
        image: "https://tejdevin.vercel.app/portfolio-thumbnail.jpg",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}