// Formik x React Native example
import React from 'react';
import {Button, TextInput, View, Text} from 'react-native';
import {ErrorMessage, Formik} from 'formik';
import * as yup from 'yup';

const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const loginValidationSchemma = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required!'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required!'),
});

const LogInFormComponent = () => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    onSubmit={values => console.log(values)}
    validationSchema={loginValidationSchemma}>
    {({
      handleChange,
      handleBlur,
      handleSubmit,
      values,
      touched,
      errors,
      setErrors,
    }) => (
      <View className="w-full justify-center items-center">
        <TextInput
          className="bg-white w-4/5 my-2 h-10 rounded-lg px-3"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          placeholder="email"
        />
        {errors.email && (
          <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
        )}

        <TextInput
          className="bg-white w-4/5 my-2 h-10 rounded-lg px-3"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          placeholder="password"
        />
        {errors.password && (
          <Text style={{fontSize: 10, color: 'red'}}>{errors.password}</Text>
        )}

        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

export default LogInFormComponent;
