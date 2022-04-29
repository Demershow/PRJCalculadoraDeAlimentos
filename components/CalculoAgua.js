import React from "react";
import {StyleSheet, Text} from "react-native";

export default function CalculaAgua(props){
    let texto = [];
    if(props.qtConvidados >= 1){
        if((props.qtConvidados * 200) >= 1000){
            texto.push(
                <Text style={styles.texto}>
                    Quantidade de Água: {(props.qtConvidados * 200)/1000}L
                </Text>
            );
        }
        else{
            texto.push(
                <Text style={styles.texto}>
                    Quantidade de Água: {props.qtConvidados * 200}mL
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
        backgroundColor: '#3E498A',
        color: '#fff',
    }
});