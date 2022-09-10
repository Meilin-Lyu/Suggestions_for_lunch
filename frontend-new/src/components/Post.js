import React from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import "../css/Post.css";


const Post = (props) => {
    const { id, category, content, like } = props.post;

    return (
        <Card border="primary" className="postCard" style={{ width: '20rem' }}>
            {/* <Card>.Img className="postImage" variant="top" src={require("../images/google-img.png")} /> */}
            <Card.Img className="postImage" variant="top" src={require("../images/google-img.png")} />
            <Card.Body>
                <Card.Title>{category}</Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
                <Button
                    variant="outline-primary"
                    onClick={() => props.likePost(id)}>
                    Like it <Badge bg="secondary">{like}</Badge>
                </Button>
            </Card.Body>
        </Card>

    )
}

export default Post;