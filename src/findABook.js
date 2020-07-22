import React from 'react';

export default class FindABook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      message: '',
    }
  }

  handleChange = (value) => {
    this.setState({
      search: value
    });
  }

  // Binary Search
  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <h1>Find a Book</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" id="search" value={this.state.value} onChange={(e) => this.handleChange(e.target.value)}></input>
          <button type="submit">Search</button>
        </form>
        <p className="message">{this.state.message}</p>
      </>
    );
  }
}
