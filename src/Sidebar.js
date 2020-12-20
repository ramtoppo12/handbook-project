import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { useStateValue } from './StateProvider';

export default function Sidebar() {
    const [{user},dispatch]= useStateValue();
    const firstName = user.displayName.split(' ').slice(0, -2).join(' ');
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} name={firstName}/>
            <SidebarRow name="COVID-19 Information Center" Icon={LocalHospitalIcon}/>
            <SidebarRow Icon={EmojiFlagsIcon} name="Pages"/>
            <SidebarRow Icon={PeopleIcon} name="Friends"/>
            <SidebarRow Icon={ChatIcon} name="Messages"/>
            <SidebarRow Icon={StorefrontIcon} name="MarketPlace"/>
            <SidebarRow Icon={VideoLibraryIcon} name="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} name="MarketPlace"/>

        </div>
    )
}
