import styles from "./page.module.css";
export default function AboutMe() {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>About Me</h1>
      <div className={styles.container}>
        <p className={`${styles.paragraph} ${styles.indentedParagraph}`}>
          I hold an undergraduate degree in Electrical and Electronics
          Engineering from Bilkent University, which I completed in 2017. My
          passion for coding led me to start learning programming two years ago,
          and since then, I have been fully immersed in software development.
        </p>
        <p className={`${styles.paragraph} ${styles.indentedParagraph}`}>
          My experience includes a year-long internship at ZNOSoft, where I also
          worked as a freelance developer on two mobile applications using
          React-Native. My expertise lies in React-Native, React, ASP.NET Web
          API, ASP.NET MVC, Entity Framework, and JQuery. I am eager to
          contribute my skills in research, development, and problem-solving to
          a dynamic team where I can continue to grow as a developer.
        </p>
        <p className={`${styles.paragraph} ${styles.indentedParagraph}`}>
          I am now seeking my first full-time position in software development,
          driven by my love for coding and a desire to further enhance my skills
          in the field.
        </p>
      </div>
    </main>
  );
}
