import { create } from 'zustand';

export type TodoFilterType = 'all' | 'active' | 'completed';

type TodoStore = {
  filter: TodoFilterType;
  setFilter: (filter: TodoFilterType) => void;
};

// Zustand store
export const useTodoStore = create<TodoStore>((set) => ({
  filter: 'all',
  setFilter: (filter) => set({ filter }),
}));
