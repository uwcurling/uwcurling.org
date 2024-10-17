import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { RecwellIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { InstagramIcon } from "hugeicons-react";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>

            <footer className="w-full flex items-center justify-center py-3 space-x-2">
              <div className="justify-start">
                <p className="font-mono text-inherit justify-start"> © 2024 The Curling Club of UW Madison </p>
              </div>
              <div className="space-x-1.5">
                <Button isIconOnly color="primary" variant="faded" aria-label="instagram" size="sm">
                  <Link isExternal aria-label="Instagram" href={siteConfig.links.instagram}>
                    <InstagramIcon className="text-default-500" />
                  </Link>
                </Button>
                <Button isIconOnly color="primary" variant="faded" aria-label="recwell" size="sm">
                  <Link isExternal aria-label="Recwell" href={siteConfig.links.recwell}>
                    <RecwellIcon className="text-default-500" />
                  </Link>
                </Button>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
