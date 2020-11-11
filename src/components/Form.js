import React from "react";
import {SafeAreaView, StatusBar, StyleSheet, TextInput, View} from "react-native";
import colors from "../utils/colors";
import RNPickerSelect from 'react-native-picker-select';
export default function Form(props){
    const {setCapital, setInterest, setMonths} = props;
    console.log(setCapital);

    return(
        <View style={styles.viewform}>
            <View style={styles.viewInputs}>
              <TextInput placeholder="Termino 1" keyboardType="numeric" style={styles.input} onChange={e=>setCapital(e.nativeEvent.text)}></TextInput>
              <TextInput placeholder="Termino 2" keyboardType="numeric" style={[styles.input, styles.inputPorcentaje]} onChange={e=>setInterest(e.nativeEvent.text)}></TextInput>
            </View>
            <RNPickerSelect style={pickerSelectStyle}
            placeholder={{
                label: "Operación",
                value: null,
                color: "black",

            }}
            useNativeAndroidPickerStyle={false}
            onValueChange={(value) => setMonths(value)}
            items={[
                { label: 'Sumar', value: "+" },
                { label: 'Resta', value: "-" },
                { label: 'Multiplicacion', value: "*"},
                { label: 'Divicion', value: "/"},
            ]}
        />
        </View>
        
    );
}

const styles = StyleSheet.create({
    viewform:{
        position: "absolute",
        bottom: 0,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: "center"


    },
    viewInputs:{
        flexDirection: "row",
    },

    input:{
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PRYMARY_COLOR,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginTop: 10,
        color: "#000",
        paddingHorizontal: 20,


    },
    inputPorcentaje:{
        width: "50%",
        marginLeft: 5,
    }

});
const pickerSelectStyle = StyleSheet.create({
    inputIOS:{
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 8,
        color: "black",
        paddingRight: 30,
        backgroundColor: "#fff"
    },
    inputAndroid:{
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 8,
        color: "black",
        paddingRight: 30,
        backgroundColor: "#fff"
    }
});
