import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(data => (
        <li className={css.item} key={data.id}>
          {data.isOnline ? (
            <span className={css.status_True}></span>
          ) : (
            <span className={css.status_False}></span>
          )}
          <img
            className="avatar"
            src={data.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{data.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
