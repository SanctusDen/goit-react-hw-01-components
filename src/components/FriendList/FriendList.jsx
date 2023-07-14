import PropTypes from 'prop-types';
import { ListFriends, FriendListItem } from '../FriendList/FriendList.styled';

export const FriendList = ({friends}) => {
    return (
        <ListFriends>
            {friends.map(({ id, avatar, name, isOnline }) =>
                (<FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />))}
        </ListFriends>
    );
};

// FriendList.propTypes = {
//     id:PropTypes.number.isRequired,
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
// };

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ),
};

export default FriendList;