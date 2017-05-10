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
        <span style={{ color: "red", cursor: 'pointer' }} onClick={this.handleModalOpen}>
          some modal
        </span>
        <Modal
          isOpen={isModalOpen}
          // onAfterOpen={afterOpenFn}
          onRequestClose={this.handleModalClose}
          closeTimeoutMS={1}
          // style={customStyle}
          contentLabel="Examlpe Modal"
        >
          <h1>This is some other modal</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Modal>
      </div>
    );
  }
}

export default LinkToEditModal;
