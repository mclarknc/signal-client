import React from 'react';
import {
  gql,
  graphql,
} from 'react-apollo';

const devicesListQuery = gql `
  query DevicesListQuery($cursor: Int, $limit: Int) {
    devices (cursor:$cursor, limit: $limit){
      id
      hostname{
        hostname
      }
      ipaddr {
        ipaddr
      }
      hwaddr
    }
 }`;

const DevicesList = (props) => {
  if (props.data.loading) {
    return <p>Loading...</p>;
  }
  if (props.data.error) {
    return <p>{ props.data.error.message }</p>;
  }
  return <ul>
    {props.data.devices.map( dev => <li key={ dev.id }>{ dev.hostname.hostname }</li> )}
  </ul>;
};

export default graphql(devicesListQuery, {
  options: (props) => ({ variables: { cursor: props.location.query.cursor, limit: props.location.query.limit } }),
})(DevicesList);
