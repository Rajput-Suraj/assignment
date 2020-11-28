import React, { useState, useEffect, Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import "./Card.css";
import { Avatar } from "@material-ui/core";
import axios from "axios";

const MyCard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("https://panorbit.in/api/users.json")
            .then((response) => {
                setUsers(response.data.users);
            })
            .catch((err) => console.log(err));
    });

    return (
        <Card>
            <CardActionArea>
                <h3 className="title">Select an account</h3>
            </CardActionArea>
            <div className="users__details">
                {users.map(({ id, name, profilepicture }) => {
                    return (
                        <Fragment key={id}>
                            <div className="users">
                                <Avatar
                                    className="avatarImg"
                                    src={profilepicture}
                                />
                                <p className="user__name">{name}</p>
                            </div>
                            <hr />
                        </Fragment>
                    );
                })}
            </div>
        </Card>
    );
};

export default MyCard;
