import React, { Component } from "react";
import Modal from 'react-modal';

import FormPage from '../FormPage';

class LinkToEditModal extends Component {
  constructor(props) {
    super(props);

    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);

    this.state = {
      isModalOpen: false,
    }
  }

  handleModalClose() {
    this.setState(() => ({
      isModalOpen: false
    }));
  }

  handleModalOpen() {
    this.setState(() => ({
      isModalOpen: true
    }));
  }

  render() {
    const { isModalOpen } = this.state;

    return (
      <div>
        <span style={{ color: "magenta", cursor: 'pointer' }} onClick={this.handleModalOpen}>
          edit
        </span>
        <Modal
          isOpen={isModalOpen}
          // onAfterOpen={afterOpenFn}
          onRequestClose={this.handleModalClose}
          closeTimeoutMS={1}
          // style={customStyle}
          contentLabel="Examlpe Modal"
        >
          <FormPage />
        </Modal>
      </div>
    );
  }
}

export default LinkToEditModal;
