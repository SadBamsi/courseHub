import { Typography } from "@/app/shared/ui/typography";
import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Typography variant="s">
        © {new Date().getFullYear()} CourseHub. All rights reserved.
      </Typography>
      <Typography variant="s">
        Built with Next.js and TypeScript by Aleh Maslau
      </Typography>
    </footer>
  );
};
