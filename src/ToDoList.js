import * as React from "react";
class ToDoList extends React.Component{

    state={
        text: "",
        tasksCounter:0,
        toDoList:[]
    };

    onTextChange=(event)=>{
        this.setState({
            text: event.target.value
        })
    };

    addTask= () =>{
        this.state.tasksCounter <5 &&
        this.setState({
            tasksCounter: this.state.tasksCounter+1,
            toDoList: this.state.toDoList.concat([this.state.text]),
            text:""
            })
            this.state.tasksCounter>=5 &&
                alert("You can't enter more then 5 todos")




    };
    removeItem(index) {
        const list = this.state.toDoList;
        list.splice(index, 1);
        this.setState({toDoList:list,
            tasksCounter:this.state.tasksCounter-1});

    }

    reset=() =>{
        this.setState(
            {
                toDoList:[],
                tasksCounter:0,
                text: ""
            }
        )
    }



    render() {
        return(
            <div class="a">
                <h1>
                    My To Do List
                </h1>
                <div>
                    Tasks left  {this.state.tasksCounter}
                </div>
               <ul>
                   {
                          this.state.toDoList.map((task,i)=> {
                           return (

                               <li key={i} onClick={() => this.removeItem(i)}>
                                   {task}
                               </li>
                           );
                       })

                   }
               </ul>
                <input value={this.state.text} onChange={this.onTextChange}/>
                <button disabled={this.state.text.length==0} onClick={this.addTask}>Add</button>
                <button  onClick={this.reset}>Reset</button>
            </div>

        )
    }
}

export default ToDoList;
