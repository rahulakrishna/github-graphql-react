import React from 'react';
import styled from 'styled-components';

import { GET_USER_DETAILS } from '../queries';
import { withApollo } from 'react-apollo';

import { fuzzypeacock, white } from '../utils/colors';

import { Redirect } from 'react-router-dom';

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginCard = styled.div`
    width:50%;
    margin:200px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding:20px;
    text-align: center;
    
`;

const Input = styled.input`
    padding:10px;
    border: 0px;
    width: 90%;
`;

const Button = styled.button`
    background:${fuzzypeacock};
    color: ${white};
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 90%;
    border: 0px;
    margin-top:10px;
`;

//TODO: On login, get the user details and make sure that Navbar fetches name from that.

class Login extends React.Component {
    state = {
        token:'',
        redirectToUser:false
    };
    componentDidMount() {
        if(localStorage.getItem('AUTH_TOKEN')) {
            this.setState({
                redirectToUser:true
            })
        }
    }
    submitToken = () => {
        localStorage.setItem('AUTH_TOKEN',this.state.token);
        this.updateStore();
    };
    updateStore = async () => {
        const data = await this.props.client.query({
            query:GET_USER_DETAILS
        });
        console.log(data);
        console.log(this.props.client);
        console.log(this.props.client.queryManager.queryStore.store);
        this.props.client.resetStore()
        this.setState({
            redirectToUser:true
        })
    };
    render() {
        return(
            <LoginContainer>
                <LoginCard>
                    <Input
                        placeholder='Paste your Personal Access Token here...'
                        onChange={(e) => this.setState({token:e.target.value})}
                    />
                    <Button
                        onClick={this.submitToken}
                    >Submit</Button>
                </LoginCard>
                <br/>
                {this.state.redirectToUser&&<Redirect to='/user'/>}
            </LoginContainer>
        );
    };
}

export default withApollo(Login);