import React from "react";
import "./ProfilePage.css";
import { Avatar } from "@material-ui/core";

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
                    <h3 className="user__header__left">Profile</h3>
                    <div className="user__header__right">
                        <Avatar />
                        <p>Username</p>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default ProfilePage;
