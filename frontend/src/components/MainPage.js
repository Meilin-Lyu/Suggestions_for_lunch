import React from 'react';
import '../css/MainPage.css';
import Category from './Category';
import PostList from './PostList';
class MainPage extends React.Component {
    state = {
        posts:
            [
                { id: 1, category: "Chinese food", content: "foodA", like: 0, isLiked: false },
                { id: 2, category: "Japanese food", content: "foodB", like: 0, isLiked: false },
                { id: 3, category: "Korean food", content: "foodC", like: 0, isLiked: false },
                { id: 4, category: "Chinese food", content: "foodD", like: 0, isLiked: false },
                { id: 5, category: "Japanese food", content: "foodE", like: 0, isLiked: false },
                { id: 6, category: "Korean food", content: "foodF", like: 0, isLiked: false },
            ],
        category: [new Set()],
    }
    // tmp = new Promise((resolve, reject) => {
    //     axios.get('http://localhost:8080/api/suggestions')
    //         .then((res) => {
    //             console.log(res)
    //             resolve(res);
    //         })
    // });
    
    likePost = (id) => {
        const { posts } = this.state;
        const post = posts.find(post => post.id === id);
        if(post.isLiked) {
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
            </div>
        )
    }

}

export default MainPage;