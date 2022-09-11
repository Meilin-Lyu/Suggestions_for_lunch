import React from 'react';
import '../css/MainPage.css';
import Category from './Category';
import PostList from './PostList';
import axios from 'axios';
class MainPage extends React.Component {
    state = {
        posts: [],
        category: [],
    }

    categoryChange = (id) => {
        this.setState({ category: id });
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/suggestion/')
            .then((res) => {
                this.setState({ posts: res.data });
            })
    }

    likePost = (id) => {
        const { posts } = this.state;
        const post = posts.find(post => post.id === id);
        if (post.isLiked) {
            post.like -= 1;
            post.isLiked = false;
        } else {
            post.like += 1;
            post.isLiked = true;
        }
        this.setState({ posts });
    };

    render() {
        return (
            <div className="MainPage" >
                <h1 className="title">Suggestions for Lunch</h1>
                <Category categoryChange={this.categoryChange} />
                <PostList posts={this.state.posts} category={this.state.category} likePost={this.likePost} />
            </div>
        )
    }

}

export default MainPage;