import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";
import { API_URL } from "../constants";


class NewSuggestionForm extends React.Component {
  state = {
    title: "",
    description: "",
    location: "",
    western:false,
    asian:false,
    indian:false,
    image: null,
  };

  componentDidMount() {
    if (this.props.suggestion) {
      const { title,description, location, image,western,asian,indian } = this.props.suggestion;
      this.setState({ title,description, location, image,western,asian,indian });
    }
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onImgChange = e => {
    this.setState({ image: e.target.files[0]});
  }

  handleClose = () => this.setShow(false);
  
 
  createSuggestion = e => {
    e.preventDefault();
    console.log(this.state);
    let formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("image", this.state.image, this.state.image.name);
    formData.append("description", this.state.description);
    formData.append("location", this.state.location);
    formData.append("western", this.state.western);
    formData.append("asian", this.state.asian);
    formData.append("indian", this.state.indian);
    console.log("finished formdata")
    axios.post(API_URL, formData, {
      headers: {
        'content-type': 'multipart/form-data',
      }
    }).then(() => {
      this.props.resetState();
      this.props.toggle();
      this.handleClose();
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
            id="title"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.title)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image:</Label>
          <Input
            type="file"
            id="image"
            onChange={(e) => this.onImgChange(e)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            type="text"
            id="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
          />
        </FormGroup>
        
       
        <FormGroup>
          <Label for="location">Location:</Label>
          <Input
            type="text"
            id="location"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.location)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="western">Western:</Label>
          <Input
            type="checkbox"
            id="western"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.western)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="asian">Asian:</Label>
          <Input
            type="checkbox"
            id="asian"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.asian)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="indian">Indian:</Label>
          <Input
            type="checkbox"
            id="indian"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.indian)}
          />
        </FormGroup>  
        <Input type='submit' />
      </Form>
    );
  }
}

export default NewSuggestionForm;
