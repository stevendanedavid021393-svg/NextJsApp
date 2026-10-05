# Task List — React + Next.js + TypeScript

Final assignment for the ROMTech JavaScript training: a simple app that
uses **React**, **Next.js** (App Router), and **TypeScript** together.

## What it does

A small task list:

- Add a task (name only).
- Check a task off as complete (crosses it out).
- Delete a task.
- Shows how many tasks are left.

## How each technology is used

- **React** — `src/components/TodoList.tsx` is a React component using
  `useState` to manage the list of tasks and the new-task input.
- **Next.js** — built with the App Router: `src/app/layout.tsx` is the root
  layout (page metadata, fonts), and `src/app/page.tsx` is the home page, a
  Server Component that renders the client-side `TodoList` component.
- **TypeScript** — `src/types/task.ts` defines the `Task` type (`id`,
  `title`, `completed`), used throughout `TodoList.tsx` so the compiler
  catches mistakes (e.g. a missing field) at build time.

## Running it

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Verified locally: `tsc --noEmit` (no type errors), `npm run lint` (clean),
and `npm run build` (successful production build) all pass.
