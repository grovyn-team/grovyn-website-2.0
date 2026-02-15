import { SITE_URL } from "@/lib/seo";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GROVYN",
  alternateName: "Grovyn",
  url: SITE_URL,
  logo: `${SITE_URL}/grovyn_logo.png`,
  description:
    "GROVYN is a software engineering company that designs and engineers modern web platforms, mobile applications, and system integrations. We specialize in web development, mobile app development (iOS/Android), SaaS platforms, API integrations including CometChat and Sendbird, cloud infrastructure, and end-to-end digital solutions for modern enterprises.",
  foundingDate: "2025",
  sameAs: ["https://www.linkedin.com/company/grovynsystems/about"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    email: "admin@grovyn.in",
    availableLanguage: ["English"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "React Native",
    "iOS Development",
    "Android Development",
    "CometChat Integration",
    "Sendbird Integration",
    "Cloud Computing",
    "AWS",
    "DevOps",
    "API Design",
    "Microservices",
    "System Architecture",
  ],
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GROVYN Software Engineering Services",
  description:
    "Professional software engineering services including web application development, mobile app development (iOS/Android), system integrations, API development, cloud infrastructure, and SaaS platform engineering.",
  provider: {
    "@type": "Organization",
    name: "GROVYN",
    url: SITE_URL,
  },
  areaServed: "Worldwide",
  serviceType: "Software Engineering",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Engineering Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Application Development",
          description:
            "Custom, scalable web applications built with React, Next.js, Node.js, and modern technologies for SaaS platforms and enterprise solutions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile Application Development",
          description:
            "Native and cross-platform mobile apps for iOS and Android using React Native, Flutter, and native technologies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "System Integration Services",
          description:
            "Seamless integration of third-party SDKs and APIs including CometChat, Sendbird, and custom API integrations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Consulting",
          description:
            "Technology consulting and architecture reviews for system design, scalability planning, and technical decision support.",
        },
      },
    ],
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GROVYN",
  url: SITE_URL,
  publisher: { "@type": "Organization", name: "GROVYN", url: SITE_URL },
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
