import React, { Component } from 'react';
import { connect } from 'react-redux';

import './add_game.scss';

import { update } from '../../utils/Form/form_actions';
import FormField from '../../utils/Form/form_field';
import UserLayout from '../../../hoc/user_layout/user_layout';

class AddGame extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formdata: {
      name: {
        element: 'input',
        value: '',
        config: {
          label: 'Title',
          name: 'title_input',
          type: 'text',
          placeholder: 'Enter game title'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      developer: {
        element: 'input',
        value: '',
        config: {
          label: 'Developer',
          name: 'developer_input',
          type: 'text',
          placeholder: 'Enter Developer'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      publisher: {
        element: 'input',
        value: '',
        config: {
          label: 'Publisher',
          name: 'publisher_input',
          type: 'text',
          placeholder: 'Enter Publisher'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      description: {
        element: 'textarea',
        value: '',
        config: {
          label: 'Game description',
          name: 'description_input',
          type: 'text',
          placeholder: 'Enter description'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      price: {
        element: 'input',
        value: '',
        config: {
          label: 'Price',
          name: 'price_input',
          type: 'number',
          placeholder: 'Enter price'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      size: {
        element: 'input',
        value: '',
        config: {
          label: 'Size',
          name: 'size_input',
          type: 'number',
          placeholder: 'Enter size'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      genres: {
        element: 'select',
        value: '',
        config: {
          label: 'Genres',
          name: 'genres_input',
          options: []
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true
      }
    }
  };

  // updateFields = newFormData => {
  //   this.setState({
  //     formdata: newFormData
  //   });
  // };

  updateForm = element => {
    const newFormData = update(element, this.state.formdata, 'products');
    this.setState({
      formError: false,
      formdata: newFormData
    });
  };

  render() {
    return (
      <UserLayout>
        <div className="add_game">
          <h1 className="add_game__title">Add Product</h1>
          <form>
            <FormField
              id={'name'}
              formdata={this.state.formdata.name}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={'developer'}
              formdata={this.state.formdata.developer}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={'publisher'}
              formdata={this.state.formdata.publisher}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={'price'}
              formdata={this.state.formdata.price}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={'size'}
              formdata={this.state.formdata.size}
              change={element => this.updateForm(element)}
            />
            {this.state.formSuccess ? (
              <div className="form_success">Success</div>
            ) : null}
            {this.state.formError ? (
              <div className="error_label">Please check your data</div>
            ) : null}
            {/* <button onClick={event => this.submitForm(event)}>
              Add Game
            </button> */}
            <button>Add Game</button>
          </form>
        </div>
      </UserLayout>
    );
  }
}

export default AddGame;
