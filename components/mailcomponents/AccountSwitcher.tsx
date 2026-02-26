"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { accountData } from "./data/accounts";

import { Accounts } from "./store/types";

interface AccountSwitcherProps {
  isCollapsed?: boolean;
  accountData?: Accounts[];
}

export function AccountSwitcher({ isCollapsed = false, accountData: passedAccountData }: AccountSwitcherProps) {
  const displayAccountData = passedAccountData || accountData;
  const [selectedAccount, setSelectedAccount] = React.useState<string>(displayAccountData[0].email);

  const selectedAccountData = displayAccountData.find((account) => account.email === selectedAccount);

  return (
    <Select defaultValue={selectedAccount} onValueChange={setSelectedAccount}>
      <SelectTrigger
        className={cn(
          "flex items-center gap-2 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate",
          isCollapsed && "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden",
        )}
        aria-label="Select account"
      >
        <SelectValue placeholder="Select an account">
          <div className="flex items-center gap-2">
            {selectedAccountData?.icon && (
              <div className="h-4 w-4">
                {React.createElement(selectedAccountData.icon as React.ElementType)}
              </div>
            )}
            <span className={cn("ml-2", isCollapsed && "hidden")}>{selectedAccountData?.label}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {displayAccountData.map((account) => (
          <SelectItem key={account.email} value={account.email}>
            <div className="[&_svg]:text-foreground flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0">
              {account.icon && (
                <div className="h-4 w-4">
                  {React.createElement(account.icon as React.ElementType)}
                </div>
              )}
              {account.label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
