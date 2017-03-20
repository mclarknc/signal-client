import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    browserHistory
} from 'react-router'
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';

import App from './components/App';
import About from './components/About'
import DeviceList from './components/DeviceListWithData';
import './index.css';

const GQ_URI = 'http://192.168.5.3:8080/graphql'
const networkInterface = createNetworkInterface({ uri: GQ_URI});
const client = new ApolloClient({
  networkInterface: networkInterface,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/devicelist" component={DeviceList}/>
      <Route path="/about" component={About} />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
