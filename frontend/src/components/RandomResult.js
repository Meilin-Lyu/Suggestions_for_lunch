import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";
import { API_URL } from "../constants";


const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/suggestion/'
})
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

class RandomResult extends React.Component {
    state = {
        title: "",
        description: "",
        location: "",
        western:"",
        asian:"",
        time: "",
        indian:"",
        image: null,
        tags: ""
      };

    constructor(){
        super();
        api.get('/').then(res => {
            shuffle(res.data)
            
            this.setState({title: res.data[0].title})
            this.setState({location: res.data[0].location})
            this.setState({time: res.data[0].time})
            this.setState({description: res.data[0].description})
            this.setState({image: res.data[0].image})
            if (res.data[0].western == true){
                this.setState({western: "Western"})
            }
            if (res.data[0].asian == true){
                this.setState({asian: "Asian"})
            }
            if (res.data[0].indian == true){
                this.setState({indian: "Indian"})
            }
        })
    }


  componentDidMount() {
    if (this.props.suggestion) {
      const { title,description, location, image,western,asian,indian } = this.props.suggestion;
      this.setState({ title,description, location, image,western,asian,indian });
    }
  };

  onChange = e => {
    console.log(e.target.value, e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  onImgChange = e => {
    this.setState({ image: e.target.files[0]});
  }

  onCheckboxChange = e => {
    this.setState({ [e.target.name]: e.target.checked });
  }

  handleClose = () => this.setShow(false);
  
 
  createRandom = e => {
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
    console.log("finished formdata");
    axios.post(API_URL, formData, {
      headers: {
        'content-type': 'multipart/form-data',
      }
    }).then(() => {
     
      this.props.toggle();
      
    });
  };
  

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.createRandom}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.title)}
            disabled
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            type="text"
            name="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
            disabled
          />
        </FormGroup>
        <FormGroup>
          <Label for="location">Location:</Label>
          <Input
            type="text"
            name="location"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.location)}
            disabled
          />
        </FormGroup>
        <FormGroup>
            <Label for="Tags">Tags</Label>
            <Input
                type="text"
                name="Tags"
                onChange={this.onChange}
                value={this.defaultIfEmpty(this.state.western+" "+this.state.asian+" "+this.state.indian)}
                disabled
            />
       </FormGroup>
 
        <FormGroup>
         
          <img
            src={this.state.image}
            width = "450"
          />
        </FormGroup>
      </Form>
    );
  }
}

export default RandomResult;