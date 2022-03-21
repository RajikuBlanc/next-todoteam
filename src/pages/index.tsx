import type { NextPage } from 'next';
import React, { useState } from 'react';
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
      <button className='ml-2' onClick={addTodo}>
        追加
      </button>

      <div>
        {tasks.map((task, index) => (
          <div key={index} className='flex items-center justify-center space-x-10'>
            <div className='flex'>
              <label className='inline-flex items-center mr-4'>
                <input type='checkbox' onClick={() => completeTodo(index)} />
              </label>
              <h1 style={{ textDecoration: task.completed ? 'line-through' : '' }}>{task.title}</h1>
            </div>
            <div className='flex justify-evenly'>
              <button onClick={() => deleteTodo(index)}>delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
