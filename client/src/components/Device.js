import React from 'react';
import {
  gql,
  graphql,
} from 'react-apollo';

const deviceQuery = gql `
  query DeviceQuery($id: Int) {
    device (id: $id){
      hwaddr
      hostname { hostname }
      ipaddr { ipaddr }
    }
 }`;

const Device = (props) => {
  if (props.data.loading) {
    return <p>Loading...</p>;
  }
  if (props.data.error) {
    return <p>{ props.data.error.message }</p>;
  }
  return (<p>Hostname: {props.data.device.hostname.hostname}<br />
            Hwaddr: {props.data.device.hwaddr}<br />
            IPaddr: {props.data.device.ipaddr.ipaddr}</p>
          )
  }

export default graphql(deviceQuery, {
  options: (props) => ({ variables: { id: props.params.id } }),
})(Device);
