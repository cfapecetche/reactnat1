import {View,FlatList,Text,Button,StyleSheet} from "react-native"
import CardItem from "./CardItem"

const ListItem = ({items,onModal}) => {
    return <View style={styles.listContainer}>
                <FlatList
                    data={items}
                    keyExtractor={item => item.id}
                    renderItem={({item})=> <CardItem item={item} onModal={onModal}/> }
                />
            </View>
}
const styles = StyleSheet.create({
    listContainer : {

        width:"100%"
      }
})

export default ListItem