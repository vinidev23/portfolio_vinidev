import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Vinícius Martin — Full Stack Developer",
  description:
    "Portfólio de Vinícius Martin: desenvolvedor Full Stack com foco em Python, React e Next.js, aplicando engenharia de software a problemas reais.",
  icons: { icon: "/img/favicon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
