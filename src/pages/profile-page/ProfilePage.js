import React from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
    return (
        <div className="profile">
            <div className="sidebar">
                <div className="sidebar__content">
                    <p>Profile</p>
                    <hr />
                    <p>Posts</p>
                    <hr />
                    <p>Gallery</p>
                    <hr />
                    <p>ToDo</p>
                </div>
            </div>
            <div className="user__details__section">
                <div className="user__header">
                    <h4>Profile</h4>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
