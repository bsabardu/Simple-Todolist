// == Import npm
import React from 'react';

// == Import Styles
import './styles.scss';

// == Import Components
import Header from 'src/components/Header';
import Tasks from 'src/components/Tasks';

// == Data
import tasksData from 'src/data/tasks';

const currentTasksNbr = tasksData.filter((task) => !task.done).length;

// == Composant
const Todo = () => (
  <div className="todo">
    <Header />
    <Tasks currentTasksNbr={currentTasksNbr} tasks={tasksData} />
  </div>
);

// == Export
export default Todo;
