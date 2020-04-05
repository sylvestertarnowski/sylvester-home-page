import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

interface AppRoute {
  path: string;
  name: string;
  Component: React.FC<any>;
}

export const routes: AppRoute[] = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/skills', name: 'Skills', Component: Skills },
  // { path: '/portfolio', name: 'Portfolio', Component: null },
  { path: '/contact', name: 'Contact', Component: Contact },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-content">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="App-page"
                unmountOnExit
              >
                <div className="App-page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </div>
  );
}

export default App;
