import React from 'react';
import "./feed.css";
import MessageSender from './MessageSender';
import StroyReel from './StroyReel';
import Post from "./Post"
import db from './firebase';


function Feed() {
    const [posts,setPosts]=React.useState([]);


    React.useEffect(()=>{
            db.collection("handbook post").orderBy("timestamp","desc").onSnapshot((snapshot)=>
            setPosts(snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            }))))
            },[]);
console.log(posts)
    return (
        <div className="feed">
            {/* story reel */}
            <StroyReel/>

            {/* message sender */}
            <MessageSender/>

            {/* posts */}
           {posts.map((post)=>(
                   <Post 
                   key={post.id}
                   profilePic={post.data.profilePic}
                   message={post.data.message}
                   timestamp={post.data.timestamp}
                   username={post.data.username}
                   image={post.data.image}
                   />
           ))}
        </div>
    )
}

export default Feed
