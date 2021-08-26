import { StyleSheet, Dimensions } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
      display:'flex',
      width:'100%',
      height:'70%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerButton:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        height:'20%'
    },
    button:{
        alignItems:"center",
        padding: 20,
        width:'25%',
        height:'90%',
        marginBottom:'2%',
    },
    textFontSize: {
        fontSize:20
    },
    imageNext:{
        width: 60,
        height:60,
    },
    imageNextOff:{
      width: 60,
      height:60,
      opacity:0.2
    },
    imagePrev:{
      width: 60,
      height:60,
      transform: [ { scaleX: -1} ]
    },
    imagePrevOff:{
        opacity: 0.2,
        width: 60,
        height:60,
        transform: [ { scaleX: -1} ]
    }
});