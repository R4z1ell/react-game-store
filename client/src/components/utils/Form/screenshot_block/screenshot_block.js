import React, { Component } from 'react';

import './screenshot_block.scss';

import FormField from '../form_field';
import { update } from '../../../utils/Form/form_actions';

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
        valid: false,
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
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: false
      }
    }
  };

  updateForm = element => {
    const newFormData = update(element, this.state.formdata, 'products');
    this.setState({
      formError: false,
      formdata: newFormData
    });
  };

  render() {
    return (
      <div
        className="add_game__screenshots--wrapper"
        style={{ marginTop: '12px' }}
      >
        <div>
          <FormField
            id={'screenshot_ggvgm'}
            formdata={this.state.formdata.screenshot_ggvgm}
            change={element => this.updateForm(element)}
          />
        </div>
        <div>
          <FormField
            id={'screenshot_ggvgm_2x'}
            formdata={this.state.formdata.screenshot_ggvgm_2x}
            change={element => this.updateForm(element)}
          />
        </div>
      </div>
    );
  }
}

export default ScreenshotBlock;
