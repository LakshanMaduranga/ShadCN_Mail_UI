"use client"

import * as React from "react"
import Link from "next/link"
import {
    X,
    Search,
    User,
    Settings2,
    Mail,
    Calendar,
    Users,
    Cpu,
    ChevronRight,
    Plus,
    Trash2,
    MoveUp,
    MoveDown,
    Folder
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const mainNavItems = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'general', label: 'General', icon: Settings2 },
    { id: 'mail', label: 'Mail', icon: Mail },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'people', label: 'People', icon: Users },
    { id: 'copilot', label: 'Copilot', icon: Cpu },
]

const mailNavItems = [
    { id: 'layout', label: 'Layout' },
    { id: 'compose', label: 'Compose and reply' },
    { id: 'templates', label: 'Templates' },
    { id: 'suggestions', label: 'Smart suggestions' },
    { id: 'attachments', label: 'Attachments' },
    { id: 'rules', label: 'Rules' },
    { id: 'conditional', label: 'Conditional formatting' },
    { id: 'sweep', label: 'Sweep' },
    { id: 'junk', label: 'Junk email' },
    { id: 'quick', label: 'Quick steps' },
    { id: 'search', label: 'Search folders' },
]

export function Settings() {
    const [activeMain, setActiveMain] = React.useState('mail')
    const [activeSub, setActiveSub] = React.useState('rules')

    return (
        <div className="flex h-screen w-full bg-background overflow-hidden">
            {/* Main Sidebar */}
            <div className="w-[200px] border-r flex flex-col bg-zinc-50/50 dark:bg-zinc-900/50">
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-4">Settings</h2>
                    <div className="relative mb-4">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search settings" className="pl-8 h-9 bg-white dark:bg-zinc-950" />
                    </div>
                </div>
                <nav className="flex-1 px-2">
                    {mainNavItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveMain(item.id)}
                            className={cn(
                                "w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors mb-0.5",
                                activeMain === item.id
                                    ? "bg-white dark:bg-zinc-800 shadow-sm text-primary font-medium"
                                    : "text-muted-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800"
                            )}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Sub Sidebar */}
            <div className="w-[240px] border-r flex flex-col bg-zinc-50/30 dark:bg-zinc-900/30">
                <div className="h-[52px] flex items-center px-4 border-b">
                    <span className="text-sm font-medium flex items-center gap-2">
                        <span className="w-1 h-4 bg-primary rounded-full" />
                        {mainNavItems.find(i => i.id === activeMain)?.label}
                    </span>
                </div>
                <nav className="flex-1 p-2 overflow-y-auto">
                    {activeMain === 'mail' && mailNavItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveSub(item.id)}
                            className={cn(
                                "w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors mb-0.5",
                                activeSub === item.id
                                    ? "bg-white dark:bg-zinc-800 text-foreground font-medium"
                                    : "text-muted-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800"
                            )}
                        >
                            {item.label}
                        </button>
                    ))}
                    {activeMain !== 'mail' && (
                        <div className="p-4 text-sm text-muted-foreground italic">
                            Settings for {activeMain} will appear here.
                        </div>
                    )}
                </nav>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                <header className="h-[52px] flex items-center justify-between px-6 border-b shrink-0 bg-white dark:bg-zinc-950">
                    <h1 className="text-lg font-semibold">{mailNavItems.find(i => i.id === activeSub)?.label}</h1>
                    <Link href="/">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <X className="h-4 w-4" />
                        </Button>
                    </Link>
                </header>

                <main className="flex-1 overflow-y-auto p-6 scrollbar-thin">
                    <div className="max-w-3xl">
                        {activeSub === 'rules' && (
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <h2 className="text-base font-medium">Rules</h2>
                                    <p className="text-sm text-muted-foreground">
                                        You can create rules that tell Outlook how to handle incoming email messages.
                                        You choose both the conditions that trigger a rule and the actions the rule will take.
                                    </p>
                                </div>

                                <Button className="gap-2">
                                    <Plus className="h-4 w-4" />
                                    Add new rule
                                </Button>

                                <Card>
                                    <CardContent className="p-0">
                                        <div className="divide-y">
                                            {[
                                                { name: "Move newsletters to News", on: true },
                                                { name: "Mark Jira as important", on: true },
                                                { name: "Delete spam keywords", on: false }
                                            ].map((rule, i) => (
                                                <div key={i} className="flex items-center gap-4 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                                                    <div className="flex flex-col gap-1 items-center">
                                                        <Button variant="ghost" size="icon" className="h-6 w-6">
                                                            <MoveUp className="h-3 w-3" />
                                                        </Button>
                                                        <Button variant="ghost" size="icon" className="h-6 w-6">
                                                            <MoveDown className="h-3 w-3" />
                                                        </Button>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium">{rule.name}</p>
                                                        <p className="text-xs text-muted-foreground">Applied to all incoming messages</p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                                                            <Settings2 className="h-4 w-4" />
                                                        </Button>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                        <div className={cn(
                                                            "w-10 h-5 rounded-full p-1 transition-colors relative",
                                                            rule.on ? "bg-primary" : "bg-zinc-200 dark:bg-zinc-800"
                                                        )}>
                                                            <div className={cn(
                                                                "w-3 h-3 bg-white rounded-full transition-transform",
                                                                rule.on ? "translate-x-5" : "translate-x-0"
                                                            )} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {activeSub !== 'rules' && activeSub !== 'search' && (
                            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                                <div className="p-4 rounded-full bg-zinc-100 dark:bg-zinc-800">
                                    <Settings2 className="h-8 w-8 text-muted-foreground" />
                                </div>
                                <div className="space-y-1">
                                    <h2 className="text-lg font-medium">Coming Soon</h2>
                                    <p className="text-sm text-muted-foreground max-w-xs">
                                        The {mailNavItems.find(i => i.id === activeSub)?.label} settings are currently under development.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeSub === 'search' && (
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <h2 className="text-base font-medium">Search Folders</h2>
                                    <p className="text-sm text-muted-foreground">
                                        Search folders are virtual folders that provide a view of all email items that match specific search criteria.
                                    </p>
                                </div>

                                <Button className="gap-2">
                                    <Plus className="h-4 w-4" />
                                    New search folder
                                </Button>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-sm font-medium">Existing Search Folders</CardTitle>
                                        <CardDescription>Manage your automated organizational folders.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {[
                                            { name: "Unread Mail", icon: Mail },
                                            { name: "Flagged for follow up", icon: Calendar },
                                            { name: "Large messages (> 5MB)", icon: Folder }
                                        ].map((folder, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 rounded-lg border bg-zinc-50/50 dark:bg-zinc-900/50">
                                                <div className="flex items-center gap-3">
                                                    <folder.icon className="h-4 w-4 text-primary" />
                                                    <span className="text-sm font-medium">{folder.name}</span>
                                                </div>
                                                <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </div>
                </main>

                <footer className="p-4 border-t bg-zinc-50/50 dark:bg-zinc-900/50 flex justify-end gap-3 shrink-0">
                    <Button variant="outline">Discard</Button>
                    <Button>Save</Button>
                </footer>
            </div>
        </div>
    )
}
