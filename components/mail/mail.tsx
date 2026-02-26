"use client"

import * as React from "react"
import {
    AlertCircle,
    Archive,
    ArchiveX,
    File,
    Inbox,
    MessagesSquare,
    PenBox,
    Search,
    Send,
    Settings,
    ShoppingCart,
    Trash2,
    Users2,
} from "lucide-react"

import { cn } from "@/lib/utils"
// import { Input } from "@/components/ui/input"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import { TooltipProvider } from "@/components/ui/tooltip"
import { AccountSwitcher } from "@/components/mail/account-switcher"
import { MailDisplay } from "@/components/mail/mail-display"
import { MailList } from "@/components/mail/mail-list"
import { Nav } from "@/components/mail/nav"
import { type Mail } from "@/data/mails"
import { Input } from "@/components/ui/input"
import { MailProvider, useMail } from "./use-mail"

interface MailProps {
    accounts: {
        label: string
        email: string
        icon: React.ReactNode
    }[]
    mails: Mail[]
    defaultLayout: number[] | undefined
    defaultCollapsed?: boolean
    navCollapsedSize: number
}

export function Mail({
    accounts,
    mails,
    defaultLayout = [],
    defaultCollapsed = false,
    navCollapsedSize,
}: MailProps) {
    return (
        <MailProvider>
            <MailContent
                accounts={accounts}
                mails={mails}
                defaultLayout={defaultLayout}
                defaultCollapsed={defaultCollapsed}
                navCollapsedSize={navCollapsedSize}
            />
        </MailProvider>
    )
}

function MailContent({
    accounts,
    mails,
    defaultCollapsed = false,
}: MailProps) {
    const [isCollapsed] = React.useState(defaultCollapsed)
    const [mail, setMail] = useMail()

    return (
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup
                direction="horizontal"
                className="h-screen"
            >
                <ResizablePanel
                    defaultSize={20}     // default width in %
                    collapsedSize={10}   // width when collapsed
                    className={cn(
                        isCollapsed &&
                        "min-w-[500px] transition-all duration-300 ease-in-out"
                    )}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex-1">
                            <div
                                className={cn(
                                    "flex h-[52px] items-center justify-center",
                                    isCollapsed ? "h-[52px]" : "px-2"
                                )}
                            >
                                <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} />
                            </div>
                            <Separator />
                            <Nav
                                isCollapsed={isCollapsed}
                                activeFolder={mail.selectedFolder}
                                onSelect={(folder) => setMail({ ...mail, selectedFolder: folder })}
                                links={[
                                    {
                                        title: "Inbox",
                                        label: "128",
                                        icon: Inbox,
                                        variant: "ghost",
                                    },
                                    {
                                        title: "Drafts",
                                        label: "9",
                                        icon: File,
                                        variant: "ghost",
                                    },
                                    {
                                        title: "Sent",
                                        label: "",
                                        icon: Send,
                                        variant: "ghost",
                                    },
                                    {
                                        title: "Junk",
                                        label: "23",
                                        icon: ArchiveX,
                                        variant: "ghost",
                                    },
                                    {
                                        title: "Trash",
                                        label: "",
                                        icon: Trash2,
                                        variant: "ghost",
                                    },
                                    {
                                        title: "Archive",
                                        label: "",
                                        icon: Archive,
                                        variant: "ghost",
                                    },
                                ]}
                            />
                            <Separator />
                            <Nav
                                isCollapsed={isCollapsed}
                                activeFolder={mail.selectedFolder}
                                onSelect={(folder) => setMail({ ...mail, selectedFolder: folder })}
                                links={[
                                    {
                                        title: "Social",
                                        label: "972",
                                        icon: Users2,
                                        variant: "ghost",
                                    },
                                    {
                                        title: "Updates",
                                        label: "342",
                                        icon: AlertCircle,
                                        variant: "ghost",
                                    },
                                    {
                                        title: "Forums",
                                        label: "128",
                                        icon: MessagesSquare,
                                        variant: "ghost",
                                    },
                                    {
                                        title: "Shopping",
                                        label: "8",
                                        icon: ShoppingCart,
                                        variant: "ghost",
                                    },
                                    {
                                        title: "Promotions",
                                        label: "21",
                                        icon: Archive,
                                        variant: "ghost",
                                    },
                                ]}
                            />
                        </div>
                        <div className="mt-auto">
                            <Separator />
                            <Nav
                                isCollapsed={isCollapsed}
                                activeFolder={mail.selectedFolder}
                                onSelect={(folder) => setMail({ ...mail, selectedFolder: folder })}
                                links={[
                                    {
                                        title: "Settings",
                                        label: "",
                                        icon: Settings,
                                        variant: "ghost",
                                        href: "/dashboard/mailbox/settings",
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
                            <TabsList className="ml-auto">
                                <TabsTrigger
                                    value="all"
                                    className="text-zinc-600 dark:text-zinc-200"
                                >
                                    All mail
                                </TabsTrigger>
                                <TabsTrigger
                                    value="unread"
                                    className="text-zinc-600 dark:text-zinc-200"
                                >
                                    Unread
                                </TabsTrigger>
                            </TabsList>
                        </div>
                        <Separator />
                        <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                            <form>
                                <div className="relative">
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input placeholder="Search" className="pl-8" />
                                </div>
                            </form>
                        </div>
                        <TabsContent value="all" className="m-0">
                            <MailList items={mails.filter(m => m.folder === mail.selectedFolder)} />
                        </TabsContent>
                        <TabsContent value="unread" className="m-0">
                            <MailList items={mails.filter((item) => !item.read && item.folder === mail.selectedFolder)} />
                        </TabsContent>
                    </Tabs>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50}>
                    <MailDisplay
                        mail={mails.find((item) => item.id === mail.selected) || null}
                    />
                </ResizablePanel>
            </ResizablePanelGroup>
        </TooltipProvider>
    )
}
