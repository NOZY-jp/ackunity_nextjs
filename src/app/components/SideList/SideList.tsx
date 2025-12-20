"use client";

import { FiPlus, FiSettings } from "react-icons/fi";
import styles from "./SideList.module.scss";

interface Organization {
  id: string;
  name: string;
}

interface SideListProps {
  organizations: Organization[];
  activeId?: string;
}

export default function SideList({ organizations, activeId }: SideListProps) {
  return (
    <aside className={styles.sideList}>
      {/* Home / Aggregated Feed */}
      <div className={styles.homeIcon}>A</div>

      <div className={styles.separator} />

      {/* Organization Icons */}
      <div className={styles.orgList}>
        {organizations.map((org) => (
          <div
            key={org.id}
            className={`${styles.orgIcon} ${org.id === activeId ? styles.active : ""}`}
            title={org.name}
          >
            {org.name.substring(0, 2)}
          </div>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className={styles.bottomActions}>
        <div className={styles.actionBtn} title="団体を追加">
          <FiPlus />
        </div>
        <div className={styles.actionBtn} title="設定">
          <FiSettings />
        </div>
      </div>
    </aside>
  );
}
