import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React from 'react';
import LogInFormComponent from '../components/LogInFormComponent';


const LogInScreen = () => {
  return (
    <View className='justify-center items-center'>
      <View className="flex-row justify-center">
        <TouchableOpacity className="bg-facebook w-2/5 h-12 flex-row rounded-lg justify-center items-center mx-2">
          <Image
            className="w-3 h-6"
            source={require('../../assests/images/FacebookIcon.png')}
          />
          <Text className="color-white px-4">Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white w-2/5 h-12 flex-row rounded-lg justify-center items-center mx-2">
          <Image
            className="w-6 h-6"
            source={require('../../assests/images/GoogleIcon.png')}
          />
          <Text className="color-black px-4">Google</Text>
        </TouchableOpacity>
      </View>

      <Text className=''>o ingresa con tu correo electronico</Text>

      <LogInFormComponent />
      
    </View>
  );
};

export default LogInScreen;
