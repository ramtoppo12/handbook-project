import React from 'react';
import "./header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';


export default function Header() {
    const [{user},dispatch]= useStateValue();
    const firstName = user.displayName.split(' ').slice(0, -2).join(' ');
    console.log(firstName)
    return (
        <div className="header"> 
            <div className="header__left">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdmcnallyconsulting.com%2Fwp-content%2Fuploads%2F2017%2F11%2FEmployee-Handbook.png&f=1&nofb=1" alt="HandBook" />

            <div className="header__input">
                <SearchIcon/>
                <input placeholder="Search Handbook" type="text" />
            </div>
            </div>
            <div className="header__main">
        <div className="header__option header__option--active">
            <HomeIcon fontSize="large"/>
        </div>
        <div className="header__option">
            <FlagIcon fontSize="large"/>
        </div>
        <div className="header__option">
            <SubscriptionsOutlinedIcon fontSize="large"/>
        </div>
        <div className="header__option">
            <StorefrontOutlinedIcon fontSize="large"/>
        </div>
        <div className="header__option">
            <SupervisedUserCircleIcon fontSize="large"/>
        </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{firstName}</h4>
                
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
<IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
                </div>
            </div>
        </div>
    )
}
