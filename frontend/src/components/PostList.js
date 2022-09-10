import React from "react";
import Post from "./Post";
import "../css/PostList.css"

const PostList = (props) => {
    const { posts } = props;
    return (
        // <></>
        // {converters.map((converter) => (
        //     <CoordinateBox
        //         key={converter.id}
        //         data={converter}
        //         removeCoordinateBox={removeCoordinateBox}
        //     />
        // ))}
        <div className="PostList">
            {posts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                />
            ))}
        </div>
        // <Post post={props./>
        // <></>
    )
}

export default PostList;