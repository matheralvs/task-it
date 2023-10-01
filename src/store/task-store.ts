import { Task } from '@prisma/client';
import { create } from 'zustand';

interface TaskState {
  tasks: Task[] | null;
  setTasks: (tasks: Task[]) => void;
  onCreateTask: (task: Task) => void;
  onDeleteTask: (taskId: Task['id']) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: null,
  setTasks: (tasks: Task[]) => set({ tasks }),
  onCreateTask: (task: Task) => set((state) => ({ tasks: [task, ...(state?.tasks ?? [])] })),
  onDeleteTask: (taskId: Task['id']) => set((state) => ({ tasks: state?.tasks?.filter((task) => task.id !== taskId) }))
}));