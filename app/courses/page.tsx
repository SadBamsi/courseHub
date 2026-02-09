import { CoursesList } from "../modules/courses/components/courses-list";
import { courses } from "@/app/modules/courses/api/mock-data";

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
