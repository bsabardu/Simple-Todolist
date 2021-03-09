// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Import Components
import Task from 'src/components/Task';

// == Composant
const Tasks = ({ currentTasksNbr, tasks }) => (
  <div className="tasks">
    <h2 className="tasks__title">{currentTasksNbr} tâches en cours</h2>
    <ul className="tasks__list">
      {tasks.length ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
          />
        ))
      ) : (
        <h2>Pas de données à afficher</h2>
      )}
    </ul>
  </div>
);

// == Export
export default Tasks;
