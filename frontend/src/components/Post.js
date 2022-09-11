import React from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import "../css/Post.css";


const Post = (props) => {
    //const { id, category, content, like } = props.post;
    const { id, title, image, description, location, posttime, like, western, asian, indian } = props.post;

    return (
        <Card border="primary" className="postCard" style={{ width: '20rem' }}>
            {/* <Card>.Img className="postImage" variant="top" src={require("../images/google-img.png")} /> */}
             <Card.Img className="postImage" variant="top" src={image} />
  
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    {location}
                </Card.Text>
                <Card.Text>
                    Posted on: {Date(posttime)}
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