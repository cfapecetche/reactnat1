import { useState } from "react"
import { View ,Text, StyleSheet,TextInput, Button,FlatList,Modal } from "react-native"
import uuid from 'react-native-uuid'
import ModalDelete from "./src/components/ModalDelete"
import AddItem from "./src/components/AddItem"
import ListItem from "./src/components/ListItem"
import Titulo from "./src/components/Titulo"


const App = () => {

    const [newDescItem,setNewDescItem] = useState("")
    const [newInvItem,setNewInvItem] = useState("")
    const [items,setItems] = useState([])
    const [itemSelected,setItemSelected] = useState({})
    const [modalVisible,setModalVisible] = useState(false)

    const handlerAddItem = () => {

        const newItem = {
          id:uuid.v4(),
          desc:newDescItem,
          inv:newInvItem
        }
       
        setItems(current => [...current,newItem] )
        setNewDescItem("")
        setNewInvItem("")
    }

    const handlerModal = (item) => {
       setItemSelected(item)
       setModalVisible(true)
             
     }
    const handlerDeleteItem = () => {
      setItems(current => current.filter(item => item.id !== itemSelected.id))
      setModalVisible(false)
    }

    const handlerClose = () => {
        setModalVisible(false)
            
    }

    return  <View  style={styles.container}>
              <Titulo />

              <AddItem
                valueDesc = {newDescItem}
                valueInv = {newInvItem}
                onChangeDesc = {setNewDescItem}
                onChangeInv = {setNewInvItem}
                addItem = {handlerAddItem}
              />
              <ListItem
                items = {items}
                onModal = {handlerModal}
              />
              <ModalDelete
                item = {itemSelected}
                visible={modalVisible}
                onModal = {handlerModal}
                onClose = {handlerClose}
                onDelete={handlerDeleteItem}
              />
             
           </View>
    
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"start",
      alignItems:"center",
      marginTop:30
    },
    containertit:{
      backgroundColor:"#348BED",
      width:"100%",
      height:80,
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center"
      },

    titulo:{
      fontSize:30, 
      fontWeight:"bold",
      textDecorationStyle:"solid"
      
            
    }
    


 
  })



export default App