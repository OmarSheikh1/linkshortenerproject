import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { ui } from "@clerk/ui";
import { shadcn } from "@clerk/ui/themes";
import { Link2 } from "lucide-react";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linkly | Short links, made simple",
  description:
    "Turn lengthy URLs into clean, compact links and keep the links you create organized in one simple place.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const { userId } = await auth();
  const isSignedIn = Boolean(userId);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider appearance={{ theme: shadcn }} ui={ui}>
          <header className="border-b bg-background/80">
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12">
              <Link href="/" className="flex items-center gap-2.5 font-semibold">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Link2 className="size-4" aria-hidden="true" />
                </span>
                <span>Linkly</span>
              </Link>
              <nav
                aria-label="Main navigation"
                className="hidden items-center gap-7 text-sm text-muted-foreground md:flex"
              >
                <Link
                  className="transition-colors hover:text-foreground"
                  href="/#features"
                >
                  Features
                </Link>
                <Link
                  className="transition-colors hover:text-foreground"
                  href="/#how-it-works"
                >
                  How it works
                </Link>
              </nav>
              <div className="flex items-center gap-2">
                {isSignedIn ? (
                  <UserButton />
                ) : (
                  <>
                    <SignInButton mode="modal">
                      <Button variant="ghost">Sign in</Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button>Sign up</Button>
                    </SignUpButton>
                  </>
                )}
              </div>
            </div>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
