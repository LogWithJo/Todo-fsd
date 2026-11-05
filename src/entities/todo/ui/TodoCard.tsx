import type { ReactNode } from 'react';
import type { Todo } from '../model/types';

type TodoCardProps = {
  data: Todo;
  children: ReactNode;
};

export function TodoCard({ data, children }: TodoCardProps) {
  return (
    <div>
      <h3>{data.title}</h3>
      <p>status: {data.completed}</p>
      <div>{children}</div>
    </div>
  );
}

export default TodoCard;
