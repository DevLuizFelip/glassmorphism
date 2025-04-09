import { Text, View, StyleSheet } from "react-native";
import { style } from "./style";
import { BlurView } from "expo-blur";


export function CreditCard(){
    return(
        <View style={style.container}>
            <BlurView intensity={20} tint="light" style={StyleSheet.absoluteFill}/>

            <Text style={style.title} >Meu Cartão</Text>

            <View style={style.footer}>
                <Text style={style.name}>Luiz Felipe</Text>

                <View style={style.flag} >
                    <View style={[style.circle, style.red]}/>
                    <View style={[style.circle, style.orange]}/>
                </View>
            </View>

        </View>
    );
}