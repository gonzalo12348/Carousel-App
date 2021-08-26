import { StyleSheet, Dimensions } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");



export const styles = StyleSheet.create({
    imagesContainer: {
        width: windowWidth - 10,
        marginHorizontal:5,
        height: '95%',
        borderRadius:5,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    contHeader:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        height:'45%',
        width:'95%',
    },
    image: {
        width: '95%',
        height: '50%',
        borderRadius:5
    },
    contImg:{
        width:'49.5%',
        position:'relative',
        zIndex:1
    },
    titleImg:{
        color:'white',
        display:'flex',
        position:'relative',
        bottom:'20%',
        left:'10%',
        fontSize:16,
        opacity:0.8,
        zIndex:2
    },
    titleImgMain:{
        color:'white',
        position:'relative',
        fontSize:20,
        opacity:0.8,
        bottom:'10%',
    },  
    imageDuos:{
        width:'100%',
        height:'99%',
        borderRadius:5
    }
})

