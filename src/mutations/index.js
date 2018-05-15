import gql from 'graphql-tag';
export const ACCEPT_TOPIC = gql`
  mutation addTopic($repositoryId: ID!, $name: String!) {
    acceptTopicSuggestion(input: {repositoryId: $repositoryId, name: $name}) {
      clientMutationId
      topic {
        id
        name
      }
    }
  }
`;
