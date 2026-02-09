"use client";

import { Title } from "@/app/shared/ui/title";
import { useParams } from "next/navigation";
import { courses } from "../courses/api/mock-data";
import styles from "./styles.module.scss";

export const Header = () => {
  const params = useParams();
  const title =
    courses.find((course) => course.id === params.id)?.title ||
    "Course Details";
  return (
    <header className={styles.header}>
      <Title variant="h1">{title}</Title>
    </header>
  );
};
