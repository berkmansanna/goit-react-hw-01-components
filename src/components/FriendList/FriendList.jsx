import {PropTypes} from 'prop-types'

export const FriendList = ({ friends }) => {
    return (
    <ul className={['friend-list']}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (<li className key={id}>
          <span className style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
          <img className src={avatar} alt="User avatar" width="48" />
          <p className >{name}</p>
        </li>);
      }

      )}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  })),
};