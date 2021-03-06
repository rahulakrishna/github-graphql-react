import React from 'react';
import {graphql} from "react-apollo";
import { GET_USER_DETAILS } from '../../queries';
import { ListContainer, ListItem, SubTitle, ButtonsContainer, Button } from '../styled';
import { Link } from 'react-router-dom';


class RepositoryList extends React.Component{
    render() {
        const { repositories } = this.props;
        if(repositories.loading) {
            return <div>Loading..</div>;
        }
        else if(repositories.error) {
            return <div>{console.log(repositories.error)}{JSON.stringify(repositories.error)}</div>
        }
        return(
            <div>
                <ButtonsContainer>
                    <Button disabled={!repositories.viewer.repositories.pageInfo.hasPreviousPage} onClick={()=>{this.props.showPrevPage(repositories.viewer.repositories.pageInfo.startCursor)}}>Prev</Button>
                    <Button disabled={!repositories.viewer.repositories.pageInfo.hasNextPage}onClick={()=>{this.props.showNextPage(repositories.viewer.repositories.pageInfo.endCursor)}}>Next</Button>
                </ButtonsContainer>
                <ListContainer>
                    {repositories.viewer.repositories.edges.map((repo) => (
                      <ListItem key={repo.node.id} to={`/repository/${repo.node.owner.login}/${repo.node.name}`}>
                        {repo.node.name}
                        {console.log(repo.node)}
                        <SubTitle>{repo.node.primaryLanguage?repo.node.primaryLanguage.name:'null'}</SubTitle>
                      </ListItem>
                    ))}
                </ListContainer>
            </div>
        )
    }
}

export default graphql(GET_USER_DETAILS,{
    name: 'repositories'
})(RepositoryList);
