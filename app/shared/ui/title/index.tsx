import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";

interface ITitle {
  variant: "h1" | "h2" | "h3";
  children: ReactNode;
}

export const Title: FC<ITitle> = ({ variant, children }) => {
  const Tag = variant;
  const classNames = {
    h1: styles.title__main,
    h2: styles.title__section,
    h3: styles.title__card,
  };
  return (
    <Tag className={`${styles.title} ${classNames[variant]}`}>{children}</Tag>
  );
};
