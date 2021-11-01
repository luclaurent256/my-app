import React from 'react';
import PropTypes from 'prop-types';


const UserProfile = ({ user,toto }) => {
  return (
    <div >
      <div >
        <h2 >{toto} {user.firstname} {user.lastname} agé de {user.age} ans et vivant à {user.location.city}:{user.location.country}</h2>
        <ol> aime:
          <li>{user.interests[0]}</li>
          <li>{user.interests[1]}</li>
          <li>{user.interests[2]}</li>
        </ol>
      </div>
    </div>
  );
};

UserProfile.defaultProps = {
  toto:'essai', //ok
  user : {//ne marche pas
    lastname: 'Fred',
    location: {city : 'Jackson', country: 'USA'},
  }, 
}



UserProfile.propTypes = {
  user: PropTypes.object,
  user: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string, 
    age: PropTypes.number.isRequired,
    location: PropTypes.array,
    location: PropTypes.shape({city: PropTypes.string, country: PropTypes.string}),
    interests : PropTypes.arrayOf(PropTypes.string),
  })
}

export default UserProfile;

