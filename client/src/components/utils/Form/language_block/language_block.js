import React, { Component } from 'react';

import './language_block.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import FormField from '../form_field';
import { update } from '../../../utils/Form/form_actions';

class LanguageBlock extends Component {
  state = {
    inputOne: true,
    inputTwo: true,
    svgClicked: false,
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
        valid: true,
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

  toggleInputOne = () => {
    this.setState({
      inputOne: !this.state.inputOne
    });
  };

  toggleInputTwo = () => {
    this.setState({
      inputTwo: !this.state.inputTwo
    });
  };

  submitValue = event => {
    event.preventDefault();
    if (this.state.formdata.language.value !== '') {
      this.props.data(this.state);
      this.setState({
        svgClicked: true
      });
    }
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
            <input type="checkbox" onClick={this.toggleInputOne} />
          </div>
          <div className="checkbox-wrapper">
            <span>Text</span>
            <input type="checkbox" onClick={this.toggleInputTwo} />
          </div>
          {this.state.formdata.language.value !== '' &&
          this.state.svgClicked === false ? (
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="languages-block__svg"
              onClick={this.submitValue}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default LanguageBlock;
