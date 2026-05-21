import { profile } from "@/portfolio/data/profile";

export function getContactLinks() {
  return [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: "✉",
      external: false,
    },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      icon: "📱",
      external: false,
    },
    {
      label: "GitHub",
      value: "sameer1002",
      href: profile.github,
      icon: "⌘",
      external: true,
    },
    {
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: profile.linkedin,
      icon: "in",
      external: true,
    },
  ];
}
