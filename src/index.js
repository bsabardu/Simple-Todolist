// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

// == Import : local
// Composants
import Todo from 'src/components/Todo';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = <Todo />;
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
