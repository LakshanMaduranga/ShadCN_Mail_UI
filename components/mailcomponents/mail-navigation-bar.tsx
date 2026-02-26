import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { MailNavVariant, NavProps } from "./store/types";

export function FolderNavigation({ isCollapsed, links, activeFolder, onSelect }: NavProps) {
  return (
    <div data-collapsed={isCollapsed} className="group flex flex-col gap-4 py-2">
      <nav className="grid gap-1 px-2">
        {links.map((link, index) => {
          const currentVariant = activeFolder === link.title ? MailNavVariant.DEFAULT : MailNavVariant.GHOST;

          return isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href || "#"}
                  onClick={() => onSelect?.(link.title)}
                  className={cn(
                    buttonVariants({
                      variant: currentVariant,
                      size: "icon",
                    }),
                    "h-9 w-9",
                    activeFolder === link.title &&
                    "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
                  )}
                >
                  <span className={cn("inline-block w-2.5 h-2.5 rounded-full flex-shrink-0", link.colour ? link.colour.replace("text-", "bg-") : "bg-gray-400")} />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>

              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && <span className="text-muted-foreground ml-auto">{link.label}</span>}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href={link.href || "#"}
              onClick={() => onSelect?.(link.title)}
              className={cn(
                buttonVariants({
                  variant: currentVariant,
                  size: "sm",
                }),
                activeFolder === link.title &&
                "dark:bg-muted dark:hover:bg-muted dark:text-white dark:hover:text-white",
                "justify-start",
              )}
            >
              <span className={cn("inline-block w-2.5 h-2.5 rounded-full flex-shrink-0 mr-2", link.colour ? link.colour.replace("text-", "bg-") : "bg-gray-400")} />
              {link.title}

              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    currentVariant === MailNavVariant.DEFAULT && "text-background dark:text-white",
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
