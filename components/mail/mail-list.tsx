// import { ComponentProps, useState } from "react"
// import { formatDistanceToNow, format } from "date-fns"
// import { Mail as MailIcon, Flag, Pin } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { Badge } from "@/components/ui/badge"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Separator } from "@/components/ui/separator"
// import { Mail } from "@/data/mails"
// import { useMail } from "./use-mail"

// interface MailListProps {
//     items: Mail[]
// }

// export function MailList({ items }: MailListProps) {
//     const [mail, setMail] = useMail()
//     const [flaggedIds, setFlaggedIds] = useState<Set<string>>(new Set())
//     const [pinnedIds, setPinnedIds] = useState<Set<string>>(new Set())

//     const toggleFlag = (id: string, e: React.MouseEvent) => {
//         e.stopPropagation()
//         setFlaggedIds((prev) => {
//             const next = new Set(prev)
//             if (next.has(id)) {
//                 next.delete(id)
//                 console.log(`Email ${id}: Unflagged`)
//             } else {
//                 next.add(id)
//                 console.log(`Email ${id}: Flagged`)
//             }
//             return next
//         })
//     }

//     const togglePin = (id: string, e: React.MouseEvent) => {
//         e.stopPropagation()
//         setPinnedIds((prev) => {
//             const next = new Set(prev)
//             if (next.has(id)) {
//                 next.delete(id)
//                 console.log(`Email ${id}: Unpinned`)
//             } else {
//                 next.add(id)
//                 console.log(`Email ${id}: Pinned`)
//             }
//             return next
//         })
//     }

//     const toggleRead = (id: string, isRead: boolean, e: React.MouseEvent) => {
//         e.stopPropagation()
//         console.log(`Email ${id}: Mark as ${isRead ? "unread" : "read"}`)
//     }

//     return (
//         <ScrollArea className="h-screen">
//             <div className="flex flex-col gap-2 p-4 pt-0">
//                 {items.map((item) => (
//                     <button
//                         key={item.id}
//                         className={cn(
//                             "group flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
//                             mail.selected === item.id && "bg-muted"
//                         )}
//                         onClick={() =>
//                             setMail({
//                                 ...mail,
//                                 selected: item.id,
//                             })
//                         }
//                     >
//                         <div className="flex w-full flex-col gap-1">
//                             <div className="flex items-center">
//                                 <div className="flex items-center gap-2">
//                                     <div className="font-semibold">{item.name}</div>
//                                     {!item.read && (
//                                         <span className="flex h-2 w-2 rounded-full bg-blue-600" />
//                                     )}
//                                 </div>
//                                 <div className="ml-auto flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
//                                     <button
//                                         onClick={(e) => toggleRead(item.id, item.read, e)}
//                                         className="rounded-full p-1 hover:bg-muted"
//                                         title={item.read ? "Mark as unread" : "Mark as read"}
//                                     >
//                                         <MailIcon className="h-3.5 w-3.5 text-muted-foreground" />
//                                     </button>
//                                     <button
//                                         onClick={(e) => toggleFlag(item.id, e)}
//                                         className="rounded-full p-1 hover:bg-muted"
//                                         title="Flag"
//                                     >
//                                         <Flag
//                                             className={cn(
//                                                 "h-3.5 w-3.5",
//                                                 flaggedIds.has(item.id)
//                                                     ? "fill-red-500 text-red-500"
//                                                     : "text-muted-foreground"
//                                             )}
//                                         />
//                                     </button>
//                                     <button
//                                         onClick={(e) => togglePin(item.id, e)}
//                                         className="rounded-full p-1 hover:bg-muted"
//                                         title="Pin"
//                                     >
//                                         <Pin
//                                             className={cn(
//                                                 "h-3.5 w-3.5",
//                                                 pinnedIds.has(item.id)
//                                                     ? "fill-blue-500 text-blue-500"
//                                                     : "text-muted-foreground"
//                                             )}
//                                         />
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className="flex items-center justify-between">
//                                 <div className="text-xs font-medium">{item.subject}</div>
//                                 <div
//                                     className={cn(
//                                         "text-xs transition-all",
//                                         mail.selected === item.id
//                                             ? "text-foreground"
//                                             : "text-muted-foreground"
//                                     )}
//                                 >
//                                     {format(new Date(item.date), "MM/dd/yyyy")}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="line-clamp-2 text-xs text-muted-foreground">
//                             {item.text.substring(0, 300)}
//                         </div>
//                         {item.labels.length ? (
//                             <div className="flex items-center gap-2">
//                                 {item.labels.map((label) => (
//                                     <Badge key={label} variant={getBadgeVariantFromLabel(label)}>
//                                         {label}
//                                     </Badge>
//                                 ))}
//                             </div>
//                         ) : null}
//                     </button>
//                 ))}
//             </div>
//         </ScrollArea>
//     )
// }

