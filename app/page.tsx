import { Mail } from "@/components/mail/mail"
import { mails } from "@/data/mails"

export default function MailPage() {
    const accounts = [
        {
            label: "Alicia Koch",
            email: "alicia@example.com",
            icon: (
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Vercel</title>
                    <path d="M24 22.525H0l12-21.05 12 21.05z" />
                </svg>
            ),
        },
        {
            label: "Alicia Koch",
            email: "alicia@gmail.com",
            icon: (
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Gmail</title>
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08c1.618-1.214 3.927-.059 3.927 1.964z" />
                </svg>
            ),
        },
        {
            label: "Alicia Koch",
            email: "alicia@icloud.com",
            icon: (
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>iCloud</title>
                    <path d="M13.762 21.5c-3.18 0-5.482-1.77-6.939-3.934-.694.307-1.464.434-2.261.434-3.05 0-5.562-2.327-5.562-5.568 0-3.008 2.325-5.563 5.334-5.563.145 0 .288.01.432.029C5.453 4.14 8.04 2.5 10.962 2.5c4.342 0 7.498 3.82 7.498 8 0 .15-.01.3-.027.448C21.163 11.492 24 13.513 24 16.5c0 3.102-2.31 5-5 5-1.745 0-3.1-.9-5.238-5z" />
                </svg>
            ),
        },
    ]

    return (
        <div className="flex-col md:flex">
            <Mail
                accounts={accounts}
                mails={mails}
                navCollapsedSize={4}
                defaultLayout={[265, 440, 655]}
            />
        </div>
    )
}
