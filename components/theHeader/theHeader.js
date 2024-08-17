"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./theHeader.module.css";
import ThemeToggle from "../themeToggle/themeToggle";

export default function TheHeader() {
  const currentRoute = usePathname();
  console.log(currentRoute);
  return (
    <header className={styles.mainHeader}>
      <nav className={styles["my-header"]}>
        <div>
          <h1 style={{ fontWeight: "700" }}>
            <Link
              style={{
                marginLeft: 20,
                textDecoration: currentRoute == "/" ? null : "none",
              }}
              href="/"
            >
              CW.
            </Link>
          </h1>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Link
            style={{
              marginLeft: 20,
              textDecoration: currentRoute == "/about" ? null : "none",
              fontWeight: "300",
            }}
            href="/about"
          >
            About Me
          </Link>
          <Link
            style={{
              marginLeft: 20,
              textDecoration: currentRoute == "/resume" ? null : "none",
              fontWeight: "300",
            }}
            href="/resume"
          >
            Resume
          </Link>
          <Link
            style={{
              marginLeft: 20,
              textDecoration: currentRoute == "/projects" ? null : "none",
              fontWeight: "300",
            }}
            href="/projects"
          >
            Projects
          </Link>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
