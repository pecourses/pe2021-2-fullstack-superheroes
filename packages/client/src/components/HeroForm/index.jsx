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
    //
    createHero(values);
    formikBag.resetForm();
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
