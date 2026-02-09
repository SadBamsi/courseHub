import styles from "./styles.module.scss";
import Link from "next/link";

export const Welcome = () => {
  return (
    <main className={styles.welcome}>
      <p>
        Explore our wide range of courses and enhance your skills. Whether
        you&apos;re looking to learn something new or advance your career, we
        have the perfect course for you. Check out our course catalog and start
        your learning journey today!
      </p>
      <Link className={styles.welcome__link} href="/courses">
        View our Courses
      </Link>
    </main>
  );
};
