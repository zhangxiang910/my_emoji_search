/**
 * Created by zhangxiang on 2017/11/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import EmojiResultRow from './EmojiResultRow';
import './EmojiResults.css';

const EmojiResults = ({emojiData}) => (
  <div className="emoji-results">

    {(emojiData || []).map((emoji, index) => {
      return (
        <EmojiResultRow
          key={index}
          symbol={emoji.symbol}
          title={emoji.title}
        />
      );
    })
    }
  </div>
);

EmojiResults.propTypes = {
  emojiData: PropTypes.array,
};

export default EmojiResults;
