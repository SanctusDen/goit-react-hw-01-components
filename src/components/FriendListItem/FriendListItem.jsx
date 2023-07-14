import PropTypes from 'prop-types';
import { FriendAvatar, FriendCard, FriendName, Status } from './FriendListItem.styled';

export const FriendList = ({avatar, name, isOnline}) => {
    return (
        <FriendCard>
            <Status networkStatus={isOnline}></Status>
            <FriendAvatar src={avatar} alt={name} width="48" />
            <FriendName>{name}</FriendName>
        </FriendCard>
    );
};

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}