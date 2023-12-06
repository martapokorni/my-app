import React, { useState } from "react";
import PropTypes from "prop-types";
import "./UserForm.css";

function UserForm({ onUserSubmit }) {
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    onUserSubmit(username);
  };

  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="e.g. facebook"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
      />
      <button onClick={handleSubmit} type="submit">
        GO!
      </button>
    </div>
  );
}

UserForm.propTypes = {
  onUserSubmit: PropTypes.func.isRequired,
};

export default UserForm;
