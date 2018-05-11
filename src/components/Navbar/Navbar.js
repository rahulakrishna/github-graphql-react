import React from 'react';
import styled from 'styled-components';

import { robin, white } from '../../utils/colors';
import gql from "graphql-tag";
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';



const Bar = styled.div`
    width: 98%;
    margin:0px;
    padding:10px;
    background: ${robin};
    display: flex;
    flex-direction: row;
`;

const UserName = styled.span`
    color: ${white};
    text-align:right;
    flex-basis:90%;
`;

//TODO: Load the username whenever the user logs in.

class NavBar extends React.Component{
    render() {
        const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN');
        const { userDetails } = this.props;
        if(userDetails.loading) {
            return <div>Loading...</div>;
        }
        else if(userDetails.error) {
            console.error(userDetails.error);
            return (
                <Bar>
                    GitHub
                    <UserName>
                            <Link to='/login'>Log In</Link>
                    </UserName>
                </Bar>
            );
        }
        return(
                <Bar>
                    GitHub
                    <UserName>
                        {userDetails.viewer.login?
                            `Logged in as ${userDetails.viewer.login}`
                        :
                            'Sign In'
                        }
                    </UserName>
                </Bar>
        );
    }
}

export const GET_USER_DETAILS = gql`
    query getUserDetails {
        viewer {
            id
            login
        }
    }
`;

export default graphql(GET_USER_DETAILS,{name:'userDetails'})(NavBar);