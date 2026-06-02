export type ContactItem =
  | {
      label: string;
      href: string;
      value: string;
      type: "email" | "phone";
    }
  | {
      label: string;
      value: string;
      type: "text";
    };

export const contactItems: ContactItem[] = [
  {
    label: "Investor relations",
    href: "mailto:invest@greenpirpanjal.com",
    value: "azbyybza123@gamil.com",
    type: "email",
  },
  {
    label: "Research partnerships",
    href: "mailto:lab@greenpirpanjal.com",
    value: "azbyybza123@gamil.com",
    type: "email",
  },
  {
    label: "General inquiries",
    href: "tel:+916006349762",
    value: "+91 6006349762",
    type: "phone",
  },
  {
    label: "Location",
    value: "Pir Panjal Range, Jammu & Kashmir, India",
    type: "text",
  },
];
