import { FC } from "react";
import styles from "./styles.module.scss";
import { ICourse } from "../courses/api/mock-data/types";
import Image from "next/image";
import { Typography } from "@/app/shared/ui/typography";

export const CourseDetails: FC<{ course: ICourse }> = ({ course }) => {
  return (
    <main className={styles.coursesDetails}>
      <div className={styles.coursesDetails__image}>
        <Image
          priority
          loading="eager"
          src={course.image}
          alt={course.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.coursesDetails__content}>
        <Typography variant="m">{course.description}</Typography>
        <Typography variant="m">{course.fullDescription}</Typography>
        <Typography variant="s">Provider: {course.provider}</Typography>
        <Typography variant="s">Rating: {course.rating}</Typography>
        <Typography variant="s">Price: {course.price}</Typography>
      </div>
    </main>
  );
};
