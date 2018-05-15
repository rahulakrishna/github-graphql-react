import styled from 'styled-components';
import { wearyblack, somethingdifferent, robin, fuzzypeacock, white } from '../../utils/colors';

import { Link } from 'react-router-dom';

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

export const ListItem = styled(Link)`
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

export const BreadCrumbsContainer = styled.div`
  display: flex;
`;

const colors = [wearyblack, somethingdifferent, robin, fuzzypeacock];

export const BreadCrumb = styled.span`
  padding:10px;
  margin: 2px;
  background: ${colors[Math.floor(Math.random() * colors.length)]};
  color: ${white};
  flex-shrink: 20%;
`;

export const Input = styled.input`

`;
