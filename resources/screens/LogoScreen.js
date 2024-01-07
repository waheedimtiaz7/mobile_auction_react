import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogoScreen = ({ navigation }) => {

  const gotScreen = async () =>{
      const userData =  await AsyncStorage.getItem('authUser');
      if(JSON.parse(userData)){
        const user = JSON.parse(userData);
        if(user.type =='Customer'){
          navigation.navigate("Home");
        }else if(user.type =='Employee'){
          navigation.replace("EmployeeDashboard");
        }else{
          navigation.navigate("Start");
        }
      
    }else{
      navigation.navigate("Start");
    }
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#00BFFF",
        height: "100%",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../assets/logo.png")}
          style={{
            width: 200,
            height: 200,
            borderRadius: 10,
            resizeMode: "contain",
            marginTop: 110,
          }}
        />
        <Text
          style={{
            fontSize: 18,
            color:'white',
            
          }}
        >
          {"\b\b"}Unleash Your Bidding Potential:{"\n     "}
              "Mobile Auctions Made Easy!"
        </Text>
      </View>
      <View style={{
        justifyContent:'space-evenly',
        marginLeft:20
      }}> 
      
          <TouchableOpacity
          onPress={()=>gotScreen()}

          style={{ 
            width: '90%',
            height: 40,
            backgroundColor: '#3346FF',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            marginTop:180
    }}
          >
            <Text style={{
              color: '#fff',
              fontSize: 16,
      }}>
      .....  Get started  .....
      </Text>
          </TouchableOpacity>
         
      </View>   
    </SafeAreaView>
  );
};

export default LogoScreen;

const styles = StyleSheet.create({});
