// Formik x React Native example
import React from 'react';
import {Button, TextInput, View, Text} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {CheckIcon} from 'react-native-heroicons/solid';

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
    {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
      <View className="w-full justify-center items-center">
        <View className="flex-row justify-center items-center bg-white rounded-lg my-2 px-3">
          <TextInput
            className="bg-white w-4/5 my-2 h-10 rounded-lg"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="email"
          />
          {touched.email && !errors.email ? <CheckIcon color="green" /> : null }
        </View>
        {touched.password && errors.email && (
          <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
        )}

        <View className="flex-row justify-center items-center bg-white rounded-lg my-2 px-3">
          <TextInput
            className="bg-white w-4/5 my-2 h-10 rounded-lg"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="password"
          />
          {touched.password && !errors.password ? <CheckIcon color="green" /> : null}
        </View>
        {touched.password && errors.password && (
          <Text style={{fontSize: 10, color: 'red'}}>{errors.password}</Text>
        )}

        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

export default LogInFormComponent;
