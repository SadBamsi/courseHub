import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";

interface ITypography {
  variant: "xl" | "m" | "s";
  children: ReactNode;
  className?: string;
}

export const Typography: FC<ITypography> = ({
  variant,
  children,
  className,
}) => {
  return (
    <p
      className={`${styles.typography} ${styles[`typography__${variant}`]} ${className || ""}`}
    >
      {children}
    </p>
  );
};
