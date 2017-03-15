import React, { Component } from 'react';
import { ApolloClient,
  ApolloProvider,
  gql,
  graphql,
  createNetworkInterface
} from 'react-apollo';

import logo from './allpoints_star_t.png';
import './App.css';

const GQ_URI = 'http://localhost:8008/graphql'
const networkInterface = createNetworkInterface({ uri: GQ_URI});
const client = new ApolloClient({
  networkInterface: networkInterface,
});
//console.log(client);

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

const DevicesList = ({ data: { loading, error, devices }}) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{ error.message }</p>;
  }
  return <ul>
    {devices.map( dev => <li key={ dev.id }>{ dev.hostname.hostname }</li> )}
  </ul>;
};

const DevicesListWithData = graphql(devicesListQuery, {
  options: ({ cursor, limit }) => ({ variables: { cursor, limit } }),
})(DevicesList);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Signal App</h2>
          </div>
          <DevicesListWithData cursor={350} limit={30}/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
