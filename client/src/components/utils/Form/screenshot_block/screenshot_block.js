import React, { Component } from 'react';

import './screenshot_block.scss';

class ScreenshotBlock extends Component {
  state = {
    formErrorOne: false,
    formErrorTwo: false,
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
    }
  };

  checkInputOne = event => {
    if (!event.target.value) {
      this.setState({
        formErrorOne: true
      });
    } else {
      this.setState({
        formErrorOne: false
      });
    }
  };

  checkInputTwo = event => {
    if (!event.target.value) {
      this.setState({
        formErrorTwo: true
      });
    } else {
      this.setState({
        formErrorTwo: false
      });
    }
  };

  showErrorOne = () => {
    let errorMessage = null;

    if (this.state.formErrorOne) {
      errorMessage = <div className="error_label">This field is required</div>;
    }
    return errorMessage;
  };

  showErrorTwo = () => {
    let errorMessage = null;

    if (this.state.formErrorTwo) {
      errorMessage = <div className="error_label">This field is required</div>;
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
          {this.state.formErrorOne ? this.showErrorOne() : null}
        </div>
        <div>
          <input
            name="screenshot_ggvgm_2x"
            onChange={this.handleChange}
            placeholder="Enter 2x image url"
            onBlur={this.checkInputTwo}
          />
          {this.state.formErrorTwo ? this.showErrorTwo() : null}
        </div>
        <input
          className="input-submit"
          type="submit"
          value="+"
          onClick={this.submitValue}
          disabled={
            this.state.screenshot_ggvgm === '' ||
            this.state.screenshot_ggvgm_2x === ''
          }
        />
      </div>
    );
  }
}

export default ScreenshotBlock;
