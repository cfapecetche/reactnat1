import {View , Text , Button,StyleSheet } from "react-native"


const CardItem = ({item,onModal}) => {
    return <View style={styles.cardItem}>
                <Text>{item.desc}</Text>
                <Text>{item.inv}</Text>
                <Button title="-" onPress={() => onModal(item)}/>
                
            </View> 
}
const styles = StyleSheet.create({
    cardItem:{
  
        flexDirection:"row",
        padding:10,
        margin:10,
        justifyContent:"space-around",
        alignItems:"center",
        borderWidth:4
      }
})
export default CardItem