"use client";

import { useEffect, useState } from "react";
import DetailPane from "./components/DetailPane/DetailPane";
import Header from "./components/Header/Header";
import NotificationPool from "./components/NotificationPool/NotificationPool";
import SideList from "./components/SideList/SideList";
import styles from "./page.module.scss";
import type { Notification } from "./types/notification";

interface Organization {
  id: string;
  name: string;
}

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [selectedNote, setSelectedNote] = useState<Notification | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [orgsRes, notesRes] = await Promise.all([
          fetch("http://localhost:8000/api/organizations"),
          fetch("http://localhost:8000/api/notifications"),
        ]);

        const orgsData = await orgsRes.json();
        const notesData = await notesRes.json();

        setOrganizations(orgsData);
        setNotifications(notesData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={styles.container}>
      <Header theme={theme} onThemeToggle={toggleTheme} />

      <div className={styles.mainWrapper}>
        <aside className={styles.sideList}>
          <SideList
            organizations={organizations}
            activeId={organizations[0]?.id}
          />
        </aside>

        <main className={styles.feed}>
          <NotificationPool
            notifications={notifications}
            isLoading={isLoading}
            onSelectNote={(note) => setSelectedNote(note)}
            activeId={selectedNote?.id}
          />
        </main>
        <aside className={styles.detailPane}>
          <DetailPane notification={selectedNote} />
        </aside>
      </div>
    </div>
  );
}
