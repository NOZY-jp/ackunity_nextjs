"use client";

import styles from "./SideList.module.scss";

interface Organization {
  id: string;
  name: string;
  image?: string;
}

interface SideListProps {
  organizations: Organization[];
  activeId?: string;
  isLoading?: boolean;
}

export default function SideList({
  organizations,
  activeId,
  isLoading,
}: SideListProps) {
  return (
    <aside className={styles.sideList}>
      {/* ホームボタン（固定） */}
      <div className={styles.iconWrapper}>
        <div className={styles.indicator} />
        <div className={styles.icon} style={{ backgroundColor: "#5865f2" }}>
          A
        </div>
      </div>

      <div className={styles.separator} />

      {/* 団体リスト */}
      {isLoading
        ? // ローディング中のスケルトン
        [1, 2, 3].map((i) => (
          <div key={i} className={`${styles.icon} styles.skeleton`} />
        ))
        : organizations.map((org) => (
          <div
            key={org.id}
            className={`${styles.iconWrapper} ${org.id === activeId ? styles.active : ""}`}
          >
            <div className={styles.indicator} />
            <div className={styles.icon}>
              {org.image ? (
                <img src={org.image} alt={org.name} />
              ) : (
                org.name.substring(0, 2)
              )}
            </div>
          </div>
        ))}

      {/* 追加ボタン */}
      <div className={styles.iconWrapper}>
        <div className={styles.icon} style={{ color: "#23a559" }}>
          ＋
        </div>
      </div>
    </aside>
  );
}
