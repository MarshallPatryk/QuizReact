import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from './context';

import createQuizView from './views/CreateQuiz/createQuizView';
import playQuizView from './views/PlayQuiz/playQuizView';
import listView from './views/ListQuiz/listView';
class App extends React.Component {

  state = {
    zamkniete: [],
    otwarte: [],
  };

  addItem = ( e, newItem) => {
    e.preventDefault();
    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));
  }


  render() {
    const contextElements = {
      ...this.state,
      addItem: this.addItem
    }

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Switch>
            <Route exact path="/" component={listView} />
            <Route path="/create" component={createQuizView} />
            <Route path="/play" component={playQuizView} />
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
