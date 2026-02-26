import { Mails, type LucideIcon } from "lucide-react";

export interface Account {
  label: string;
  email: string;
  icon: LucideIcon;
}

export const accountData: Account[] = [
  {
    label: "Lakshan",
    email: "lweerasinghe@vyrian.com",
    icon: Mails,
  },
  {
    label: "Oshen",
    email: "oshen@vyrian.com",
    icon: Mails,
  },
  {
    label: "Vishwa",
    email: "vishwa@vyrian.com",
    icon: Mails,
  },
];
