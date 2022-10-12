import React from 'react';
import {Button, TextInput, View, Text} from 'react-native';
import {Formik, useFormik} from 'formik';
import TextInputComponent from './LogInFormComponent';

const validate = values => {
  const errors = {name:'', lastName:''}
  if (!values.name) {
    errors.name = 'Required!'
  } else if (values.name.length < 5) {
    errors.name = 'Name is short'
  }

  if (!values.lastName) {
    errors.lastName = 'Lastname is Required!'
  } else if (values.lastName.length < 5) {
    errors.lastName = 'Name is short'
  }
  return errors;
}

const LogInForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: () => console.log('pressed')
  });

  

  return (
        <View className="w-full justify-center items-center">
          <TextInput
            className="bg-white w-4/5 my-2 h-10 rounded-lg px-3"
            onChangeText={formik.handleChange('name')}
            onBlur={formik.handleBlur('name')}
            value={formik.values.name}
            placeholder="name"
          />
          {formik.touched.name && formik.errors.name ? <Text>{formik.errors.name}</Text> : null}

          <TextInput
            className="bg-white w-4/5 my-2 h-10 rounded-lg px-3"
            onChangeText={formik.handleChange('lastName')}
            onBlur={formik.handleBlur('lastName')}
            value={formik.values.lastName}
            placeholder="lastname"
            
          />
          {formik.touched.lastName && formik.errors.lastName ? <Text>{formik.errors.lastName}</Text> : null}

          <TextInput
            className="bg-white w-4/5 my-2 h-10 rounded-lg px-3"
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            value={formik.values.email}
            placeholder="email"
          />
          {formik.touched.email && formik.errors.email ? <Text>{formik.errors.lastName}</Text> : null}

          <TextInputComponent label='Password' formik={formik}/>


          <Button onPress={formik.handleSubmit} title="Submit" />
        </View>
  );
};

export default LogInForm;
