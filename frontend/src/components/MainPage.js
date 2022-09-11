import React from 'react';
import '../css/MainPage.css';
import Category from './Category';
import PostList from './PostList';
import CreatePost from './NewSuggestionForm';
import axios from 'axios';
import NewSuggestionModal from './NewSuggestionModal';


const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/suggestion/'
})

class MainPage extends React.Component {
    state = {
        posts: []
    }

    constructor(){
        super();
        api.get('/').then(res => {
            console.log(res.data)
            this.setState({posts: res.data})
        })
    }

    /*
    state = {
        posts:
            [
                { id: 1, category: "Chinese food", content: "foodA", like: 0, isLiked: false },
                
            ],
        category: [new Set()]
    }
    */

    template = new Promise((resolve, reject) => {
        axios.get('http://127.0.0.1:8000/api/suggestion/')
            .then((res) => {
                console.log(res);
                resolve(res);
            })
            .catch((err) => {
                console.log(err)
                reject(err);
            })
    });

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
    // onCategoryChange = (category) => {
    //     if()
    // }
    
    render() {
        return (
            <div className="MainPage" >
                <h1 className="title">Suggestions for Lunch</h1>
                <Category />
                <PostList posts={this.state.posts} likePost={this.likePost} />
                <NewSuggestionModal create={true} resetState={this.resetState}  />
            </div>
            
        )
    }

}

export default MainPage;