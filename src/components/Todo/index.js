// == Import npm
import React, { Component } from 'react';

// == Import Styles
import './styles.scss';

// == Import Components
import Header from 'src/components/Header';
import Tasks from 'src/components/Tasks';

// == Data
import tasksData from 'src/data/tasks';

// == Utils
import sortByDone from 'src/utils/sortByDone';

// == Composant
class Todo extends Component {
  constructor(props) {
    // On appelle le constructeur du parent grâce à la fonction super
    super(props);
    // Puis on déclare le state avec son état initial même vide.

    this.state = {
      tasks: sortByDone(tasksData),
      currentTasksNbr: tasksData.filter((task) => !task.done).length,
      newTaskLabel: '',
    };
  }

  // Ici on met à jour le state avec le nouveau nombre de tâche à accomplir.
  componentDidUpdate(prevProp, prevState) {
    const { tasks, currentTasksNbr } = this.state;
    const newTasksNbr = tasks.filter((task) => !task.done).length;
    if (newTasksNbr !== currentTasksNbr) {
      this.setState({
        currentTasksNbr: newTasksNbr,
      });
    }
  }

  handleSubmitTask = (event) => {
    event.preventDefault();
    const { tasks, newTaskLabel } = this.state;
    const newTask = {
      id: (Math.max(...tasks.map((task) => task.id))) + 1,
      label: newTaskLabel,
      done: false,
    };

    this.setState({
      tasks: sortByDone([...tasks, newTask]),
      newTaskLabel: '',
      currentTasksNbr: tasks.filter((task) => !task.done).length,
    });
  }

  handleInputChange = (event) => {
    const input = event.target.value;
    this.setState({
      newTaskLabel: input,
    });
  }

  handleTaskChecked = (task) => {
    const { tasks } = this.state;
    // This map seams odd but can't figure how to do this better
    const newTasks = tasks.map((taskItem) => taskItem.id === task.id ? {...taskItem, done: !taskItem.done} : taskItem); 
    this.setState({
      tasks: sortByDone(newTasks),
    });
  }

  render() {
    const { currentTasksNbr, tasks, newTaskLabel } = this.state;
    return (
      <div className="todo">
        <Header
          onTaskSubmit={this.handleSubmitTask}
          onInputChange={this.handleInputChange}
          inputLabel={newTaskLabel}
        />
        <Tasks currentTasksNbr={currentTasksNbr} tasks={tasks} onChecked={this.handleTaskChecked} />
      </div>
    );
  }
}

// == Export
export default Todo;
