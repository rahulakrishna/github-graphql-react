import styled from 'styled-components';
import { wearyblack, somethingdifferent } from '../../utils/colors';

export const Title = styled.h1`
    color: ${wearyblack}
`;

export const CenteredContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;

export const ListContainer  = styled.div`
  display: flex;
  flex-direction: column;    
`;

export const ListItem = styled.a`
  font-size: 36px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin: 10px;
  padding: 10px;
  color: ${somethingdifferent}
`;

export const SubTitle = styled.span`
  font-size: 12px;  
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export const Button = styled.button`
  flex-basis: 50%;
  padding:10px;
  font-size:16px;
`;