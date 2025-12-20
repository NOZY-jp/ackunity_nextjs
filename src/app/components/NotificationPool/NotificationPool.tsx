"use client";

import type { Notification } from "@/app/types/notification";
import styles from "./NotificationPool.module.scss";
import NotificationTile from "./NotificationTile";

interface NotificationPoolProps {
  notifications: Notification[];
  isLoading: boolean;
  onSelectNote: (note: Notification) => void;
  activeId?: string;
}

export default function NotificationPool({
  notifications,
  isLoading,
  onSelectNote,
  activeId,
}: NotificationPoolProps) {
  const unreadCount = notifications.filter((n) => n.severity !== "info").length;

  return (
    <div className={styles.pool}>
      <header className={styles.header}>
        <div className={styles.titleSection}>
          <div className={styles.breadcrumb}>HOME &gt; 統合フィード</div>
          <h1 className={styles.title}>Feed</h1>
          <p className={styles.subtitle}>
            {unreadCount}件の未確認の重要通知があります
          </p>
        </div>

        <div className={styles.filterGroup}>
          <button className={styles.active}>最新</button>
          <button>重要度</button>
        </div>
      </header>

      <div className={styles.list}>
        {isLoading ? (
          <p>読み込み中...</p>
        ) : (
          notifications.map((note) => (
            <NotificationTile
              key={note.id}
              data={note}
              onSelect={onSelectNote}
              isActive={activeId === note.id}
            />
          ))
        )}
      </div>
    </div>
  );
}
