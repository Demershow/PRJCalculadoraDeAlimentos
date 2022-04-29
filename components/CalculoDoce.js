import React from "react";
import {StyleSheet, Text} from "react-native";

export default function CalculaDoces(props){
    let texto = [];
    if(props.qtConvidados >= 1){
        texto.push(
            <Text style={styles.texto}>
                Quantidade de Doces: {props.qtConvidados * 3} unidades
            </Text>
        );
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
        backgroundColor: '#3E498A',
        color: '#fff',
    }
});