"use client";

import * as React from "react";
import { Inbox, LucideIcon, Send, Trash2 } from "lucide-react";

import { FolderNavigation } from "./mail-navigation-bar";
import { useMail } from "./mail-context";

interface MainFoldersNavProps {
  isCollapsed: boolean;
}

export function MainFoldersNav({ isCollapsed }: MainFoldersNavProps) {
  const { mail, setMail } = useMail();
  const mainFolders: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: "ghost" | "default";
    href?: string;
  }[] = [
    { title: "Inbox", label: "12", icon: Inbox, variant: "ghost" },
    { title: "Sent", label: "11", icon: Send, variant: "ghost" },
    { title: "Trash", label: "10", icon: Trash2, variant: "ghost" },
  ];

  return (
    <FolderNavigation
      isCollapsed={isCollapsed}
      activeFolder={mail.selectedFolder}
      onSelect={(folder) => setMail({ ...mail, selectedFolder: folder })}
      links={mainFolders}
    />
  );
}
