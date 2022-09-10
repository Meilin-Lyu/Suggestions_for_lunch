import React from "react";
import Post from "./Post";
import "../css/PostList.css"

const PostList = (props) => {
    const { posts, likePost } = props;
    return (
        <div className="PostList">
            {posts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                    likePost={likePost}
                />
            ))}
        </div>
    )
}

export default PostList;