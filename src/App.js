import React, { Component } from 'react';
import TodoItems from './components/Todoitem/Todoitem'
import AddItem from './components/Additem/Additem'
import './App.scss/main.scss';

class App extends Component {
  state = {
    items : [
        {id:1,name:'omnia',age:24},
        {id:2,name:'Ali',age:60},
        {id:3,name:'Ibrahim',age:30}
    ]
}

deleteItem = (id) => {
  let items = this.state.items.filter(item => {
    return item.id !== id
  })
  this.setState({items})
}

addItem = (item) => {
  item.id = Math.random();
  let items = this.state.items;
  items.push(item);
  this.setState({items})
}

  render(){
  return (
    <div className="App container">
      <h1 className="text-center">TodoList App</h1>
      <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
      <AddItem addItem={this.addItem}/>
    </div>
    );
  }
}


export default App;
