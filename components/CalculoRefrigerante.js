import React from "react";
import {StyleSheet, Text} from "react-native";

export default function CalculaRefri(props){
    let texto = [];
    if(props.qtConvidados >= 1){
        if((props.qtConvidados * 600) >= 1000){
            texto.push(
                <Text style={styles.texto}>
                    Quantidade de Refrigerante: {(props.qtConvidados * 600)/1000}L
                </Text>
             );
        }
        else{
            texto.push(
                <Text style={styles.texto}>
                    Quantidade de Refrigerante: {props.qtConvidados * 600}mL
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
        marginTop: 20,
        fontSize:20,
        marginLeft: 20,
        marginRight: 20,
        padding: 4,
        textAlign: 'center',
        backgroundColor: '#EB4A42',
        color: '#fff',
    }
});