"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";

import { useMail } from "./mail-context";
import { mails } from "./data/mails";
import { MainFoldersNav } from "./MainFoldersNav";
import { MailList } from "./mail-list";
import { IMailProps } from "./store/types";
import { CategorySectionNav } from "./CategoryFoldersNav";
import { FolderNavigation } from "./mail-navigation-bar";
import { Settings } from "lucide-react";
import { MailDisplay } from "./Displaymail";
import { AccountSwitcher } from "./AccountSwitcher";

export function MailModuleLayout({ defaultCollapsed = false }: IMailProps) {
  const [isCollapsed] = React.useState(defaultCollapsed);
  const { mail } = useMail();

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup direction="horizontal" className="h-screen rounded-lg border">
        <ResizablePanel
          defaultSize={20}
          collapsedSize={10}
          className={cn(isCollapsed && "min-w-[500px] transition-all duration-300 ease-in-out")}
        >
          <div className="flex h-full flex-col">
            <div className="flex-1">
              <div className={cn("flex h-[52px] items-center justify-center", isCollapsed ? "h-[52px]" : "px-2")}>
                <AccountSwitcher isCollapsed={isCollapsed} />
              </div>

              <Separator />
              <MainFoldersNav isCollapsed={isCollapsed} />
              <Separator />
              <CategorySectionNav isCollapsed={isCollapsed} />
            </div>
            <div className="mt-auto">
              <Separator />
              <FolderNavigation
                isCollapsed={isCollapsed}
                activeFolder={mail.selectedFolder}
                onSelect={(link) => {
                  if (link === "Settings") {
                    console.log("Settings clicked");
                  }
                }}
                links={[
                  {
                    title: "Settings",
                    icon: Settings,
                    colour: "text-gray-500",
                    // href: "/dashboard/mailbox/settings",
                  },
                ]}
              />
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={30} minSize={30}>
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">{mail.selectedFolder}</h1>
            </div>
            <Separator />

            <TabsContent value="all" className="m-0">
              <MailList items={mails.filter((m) => m.folder === mail.selectedFolder)} />
            </TabsContent>

            <TabsContent value="unread" className="m-0">
              <MailList items={mails.filter((item) => !item.read && item.folder === mail.selectedFolder)} />
            </TabsContent>
          </Tabs>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={50}>
          <MailDisplay mail={mails.find((m) => m.id === mail.selectedMailId) || null} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
