import { CoursesList } from "../modules/courses/components/courses-list";
import { courses } from "@/app/modules/courses/api/mock-data";

export const generateMetadata = async () => {
  const title = "All CourseHub Courses";
  const description =
    "Explore our curated selection of top-tier courses across web development, marketing, and software engineering. Master Next.js, technical SEO, TypeScript design patterns, and more with expert-led content designed for developers at all levels.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
};

const Courses = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "CourseHub Catalog",
    description: "A comprehensive catalog of courses available on CourseHub.",
    provider: {
      "@type": "Organization",
      name: "CourseHub",
      sameAs: "https://coursehub.com",
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoursesList data={courses} />
    </>
  );
};

export default Courses;
