import React from 'react';
import { Title, CenteredContainer } from './styled';
import { GET_USER_DETAILS } from '../queries';
import { graphql } from 'react-apollo';

class Repositories extends React.Component {
    render() {
        const { userDetails } = this.props;
        if(userDetails.loading) {
            return <div>Loading...</div>;
        }
        else if(userDetails.error) {
            return <div>Error!</div>;
        }
        return(
            <CenteredContainer>
                <Title>List of Repositories</Title>
            </CenteredContainer>
        );
    }
}

export default graphql(GET_USER_DETAILS,{name: 'userDetails'})(Repositories);