// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// == Import
import './styles.scss';

// == Composant
const Task = ({
  id,
  label,
  done,
  onChecked,
}) => (
  <li className="task">
    <input type="checkbox" name={id} checked={done} onChange={onChecked} /><label className={classnames('task__label', { 'task__label--checked': done })} htmlFor={id}>{label}</label>
  </li>
);

// On déclare le type de props attendu
Task.propTypes = {
  id: PropTypes.number.isRequired,
  done: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChecked: PropTypes.func,
};

Task.defaultProps = {
  done: false,
  onChecked: () => {},
};

// == Export
export default Task;
