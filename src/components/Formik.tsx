import React from 'react';
import {Button, TextInput, View, Text} from 'react-native';
import {Form, Formik, useFormik, Field, ErrorMessage } from 'formik';

const validate = values => {
  const errors = {name: '', lastName: ''};
  if (!values.name) {
    errors.name = 'Required!';
  } else if (values.name.length < 5) {
    errors.name = 'Name is short';
  }

  if (!values.lastName) {
    errors.lastName = 'Lastname is Required!';
  } else if (values.lastName.length < 5) {
    errors.lastName = 'Name is short';
  }

  return errors;
};

const FormikComponent = () => {

  return (
    <Formik
      initialValues={{
        name: '',
        lastName: '',
        email: '',
      }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form className="w-full justify-center items-center">
        <Field
          className="bg-white w-4/5 my-2 h-10 rounded-lg px-3"
          // {...formik.getFieldProps('name')}
          name='name'
          type='text'
        />
        <ErrorMessage name='name' />
        

        <Button title="Submit" />
      </Form>
    </Formik>
  );
};

export default FormikComponent;
