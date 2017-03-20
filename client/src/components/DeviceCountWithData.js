import React from 'react';
import { graphql, gql } from 'react-apollo';

const DeviceCountQuery = gql `
query deviceCountQuery {
    deviceCount
  } `

class DeviceCount extends React.Component {
  render() {
    return <p>There are {this.props.data.deviceCount} devices.</p>;
  }
}

export default graphql(DeviceCountQuery)(DeviceCount);
