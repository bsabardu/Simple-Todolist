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
  favorite,
  onChecked,
  onDelete,
  onFavorite,
}) => (
  <li className="task">
    <div className="task__content">
      <input type="checkbox" name={id} checked={done} onChange={onChecked} /><label className={classnames('task__label', { 'task__label--checked': done })} htmlFor={id}>{label}</label>
    </div>
    <div className="task__actions">
      <button type="button" className="task__button" onClick={onFavorite}><i className={classnames({'fas': favorite, 'far': !favorite},'fa-star')}></i></button>
      <button type="button" className="task__button" onClick={onDelete}><i className="fas fa-times"></i></button>
    </div>
  </li>
);

// On déclare le type de props attendu
Task.propTypes = {
  id: PropTypes.number.isRequired,
  done: PropTypes.bool,
  favorite: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChecked: PropTypes.func,
  onDelete: PropTypes.func,
  onFavorite: PropTypes.func,
};

Task.defaultProps = {
  done: false,
  favorite: false,
  onChecked: () => {},
  onDelete: () => {},
  onFavorite: () => {},
};

// == Export
export default Task;
