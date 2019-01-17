export const validate = (element, formdata = []) => {
  let error = [true, ''];

  if (element.validation.email) {
    const valid = /\S+@\S+\.\S+/.test(element.value);
    const message = `${!valid ? 'Must be a valid email' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  if (element.validation.confirm) {
    const valid =
      element.value.trim() === formdata[element.validation.confirm].value;
    const message = `${!valid ? 'Passwords do not match' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  if (element.validation.required) {
    const valid = element.value.trim() !== '';
    const message = `${!valid ? 'This field is required' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  return error;
};

export const update = (element, formdata, formName) => {
  const newFormData = {
    ...formdata
  };
  const newElement = {
    ...newFormData[element.id]
  };

  newElement.value = element.event.target.value;

  if (element.blur) {
    let validData = validate(newElement, formdata);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
  }

  newElement.touched = element.blur;
  newFormData[element.id] = newElement;

  return newFormData;
};

export const generateData = (formdata, formName) => {
  let dataToSubmit = {};

  for (let key in formdata) {
    // if (key !== 'confirmPassword' && key !== 'prices') {
    //   dataToSubmit[key] = formdata[key].value;
    // }
    if (
      key === 'title' ||
      key === 'developer' ||
      key === 'publisher' ||
      key === 'total_size'
    ) {
      dataToSubmit[key] = formdata[key].value;
    }
    if (key === 'genres') {
      let newGenresArray = [];
      for (const key in formdata.genres.value) {
        newGenresArray.push(formdata.genres.value[key].key);
      }
      dataToSubmit['genres'] = newGenresArray;
    }
    if (key === 'release_date') {
      dataToSubmit.release_date = formdata['release_date'];
    }
    if (key === 'lead' || key === 'full' || key === 'whats_cool_about_it') {
      dataToSubmit.description = {
        lead: formdata['lead'].value,
        full: formdata['full'].value,
        whats_cool_about_it: formdata['whats_cool_about_it'].value
      };
    }
    if (
      key === 'background' ||
      key === 'mobile' ||
      key === 'logo' ||
      key === 'card'
    ) {
      dataToSubmit.images = {
        background: formdata['background'].value,
        mobile: formdata['mobile'].value,
        logo: formdata['logo'].value,
        card: formdata['card'].value
      };
    }
    if (key === 'prices') {
      dataToSubmit[key] = {
        basePrice: formdata[key].value
      };
    }
    if (key === 'video_url' || key === 'thumbnail_url') {
      dataToSubmit.videos = [
        {
          video_url: formdata['video_url'].value,
          thumbnail_url: formdata['thumbnail_url'].value
        }
      ];
    }
    if (
      key === 'directX' ||
      key === 'system' ||
      key === 'processor' ||
      key === 'memory' ||
      key === 'graphics' ||
      key === 'storage'
    ) {
      dataToSubmit.system_requirements = [
        {
          system: formdata['system'].value,
          processor: formdata['processor'].value,
          memory: formdata['memory'].value,
          graphics: formdata['graphics'].value,
          storage: formdata['storage'].value,
          directX: formdata['directX'].value
        }
      ];
    }
    if (key === 'screenshots') {
      dataToSubmit.screenshots = [...formdata['screenshots']];
      console.log(formdata['screenshots']);
    }
    if (key === 'newLanguages') {
      dataToSubmit.languages = [...formdata['newLanguages']];
      console.log(formdata['newLanguages']);
    }
  }

  return dataToSubmit;
};

export const isFormValid = (formdata, formName) => {
  let formIsValid = true;

  for (let key in formdata) {
    formIsValid = formdata[key].valid && formIsValid;
  }

  return formIsValid;
};

export const populateOptionFields = (formdata, arrayData = [], field) => {
  const newArray = [];
  const newFormdata = { ...formdata };

  arrayData.forEach(item => {
    newArray.push({ key: item._id, value: item.name });
  });

  newFormdata[field].config.options = newArray;
  return newFormdata;
};

export const resetFields = (formdata, formName) => {
  const newFormdata = { ...formdata };

  for (let key in newFormdata) {
    if (key === 'release_date') {
      newFormdata[key] = new Date();
    }
    if (key === 'genres') {
      newFormdata[key].value = [];
      newFormdata[key].touched = false;
      newFormdata[key].validationMessage = '';
    }
    if (key === 'screenshots' || key === 'newLanguages') {
      newFormdata[key] = [];
    } else {
      newFormdata[key].value = '';
      newFormdata[key].touched = false;
      newFormdata[key].validationMessage = '';
    }

    //newFormdata[key].valid = false;
  }
  return newFormdata;
};

export const filter = unfilteredArray => {
  var filteredArray = [];
  for (var key in unfilteredArray) {
    if (
      unfilteredArray[key] === true ||
      unfilteredArray[key] === false ||
      key === 'inputDefault' ||
      key === 'typingTimeout' ||
      key === 'genreId'
    )
      continue;
    filteredArray.push(unfilteredArray[key]);
  }

  return filteredArray;
};
