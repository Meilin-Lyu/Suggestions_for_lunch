import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";
import { API_URL } from "../constants";


class NewSuggestionForm extends React.Component {
  state = {
    title: "",
    description: "",
    location: ""
  };

  componentDidMount() {
    if (this.props.suggestion) {
      const { title, description, location } = this.props.suggestion;
      this.setState({ title, description, location });
    }
  }å

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
 
  createSuggestion = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };
  

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.createSuggestion}>
        <FormGroup>
          <Label for="title">Title:</Label>
          <Input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.title)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="image">Image:</Label>
          <Input
            type="file"
            name="image"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.image)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            type="text"
            name="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
          />
        </FormGroup>

       
        <FormGroup>
          <Label for="location">Location:</Label>
          <Input
            type="text"
            name="location"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.location)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="time">Time:</Label>
          <Input
            type="date"
            name="time"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.time)}
          />
        </FormGroup>
        
        
        <FormGroup>
          <Label for="western">Western:</Label>
          <Input
            type="checkbox"
            name="western"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.western)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="asian">Asian:</Label>
          <Input
            type="checkbox"
            name="asian"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.asian)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="indian">Indian:</Label>
          <Input
            type="checkbox"
            name="indian"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.indian)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewSuggestionForm;
