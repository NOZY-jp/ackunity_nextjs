"use client";

import { FiMoon, FiSearch, FiSun } from "react-icons/fi";
import styles from "./Header.module.scss";

interface HeaderProps {
  theme: "dark" | "light";
  onThemeToggle: () => void;
}

export default function Header({ theme, onThemeToggle }: HeaderProps) {
  return (
    <header className={styles.header}>
      {/* 左: ロゴ */}
      <div className={styles.leftSection}>
        <div className={styles.logo}>Ackunity</div>
        <div className={styles.badge}>DEV V1.1</div>
      </div>

      {/* 中央: 検索バー */}
      <div className={styles.centerSection}>
        <div className={styles.searchBar}>
          <FiSearch className={styles.searchIcon} />
          <span className={styles.placeholder}>コマンドを入力...</span>
          <span className={styles.shortcut}>⌘K</span>
        </div>
      </div>

      {/* 右: アクション */}
      <div className={styles.rightSection}>
        <button className={styles.themeToggle} onClick={onThemeToggle}>
          {theme === "dark" ? <FiMoon /> : <FiSun />}
        </button>
        <button className={styles.loginButton}>ログイン</button>
      </div>
    </header>
  );
}
