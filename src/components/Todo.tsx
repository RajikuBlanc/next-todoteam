import React from 'react';

type Props = {
  task: {
    title: string;
    completed: boolean;
  };
  completeTodo: any;
  deleteTodo: any;
};

export default function Todo({ task, completeTodo, deleteTodo }: Props) {
  return (
    <div className='flex items-center justify-center space-x-10'>
      <div className='flex'>
        <label className='inline-flex items-center mr-4'>
          <input type='checkbox' onClick={completeTodo} />
        </label>
        <h1 style={{ textDecoration: task.completed ? 'line-through' : '' }}>{task.title}</h1>
      </div>
      <div className='flex justify-evenly'>
        <button onClick={deleteTodo}>delete</button>
      </div>
    </div>
  );
}
