import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { createHeroAction } from '../../actions/actionCreators';

const HeroForm = ({ createHero, powers }) => {
  const initialValues = {
    nickname: '',
    realName: '',
    originDescription: '',
    catchPhrase: '',
    heroPhoto: '',
    superpowers: [],
    isGood: true,
  };

  const handleSubmit = (values, formikBag) => {
    // values => Application/json
    // createHero(values);

    // c files => multipart/form-data
    const formData = new FormData();
    // multer: formData(text) => req.body
    formData.append('nickname', values.nickname);
    formData.append('realName', values.realName);
    formData.append('catchPhrase', values.catchPhrase);
    formData.append('originDescription', values.originDescription);
    formData.append('isGood', values.isGood);
    values.superpowers.forEach(s => formData.append('superpowers', s));
    // multer: formData(file) => req.file
    formData.append('heroPhoto', values.heroPhoto);
    createHero(formData);

    formikBag.resetForm();
  };
  const mapPowers = p => (
    <label key={p.id}>
      <Field type='checkbox' name='superpowers' value={String(p.id)} />
      <span>{p.description}</span>
    </label>
  );

  const setHeroPhoto = ({ target: { files } }, setPhoto) => {
    setPhoto('heroPhoto', files[0]);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {formikProps => (
        <Form>
          <label>
            <span>Nickname</span>
            <Field type='text' name='nickname' placeholder='Nickname' />
          </label>
          <br />
          <label>
            <span>Real name</span>
            <Field type='text' name='realName' placeholder='Real Name' />
          </label>
          <br />
          <label>
            <span>Origin description</span>
            <Field type='text' name='originDescription' />
          </label>
          <br />
          <label>
            <span>Catch phrase</span>
            <Field type='text' name='catchPhrase' />
          </label>
          <br />
          <label>
            <Field type='checkbox' name='isGood' />
            <span>Is positiv hero</span>
          </label>
          <br />
          {powers.map(mapPowers)}
          <br />
          <label>
            <span>HeroPhoto</span>
            <input
              type='file'
              name='heroPhoto'
              onChange={e => {
                setHeroPhoto(e, formikProps.setFieldValue);
              }}
            />
          </label>
          <br />
          <button type='submit'>Send</button>
        </Form>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ powersData: { powers } }) => ({ powers });

const mapDispatchToProps = dispatch => ({
  createHero: data => dispatch(createHeroAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroForm);
