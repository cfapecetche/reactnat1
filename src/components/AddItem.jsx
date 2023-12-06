import {View , TextInput , Button ,StyleSheet} from "react-native"


const AddItem = ({valueDesc,valueInv,onChangeDesc,onChangeInv,addItem}) => {

    return     <View style={styles.inputContainer}>
                     
                    <TextInput 
                    style={styles.input}
                    placeholder="Descripción"
                    value={valueDesc}
                    onChangeText={(t)=> onChangeDesc(t)}
                    />
                    <TextInput 
                    style={styles.input}
                    placeholder="Inv. Num."
                    value={valueInv}
                    onChangeText={(t)=> onChangeInv(t)}
                    />
                    <Button title="+" onPress={addItem} />
                </View>
}
const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        justifyContent:"space-around"
      },
      input:{
        borderWidth:4,
        paddingHorizontal:10,
        paddingVertical:5,
        width:150
      }
})

export default AddItem