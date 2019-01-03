import React, { Component } from 'react';

import './language_block.scss';

import FormField from '../form_field';
import { update } from '../../../utils/Form/form_actions';

class LanguageBlock extends Component {
  state = {
    formError: false,
    formdata: {
      language: {
        element: 'input',
        value: '',
        config: {
          name: 'language_input',
          type: 'text',
          placeholder: 'Enter language name'
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
      <div className="languages-block">
        <FormField
          id={'language'}
          formdata={this.state.formdata.language}
          change={element => this.updateForm(element)}
        />
        <div className="languages-block__container">
          <div className="checkbox-wrapper">
            <span>Audio</span>
            <input type="checkbox" />
          </div>
          <div className="checkbox-wrapper">
            <span>Text</span>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    );
  }
}

export default LanguageBlock;
