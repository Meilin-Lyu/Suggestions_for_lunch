import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import RandomResult from "./RandomResult";

class RandomModal extends Component {
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

    var title = "Random Suggestion";
    var button = <Button onClick={this.toggle}>Random Suggestion</Button>;
    if (create) {
      button = (
        <Button
          color="primary"
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "300px" }}
        >
          Get Random
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <RandomResult
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

export default RandomModal;
