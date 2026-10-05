'use client'; // needed because this component uses React state/events

import { useState, FormEvent } from 'react';
import type { Task } from '@/types/task';

const initialTasks: Task[] = [
  { id: 1, title: 'Complete the React tutorial', completed: true },
  { id: 2, title: 'Complete the Next.js tutorial', completed: true },
  { id: 3, title: 'Complete the TypeScript tutorial', completed: true },
  { id: 4, title: 'Build this app', completed: false },
];

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTitle, setNewTitle] = useState('');

  function handleAddTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const title = newTitle.trim();
    if (!title) return;

    const newTask: Task = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTitle('');
  }

  function toggleTask(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const remaining = tasks.filter((task) => !task.completed).length;

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Add a new task…"
          className="flex-1 rounded-md border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        />
        <button
          type="submit"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Add
        </button>
      </form>

      <ul className="flex flex-col gap-2">
        {tasks.length === 0 && (
          <li className="text-sm text-zinc-500">No tasks yet — add one above.</li>
        )}
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between gap-3 rounded-md border border-zinc-200 px-3 py-2 dark:border-zinc-800"
          >
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span className={task.completed ? 'line-through text-zinc-400' : ''}>
                {task.title}
              </span>
            </label>
            <button
              onClick={() => deleteTask(task.id)}
              aria-label={`Delete "${task.title}"`}
              className="text-xs text-red-600 hover:underline dark:text-red-400"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs text-zinc-500">
        {remaining} task{remaining === 1 ? '' : 's'} remaining
      </p>
    </div>
  );
}
