import React from 'react'
import { View } from 'react-native'

export default ({ children }: { children: React.ReactNode} ) => {
  return <View style={{ flexDirection:'row' }}>{children}</View>
}