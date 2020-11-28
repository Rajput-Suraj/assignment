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
                <div className="user__body">
                    <div className="user__body__left">
                        <Avatar className="user__avatar" />
                        <p className="user__text">Username</p>
                        <div className="user__info">
                            <p>
                                <span className="user__info__title">
                                    Username :
                                </span>
                                John
                            </p>
                            <p>
                                <span className="user__info__title">
                                    e-mail :
                                </span>
                                john@gmail.com
                            </p>
                            <p>
                                <span className="user__info__title">
                                    Phone :
                                </span>
                                1234567890
                            </p>
                            <p>
                                <span className="user__info__title">
                                    Website :
                                </span>
                                john.com
                            </p>
                        </div>
                    </div>
                    <div className="user__body__right">
                        <p>Address</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
