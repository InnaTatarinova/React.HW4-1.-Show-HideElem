import React from 'react';
import ShowHideComp from '../ShowHideComp/ShowHideComp';
import './App.css';

class App extends React.Component {

  state = {
    show: false
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="App" >
        <div>
          <button onClick={this.handleClick.bind(this)}>Show/Hide</button>
          {
            this.state.show
              ? <ShowHideComp />
              : <p></p>
          }
        </div>
      </div>
    );
  }
}

export default App;
