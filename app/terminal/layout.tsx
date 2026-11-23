import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terminal - Francis Roger",
  description: "Explore Francis Roger's portfolio through an interactive terminal.",
};

export default function TerminalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
