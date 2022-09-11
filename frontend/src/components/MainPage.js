import React from 'react';
import '../css/MainPage.css';
import Category from './Category';
import PostList from './PostList';
import CreatePost from './NewSuggestionForm';
import axios from 'axios';
import NewSuggestionModal from './NewSuggestionModal';
import RandomModal from './RandomModal';


const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/suggestion/'
})

class MainPage extends React.Component {
    state = {
        posts: [],
        category: [],
    }

    constructor(){
        super();
        api.get('/').then(res => {
            console.log(res.data)
            this.setState({posts: res.data})
        })
    }

    categoryChange = (id) => {
        this.setState({ category: id });
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
                <NewSuggestionModal create={true} resetState={this.resetState}  />
                <RandomModal create={true} resetState={this.resetState}  />
            </div>
            
        )
    }

}

export default MainPage;