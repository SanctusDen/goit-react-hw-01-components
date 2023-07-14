import styled from '@emotion/styled';
import { theme } from 'constants';

export const FriendCard = styled.li`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
column-gap: 12px;
margin-top: 8px;
padding-top: 4px;
padding-bottom: 4px;
padding-left: 20px;
box-shadow: -2px 3px 5px 1px rgba(0,0,0,0.75);
transition: transform ${theme.animation.duration} ${theme.animation.timingFunction};
&:hover, &:focus {
    transform: scale(1.03);
}
`;
const setColor = props => props.networkStatus ? 'green' : 'red';

export const Status = styled.span`
background-color: ${setColor};
display: block;
width: 12px;
height: 12px;
border-radius: 50%;
`;

export const FriendAvatar = styled.img`
border-radius: 1px;
overflow: hidden;
`;

export const FriendName = styled.p`

`