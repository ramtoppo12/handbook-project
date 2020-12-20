import { Avatar } from '@material-ui/core';
import React from 'react';
import "./post.css";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



function Post({profilePic,image,username,timestamp,message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar className="post__avatar" src={profilePic}/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt=""/>
            </div>
            <div className="post__options">
            <div className="post__option">
                <ThumbUpAltIcon/>
                <p>Like</p>
            </div>
            <div className="post__option">
                <ChatBubbleIcon/>
                <p>Comment</p>
            </div>
            <div className="post__option">
                <NearMeIcon/>
                <p>Like</p>
            </div>
            <div className="post__option">
                <ThumbUpAltIcon/>
                <p>Share</p>
            </div>
            <div className="post__option">
                <AccountCircleIcon/>
                <ExpandMoreIcon/>
            </div>
            </div>
        </div>
    )
}

export default Post
