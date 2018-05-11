import gql from "graphql-tag";

export const GET_USER_DETAILS = gql`
    query getUserDetails {
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
        }
    }
`;