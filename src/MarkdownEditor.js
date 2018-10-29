import React, { Component } from 'react'

/*
We want to be able to write down markdown editor and also be able to preview the 
markdown content as regular text side-by-side
*/

class Markdown extends Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' name='markdown'></input>
          <input type='submit' value='Submit'></input>
        </form>
      </div>)
  }
}

class MarkdownEditor extends Component {
  render() {
    return (
      <div>
        <p>Enter the markdown text here: </p>
        <Markdown />
      </div>
    )
  }
}


export default MarkdownEditor
