"use client";

import * as React from "react";
import { useMail } from "./mail-context";
import { FolderNavigation } from "./mail-navigation-bar";

interface CategoryFolderNavProps {
  isCollapsed: boolean;
}

export function CategorySectionNav({ isCollapsed }: CategoryFolderNavProps) {
  const { mail, setMail } = useMail();

  const Folders = [
    { title: "Forums", label: "1", variant: "ghost" as const, colour: "text-blue-500" },
    { title: "Promotions", label: "2", variant: "ghost" as const, colour: "text-red-500" },
    { title: "Updates", label: "3", variant: "ghost" as const, colour: "text-green-500" },
  ];

  return (
    <FolderNavigation
      isCollapsed={isCollapsed}
      activeFolder={mail.selectedFolder}
      onSelect={(folder) => setMail({ ...mail, selectedFolder: folder })}
      links={Folders}
    />
  );
}
