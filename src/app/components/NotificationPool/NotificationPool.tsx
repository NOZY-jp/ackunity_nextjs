"use client";

import NotificationCard, {
  type Notification,
} from "../NotificationCard/NotificationCard";
import styles from "./NotificationPool.module.scss";

interface NotificationPoolProps {
  notifications: Notification[];
  isLoading?: boolean;
}

export default function NotificationPool({
  notifications,
  isLoading,
}: NotificationPoolProps) {
  return (
    <section className={styles.pool}>
      <header className={styles.poolHeader}>
        <h2>最近の通知</h2>
      </header>

      {isLoading
        ? [1, 2, 3, 4].map((i) => (
          <div key={i} className={styles.skeletonCard} />
        ))
        : notifications.map((n) => (
          <NotificationCard key={n.id} notification={n} />
        ))}
    </section>
  );
}
