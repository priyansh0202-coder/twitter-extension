import React from "react";
import "./FollowButton.css";

const FollowAllButton = ({ onClick }) => {
  return (
    <button className="follow-all-button" onClick={onClick}>
      Follow All
    </button>
  );
};

export default FollowAllButton;
