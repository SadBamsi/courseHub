"use client";
import styles from "./styles.module.scss";
import { ICourse } from "@/app/modules/courses/api/mock-data/types";
import { CourseCard } from "@/app/shared/ui/course-card";
import { FC } from "react";

export const CoursesList: FC<{ data: ICourse[] }> = ({ data }) => {
  return (
    <main>
      <ul className={styles.coursesList}>
        {data.map((course) => (
          <li key={course.id}>
            <CourseCard card={course} />
          </li>
        ))}
      </ul>
    </main>
  );
};
