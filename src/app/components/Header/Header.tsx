"use client";

import styles from "./Header.module.scss";

interface HeaderProps {
  isLoading?: boolean;
}

export default function Header({ isLoading = false }: HeaderProps) {
  return (
    <header className={`${styles.header} ${isLoading ? styles.loading : ""}`}>
      <div className={styles.logo}>Ackunity</div>
      <nav className={styles.nav}>
        <button className={styles.loginBtn}>
          {isLoading ? "　　　" : "ログイン"}
        </button>
      </nav>
    </header>
  );
}
