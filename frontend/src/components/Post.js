import React from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import "../css/Post.css";
import axios from "axios";

const category = ['asian', 'western', 'indian'];
const isShow = (selectedCategory, postCategory) => {
    for (let i in category) {
        if (selectedCategory.includes(category[i]) && postCategory[i]) {
            return true;
        }
    }
    return false;
}
const Post = (props) => {
    const { id, title, description, like, image } = props.post;
    // can add tag
    const categoryMap = { asian: "Asian Food", western: "Western Food", indian: "Indian Food" };
    const postCategory = [props.post.asian, props.post.western, props.post.indian];
    const [imageurl, setImageurl] = React.useState("");
    React.useEffect(() => {
        axios({
            method: 'get',
            url: image,
            responseType: 'blob'
        }).then((result) => {
            setImageurl(URL.createObjectURL(result.data));
        })
    }, [image]);
    return (
        <div className="post">
            {isShow(props.category, postCategory) ? (
                <Card border="success" className="postCard" style={{ width: '20rem' }}>
                    <Card.Img className="postImage" variant="top" src={imageurl} />
                    <Card.Body style={{ height: "12rem"}}>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button 
                            style={{ position: "absolute", bottom: "1rem" }}
                            variant="outline-success"
                            onClick={() => props.likePost(id)}>
                            Like it <Badge bg="secondary">{like}</Badge>
                        </Button>
                    </Card.Body>
                </Card>
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default Post;