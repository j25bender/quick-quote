import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      body: ''
    }
  }

  handleInput = (e) => {
    this.setState({
       [e.target.name]: e.target.value
    })

  }
  
  render() {
    return (
      <div className="App">
        <form>
          <input value={this.state.name} name="name" onChange={this.handleInput} type="text" />
          <input value={this.state.body} name="body" onChange={this.handleInput} type="text"/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
