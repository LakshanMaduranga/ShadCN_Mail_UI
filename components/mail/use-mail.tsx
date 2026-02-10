"use client"

import * as React from "react"

import { Mail, mails } from "@/data/mails"

type Config = {
    selected: Mail["id"] | null
}

const MailContext = React.createContext<
    [Config, React.Dispatch<React.SetStateAction<Config>>] | null
>(null)

export function MailProvider({ children }: { children: React.ReactNode }) {
    // Initialize with the first mail if available
    const [config, setConfig] = React.useState<Config>({
        selected: mails[0]?.id || null,
    })

    return (
        <MailContext.Provider value={[config, setConfig]}>
            {children}
        </MailContext.Provider>
    )
}

export function useMail() {
    const context = React.useContext(MailContext)
    if (!context) {
        throw new Error("useMail must be used within a MailProvider")
    }
    return context
}
