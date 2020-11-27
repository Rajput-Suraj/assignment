import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import "./Card.css";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        // backgroundColor: "wheat",
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} id="style-1">
            <CardActionArea>
                <h3>Select an account</h3>
            </CardActionArea>
            <div className="users__details">
                <div className="users">
                    <Avatar className="avatarImg" />
                    <p className="user__name">Tony Stark</p>
                </div>
                <hr />
                <div className="users">
                    <Avatar className="avatarImg" />
                    <p className="user__name">Tony Stark</p>
                </div>
                <hr />
                <div className="users">
                    <Avatar className="avatarImg" />
                    <p className="user__name">Tony Stark</p>
                </div>
                <hr />
            </div>
        </Card>
    );
}
