import React from 'react';
import styled from 'styled-components';

import { robin, white } from '../../utils/colors';

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

//TODO: Display the real username here somehow.

class NavBar extends React.Component{
    render() {
        return(
                <Bar>
                    GitHub
                    <UserName>
                        Rahul Krishna
                    </UserName>
                </Bar>
        );
    }
}

export default NavBar;