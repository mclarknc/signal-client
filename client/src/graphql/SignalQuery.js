import {
  gql
} from 'react-apollo';

export default gql `
  query SignalQuery($hwaddr: String) {
    signals (hwaddr: $hwaddr){
      id
      statDate
      signal
 }`;
