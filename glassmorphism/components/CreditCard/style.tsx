import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        width: '100%',
        height: 200,
        backgroundColor:'rgba(255,255,255,0.3)',
        padding:24,
        borderRadius: 12,
        justifyContent:'space-between',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)'
    },
    name:{
        fontSize:16,
        color:'white',
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowOffset: {width:2, height:2},
        textShadowRadius: 2,
        fontWeight: '700'
    },
    title:{
        fontSize:14,
        fontWeight: '600',
        color:'rgba(255,255,255,0.5)'
    },
    footer:{
        flexDirection: 'row',
        justifyContent:"space-between" 
    },
    flag:{
        flexDirection:'row'
    },
    circle:{
        width:24,
        height:24,
        borderRadius: 12,
        overflow:'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.5)'
    },
    red:{
        backgroundColor:'rgba(255,0,0,0.5)',
        left:8
    },
    orange:{
        backgroundColor:'rgba(255,165,0,0.5)'
    }
});