import { Mail } from "../store/types";
export const mails: Mail[] = [
    {
        id: "0",
        name: "William Smith",
        email: "williamsmith@example.com",
        subject: "Meeting Tomorrow",
        text: "Hi, t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, ",
        date: "2023-10-22T09:00:00",
        read: false,
        folder: "Inbox",
    },
    {
        id: "1",
        name: "Alice Smith",
        email: "alicesmith@example.com",
        subject: "Re: Project Update",
        text: "Thank you for the project update. It looks great! I've gone through the report and I think the progress is impressive. The team has done a fantastic job.",
        date: "2023-10-22T10:30:00",
        read: true,
        folder: "Inbox"
    },
    {
        id: "2",
        name: "Bob Johnson",
        email: "bobjohnson@example.com",
        subject: "Weekend Plans",
        text: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some fresh air.",
        date: "2023-04-10T11:45:00",
        read: true,
        
        folder: "Inbox"
    },
    {
        id: "3",
        name: "Emily Davis",
        email: "emilydavis@example.com",
        subject: "Question about Budget",
        text: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation resources.",
        date: "2023-03-25T13:15:00",
        read: false,
        folder: "Sent"
    },
    {
        id: "4",
        name: "Michael Wilson",
        email: "michaelwilson@example.com",
        subject: "Important Announcement",
        text: "I have an important announcement to make. We are excited to share the new vision for our company. It's a bold step forward.",
        date: "2023-03-10T15:00:00",
        read: false,
        folder: "Trash"
    },
      {
        id: "5",
        name: "Bob Johnson",
        email: "bobjohnson@example.com",
        subject: "Weekend Plans",
        text: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some fresh air.",
        date: "2023-04-10T11:45:00",
        read: true,
        
        folder: "Updates"
    },
    {
        id: "6",
        name: "Emily Davis",
        email: "emilydavis@example.com",
        subject: "Question about Budget",
        text: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation resources.",
        date: "2023-03-25T13:15:00",
        read: false,
        folder: "Forums"
    },
    {
        id: "7",
        name: "Promotion mails",
        email: "michaelwilson@example.com",
        subject: "Important Promotion",
        text: "I have an important Promotion to make. We are excited to share the new vision for our company. It's a bold step forward.",
        date: "2023-03-10T15:00:00",
        read: false,
        folder: "Promotions"
    },
]

