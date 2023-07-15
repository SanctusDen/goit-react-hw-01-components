import styled from '@emotion/styled';

export const FriendCard = styled.li`
    width: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 12px;
    margin-top: 18px;
    margin-left:auto;
    margin-right:auto;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 20px;
    box-shadow: -2px 3px 5px 1px rgba(0,0,0,0.75);

    &:hover, &:focus {
        transform: scale(1.03);
}
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`

export const FriendAvatar = styled.img`
border-radius: 1px;
overflow: hidden;
`;

export const FriendName = styled.p`

`