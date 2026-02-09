import { FC } from "react";
import { ICourse } from "../../../modules/courses/api/mock-data/types";
import styles from "./styles.module.scss";
import { Title } from "../title";
import Image from "next/image";
import { Typography } from "../typography";
import Link from "next/link";

export const CourseCard: FC<{ card: ICourse }> = ({ card }) => {
  return (
    <Link href={`/courses/${card.id}`} className={styles.card}>
      <Title variant="h2">{card.title}</Title>
      <div className={styles.card__image_wrapper}>
        <Image
          priority
          loading="eager"
          src={card.image}
          alt={card.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <Typography className={styles.card__description} variant="s">
        {card.description}
      </Typography>
    </Link>
  );
};
