import Link from "next/link";
import styles from "./link.module.css";
export default function MyLink({ title, href }) {
  return (
    <Link className={styles.link} href={href}>
      {title}
    </Link>
  );
}
