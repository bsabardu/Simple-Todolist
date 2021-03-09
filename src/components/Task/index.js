// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Task = ({ id, label, done, onChecked }) => (
  <li className="task">
    <input type="checkbox" name={id} defaultChecked={done} onChange={onChecked} /><label className={done ? 'task__label task__label--checked' : 'task__label'} htmlFor={id}>{label}</label>
  </li>
);

// On déclare le type de props attendu
Task.propTypes = {
  id: PropTypes.number.isRequired,
  done: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

Task.defaultProps = {
  done: false,
};

// == Export
export default Task;
