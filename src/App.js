import React from 'react';
import TodosList from './components/todos/todos-list';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodosList></TodosList>
      </div>
    );
  }
}

export default App;
