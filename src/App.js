import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import MarkdownEditor from './MarkdownEditor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MarkdownEditor />
      </div>
    );
  }
}

export default App;
