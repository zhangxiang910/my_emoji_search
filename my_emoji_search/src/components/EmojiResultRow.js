/**
 * Created by zhangxiang on 2017/11/17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EmojiResultRow.css';

class EmojiResultRow extends Component {
  render () {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div className="emoji-result-row">
        <img
          alt={this.props.title}
          src={src}
        />
        <span className="title">
          {this.props.title}
        </span>
      </div>
    );
  }
}

EmojiResultRow.propsTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
};

export default EmojiResultRow;