// == Import npm
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant

class Header extends Component {
  constructor(props) {
    // On appelle le constructeur du parent grâce à la fonction super
    super(props);
    // Puis on déclare le state avec son état initial même vide.

    this.state = {};
  }

  render() {
    const { onTaskSubmit, onInputChange, inputLabel } = this.props; 

    return (
      <div className="header">
        <form onSubmit={onTaskSubmit}>
          <input className="header__input" placeholder="Ajouter une tâche" onChange={onInputChange} value={inputLabel} />
        </form>
      </div>
    );
  }
}

Header.propTypes = {
  onTaskSubmit: PropTypes.func,
};

Header.defaultProps = {
  onTaskSubmit: () => {},
};

// == Export
export default Header;
