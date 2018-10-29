import React, { Component, createRef } from 'react'
import { Markdown } from 'react-showdown'

/*
We want to be able to write down markdown editor and also be able to preview the 
markdown content as regular text side-by-side
*/


class MarkdownEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      markdownInput: '#Nothing yet'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      markdownInput: e.target.value 
    })
  }
  
  render() {
    return (
      <div>
        <p>Enter the markdown text here: </p>
        <div>
          <form>
            <textarea
              type='text' 
              value={ this.state.markdownInput } 
              onChange={ e => this.handleChange(e) } />
          </form>
        </div>
        <Markdown markup={ this.state.markdownInput } />
      </div>
    )
  }
}


export default MarkdownEditor
