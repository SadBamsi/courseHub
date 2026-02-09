import { CourseDetails } from "@/app/modules/courses-details";
import { courses } from "@/app/modules/courses/api/mock-data";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const details = courses.find((course) => course.id === id);
  if (!details) {
    return { title: "Course Not Found" };
  }
  const title = details?.title || "Course Details - CourseHub";
  const description =
    details?.description ||
    "Explore the details of our top-tier courses across web development, marketing, and software engineering. Master Next.js, technical SEO, TypeScript design patterns, and more with expert-led content designed for developers at all levels.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [details?.image],
    },
  };
};

export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }));
}

const CourseDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const details = courses.find((course) => course.id === id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: details?.title,
    description: details?.description,
    provider: {
      "@type": "Organization",
      name: details?.provider,
      sameAs: "https://coursera.com",
    },
  };
  if (!details) {
    notFound();
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CourseDetails course={details!} />
    </>
  );
};

export default CourseDetail;
