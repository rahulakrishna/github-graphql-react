import React from 'react';
import { GET_REPO_DETAILS } from '../queries';
import { ACCEPT_TOPIC }  from '../mutations';

import { Query, Mutation } from 'react-apollo';
import { CenteredContainer, Title, SubTitle, BreadCrumbsContainer, BreadCrumb, Input } from './styled'

class Repository extends React.Component {
  state = {
    label: ''
  };
  render() {
    return(
      <div>
        <Query query = {GET_REPO_DETAILS} variables = {{owner:this.props.match.params.user, name: this.props.match.params.repo}}>
          {({loading, error, data}) => {
            if(loading) return <div>Loading...</div>;
            if(error) {
              console.log(error);
              return <div>{JSON.stringify(error)}Error!</div>;
            }
            console.log(data);
            return(
              <CenteredContainer>
                <Title>
                  {data.repository.name}
                </Title>
                <SubTitle>
                  {data.repository.description}
                </SubTitle>
                <br/><br/>
                Topics
                <BreadCrumbsContainer>
                  {data.repository.repositoryTopics.nodes.map((node) => (
                    <BreadCrumb key={node.topic.id}>{node.topic.name}</BreadCrumb>
                  ))}
                </BreadCrumbsContainer>
                <br/>
                <Mutation
                  mutation = {ACCEPT_TOPIC}
                  update = {(cache, { data: addTopic }) => {
                    let repository = cache.readQuery({ query:GET_REPO_DETAILS, variables:{owner:this.props.match.params.user, name: this.props.match.params.repo} });
                    console.log(repository);
                    console.log(addTopic);
                    console.log(addTopic.acceptTopicSuggestion.topic);
                    const topics = repository.repository.repositoryTopics.nodes;
                    console.log(topics);
                    //repository.repository.repositoryTopics.nodes = repository.repository.repositoryTopics.nodes.concat(addTopic.acceptTopicSuggestion.topic);
                    console.log(repository);
                    const dataToWrite = repository.repository;
                    repository.repository.repositoryTopics.nodes = repository.repository.repositoryTopics.nodes.concat({topic:addTopic.acceptTopicSuggestion.topic,"__typename":"RepositoryTopic"});
                    console.log(repository);
                    cache.writeQuery({ query: GET_REPO_DETAILS, data: repository });
                    this.setState({
                      label: ''
                    });
                  }}
                >
                  {(addTopic, { topicMutationData }) => {
                    console.log(topicMutationData);
                    return(
                      <div>
                        <form onSubmit={(e)=>{
                          e.preventDefault();
                          addTopic({ variables: { repositoryId: data.repository.id, name: this.state.label } });
                        }}>
                          <Input placeholder="Add a New Label" onChange={(e)=>{this.setState({ label: e.target.value })}} value = {this.state.label}/>
                        </form>
                      </div>
                    );
                  }}
                </Mutation>
              </CenteredContainer>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Repository;
