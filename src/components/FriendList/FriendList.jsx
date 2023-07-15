import PropTypes from 'prop-types';
import { ListFriends } from './FriendList.styled';
import FriendListItem from '../FriendListItem/FriendListItem'

export const FriendList = ({friends}) => {
    return (
        <ListFriends>
            {friends.map(({ id, avatar, name, isOnline }) =>
                (<FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />))}
        </ListFriends>
    );
};

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