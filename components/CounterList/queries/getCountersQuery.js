import { gql } from '@apollo/client';

export default gql`
  query GetCounters {
    allCounters {
      id
      value
    }
  }
`;
