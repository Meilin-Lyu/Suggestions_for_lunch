import React from 'react';
import '../css/MainPage.css';
import Category from './Category';
import PostList from './PostList';
class MainPage extends React.Component {
    state = {
        posts:
            [
                { id: 1, category: "Chinese food", content: "foodA" },
                { id: 2, category: "Japanese food", content: "foodB" },
                { id: 3, category: "Korean food", content: "foodC" },
            ],
    }

    render() {
        return (
            <div className="app" >
                <Category />
                <PostList posts={this.state.posts} />
            </div>
        )
    }

}

export default MainPage;