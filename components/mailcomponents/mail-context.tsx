"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { IMailContextType, IMailState } from "./store/types";
import { accountData } from "./data/accounts";

// Create context
const MailContext = createContext<IMailContextType | undefined>(undefined);

export function MailProvider({ children }: { children: ReactNode }) {
  const [mail, setMail] = useState<IMailState>({
    selectedFolder: "Inbox",
    selectedMailId: null,
    selectedAccount: accountData[0].email,
  });

  const selectFolder = useCallback((folder: string) => {
    setMail((prev) => ({ ...prev, selectedFolder: folder }));
  }, []);

  const selectMail = useCallback((id: string | null) => {
    setMail((prev) => ({ ...prev, selectedMailId: id }));
  }, []);

  const selectAccount = useCallback((email: string) => {
    setMail((prev) => ({ ...prev, selectedAccount: email }));
  }, []);

  const clearMail = useCallback(() => {
    setMail((prev) => ({ ...prev, selectedFolder: "Inbox", selectedMailId: null }));
  }, []);

  const value: IMailContextType = {
    mail,
    setMail,
    selectFolder,
    selectMail,
    selectAccount,
    clearMail,
  };

  return <MailContext.Provider value={value}>{children}</MailContext.Provider>;
}

// Hook to use context
export function useMail(): IMailContextType {
  const context = useContext(MailContext);
  if (!context) throw new Error("useMail must be used within a MailProvider");
  return context;
}
