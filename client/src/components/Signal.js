import React from 'react';
import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';

import {
  gql,
  graphql,
} from 'react-apollo';

const signalQuery = gql `
  query SignalQuery($hwaddr: String!) {
    signals (hwaddr: $hwaddr){
      id
      statDate
      signal
    }
 }`;

const Signals = (props) => {

  if (props.data.loading) {
    return <p>Loading...</p>;
  }
  if (props.data.error) {
    return <p>{ props.data.error.message }</p>;
  }
  var signals = []
  for (var i = 0; i < props.data.signals.length; i++) {
    var dt = new Date(props.data.signals[i].statDate);
    var sig = {'id': props.data.signals[i].id,
                'signal': props.data.signals[i].signal,
                'statDate': dt
              }

    signals[i] = sig;
  }
  console.log(signals[5].statDate);
  return (
    <LineChart width={1200} height={400} data={props.data.signals}>
      <Line type="natural" dataKey="signal" dot={false} />
      <XAxis dataKey="statDate" hide={true}/>
      <YAxis />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Tooltip />
    </LineChart>
  )
  };

export default graphql(signalQuery, {
  options: (props) => ({ variables: { hwaddr: props.location.query.hwaddr } }),
})(Signals);
