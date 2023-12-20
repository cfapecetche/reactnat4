import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button color={colors.color4} title='Login' onPress={()=> navigation.navigate("Home")}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
    width:"100%",
    flex:1,
    backgroundColor:colors.color2,
    justifyContent:"center",
    alignItems:"center",
}

})