import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Post = (props) => {
    const { id, category, content } = props.post;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("../images/google-img.png")} />
            <Card.Body>
                <Card.Title>{category}</Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
                <Button variant="primary">Like it</Button>
            </Card.Body>
        </Card>

    )
}

export default Post;