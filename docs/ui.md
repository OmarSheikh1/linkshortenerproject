# UI Components

All application UI must use shadcn UI components. Do not create custom UI
components or bespoke replacements for shadcn components.

## Requirements

- Reuse components from `components/ui` and compose them directly where needed.
- If a required component is not installed, add the official shadcn component
  with the shadcn CLI. Do not build a custom component or wrapper instead.
- Use shadcn components for interactive controls and common UI patterns, such
  as buttons, inputs, dialogs, menus, alerts, and cards.
- Use Tailwind utilities for page layout and spacing; follow the shared theme
  tokens and styles in `app/globals.css` rather than introducing a separate
  visual system.
- Preserve the accessibility and keyboard behavior provided by shadcn
  components. Do not replace them with unstyled native controls.

See [`components.json`](../components.json) for the project's shadcn
configuration.
