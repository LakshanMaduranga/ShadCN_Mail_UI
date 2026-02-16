export type Mail = {
    id: string
    name: string
    email: string
    subject: string
    text: string
    date: string
    read: boolean
    labels: string[]
    folder: string
}

export const mails: Mail[] = [
    {
        id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
        name: "William Smith",
        email: "williamsmith@example.com",
        subject: "Meeting Tomorrow",
        text: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project structure and trying to understand the overall flow. It seems like we need to organize the components better.",
        date: "2023-10-22T09:00:00",
        read: true,
        labels: ["meeting", "work", "important"],
        folder: "Inbox",
    },
    {
        id: "110e8400-e29b-11d4-a716-446655440000",
        name: "Alice Smith",
        email: "alicesmith@example.com",
        subject: "Re: Project Update",
        text: "Thank you for the project update. It looks great! I've gone through the report and I think the progress is impressive. The team has done a fantastic job.",
        date: "2023-10-22T10:30:00",
        read: true,
        labels: ["work", "important"],
        folder: "Inbox"
    },
    {
        id: "3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",
        name: "Bob Johnson",
        email: "bobjohnson@example.com",
        subject: "Weekend Plans",
        text: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some fresh air.",
        date: "2023-04-10T11:45:00",
        read: true,
        labels: ["personal"],
        folder: "Inbox"
    },
    {
        id: "61c7a409-431e-461f-ce56-4192bff0e1e0",
        name: "Emily Davis",
        email: "emilydavis@example.com",
        subject: "Question about Budget",
        text: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation resources.",
        date: "2023-03-25T13:15:00",
        read: false,
        labels: ["work", "budget"],
        folder: "Drafts"
    },
    {
        id: "8f7b5db9-5471-4a6c-9219-00818b9cad0e",
        name: "Michael Wilson",
        email: "michaelwilson@example.com",
        subject: "Important Announcement",
        text: "I have an important announcement to make. We are excited to share the new vision for our company. It's a bold step forward.",
        date: "2023-03-10T15:00:00",
        read: false,
        labels: ["announcement"],
        folder: "Trash"
    },
]

