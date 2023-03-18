import './App.css';
import { observableTodoStore } from './app/ObservableTodoStore';
import TodoList from './components/TodoList';
// import MobxExample from './components/MobxExample';
// import Counter2 from './components/Counter2';
// import TestMocking from './components/TestMocking';
// import Counter from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      {/* <TestMocking /> */}
      {/* <Counter /> */}
      {/* <Counter2 /> */}
      {/* <MobxExample /> */}
      <TodoList store={observableTodoStore} />
    </div>
  );
}

export default App;
