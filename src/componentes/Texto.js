import React from "react";
import { Text , StyleSheet } from "react-native";

export default function Texto({ children, style}){
    let estilo = styles.texto;

    if(style?.fontWeight === 'bold'){
        estilo = styles.textBold
    }

    return <Text style={[style, estilo]}>{children}</Text> 
}


const styles = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: 'normal'
    },
    
    textBold: { 
        fontFamily: "MontserratBold",
        fontWeight: 'normal'
    }
})
