import gql from "graphql-tag";

export const GET_USER_DETAILS = gql`
    query getUserDetails($first: Int, $last: Int, $after: String, $before: String) {
        viewer {
            id
            login
            name
            avatarUrl
            bio
            websiteUrl
            company
            email
            followers(first: 0) {
                totalCount
            }
            following(first: 0) {
                totalCount
            }
            isViewer
            location
            repositories(first: $first, after: $after, before: $before, last: $last) {
              pageInfo {
                endCursor
                startCursor
                hasNextPage
                hasPreviousPage
              }
              edges{
                cursor
                 node {
                  id
                  name
                  isPrivate
                  primaryLanguage {
                    id
                    name
                  }
                }
              }
            }
        }
    }
`;