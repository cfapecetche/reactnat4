import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Header from '../Components/Header'
import Search from '../Components/Search'
import allItem from "../Data/items.json"
import InvItem from '../Components/InvItem'
import { useEffect, useState } from 'react'
import { colors } from '../Global/colors'


const ItemListCategories = ({navigation,route}) => {
  const {category} = route.params
  const [keyword,setKeyword] = useState("")
  const [items,setItems] = useState(allItem)

  useEffect(()=>{

    if(category){
      const itemsCategory = allItem.filter(item => item.category === category)
      const itemsFiltered = itemsCategory.filter(item => item.title.includes(keyword))
      setItems(itemsFiltered)
    }else{
      const itemsFiltered = allItem.filter(item => item.title.includes(keyword))
      setItems(itemsFiltered)
    }


  },[keyword])

  return (
    <>
      <Search setKeyword={setKeyword}/>
      <FlatList
        style={styles.container}
        data={items}
        keyExtractor={item => item.id}
        renderItem={({item})=> <InvItem item={item} navigation={navigation} route={route} />}
      />
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
 container:{
  width:"100%"
 },
 goBack:{
  width:"100%",
  backgroundColor:colors.color3,
  padding:10,
  paddingStart:40
 }
})