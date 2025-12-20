"use client";

import { FiEye, FiGitBranch } from "react-icons/fi";
import type { Notification } from "@/app/types/notification";
import styles from "./NotificationTile.module.scss";

interface NotificationTileProps {
  data: Notification;
  onSelect: (note: Notification) => void;
  isActive: boolean;
}

export default function NotificationTile({
  data,
  onSelect,
  isActive,
}: NotificationTileProps) {
  const isCritical = data.severity === "critical";
  const isImportant = data.severity === "important";

  return (
    <div
      className={`${styles.card} ${styles[data.severity]} ${isActive ? styles.active : ""}`}
      onClick={() => onSelect(data)}
    >
        <div className={styles.header}>
          <div className={styles.tags}>
            <span className={styles.severityTag}>{data.severity}</span>
            <span className={styles.sourceLabel}>{data.source}</span>
          </div>
          <div className={styles.time}>{data.created_at}</div>
        </div>

        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.content}>{data.content}</p>

        <div className={styles.footer}>
          <div className={styles.stats}>
            {data.severity === "info" ? (
              <>
                <FiEye /> {data.view_count}人が閲覧済み
              </>
            ) : data.github_hash ? (
              <>
                <FiGitBranch /> {data.github_hash}
              </>
            ) : (
              <div className={styles.avatarStack}>
                <div className={styles.avatar} />
                <div className={styles.avatar} />
                <div className={styles.countBadge}>+{data.ack_count}</div>
              </div>
            )}
          </div>

          {(isCritical || isImportant) && (
            <button
              className={`${styles.actionButton} ${isCritical ? styles.primary : styles.secondary}`}
            >
              {isCritical ? "Acknowledge" : "Check PR"}
            </button>
          )}
        </div>
      </div>
  );
}
