---
name: add-component
description: Automatically generates a new HTML file with Tailwind CSS boilerplate for building a new UI component.
---

# Skill: Add Component

When user asks to "add a component", "create a new component", or "generate a ui element":

## Steps
1. Identify the name of the component the user wants (e.g., "card", "modal"). If not specified, politely ask the user.
2. Create a new file named `[component-name].html` in the root directory.
3. Insert a standard HTML5 boilerplate with `<html lang="uk">` and UTF-8 encoding.
4. Include the Tailwind CSS CDN in the `<head>`: `<script src="https://cdn.tailwindcss.com"></script>`.
5. Set up a centered presentation layout in the `<body>`: `<body class="min-h-screen bg-slate-100 flex items-center justify-center p-6">`.
6. Inside the body, create a basic structural `<div>` for the component with generic Tailwind styling (`bg-white rounded-2xl shadow-lg p-10`).
7. Add standard interactive states (Default, Hover, Active, Disabled) if the requested component implies interactivity.

## Output format
Provide a short bulleted summary of the created file and suggest opening it with Live Server.

## Conventions to follow
- Use semantic HTML tags.
- Write modern, responsive Tailwind CSS utility classes.
- Match the visual style of existing components (rounded corners, soft shadows).
- Follow the rules defined in CLAUDE.md.

## Don't
- Do not add complex JavaScript or external JS libraries.
- Do not create external `.css` files (use only Tailwind utilities).
