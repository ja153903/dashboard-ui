import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MarkdownEditor from './MarkdownEditor'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <MarkdownEditor />
      </div>
    )
  }
}

export default App
