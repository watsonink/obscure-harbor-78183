import React, { Component } from 'react';

import 'normalize.css';
import styles from './App.css';

import AddButton from './addButton/AddButton.container'
import Todos from './todos/Todos.container';
import Footer from './footer/Footer.container';
import Navigation from './navigation/Navigation.container';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h1 className={styles.title}>todos</h1>
        <div className={styles.list}>
          <AddButton isAdding={false} />
          <Todos />
          <Footer />
        </div>
        <div className={`${styles.alert} ${'alert alert-info text-center'}`} role="alert">
          BUG: when adding a todo, you cant edit any todo
        </div>
        <h6 className={styles.credit}>made with &#9825; by&nbsp;
          <a target="_blank" href="https://watsonink.com">WatsonInk</a>
        </h6>
      </div>
    );
  }
}

export default App;
