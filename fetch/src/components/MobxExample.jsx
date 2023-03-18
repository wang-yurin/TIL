import React from 'react';
import { observableTodoStore } from '../app/ObservableTodoStore';
import { todoStore } from '../app/TodoStore';

const run = () => {
  todoStore.addTodo('read MobX tutorial');
  console.log(todoStore.report());

  todoStore.addTodo('try MobX');
  console.log(todoStore.report());

  todoStore.todos[0].completed = true;
  console.log(todoStore.report());

  todoStore.todos[1].task = 'try MobX in own project';
  console.log(todoStore.report());

  todoStore.todos[0].task = 'grok MobX tutorial';
  console.log(todoStore.report());
};

const runObs = () => {
  observableTodoStore.addTodo('read MobX tutorial');
  observableTodoStore.addTodo('try MobX');
  observableTodoStore.todos[0].completed = true;
  observableTodoStore.todos[1].task = 'try MobX in own project';
  observableTodoStore.todos[0].task = 'grok MobX tutorial';
};

export default function MobxExample() {
  return (
    <>
      <button onClick={run}>Run code</button>
      <button onClick={runObs}>Run Obs code</button>
    </>
  );
}
