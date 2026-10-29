# Agent Instructions

This repository contains a Next.js link-shortener application. The instructions
in `docs/` are mandatory for all implementation work.

## Required documentation review

Before generating, writing, or changing ANY code, first identify and read every
individual instruction document in `docs/` that is relevant to the requested
change. This is a required prerequisite, not an optional reference. Do not
generate or edit code until that review is complete. If it is unclear which
documents apply, inspect the available `docs/*.md` files and read the ones
covering the affected behavior or technology.

## Authentication

Before changing authentication, sign-in or sign-up entry points, or protected
routes, read [`docs/authentication.md`](docs/authentication.md) and follow its
requirements. Clerk is the only authentication provider; `/dashboard` must be
protected, signed-in visitors to `/` must be redirected to `/dashboard`, and
Clerk sign-in and sign-up must always open as modals.

## UI components

Before creating or changing UI, read [`docs/ui.md`](docs/ui.md) and follow its
requirements. All application UI must use shadcn UI components. Do not create
custom UI components; add missing components using the shadcn CLI.


## Non-negotiable rules

- Keep changes scoped to the requested behavior; preserve existing behavior
  unless a change is explicitly intended.
- Prefer server-side implementation. Add client-side code only when browser
  interactivity or browser APIs require it.
- Never expose secrets, bypass authorization, or make protected behavior rely
  only on client-side checks.
- Do not run migrations, alter production data, or introduce external services
  without explicit authorization.
- Surface failures clearly. Do not silently swallow exceptions or return
  success-shaped fallbacks for failed operations.
- Update relevant documentation when behavior, configuration, or operational
  steps change.
- Run the smallest relevant validation available and report what was and was
  not verified.