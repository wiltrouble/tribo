import { View, Text, Image, TouchableHighlight } from 'react-native'
import React from 'react'

const SplasScreen = () => {
  return (
    <View className='justify-center items-center flex-1 animate-spin'>
      <Image source={require('../../assests/images/Frame.png')} className="w-20 h-20"/>

      <TouchableHighlight className='bg-green-200'>
        <Text>Start Image Rotate Function</Text>
      </TouchableHighlight>
    </View>
  )
}

export default SplasScreen