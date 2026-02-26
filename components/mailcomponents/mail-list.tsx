import { formatDistanceToNow } from "date-fns";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Mail } from "./store/types";
import { useMail } from "./mail-context";

interface IMailListProps {
  items: Mail[];
}

export function MailList({ items }: IMailListProps) {
  const { mail, setMail } = useMail();

  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {items.map((item) => (
          <button
            key={item.id}
            className={cn(
              "hover:bg-accent flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all",
              mail.selectedMailId === item.id && "bg-muted",
            )}
            onClick={() =>
              setMail({
                ...mail,
                selectedMailId: item.id,
              })
            }
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{item.name}</div>
                  {!item.read && <span className="flex h-2 w-2 rounded-full bg-blue-600" />}
                </div>
                <div
                  className={cn(
                    "ml-auto text-xs",
                    mail.selectedMailId === item.id ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {formatDistanceToNow(new Date(item.date), {
                    addSuffix: true,
                  })}
                </div>
              </div>
              <div className="text-xs font-medium">{item.subject}</div>
            </div>
            <div className="text-muted-foreground line-clamp-2 text-xs">{item.text.substring(0, 300)}</div>
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}