// function getBadgeVariantFromLabel(
//     label: string
// ): ComponentProps<typeof Badge>["variant"] {
//     if (["work"].includes(label.toLowerCase())) {
//         return "default"
//     }

//     if (["personal"].includes(label.toLowerCase())) {
//         return "outline"
//     }

//     return "secondary"
// }
"use client"

import { ComponentProps, useState } from "react"
import { format } from "date-fns"
import { Mail as MailIcon, Flag, Pin } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Mail } from "@/data/mails"
import { useMail } from "./use-mail"

interface MailListProps {
    items: Mail[]
}

export function MailList({ items }: MailListProps) {
    const [mail, setMail] = useMail()
    const [flaggedIds, setFlaggedIds] = useState<Set<string>>(new Set())
    const [pinnedIds, setPinnedIds] = useState<Set<string>>(new Set())

    const toggleFlag = (id: string, e: React.MouseEvent) => {
        e.stopPropagation()
        setFlaggedIds((prev) => {
            const next = new Set(prev)
            next.has(id) ? next.delete(id) : next.add(id)
            return next
        })
    }

    const togglePin = (id: string, e: React.MouseEvent) => {
        e.stopPropagation()
        setPinnedIds((prev) => {
            const next = new Set(prev)
            next.has(id) ? next.delete(id) : next.add(id)
            return next
        })
    }

    const toggleRead = (id: string, isRead: boolean, e: React.MouseEvent) => {
        e.stopPropagation()
        console.log(`Email ${id}: Mark as ${isRead ? "unread" : "read"}`)
    }

    return (
        <ScrollArea className="h-screen">
            <div className="flex flex-col gap-2 p-4 pt-0">
                {items.map((item) => (
                    <div
                        key={item.id}
                        role="button"
                        tabIndex={0}
                        onClick={() =>
                            setMail({
                                ...mail,
                                selected: item.id,
                            })
                        }
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setMail({ ...mail, selected: item.id })
                            }
                        }}
                        className={cn(
                            "group cursor-pointer flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary",
                            mail.selected === item.id && "bg-muted"
                        )}
                    >
                        {/* Top Section */}
                        <div className="flex w-full flex-col gap-1">
                            <div className="flex items-center">
                                <div className="flex items-center gap-2">
                                    <div className="font-semibold">{item.name}</div>
                                    {!item.read && (
                                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="ml-auto flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                                    <button
                                        onClick={(e) => toggleRead(item.id, item.read, e)}
                                        className="rounded-full p-1 hover:bg-muted"
                                        title={item.read ? "Mark as unread" : "Mark as read"}
                                    >
                                        <MailIcon className="h-3.5 w-3.5 text-muted-foreground" />
                                    </button>

                                    <button
                                        onClick={(e) => toggleFlag(item.id, e)}
                                        className="rounded-full p-1 hover:bg-muted"
                                        title="Flag"
                                    >
                                        <Flag
                                            className={cn(
                                                "h-4 w-4",
                                                flaggedIds.has(item.id)
                                                    ? "fill-red-500 text-red-500"
                                                    : "text-muted-foreground"
                                            )}
                                        />
                                    </button>

                                    <button
                                        onClick={(e) => togglePin(item.id, e)}
                                        className="rounded-full p-1 hover:bg-muted"
                                        title="Pin"
                                    >
                                        <Pin
                                            className={cn(
                                                "h-3.5 w-3.5",
                                                pinnedIds.has(item.id)
                                                    ? "fill-blue-500 text-blue-500"
                                                    : "text-muted-foreground"
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>

                            {/* Subject + Date */}
                            <div className="flex items-center justify-between">
                                <div className="text-xs font-medium">{item.subject}</div>
                                <div
                                    className={cn(
                                        "text-xs transition-all",
                                        mail.selected === item.id
                                            ? "text-foreground"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {format(new Date(item.date), "MM/dd/yyyy")}
                                </div>
                            </div>
                        </div>

                        {/* Preview */}
                        <div className="line-clamp-2 text-xs text-muted-foreground">
                            {item.text.substring(0, 300)}
                        </div>

                        {/* Labels */}
                        {item.labels.length > 0 && (
                            <div className="flex items-center gap-2">
                                {item.labels.map((label) => (
                                    <Badge
                                        key={label}
                                        variant={getBadgeVariantFromLabel(label)}
                                    >
                                        {label}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </ScrollArea>
    )
}

function getBadgeVariantFromLabel(
    label: string
): ComponentProps<typeof Badge>["variant"] {
    if (label.toLowerCase() === "work") return "default"
    if (label.toLowerCase() === "personal") return "outline"
    return "secondary"
}