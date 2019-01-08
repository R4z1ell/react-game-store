import React, { Component } from 'react';

import './screenshot_block.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

class ScreenshotBlock extends Component {
  state = {
    formErrorOne: false,
    formErrorTwo: false,
    invalidExtensionOne: false,
    invalidExtensionTwo: false,
    svgClicked: false,
    screenshot_ggvgm: '',
    screenshot_ggvgm_2x: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitValue = event => {
    event.preventDefault();
    if (
      this.state.screenshot_ggvgm !== '' &&
      this.state.screenshot_ggvgm_2x !== ''
    ) {
      this.props.data(this.state);
      this.setState({
        svgClicked: true
      });
    }
  };

  checkInputOne = event => {
    if (!event.target.value) {
      this.setState({
        formErrorOne: true
      });
    }
    if (
      /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(
        String(event.target.value)
      ) === false &&
      event.target.value
    ) {
      this.setState({
        invalidExtensionOne: true,
        formErrorOne: false
      });
    }
    if (
      /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(
        String(event.target.value)
      ) === true &&
      event.target.value
    ) {
      this.setState({
        invalidExtensionOne: false,
        formErrorOne: false
      });
    }
  };

  checkInputTwo = event => {
    if (!event.target.value) {
      this.setState({
        formErrorTwo: true
      });
    }
    if (
      /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(
        String(event.target.value)
      ) === false &&
      event.target.value
    ) {
      this.setState({
        invalidExtensionTwo: true,
        formErrorTwo: false
      });
    }
    if (
      /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(
        String(event.target.value)
      ) === true &&
      event.target.value
    ) {
      this.setState({
        invalidExtensionTwo: false,
        formErrorTwo: false
      });
    }
  };

  showErrorOne = () => {
    let errorMessage = null;

    if (this.state.formErrorOne) {
      errorMessage = <div className="error_label">This field is required</div>;
    }
    if (this.state.invalidExtensionOne && this.state.formErrorOne === false) {
      errorMessage = (
        <div className="error_label">Only .jpg or .png file allowed</div>
      );
    }
    return errorMessage;
  };

  showErrorTwo = () => {
    let errorMessage = null;

    if (this.state.formErrorTwo) {
      errorMessage = <div className="error_label">This field is required</div>;
    }
    if (this.state.invalidExtensionTwo && this.state.formErrorTwo === false) {
      errorMessage = (
        <div className="error_label">Only .jpg or .png file allowed</div>
      );
    }
    return errorMessage;
  };

  render() {
    return (
      <div
        className="add_game__screenshots--wrapper"
        style={{ marginTop: '12px' }}
      >
        <div>
          <input
            name="screenshot_ggvgm"
            onChange={this.handleChange}
            placeholder="Enter regular image url"
            onBlur={this.checkInputOne}
          />
          {this.showErrorOne()}
        </div>
        <div>
          <input
            name="screenshot_ggvgm_2x"
            onChange={this.handleChange}
            placeholder="Enter 2x image url"
            onBlur={this.checkInputTwo}
          />
          {this.showErrorTwo()}
        </div>
        {this.state.screenshot_ggvgm !== '' &&
        this.state.screenshot_ggvgm_2x !== '' &&
        this.state.invalidExtensionOne !== true &&
        this.state.invalidExtensionTwo !== true &&
        this.state.svgClicked === false ? (
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="add_game__screenshots--svg"
            onClick={this.submitValue}
          />
        ) : (
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="add_game__screenshots--not-allowed"
          />
        )}
      </div>
    );
  }
}

export default ScreenshotBlock;
