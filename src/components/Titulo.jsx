import { StyleSheet, Text, View } from "react-native"

const Titulo = ({title = "Inventario" }) => {

return(
    <View style={styles.containertit}>
         <Text style={styles.titulo}>{title}</Text>
    </View> 
)

}

export default Titulo

const styles = StyleSheet.create({
    
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



