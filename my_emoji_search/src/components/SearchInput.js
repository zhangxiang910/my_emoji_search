/**
 * Created by zhangxiang on 2017/11/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import './SearchInput.css';

const SearchInput = ({textChange}) => (
  <div className="search-input">
    <input type="text" onChange={textChange}/>
  </div>
);

SearchInput.propType = {
  textChange: PropTypes.func,
};

export default SearchInput;