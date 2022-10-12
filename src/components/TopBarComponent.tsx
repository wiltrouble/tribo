import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import { ChatBubbleLeftIcon } from "react-native-heroicons/solid";
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline";

const TopBarComponent = () => {
  return (
    <View className='flex-row justify-between'>
      <Image
        source={{
          uri: 'https://st2.depositphotos.com/4071389/7861/i/450/depositphotos_78618000-stock-photo-woman-drinking-coffee.jpg'
        }}
        className="w-12 h-12 rounded-full ml-5"
      />

      <View className='flex-row border rounded-lg justify-center items-center mx-5 px-2 bg-orange-300'>
        <MagnifyingGlassIcon color='black'/>
        <TextInput placeholder='Col. Atlas, Colima' className='w-40 mx-2' placeholderTextColor='black'/>
        <AdjustmentsHorizontalIcon color='black' />
      </View>

      <View className='w-12 h-12 bg-black rounded-full justify-center items-center mr-5'>
        <ChatBubbleLeftIcon color='white'/>
      </View>
      
    </View>
  );
};

export default TopBarComponent;
