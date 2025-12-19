"use client";

import styles from "./NotificationCard.module.scss";

export interface Notification {
  id: string;
  source_type: string;
  importance: number;
  title: string;
  content?: string;
  created_at: string;
}

export default function NotificationCard({
  notification,
}: {
  notification: Notification;
}) {
  return (
    <article className={styles.card} data-importance={notification.importance}>
      <div className={styles.header}>
        <div className={styles.sourceInfo}>
          <span className={styles.sourceTag}>{notification.source_type}</span>
          <span>
            {notification.importance === 3
              ? "CRITICAL"
              : notification.importance === 2
                ? "WARNING"
                : "INFO"}
          </span>
        </div>
        <time className={styles.time}>{notification.created_at}</time>
      </div>
      <h3 className={styles.title}>{notification.title}</h3>
      {notification.content && (
        <p className={styles.content}>{notification.content}</p>
      )}
    </article>
  );
}
