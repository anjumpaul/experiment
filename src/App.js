import React, { Component } from 'react';

import Counter from './components/Counter';

class App extends Component {
  render() {

    return (
      <div>
      <Counter />
      <button>add counter</button>
      <button>remove counter</button>
    </div>
    );
  }
}

export default App;
