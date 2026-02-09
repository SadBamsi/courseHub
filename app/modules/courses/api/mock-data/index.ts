import { ICourse } from "./types";

export const courses: ICourse[] = [
  {
    id: "nextjs-masterclass",
    title: "Next.js 14: The Ultimate Guide",
    description:
      "Master the App Router, Server Components, and Advanced SSR patterns.",
    fullDescription:
      "Deep dive into the architecture of Next.js. You will learn about Streaming, Partial Prerendering (PPR), and how to optimize Core Web Vitals for enterprise-level applications.",
    provider: "Frontend Academy",
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80",
    rating: 4.9,
    price: "$99.00",
    category: "Web Development",
  },
  {
    id: "seo-for-engineers",
    title: "Technical SEO for Modern Frameworks",
    description:
      "Drive organic traffic by mastering performance and structured data.",
    fullDescription:
      "Learn how search engines crawl JavaScript-heavy sites. This course covers JSON-LD, dynamic sitemaps, and optimizing Largest Contentful Paint (LCP) in React apps.",
    provider: "Search Experts",
    image:
      "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=800&q=80",
    rating: 4.8,
    price: "$79.00",
    category: "Marketing",
  },
  {
    id: "typescript-design-patterns",
    title: "TypeScript Design Patterns",
    description: "Write scalable, type-safe code using advanced TS features.",
    fullDescription:
      "Go beyond basic types. Master Generics, Conditional Types, and Utility Types to build robust design patterns and reusable component libraries.",
    provider: "Code Wizards",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    rating: 4.7,
    price: "$120.00",
    category: "Software Engineering",
  },
];
