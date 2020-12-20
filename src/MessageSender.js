import { Avatar } from '@material-ui/core';
import React from 'react';
import "./messageSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from "./firebase"
import firebase from "firebase"

export default function MessageSender() {

    const [input,setInput]= React.useState('');
    const [imageUrl,setImageUrl]= React.useState('');
    const [{user},dispatch]= useStateValue();

    const firstName = user.displayName.split(' ').slice(0, -2).join(' ');
    const handleSubmit = e =>{
            e.preventDefault();
        db.collection('handbook post').add({
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image:imageUrl
        })
            
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar style={{cursor:"pointer"}} src={user.photoURL}/>
                <form>
                    <input value={input} onChange={(e)=>setInput(e.target.value)} className="messageSender__input" placeholder={`What's on your mind ? ${firstName}`}/>
                    <input value={imageUrl}
                    onChange={(e)=>setImageUrl(e.target.value)} placeholder="image URL (Optional)"/>
                    <button type="submit" onClick={handleSubmit}>
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color:"red"}}/> 
                    <h4>Live Video</h4>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:"green"}}/> 
                    <h4>Photo/Video</h4>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color:"orange"}}/> 
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    )
}
