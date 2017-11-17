/**
 * Created by zhangxiang on 2017/11/16.
 */
import React from 'react';
import './Display.css';
import PropTypes from 'prop-types';

class Display extends React.Component {
  render () {
    return (
      <div className="display_component">
        <div>
          {this.props.value}
        </div>
      </div>
    );
  }
}
Display.propTypes = {
  value: PropTypes.string,
}
export default Display;