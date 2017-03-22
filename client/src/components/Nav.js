import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <Link to="/about">About</Link>
        <Link to="/devicelist?cursor=1000&limit=40">Device List</Link>
      </div>
    )
  }
})
