import React from "react";

export default function Home() {
    // fetch and show suggestions from django
    let posts = [];
    return (
        <div className="home">
            <div className="container">
                {posts.map((post) => {
                    return <div></div>
                })}
            </div>
        </div>
    );
}