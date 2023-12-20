import { StyleSheet, Text, Image,useWindowDimensions, Pressable } from 'react-native'
import { colors } from '../Global/colors'


const InvItem = ({item ,navigation }) => {

  const {width} = useWindowDimensions()

  return (
    <Pressable style={styles.container}  onPress={()=>navigation.navigate("InvItem",{id:item.id})} >
      <Text style={width > 350 ? styles.text : styles.textMin}>{item.title}</Text>
      <Image
            style={styles.image}
            resizeMode='cover'
            source={{uri:item.thumbnail}}
        />
    </Pressable>
  )
}

export default InvItem

const styles = StyleSheet.create({
   container:{
        width:"80%",
        height:100,
        backgroundColor:colors.color1,
        marginHorizontal:"10%",
        marginVertical:10,
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        gap:30
    },
    text:{
      width:"60%",
      textAlign:"center",
      fontFamily:"Font1",
      fontSize:20
    },
    textMin:{
      width:"60%",
      textAlign:"center",
      fontSize:15
    },
    image:{
        minWidth:90,
        height:90,
        fontFamily:"Font1",
        width:"30%"
    }
})