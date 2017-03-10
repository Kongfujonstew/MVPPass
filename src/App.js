import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.
 */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (
      <div id="main">
 
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Countadfadf: {this.state.count}
        </button>
      </div>
    );
  }
}
export default App;