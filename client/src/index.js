import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router'
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';

import App from './components/App';
import Main from './components/Main';
import Nav from './components/Nav';
import About from './components/About';
import NotFound from './components/NotFound';
import DeviceList from './components/DeviceListWithData';
import Signal from './components/Signal';
import Device from './components/Device';
import './index.css';

const GQ_URI = 'http://192.168.5.3:8080/graphql'
const networkInterface = createNetworkInterface({ uri: GQ_URI});
const client = new ApolloClient({
  networkInterface: networkInterface,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Main} />
        <Route path="/devicelist" component={DeviceList}/>
        <Route path="/about" component={About} />
        <Route path="/signal" component={Signal} />
        <Route path="/device/:id" component={Device} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
