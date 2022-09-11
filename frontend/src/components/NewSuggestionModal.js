import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewSuggestionForm from "./NewSuggestionForm";

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
          color="primary"
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Create New
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
