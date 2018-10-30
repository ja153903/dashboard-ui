import React, { Component } from 'react'
import { Markdown } from 'react-showdown'
import axios from 'axios'

const URL = 'http://localhost:5656/api/dashboard'

/*
We want to be able to write down markdown editor and also be able to preview the
markdown content as regular text side-by-side
*/
class MarkdownEditor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      markdownInput: '#Nothing yet'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    // test out simple post request here
    if (e) e.preventDefault()

    axios.post(URL, {
      entry: this.state.markdownInput
    }).then((resp) => {
      console.log(resp.status)
    }).catch((err) => {
      console.log(err)
    })
  }

  handleChange (e) {
    this.setState({
      markdownInput: e.target.value
    })
  }

  render () {
    return (
      <div>
        <Markdown markup={this.state.markdownInput} />
        <p>Enter the markdown text here: </p>
        <div>
          <form className='container' style={{
            display: 'flex',
            flexDirection: 'column'
          }} onSubmit={this.handleSubmit}>
            <textarea
              rows='20'
              cols='100'
              type='text'
              value={this.state.markdownInput}
              onChange={e => this.handleChange(e)} />
            <input
              className='btn btn-outline-primary'
              type='submit'
              value='Submit' />
          </form>
        </div>
      </div>
    )
  }
}

export default MarkdownEditor
