import React,{useState, useEffect} from "react";
import {StyleSheet, View, Text, SafeAreaView, StatusBar, YellowBox, Button} from "react-native";
import Form from "./src/components/Form";
import ResultCalculation from "./src/components/ResultCalculation";
import Footer from "./src/components/Footer";
import colors  from "./src/utils/colors";
YellowBox.ignoreWarnings(['Picker has been extracted']);

export default function App(){
  const [capital,setCapital]=useState(null);
  const [interest, setInterest]=useState(null);
  const [months, setMonths]=useState(null);
  const [total, setTotal]=useState(null);
  const [errorMessage, setErrorMessage]=useState("");

  useEffect(() => {
    if(capital && interest && months) calculate();
    else reset();
  }, [capital, interest, months]);

  const calculate=() =>{
    reset();
    if(!capital){
      setErrorMessage("Añade el termino 1.");
    } else if(!interest){
      setErrorMessage("Añade el termino 2.");
    }else if(!months){
      setErrorMessage("Añade la operacion.");
    }else{
        if (months="+") {
          const res = capital + interest;
          console.log(res);
        };
        if (months="-") {
          const res = capital - interest;
        };
        if (months="*") {
          const res = capital * interest;
        };
        if (months="/") {
          const res = capital / interest;
        };
      }
      
    }
    
{
  }
  const reset = () =>{
    setErrorMessage("");
    setTotal(null);
  }
  return(
    <>
    <StatusBar barStyle="light-content"/>
     <SafeAreaView style={styles.safeArea}>
       <View style={styles.background}/>
      <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
      <Form
         setCapital={setCapital}
         setInterest={setInterest}
         setMonths={setMonths}
       />
     </SafeAreaView>
     <ResultCalculation
     capital={capital}
     interest={interest}
     months={months}
     total={total} 
     errorMessage={errorMessage}
     />
     <Footer calculate={calculate}/>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea:{
  height: 290,
  alignItems: "center",
  },
  background:{
    backgroundColor: colors.PRYMARY_COLOR,
    height:200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1,
  },
  titleApp:{
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  },
});