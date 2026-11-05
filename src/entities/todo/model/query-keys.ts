export const queryKeys = {
  all: ['todos'] as const,
  list: () => [...queryKeys.all, 'list'] as const,
};
