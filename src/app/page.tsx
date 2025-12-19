"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import NotificationCard from "./components/NotificationCard/NotificationCard";
import NotificationPool from "./components/NotificationPool/NotificationPool";
import SideList from "./components/SideList/SideList";
import styles from "./page.module.scss";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // テスト用のダミーデータ
  const dummyOrgs = [
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      name: "Ritsumeikan Univ.",
      image: "", // 画像がない場合は名前の先頭2文字が表示されます
    },
    {
      id: "678f9012-bcd3-4567-8901-234567890123",
      name: "Ackunity Team",
      image: "",
    },
    {
      id: "bcdef012-3456-789a-bcde-f0123456789a",
      name: "Competitive Programming Club",
      image: "",
    },
    {
      id: "ad4fbc32-1234-5678-90ab-cdef12345678",
      name: "GitHub Notifications",
      image: "",
    },
  ];

  const dummyNotifications = [
    {
      id: "101",
      org_id: "550e8400-e29b-41d4-a716-446655440000",
      source_type: "MANUAL",
      importance: 3,
      title: "【重要】ハッカソン最終プレゼンについて",
      content:
        "プレゼン資料の提出期限は本日23:59です。デモ動画のリンクも忘れずに。",
      created_at: "2025-12-19 12:00",
    },
    {
      id: "102",
      org_id: "ad4fbc32-1234-5678-90ab-cdef12345678",
      source_type: "GITHUB",
      importance: 2,
      title: "New PR: feat/notification-pool",
      content:
        "frontendコンポーネントの実装が完了しました。レビューをお願いします。",
      created_at: "2025-12-19 11:30",
    },
    {
      id: "103",
      org_id: "bcdef012-3456-789a-bcde-f0123456789a",
      source_type: "SYSTEM",
      importance: 1,
      title: "今週のコンテスト案内",
      content: "明日の21時からABC（AtCoder Beginner Contest）が開催されます。",
      created_at: "2025-12-19 09:00",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <Header isLoading={isLoading} />

      <div className={styles.contentWrapper}>
        <SideList
          organizations={dummyOrgs}
          isLoading={isLoading}
          activeId="1"
        />

        <main className={styles.mainContent}>
          {/* 通知プールを表示 */}
          <NotificationPool
            notifications={dummyNotifications}
            isLoading={isLoading}
          />
        </main>

        {/* 右サイドディスプレイ */}
        <aside
          style={{
            width: "300px",
            backgroundColor: "var(--bg-surface)",
            borderLeft: "1px solid var(--card-border)",
          }}
        >
          <div style={{ padding: "24px" }}>
            <h3
              style={{
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                textTransform: "uppercase",
              }}
            >
              詳細情報
            </h3>
            <p style={{ fontSize: "0.9rem", marginTop: "12px" }}>
              通知を選択するとここに詳細が表示されます。
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
