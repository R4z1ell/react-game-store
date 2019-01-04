import React, { Component } from 'react';

import './screenshot_block.scss';

class ScreenshotBlock extends Component {
  state = {
    formError: false,
    formdata: {
      screenshot_ggvgm: {
        element: 'input',
        value: '',
        config: {
          name: 'screenshot_ggvgm_input',
          type: 'text',
          placeholder: 'Enter regular size image url'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: false
      },
      screenshot_ggvgm_2x: {
        element: 'input',
        value: '',
        config: {
          name: 'screenshot_ggvgm_2x_input',
          type: 'text',
          placeholder: 'Enter 2x size image url'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: false
      }
    }
  };

  handleChangeOne = event => {
    const newFormData = { ...this.state.formdata };
    newFormData.screenshot_ggvgm.value = event.target.value;
    this.setState({
      formdata: newFormData
    });
    if (
      this.state.formdata.screenshot_ggvgm.value &&
      this.state.formdata.screenshot_ggvgm_2x.value
    ) {
      this.props.data(this.state.formdata);
    }
  };

  handleChangeTwo = event => {
    const newFormData = { ...this.state.formdata };
    newFormData.screenshot_ggvgm_2x.value = event.target.value;
    this.setState({
      formdata: newFormData
    });
    if (
      this.state.formdata.screenshot_ggvgm.value &&
      this.state.formdata.screenshot_ggvgm_2x.value
    ) {
      this.props.data(this.state.formdata);
    }
  };

  render() {
    return (
      <div
        className="add_game__screenshots--wrapper"
        style={{ marginTop: '12px' }}
      >
        <div>
          <input
            id={'screenshot_ggvgm'}
            onBlur={this.handleChangeOne}
            placeholder="Enter regular image url"
          />
        </div>
        <div>
          <input
            id={'screenshot_ggvgm'}
            onBlur={this.handleChangeTwo}
            placeholder="Enter 2x image url"
          />
        </div>
      </div>
    );
  }
}

export default ScreenshotBlock;
