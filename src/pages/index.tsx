import type { NextPage } from 'next';
import React, { useState } from 'react';
import Todo from '../components/Todo';
const Home: NextPage = () => {
  const [title, setTitle] = useState<string>('');
  const [tasks, setTasks] = useState([
    {
      title: 'todo',
      completed: false,
    },
    {
      title: 'todo',
      completed: false,
    },
  ]);

  const addTodo = (e: any) => {
    e.preventDefault();
    // titleがない場合は追加できない
    if (!title) return;
    const newTodo = [...tasks, { title, completed: false }];
    setTasks(newTodo);
    setTitle('');
  };

  const completeTodo = (index: number) => {
    const toggleComp = [...tasks];
    toggleComp[index].completed = !toggleComp[index].completed;
    setTasks(toggleComp);
  };

  const deleteTodo = (index: number) => {
    console.log(index, 'delete');
    const allTodos = [...tasks];
    allTodos.splice(index, 1);
    setTasks(allTodos);
  };

  return (
    <div className='text-center'>
      <p>todo</p>

      <input
        className='p-1'
        type={'text'}
        placeholder='add todo'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className='ml-2' onClick={(e) => addTodo(e)}>
        追加
      </button>

      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            <Todo
              task={task}
              completeTodo={() => completeTodo(index)}
              deleteTodo={() => deleteTodo(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
