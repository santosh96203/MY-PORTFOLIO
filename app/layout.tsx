import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "Veeravalli Shanmukha Santosh Rao | Portfolio",
  description:
    "AI Engineer, ML Researcher, Computer Vision Researcher and Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}