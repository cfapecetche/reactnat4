import { StyleSheet, Text, View , Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import allItem from "../Data/items.json"
import { colors } from '../Global/colors'

const ItemDetail = ({route}) => {
  const {id} = route.params

  const [item,setItem] = useState({})
  const images = item.images ? item.images : []

  useEffect(()=>{

    const itemFinded = allItem.find(item => item.id === id)
    setItem(itemFinded)

  },[id])

  return (
    <View style={styles.container}>
      <View style={styles.content} >
          <Image
            style={styles.image}
            source={{uri:images[2]}}
            resizeMode='cover's
          />
          <View style={styles.containerText}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.price}>{item.stock} un.</Text>
            <Pressable style={styles.buyNow}>
              <Text style={styles.buyNowText}>Update Stock</Text>
            </Pressable>
          </View>
        </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        justifyContent:"start",
        alignItems:"center",
    },
    content:{
      width:"100%"
    },

    image:{
      width:"100%",
      height:300
    },
    goBack:{
      width:"100%",
      backgroundColor:colors.color1,
      padding:10,
      paddingStart:40
     },
     containerText:{
      gap:25,
      paddingHorizontal:5,
      paddingVertical:25
     },
     containerPrice:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginVertical:10
     },
     title:{
      fontSize:20,
      fontWeight:"bold"
     },
     price:{
      fontSize:30
     },
     buyNow:{
      backgroundColor:colors.color1,
      paddingVertical:5,
      paddingHorizontal:10,
      borderRadius:5
     },
     buyNowText:{
      color:"white"
     }
})