// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Import Components
import Task from 'src/components/Task';

// == Composant
const Tasks = ({ currentTasksNbr, tasks, onChecked }) => (
  <div className="tasks">
    <h2 className="tasks__title">{currentTasksNbr} tâches en cours</h2>
    <ul className="tasks__list">
      {tasks.length ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            onChecked={() => onChecked(task)}
          />
        ))
      ) : (
        <h2>Pas de données à afficher</h2>
      )}
    </ul>
  </div>
);

// On déclare le type de props attendu
Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  onChecked: PropTypes.func,
  currentTasksNbr: PropTypes.number,
};

Tasks.defaultProps = {
  tasks: [],
  onChecked: () => {},
  currentTasksNbr: 0,
};

// == Export
export default Tasks;
