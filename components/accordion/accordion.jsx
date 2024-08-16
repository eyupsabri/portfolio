"use client";
import styles from "./accordion.module.css";

export default function Accordion({ open, children }) {
  return (
    <div
      className={
        open ? styles["accordionExpanded"] : styles["accordionCollapsed"]
      }
    >
      {children}
    </div>
  );
}
