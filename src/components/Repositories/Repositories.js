import React from 'react';
import { Title, CenteredContainer } from '../styled/index';

import RepositoryList from './RepositoryList';

class Repositories extends React.Component {
    state = {
        firstRepo: 10,
        lastRepo: null
    };
    showNextPage = (id) => {
        this.setState({
            after: id,
            before: null,
            firstRepo:10,
            lastRepo:null
        });
    };
    showPrevPage = (id) => {
        console.log(id);
        this.setState({
            after: null,
            before: id,
            lastRepo:10,
            firstRepo:null
        })
    };
    render() {
        return(
            <CenteredContainer>
                <Title>List of Repositories</Title>
                <br/>
                <RepositoryList first={this.state.firstRepo} last={this.state.lastRepo} after={this.state.after} before={this.state.before} showNextPage={this.showNextPage} showPrevPage={this.showPrevPage}/>
            </CenteredContainer>
        );
    }
}

export default Repositories;