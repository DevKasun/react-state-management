import { atom } from "jotai";
import { Task } from "../types";

export const taskAtoms = atom<Task[]>([
  {
    id: "1",
    title: "Research Project",
    description: "Gather requirements and create initial documentation",
    status: "TODO",
  },
  {
    id: "2",
    title: "Design System",
    description: "Create component library and design tokens",
    status: "TODO",
  },
  {
    id: "3",
    title: "API Integration",
    description: "Implement REST API endpoints",
    status: "IN_PROGRESS",
  },
  {
    id: "4",
    title: "Testing",
    description: "Write unit tests for core functionality",
    status: "DONE",
  },
])

export const moveTaskAtom = atom(
  null,
  (get, set, { taskId, newStatus }: { taskId: string; newStatus: Task["status"] }) => {
    const tasks = get(taskAtoms);
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    set(taskAtoms, updatedTasks);
  }
);

export const deleteTaskAtom = atom(null, (get, set, taskId: string) => {
  const tasks = get(taskAtoms);
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  set(taskAtoms, updatedTasks);
});