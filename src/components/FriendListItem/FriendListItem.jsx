import PropTypes from 'prop-types';
import { FriendAvatar, FriendCard, FriendName, FriendStatus } from './FriendListItem.styled';

// export const FriendListItem = ({avatar, name, isOnline}) => {
//     return (
//         <FriendCard>
//             <FriendStatus networkStatus={isOnline}></FriendStatus>
//             <FriendAvatar src={avatar} alt={name} width="48" />
//             <FriendName>{name}</FriendName>
//         </FriendCard>
//     );
// };

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendCard>
            <FriendStatus statusType={isOnline}></FriendStatus>
            <FriendAvatar src={avatar} alt={name} width="48" />
            <FriendName>{name}</FriendName>
        </FriendCard>)
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}