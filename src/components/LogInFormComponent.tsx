import React from 'react';
import {TextInput, View, Text, TouchableHighlight} from 'react-native';
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
          {touched.email && !errors.email ? <CheckIcon color="green" /> : null}
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
          {touched.password && !errors.password ? (
            <CheckIcon color="green" />
          ) : null}
        </View>
        {touched.password && errors.password && (
          <Text style={{fontSize: 10, color: 'red'}}>{errors.password}</Text>
        )}

        <Text className="py-10">Did you forget your password?</Text>

        <TouchableHighlight onPress={handleSubmit} className="bg-blue-400 w-4/5 h-10 rounded-lg justify-center items-center">
          <Text className="text-white font-bold">Enter your account</Text>
        </TouchableHighlight>

        <Text className='py-10'>Don't have a Tribo account yet?</Text>

        <TouchableHighlight onPress={handleSubmit} className="w-4/5 h-10 rounded-lg justify-center items-center border-blue-400 border-2">
          <Text className="text-blue-400 font-bold">Enter your account</Text>
        </TouchableHighlight>

      </View>
    )}
  </Formik>
);

export default LogInFormComponent;
