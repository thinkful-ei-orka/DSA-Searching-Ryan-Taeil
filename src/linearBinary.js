import React from 'react';

export default class LinearBinary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      message: '',
    }

    this.numbers = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
  }

  handleChange = (value) => {
    this.setState({
      search: value
    });
  }

  // Linear Search
  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   let numSearches = 0;
  //   let numMessage = '';

  //   for (let i = 0; i < this.numbers.length; i++) {
  //     if (this.numbers[i] === parseFloat(this.state.search)) {
  //       numSearches = i + 1;
  //       numMessage = `Number found in ${numSearches} searches.`;
  //     }
  //   }

  //   if (numMessage === ``) {
  //     numMessage = `Number not found. Searched ${this.numbers.length} times.`;
  //   }

  //   this.setState({
  //     message: numMessage
  //   });
  // }

  // Binary Search
  handleSubmit = (e) => {
    e.preventDefault();

    let numMessage = '';
    let sortedArray = this.numbers.sort(function(a, b){return a - b});

    let result = this.binarySearch(sortedArray, parseFloat(this.state.search));

    if (typeof result[0] === 'string') {
      numMessage = `${result[0]}. Searched ${result[1]} times.`;
    } else {
      numMessage = `Item found at position ${result[0]}. Searched ${result[1]} times.`
    }

    this.setState({
      message: numMessage
    });
  }

   binarySearch = (array, value, start, end, counter) => {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;
    var counter = counter === undefined ? 0 : counter;

    if (start > end) {
      return -1;
    }

    counter++;

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(index, item, counter);

    if (item == value) {
        return [index, counter];
    }
    else if (item < value) {
        return this.binarySearch(array, value, index + 1, end, counter);
    }
    else if (item > value) {
        return this.binarySearch(array, value, start, index - 1, counter);
    }
    return ['Item not found', counter];
  };

  render() {
    return (
      <>
        <h1>Search</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" id="search" value={this.state.value} onChange={(e) => this.handleChange(e.target.value)}></input>
          <button type="submit">Search</button>
        </form>
        <p className="message">{this.state.message}</p>
      </>
    );
  }
}
