import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Button from 'react-bootstrap/Button';
import NewSuggestionForm from "./NewSuggestionForm";
import "../css/NewSuggestionModal.css";

class NewSuggestionModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Editing Suggestion";
    var button = <Button onClick={this.toggle}>Add Post</Button>;
    if (create) {
      title = "Creating New Suggestion";

      button = (
        <Button
          variant="outline-success"
          className= "addBtn"
          onClick={this.toggle}
        >
          Add Post
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewSuggestionForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              suggestion={this.props.suggestion}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewSuggestionModal;
