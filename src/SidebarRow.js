import { Avatar, Icon } from '@material-ui/core'
import React from 'react';
import "./sidebarRow.css"

export default function SidebarRow({src,Icon,name}) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <h4>{name}</h4>
        </div>
    )
}
