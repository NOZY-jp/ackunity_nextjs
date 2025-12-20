// src/app/types/notification.ts
export type Severity = "critical" | "important" | "info";

export interface Notification {
  id: string;
  org_id: string;
  source: string; // "MANUAL", "GITHUB", "SYSTEM"
  severity: Severity;
  title: string;
  content: string;
  created_at: string;
  ack_count?: number; // Critical/Important用
  view_count?: number; // Info用
  github_hash?: string; // GitHub連携用
}
