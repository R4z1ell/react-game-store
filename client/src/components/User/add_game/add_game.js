import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './add_game.scss';

import {
  update,
  populateOptionFields,
  generateData,
  isFormValid
} from '../../utils/Form/form_actions';
import { getGenres, addGame } from '../../../store/actions/games_actions';
import FormField from '../../utils/Form/form_field';
import ScreenshotBlock from '../../utils/Form/screenshot_block/screenshot_block';
import LanguageBlock from '../../utils/Form/language_block/language_block';
import UserLayout from '../../../hoc/user_layout/user_layout';

class AddGame extends Component {
  state = {
    images: [],
    languages: [],
    formError: false,
    formSuccess: false,
    formdata: {
      release_date: new Date(),
      title: {
        element: 'input',
        value: '',
        config: {
          label: 'Game title',
          name: 'title_input',
          type: 'text',
          placeholder: 'Enter game title'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      developer: {
        element: 'input',
        value: '',
        config: {
          label: 'Game developer',
          name: 'developer_input',
          type: 'text',
          placeholder: 'Enter Developer'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      publisher: {
        element: 'input',
        value: '',
        config: {
          label: 'Game publisher',
          name: 'publisher_input',
          type: 'text',
          placeholder: 'Enter Publisher'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      lead: {
        element: 'textarea',
        value: '',
        config: {
          label: 'Game description (lead)',
          name: 'lead_input',
          type: 'text',
          placeholder: 'Enter description'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      full: {
        element: 'textarea',
        value: '',
        config: {
          label: 'Game description (full)',
          name: 'full_input',
          type: 'text',
          placeholder: 'Enter description'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      whats_cool_about_it: {
        element: 'textarea',
        value: '',
        config: {
          label: 'Game description (whats_cool_about_it)',
          name: 'whats_cool_about_it_input',
          type: 'text',
          placeholder: 'Enter description'
        },
        validation: {
          required: false
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      prices: {
        element: 'input',
        value: '',
        config: {
          label: 'Game price',
          name: 'price_input',
          type: 'number',
          placeholder: 'Enter price'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      total_size: {
        element: 'input',
        value: '',
        config: {
          label: 'Game size',
          name: 'size_input',
          type: 'number',
          placeholder: 'Enter size'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      genres: {
        element: 'select',
        value: '',
        config: {
          label: 'Game genres',
          name: 'genres_input',
          options: []
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      background: {
        element: 'input',
        value: '',
        config: {
          label: 'Background',
          name: 'background_input',
          type: 'text',
          placeholder: 'Enter background url'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      mobile: {
        element: 'input',
        value: '',
        config: {
          label: 'Mobile',
          name: 'mobile_input',
          type: 'text',
          placeholder: 'Enter mobile url'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      logo: {
        element: 'input',
        value: '',
        config: {
          label: 'Logo',
          name: 'logo_input',
          type: 'text',
          placeholder: 'Enter logo url'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      card: {
        element: 'input',
        value: '',
        config: {
          label: 'Card',
          name: 'card_input',
          type: 'text',
          placeholder: 'Enter card url'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      video_url: {
        element: 'input',
        value: '',
        config: {
          label: 'Video url',
          name: 'video_input',
          type: 'text',
          placeholder: 'Enter video url'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      thumbnail_url: {
        element: 'input',
        value: '',
        config: {
          label: 'Thumbnail url',
          name: 'thumbnail_input',
          type: 'text',
          placeholder: 'Enter thumbnail url'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      system: {
        element: 'input',
        value: '',
        config: {
          label: 'System',
          name: 'system_input',
          type: 'text',
          placeholder: 'Enter system requirements'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      processor: {
        element: 'input',
        value: '',
        config: {
          label: 'Processor',
          name: 'processor_input',
          type: 'text',
          placeholder: 'Enter processor requirements'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      memory: {
        element: 'input',
        value: '',
        config: {
          label: 'Memory',
          name: 'memory_input',
          type: 'text',
          placeholder: 'Enter memory requirements'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      graphics: {
        element: 'input',
        value: '',
        config: {
          label: 'Graphics',
          name: 'graphics_input',
          type: 'text',
          placeholder: 'Enter graphics requirements'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      directX: {
        element: 'input',
        value: '',
        config: {
          label: 'DirectX',
          name: 'directX_input',
          type: 'text',
          placeholder: 'Enter directX requirements'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      storage: {
        element: 'input',
        value: '',
        config: {
          label: 'Storage',
          name: 'storage_input',
          type: 'text',
          placeholder: 'Enter storage requirements'
        },
        validation: {
          required: true
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      screenshots: []
    }
  };

  addScreenshot = () => {
    let images = this.state.images;
    images.push('added');
    this.setState({ images });
  };

  removeScreenshot = () => {
    let images = this.state.images;
    images.splice(-1, 1);
    this.setState({
      images
    });
  };

  addLanguage = () => {
    let languages = this.state.languages;
    languages.push('added');
    this.setState({ languages });
  };

  removeLanguage = () => {
    let languages = this.state.languages;
    languages.splice(-1, 1);
    this.setState({
      languages
    });
  };

  // resetFieldHandler = () => {
  //   const newFormData = resetFields(this.state.formdata, 'products');

  //   this.setState({
  //     formdata: newFormData,
  //     formSuccess: true
  //   });
  //   setTimeout(() => {
  //     this.setState(
  //       {
  //         formSuccess: false
  //       },
  //       () => {
  //         this.props.dispatch(clearProduct());
  //       }
  //     );
  //   }, 3000);
  // };

  submitForm = event => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formdata, 'products');
    let formIsValid = isFormValid(this.state.formdata, 'products');

    this.props.dispatch(addGame(dataToSubmit));

    // if (formIsValid) {
    //   this.props.dispatch(addGame(dataToSubmit)).then(() => {
    //     if (this.props.games.addGame.success) {
    //       //this.resetFieldHandler();
    //       console.log('Submitted!!');
    //     } else {
    //       this.setState({
    //         formError: true
    //       });
    //     }
    //   });
    // } else {
    //   this.setState({
    //     formError: true
    //   });
    // }
    console.log(dataToSubmit);
  };

  handleChange = date => {
    const newFormData = { ...this.state.formdata };
    newFormData.release_date = date;
    this.setState({
      formdata: newFormData
    });
  };

  updateFields = newFormData => {
    this.setState({
      formdata: newFormData
    });
  };

  updateForm = element => {
    const newFormData = update(element, this.state.formdata, 'products');
    this.setState({
      formError: false,
      formdata: newFormData
    });
  };

  handleDate = data => {
    const newFormData = { ...this.state.formdata };
    const regularImage = data.screenshot_ggvgm.value;
    const image_2x = data.screenshot_ggvgm_2x.value;
    const images = {
      image_url: regularImage,
      image_2x_url: image_2x
    };
    newFormData.screenshots.push(images);
    this.setState({
      formdata: { ...this.state.formdata, newFormData }
    });
    console.log(this.state.formdata.screenshots);
  };

  componentDidMount() {
    const formdata = this.state.formdata;

    this.props.dispatch(getGenres()).then(response => {
      const newFormData = populateOptionFields(
        formdata,
        this.props.games.genres,
        'genres'
      );
      this.updateFields(newFormData);
    });
  }

  render() {
    return (
      <UserLayout>
        <div className="add_game">
          <h1 className="add_game__title">Add Product</h1>
          <form onSubmit={event => this.submitForm(event)}>
            <FormField
              id={'title'}
              formdata={this.state.formdata.title}
              change={element => this.updateForm(element)}
            />
            <div className="formBlock">
              <div className="label_inputs">Game release</div>
            </div>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={this.state.formdata.release_date}
              onChange={this.handleChange}
              showMonthDropdown
            />
            <div className="add_game__price">
              <FormField
                id={'prices'}
                formdata={this.state.formdata.prices}
                change={element => this.updateForm(element)}
              />
            </div>
            <FormField
              id={'genres'}
              formdata={this.state.formdata.genres}
              change={element => this.updateForm(element)}
            />
            <div className="form_divider" />
            <FormField
              id={'lead'}
              formdata={this.state.formdata.lead}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={'full'}
              formdata={this.state.formdata.full}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={'whats_cool_about_it'}
              formdata={this.state.formdata.whats_cool_about_it}
              change={element => this.updateForm(element)}
            />
            <div className="form_divider" />
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
              id={'total_size'}
              formdata={this.state.formdata.total_size}
              change={element => this.updateForm(element)}
            />
            <div className="form_divider" />
            <FormField
              id={'background'}
              formdata={this.state.formdata.background}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={'mobile'}
              formdata={this.state.formdata.mobile}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={'logo'}
              formdata={this.state.formdata.logo}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={'card'}
              formdata={this.state.formdata.card}
              change={element => this.updateForm(element)}
            />
            <div className="form_divider" />
            <FormField
              id={'video_url'}
              formdata={this.state.formdata.video_url}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={'thumbnail_url'}
              formdata={this.state.formdata.thumbnail_url}
              change={element => this.updateForm(element)}
            />
            <div className="form_divider" />
            <FormField
              id={'system'}
              formdata={this.state.formdata.system}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={'processor'}
              formdata={this.state.formdata.processor}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={'memory'}
              formdata={this.state.formdata.memory}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={'graphics'}
              formdata={this.state.formdata.graphics}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={'directX'}
              formdata={this.state.formdata.directX}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={'storage'}
              formdata={this.state.formdata.storage}
              change={element => this.updateForm(element)}
            />
            {/* <div className="form_divider" />
            <div className="formBlock">
              <div className="label_inputs">Languages</div>
            </div>
            <div className="add_game__languages">
              <LanguageBlock />
              {this.state.languages.map((item, i) => (
                <LanguageBlock key={i} />
              ))}
              <button
                className="add_game__button-add"
                onClick={this.addLanguage}
              >
                Add
              </button>
              <button
                className="add_game__button-remove"
                onClick={this.removeLanguage}
                disabled={this.state.images.languages === 0}
              >
                Remove
              </button>
            </div> */}
            <div className="form_divider" />
            <div className="formBlock">
              <div className="label_inputs">Screenshots</div>
            </div>
            <div className="add_game__screenshots">
              <ScreenshotBlock data={this.handleDate} />
              {this.state.images.map((item, i) => (
                <ScreenshotBlock key={i} data={this.handleDate} />
              ))}
              <button
                className="add_game__button-add"
                onClick={this.addScreenshot}
              >
                Add
              </button>
              <button
                className="add_game__button-remove"
                onClick={this.removeScreenshot}
                disabled={this.state.images.length === 0}
              >
                Remove
              </button>
            </div>
            <div className="form_divider" />
            {this.state.formSuccess ? (
              <div className="form_success">Success</div>
            ) : null}
            {this.state.formError ? (
              <div className="error_label">Please check your data</div>
            ) : null}
            <button
              className="add_game__button-submit"
              onClick={event => this.submitForm(event)}
            >
              Submit Game
            </button>
          </form>
        </div>
      </UserLayout>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games
  };
};

export default connect(mapStateToProps)(AddGame);
