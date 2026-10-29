import { SignUpButton } from "@clerk/nextjs";
import {
  ArrowDown,
  ArrowRight,
  Check,
  LayoutDashboard,
  Link2,
  MousePointerClick,
  Sparkles,
  Zap,
} from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export const instant = false;

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main className="flex-1 overflow-hidden">
      <section className="relative isolate mx-auto grid min-h-[calc(100svh_-_4rem)] w-full max-w-7xl items-center gap-16 px-6 py-20 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[32rem] max-w-5xl rounded-full bg-[radial-gradient(ellipse_at_top,var(--color-secondary),transparent_68%)] opacity-70"
        />
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1.5 text-sm text-muted-foreground shadow-sm">
            <Sparkles className="size-4 text-foreground" aria-hidden="true" />
            A simpler way to share links
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Long links,
            <br />
            meet their
            <br />
            <span className="text-muted-foreground">short story.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Turn lengthy URLs into clean, compact links that are easy to share.
            Keep the links you create organized in one simple place.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <SignUpButton mode="modal">
              <Button size="lg" className="h-11 px-5">
                Get started
                <ArrowRight aria-hidden="true" />
              </Button>
            </SignUpButton>
            <Button
              nativeButton={false}
              render={<Link href="#features" />}
              size="lg"
              variant="outline"
              className="h-11 px-5"
            >
              Explore features
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            A focused toolkit for sharing links with less clutter.
          </p>
        </div>

        <div
          role="img"
          aria-label="Example preview of a long web address becoming a shorter shareable link"
          className="relative mx-auto w-full max-w-lg"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-[2rem] bg-secondary/60 blur-2xl"
          />
          <div className="relative rounded-3xl border bg-card p-5 shadow-2xl shadow-black/10 sm:p-7">
            <div className="flex items-center justify-between border-b pb-5">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-foreground">
                  <Link2 className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-medium">Link preview</p>
                  <p className="text-sm text-muted-foreground">
                    A cleaner way to share
                  </p>
                </div>
              </div>
              <span className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
                EXAMPLE
              </span>
            </div>

            <div className="pt-6">
              <p className="mb-2 text-sm font-medium text-muted-foreground">
                Your original URL
              </p>
              <div className="rounded-xl border bg-background px-4 py-3 text-sm text-muted-foreground">
                example.com/articles/a-very-long-link...
              </div>

              <div className="flex justify-center py-4">
                <span className="flex size-8 items-center justify-center rounded-full border bg-card text-muted-foreground">
                  <ArrowDown className="size-4" aria-hidden="true" />
                </span>
              </div>

              <p className="mb-2 text-sm font-medium text-muted-foreground">
                Ready to share
              </p>
              <div className="flex items-center justify-between gap-3 rounded-xl border bg-secondary/50 px-4 py-3">
                <span className="truncate font-medium">linkly.example/launch</span>
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-background text-foreground">
                  <Check className="size-4" aria-hidden="true" />
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-xl border bg-background p-4">
              <span className="flex size-9 items-center justify-center rounded-lg bg-secondary">
                <MousePointerClick className="size-4" aria-hidden="true" />
              </span>
              <p className="text-sm leading-6 text-muted-foreground">
                Less clutter in your messages. More room for what matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="scroll-mt-20 border-t bg-card/40 px-6 py-20 sm:px-10 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Made for sharing
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              The little details make a big difference.
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Everything you need to make your links easier to use, without
              adding complexity to your workflow.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            <article className="border-t pt-6">
              <span className="flex size-11 items-center justify-center rounded-xl border bg-background">
                <Link2 className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">Short and shareable</h3>
              <p className="mt-2 leading-7 text-muted-foreground">
                Turn unwieldy web addresses into concise links that fit neatly
                in a message, post, or email.
              </p>
            </article>
            <article className="border-t pt-6">
              <span className="flex size-11 items-center justify-center rounded-xl border bg-background">
                <LayoutDashboard className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">All in one place</h3>
              <p className="mt-2 leading-7 text-muted-foreground">
                Keep the links you create together and make them easier to find
                when you need them again.
              </p>
            </article>
            <article className="border-t pt-6">
              <span className="flex size-11 items-center justify-center rounded-xl border bg-background">
                <Zap className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">Simple by design</h3>
              <p className="mt-2 leading-7 text-muted-foreground">
                A straightforward workflow keeps the focus on what you came to
                do: make a link and share it.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-20 px-6 py-20 sm:px-10 lg:px-12 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              From long to link-ready in three steps.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              No complicated setup. Just a clear path from the URL you have to
              the link you want to share.
            </p>
          </div>

          <ol className="divide-y">
            <li className="flex gap-5 py-5 first:pt-0">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border text-sm font-medium">
                01
              </span>
              <div>
                <h3 className="font-semibold">Add your long URL</h3>
                <p className="mt-1 leading-6 text-muted-foreground">
                  Start with the web address you want to share.
                </p>
              </div>
            </li>
            <li className="flex gap-5 py-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border text-sm font-medium">
                02
              </span>
              <div>
                <h3 className="font-semibold">Create a short link</h3>
                <p className="mt-1 leading-6 text-muted-foreground">
                  Get a cleaner, more compact link for your destination.
                </p>
              </div>
            </li>
            <li className="flex gap-5 py-5 last:pb-0">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border text-sm font-medium">
                03
              </span>
              <div>
                <h3 className="font-semibold">Share it anywhere</h3>
                <p className="mt-1 leading-6 text-muted-foreground">
                  Use your short link wherever you connect with people.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="border-t bg-card/40 px-6 py-16 text-center sm:px-10 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to share a better link?
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Create an account and make your next link a little simpler.
          </p>
          <div className="mt-7">
            <SignUpButton mode="modal">
              <Button size="lg" className="h-11 px-5">
                Get started
                <ArrowRight aria-hidden="true" />
              </Button>
            </SignUpButton>
          </div>
        </div>
      </section>
    </main>
  );
}
