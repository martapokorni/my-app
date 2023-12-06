import React from "react";
import PropTypes from "prop-types";
import "./UserDetalis.css";

function UserDetails({ user, repos, onReset }) {
  return (
    <div className="user-details">
      <img src={user.avatar_url} alt={user.name} />
      <h2>{user.name}</h2>
      <p>Location: {user.location || "Unknown location"}</p>
      <p>Bio: {user.bio}</p>
      <h3>Repositories:</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={onReset} className="reset-button">
        Reset
      </button>
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default UserDetails;
