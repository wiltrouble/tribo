import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
  backColor: string,
  textColor: string,
  icon: string
}

const ButtonComponent = () => {
  return (
    <TouchableOpacity>
      <Text>Entra con tu cuenta</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent