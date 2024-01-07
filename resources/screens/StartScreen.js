import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';
const StartScreen = ({ navigation }) => {
  useEffect(() => {
    ftechUser = async () => {
      const userData =  await AsyncStorage.getItem('authUser');
      if(JSON.parse(userData)){
        const user = JSON.parse(userData);
        if(user.type =='Customer'){
          navigation.navigate("Home")
        }else if(user.type =='Employee'){
          navigation.replace("EmployeeDashboard");
        }
        
      }
  };
  ftechUser();
  }, []);
  return (
    <View
      style={{
        lex: 1,
        backgroundColor:'#00BFFF',
        height:'100%',
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/logo.png")}
          style={{
            width: 200,
            height: 200,
            borderRadius: 10,
            resizeMode: "contain",
            marginTop: 20,
          }}
        />
        <Text
          style={{
            fontWeight:'bold',
            fontSize:25,
            fontStyle:'italic',
            color:'white',
          }}
        >
          Mobile Auction
        </Text>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          paddingVertical:90,
          paddingHorizontal:80,
          
          
         
          
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{ 
            width: '75%',
            height: 45,
            backgroundColor: 'white',
            alignSelf:"center",
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            
    }}
        >
          <Text
            style={{
              color: "#00BFFF",
              fontSize: 16,
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={{ 
            width: '75%',
            height: 45,
            backgroundColor: 'white',
            alignSelf:"center",
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            marginTop:5,
            
    }}
        >
          <Text
            style={{
              color: "#00BFFF",
              fontSize: 16,
            }}
          >
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
