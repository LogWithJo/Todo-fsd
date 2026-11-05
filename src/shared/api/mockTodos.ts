import type { Todo } from '../../entities/todo/index';

const todos: Todo[] = [
  { id: '1', title: 'Plan the week', completed: false },
  { id: '2', title: 'Review project notes', completed: true },
  { id: '3', title: 'Take a short break', completed: false },
];

const delay = (milliseconds = 500) =>
  new Promise<void>((resolve) => setTimeout(resolve, milliseconds));

export async function fetchTodos(): Promise<Todo[]> {
  await delay();
  return todos.map((todo) => ({ ...todo }));
}

let currentSession: { username: string } | null = null;

export async function login(username: string): Promise<{ username: string }> {
  await delay();

  if (!username.trim()) {
    throw new Error('Username is required');
  }

  // Set the fake backend session
  currentSession = { username };
  return currentSession;
}

export async function logout(): Promise<void> {
  await delay();
  currentSession = null;
}

export async function getMe(): Promise<{ username: string; isLoggedIn: true }> {
  await delay();

  // If there is no session, simulate a 401 Unauthorized response
  if (!currentSession) {
    const error = new Error('Unauthorized');
    // Attach a status code so React Query can read it later
    (error as any).status = 401;
    throw error;
  }

  return {
    username: currentSession.username,
    isLoggedIn: true,
  };
}

export async function deleteTodo(todoId: string): Promise<string> {
  await delay();
  const index = todos.findIndex(({ id }) => id === todoId);
  if (index === -1) throw new Error('Not found');
  todos.splice(index, 1);
  return todoId;
}

export async function addTodo(title: string): Promise<Todo> {
  await delay();
  const todo: Todo = {
    id: globalThis.crypto?.randomUUID?.() ?? String(Date.now()),
    title,
    completed: false,
  };
  todos.push(todo);
  return { ...todo };
}

export async function toggleTodoStatus(todoId: string): Promise<Todo> {
  await delay();
  const todo = todos.find(({ id }) => id === todoId);
  if (!todo) {
    throw new Error(`Todo with id "${todoId}" was not found`);
  }

  todo.completed = !todo.completed;
  return { ...todo };
}
