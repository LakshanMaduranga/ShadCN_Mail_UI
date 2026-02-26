import { LucideIcon } from "lucide-react";
import * as React from "react";

export enum MailNavVariant {
  DEFAULT = "default",
  GHOST = "ghost",
}

// ── Category folder definition (per-account) ──────────────────────────────
export interface CategoryFolder {
  title: string;
  label?: string;
  icon?: LucideIcon;
  colour?: string;
}

export interface IMailNavLink {
  title: string;
  label?: string;
  icon?: LucideIcon;
  href?: string;
  colour?: string;
}

export interface NavProps {
  isCollapsed: boolean;
  activeFolder?: string;
  onSelect?: (title: string) => void;
  links: IMailNavLink[];
}

export type Mail = {
  id: string;
  name: string;
  email: string;
  subject: string;
  text: string;
  date: string;
  read: boolean;
  folder: string;
};

export type Accounts = {
  label: string;
  email: string;
  icon: React.ReactNode;
};

export interface IMailProps {
  defaultLayout?: number[];
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
  account?: Accounts[];
  mails?: Mail[];
}

// ── Mail context ──────────────────────────────────────────────────────────
export interface IMailState {
  selectedFolder: string;
  selectedMailId: string | null;
  /** Email address of the currently active account */
  selectedAccount: string;
}

export interface IMailContextType {
  mail: IMailState;
  setMail: React.Dispatch<React.SetStateAction<IMailState>>;
  selectFolder: (folder: string) => void;
  selectMail: (id: string | null) => void;
  selectAccount: (email: string) => void;
  clearMail: () => void;
}

