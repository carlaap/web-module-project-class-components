import React from 'react';
import TodoList from './TodoList';
import Form from './Form'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
       

      ]
    }
  }
  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>TODOS</h1>

      <TodoList todos={todos}/>
      <TodoForm />
      <button>Clear</button>
      </div>
    );
  }
}

export default App;