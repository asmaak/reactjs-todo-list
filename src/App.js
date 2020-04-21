import React,{Component} from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';


class App extends Component {
  state = {
    items:[
      {id:1,name:"ahmed",age:22},
      {id:2,name:"mohamed",age:24},
      {id:3,name:"ali",age:226},
      {id:4,name:"mhmoud",age:28},
 

    ]
  }
  deleteItem = (id) =>{
    //solve 1
  //  let items = this.state.items;
  //  let i=items.findIndex(item => item.id === id);
  //  items.splice(i,1);
  //  this.setState({
  //    items:items
  //  })
   // if key and value are the same name you can wite this.state({items})
  //  solve 2
  let items =this.state.items.filter(item =>{
    return item.id !==id
  }

  )
  this.setState({
    items
  })
  }
  addItem =(item)=>{
   item.id=Math.random();
  let items=this.state.items;
  items.push(item);
  this.setState({
    items:items
  }
  )
  }
  render(){
  
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    );
  }
}


export default App;
