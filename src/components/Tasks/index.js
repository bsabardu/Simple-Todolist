// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Import Components
import Task from 'src/components/Task';

// == Composant
const Tasks = ({
  currentTasksNbr,
  tasks,
  onTaskChecked,
  onTaskDelete,
  onTaskFavorite,
}) => (
  <div className="tasks">
    <h2 className="tasks__title">{currentTasksNbr} tâches en cours</h2>
    <ul className="tasks__list">
      {tasks.length ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            onChecked={() => onTaskChecked(task)}
            onDelete={() => onTaskDelete(task)}
            onFavorite={() => onTaskFavorite(task)}
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
  onTaskChecked: PropTypes.func,
  onTaskDelete: PropTypes.func,
  onTaskFavorite: PropTypes.func,
  currentTasksNbr: PropTypes.number,
};

Tasks.defaultProps = {
  tasks: [],
  onTaskChecked: () => {},
  onTaskDelete: () => {},
  onTaskFavorite: () => {},
  currentTasksNbr: 0,
};

// == Export
export default Tasks;
