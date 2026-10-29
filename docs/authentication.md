# Authentication

Clerk is the only authentication provider for this application. Use Clerk for
sign-in, sign-up, session state, and user identity. Do not add or use another
authentication method, such as NextAuth, custom credential handling, or
application-managed sessions.

## Route behavior

- `/dashboard` is a protected route. Require an authenticated Clerk user on the
  server before rendering protected content; do not rely on client-side checks
  alone.
- When an authenticated user requests `/`, redirect them to `/dashboard`.
- Unauthenticated users may access `/`. Requests to `/dashboard` must follow
  Clerk's sign-in flow and must not expose dashboard content.

## Sign-in and sign-up

- Use Clerk's sign-in and sign-up components and flows.
- Always open sign-in and sign-up as Clerk modals, not as dedicated pages.
- Keep Clerk session and user controls inside the existing `ClerkProvider`.

When changing authentication or route behavior, preserve these rules across
navigation, server-rendered routes, and any related entry points.
