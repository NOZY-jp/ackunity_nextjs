"use client";

import {
  FiArchive,
  FiArrowLeft,
  FiDownload,
  FiFileText,
  FiShare2,
} from "react-icons/fi";
import type { Notification } from "@/app/types/notification";
import styles from "./DetailPane.module.scss";

interface DetailPaneProps {
  notification: Notification | null;
  onClose?: () => void;
}

export default function DetailPane({ notification, onClose }: DetailPaneProps) {
  if (!notification) {
    return (
      <aside className={styles.detailPane}>
        <div className={styles.emptyState}>
          <div className={styles.infoIcon}>i</div>
          <h3>詳細情報</h3>
          <p>
            通知を選択すると、ここにコンテキストとアクションの履歴が表示されます。
          </p>
        </div>
      </aside>
    );
  }

  return (
    <aside className={styles.detailPane}>
      {/* モバイル専用ヘッダー */}
      <div className={styles.mobileHeader}>
        <button className={styles.backButton} onClick={onClose}>
          <FiArrowLeft /> 戻る
        </button>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.tags}>
            <span className={styles.sourceTag}>{notification.source}</span>
            <span
              className={`${styles.severityTag} ${styles[notification.severity]}`}
            >
              {notification.severity}
            </span>
          </div>
          <h2 className={styles.title}>{notification.title}</h2>
        </div>

        {/* GitHub連携などのメタ情報 (image_3d333e.jpg参照) */}
        {notification.github_hash && (
          <div className={styles.metaBox}>
            <div className={styles.diffInfo}>
              <span className={styles.plus}>+ 124 lines</span>
              <span className={styles.minus}>- 42 lines</span>
            </div>
          </div>
        )}

        <div className={styles.contentBox}>
          <p>{notification.content}</p>
        </div>

        {/* 認知率プログレスバー (image_562be7.png参照) */}
        <div className={styles.statsSection}>
          <div className={styles.statsHeader}>
            <span>ACKNOWLEDGMENT RATE</span>
            <span className={styles.rateValue}>82%</span>
          </div>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: "82%" }} />
          </div>
        </div>

        {/* アクションタイル */}
        <div className={styles.actionSection}>
          <h4 className={styles.sectionTitle}>RELATED ACTIONS</h4>
          <div className={styles.actionGrid}>
            <button className={styles.actionTile}>
              <FiFileText />
              <span>添付ファイルを表示 (3)</span>
            </button>
            <button className={styles.actionTile}>
              <FiDownload />
              <span>通知履歴をダウンロード</span>
            </button>
            <div className={styles.subGrid}>
              <button className={styles.smallTile}>
                <FiShare2 /> Share
              </button>
              <button className={styles.smallTile}>
                <FiArchive /> Archive
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
