import React from 'react';
import { graphql } from 'react-apollo';
import { GET_USER_DETAILS } from '../queries';
import styled from 'styled-components';
import { Redirect, Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top:100px;
`;

const Image = styled.img`
    width: 200px;
    border-radius: 100%;
`;

const Title = styled.h1`

`;

const Counts = styled.div`
    display: flex;
    flex-direction: row;
`;

const Count = styled.div`
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin: 10px;
    text-align: center;
`;

const Number  = styled.h3`

`;

class User extends React.Component {
    state = {
        redirectToLogin: false
    };
    componentDidMount() {
        console.log(localStorage.getItem('AUTH_TOKEN'));
        if(localStorage.getItem('AUTH_TOKEN') === null) {
            this.setState({
                redirectToLogin:true
            })
        }
    }
    render() {
        const { userDetails } = this.props;
        if( userDetails.loading ) {
            return <div>Loading...</div>;
        }
        else if( userDetails.error ) {
            return <div>Error! {this.state.redirectToLogin&&<Redirect to='/login'/>} </div>;
        }
        const user = userDetails.viewer;
        console.log(user);
        return(
            <Container>
                <Image src={user.avatarUrl}/>
                <Title>{user.name}</Title>
                <div>{user.bio}</div>
                <Counts>
                    <Count><Number>{user.followers.totalCount}</Number>Followers</Count>
                    <Count><Number>{user.following.totalCount}</Number>Following</Count>
                </Counts>
                <br/>
                <div>{user.email}</div>
                <div>{user.websiteUrl}</div>
                <br/>
                <Link to='/repositories/1'>Repositories</Link>
            </Container>
        );
    }
}


export default graphql(GET_USER_DETAILS,{ name:'userDetails' })(User);
