import React, { Component } from 'react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import EmojiResults from '../components/EmojiResults';
import filterEmoji from '../filterEmoji';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji('', 20)
    };

    this.handleSearchChange = this.handleSearchChange.bind(this)

  }

  handleSearchChange (event) {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  }

  render () {
    return (
      <div>
        <Header/>
        <SearchInput
          textChange={this.handleSearchChange}
        />
        <EmojiResults
          emojiData={this.state.filteredEmoji}
        />
      </div>
    );
  }
}

export default App;
