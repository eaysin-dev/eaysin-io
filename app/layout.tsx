import { ThemeProvider } from "@/components/provider/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eaysin Arafat | Frontend Developer | React & Next.js Specialist",
  description:
    "Eaysin Arafat is a skilled Frontend Developer specializing in React and Next.js, delivering high-performance, scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" id="top">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
