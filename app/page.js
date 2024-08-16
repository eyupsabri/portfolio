import Image from "next/image";
import styles from "./page.module.css";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import MyLink from "@/components/link/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className="my-name">I' am Hüsnü Cemre Özogan</h1>
        <div className={styles.first}>
          <p className={styles.text}>Full-Stack Developer</p>
        </div>

        <p className={styles.text}>
          Specialities: C#, ASP.NET Web API, ASP.NET MVC, EntityFramework,
          React, React-Native
        </p>
        <div>
          <p className={styles.text}>
            View my <MyLink title={"Projects"} href={"/projects"} />,
            <MyLink title={"Resume"} href={"/resume"} />, or send me an email at
            <MyLink
              title={"husnu.cemre@gmail.com"}
              href="mailto:husnu.cemre@gmail.com"
            />
          </p>
        </div>
        <p className={styles.text}>See more about me</p>
        <div className={styles["icons-container"]}>
          <a href="https://www.linkedin.com/in/h%C3%BCsn%C3%BC-cemre-%C3%B6zogan-9301a116b/">
            <SiLinkedin size={20} />
          </a>
          <a href="https://github.com/eyupsabri">
            <FaGithub size={20} />
          </a>
          <a href="https://www.instagram.com/chofkncho/">
            <FaSquareInstagram size={20} />
          </a>
        </div>
      </div>
    </main>
  );
}
