import React, { Component } from 'react';
import './App.css';
import CreateForm from './CreateForm';
import TodoList from './TodoList';

class App extends Component {

  id = 3;

  // state 의 초깃값을 설정합니다.
  state = {
    // 그 초깃값은 배열 형태로 넣어주었고, 내부에 기본 값들을 넣어주었습니다.
    todos: [
      {
        id: 0,
        text: '앵귤러 배우고',
        checked: true
      },
      {
        id: 1,
        text: '리액트 배우고',
        checked: false
      },
      {
        id: 2,
        text: '뷰 배우자',
        checked: false
      }
    ]
  };

  handleCreate = text => {
    // 데이터 만들고
    const todoData = {
      id: this.id++,
      text,
      checked: false
    };
    // 데이터를 등록
    this.setState({
      todos: this.state.todos.concat(todoData)
    });
  };

  handleCheck = id => {
    // map 을 통하여 원하는 데이터만 바꿔줍니다.
    const nextTodos = this.state.todos.map(
      todo => (todo.id === id)
        ? { ...todo, checked: !todo.checked }
        : todo
    );
    this.setState({
      todos: nextTodos
    });
  };

  handleRemove = id => {
    // filter 를 통하여 불필요한 데이터는 필터링합니다.
    const nextTodos = this.state.todos.filter(
      todo => todo.id !== id
    );
    this.setState({
      todos: nextTodos
    });
  };
  
  // **Child-to-Parent Component Communication**
  // -> sends a callback function as a "prop" to the child component
  // -> when the onChange event is occured in the child component, it can trigger the onChange event of the parent component
  //    by setting "this.props.[callbackFunction]" or "this.props.[callbackEvent](value_to_parent)". 
  //
  //    By doing so, it will trigger the callback function in the parent component with an optional value to pass on.

  randomFunction = (typedKey) => {
    console.log(typedKey);
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>오늘 뭐할까?</h1>
        </div>
        <CreateForm onSubmit={this.handleCreate} onChange={this.randomFunction}/>
        <div className="white-box">
          <TodoList todos={this.state.todos} onCheck={this.handleCheck} onRemove={this.handleRemove}/>
        </div>
      </div>
    );
  }
}

export default App;