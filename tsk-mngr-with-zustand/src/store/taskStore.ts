import { Task } from "../types";
import { create } from "zustand";

interface TaskState {
  task: Task[];
  moveTask: (takId: string, newStatus: Task["status"]) => void;
}

const INITIAL_TASKS: Task[] = [
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
];

export const useTaskStore = create<TaskState>((set) => ({
  task: INITIAL_TASKS,
  moveTask: (taskId, newStatus) =>
    set((state) => ({
      task: state.task.map((t) =>
        t.id === taskId ? { ...t, status: newStatus } : t
      ),
    }),
    ),
}));