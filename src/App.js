import React from 'react';

import './App.css';
import Header from './Header';
import { TodoList, AddTodo } from './todos';
import { FilterList } from './filter';

function App() {
  return (
      <div className='app'>
          <Header />
          <AddTodo />
          <FilterList />
          <TodoList />
      </div>
  );
}

export default App;
