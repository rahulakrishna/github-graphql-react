import React from 'react';
import styled from 'styled-components';

import { robin, white } from '../../utils/colors';
import { graphql, withApollo, Query, ApolloConsumer } from 'react-apollo';
import { Link } from 'react-router-dom';

import { GET_USER_DETAILS } from '../../queries';

const Bar = styled.div`
    width: 98%;
    margin: 0px;
    padding: 10px;
    background: ${robin};
    display: flex;
    flex-direction: row;
`;

const UserName = styled.span`
    color: ${white};
    text-align:right;
    flex-basis:90%;
`;

//TODO: Load the username only when the user logs in.

class NavBar extends React.Component{
    logout = () => {
        localStorage.clear();
        this.props.client.resetStore()
    }
    render() {
        return (
          <div>
            <Query query = {GET_USER_DETAILS} >
              {({loading, error, data}) => {
                if(loading) {
                  return <div>Loading...</div>;
                }
                if(error) {
                  return (
                    <Bar>
                        GitHub
                        <UserName>
                          <Link to='/login'>Sign In</Link>
                        </UserName>
                    </Bar>
                  );
                }
                console.log(this.props);
                return (
                  <ApolloConsumer>
                    {(client) => (
                      <Bar>
                        {console.log(client)}
                          GitHub
                          <UserName>
                              {data.viewer.login?
                                  <div>Logged in as <Link to='/user'>{data.viewer.login}</Link> <button onClick={()=>{this.logout()}}>Log Out</button></div>
                              :
                                  'Sign In'
                              }
                          </UserName>
                      </Bar>
                    )}
                  </ApolloConsumer>
                )
              }}
            </Query>
          </div>
        );
    }
}



export default NavBar;
