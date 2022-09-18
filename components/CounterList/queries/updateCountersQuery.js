import { gql } from '@apollo/client';

export default gql`
  mutation UpdateCounter($id: ID!) {
	  updateCounter(id: $id) {
      id
    }
  } 
`;
