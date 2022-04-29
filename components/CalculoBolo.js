import React from "react";
import {StyleSheet, Text} from "react-native";

export default function CalculaBolo(props){
    let texto = [];
    if(props.qtConvidados >= 1){
        if((props.qtConvidados * 250) >= 1000){
            texto.push(
                <Text style={styles.texto}>
                    Quantidade de Bolo: {(props.qtConvidados * 250)/1000}Kg
                </Text>
            );
        }
        else{
            texto.push(
                <Text style={styles.texto}>
                    Quantidade de Bolo: {props.qtConvidados * 250}g
                </Text>
            );
        }
        
    }
    return(
        <>
            {texto} 
        </>
    );
}

const styles = StyleSheet.create({
    texto:{
        fontSize:20,
        marginLeft: 20,
        marginRight: 20,
        padding: 4,
        textAlign: 'center',
        backgroundColor: '#EB4A42',
        color: '#fff',
    }
});