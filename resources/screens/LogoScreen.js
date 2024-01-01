import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const LogoScreen = ({ navigation }) => {
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
          onPress={()=>navigation.navigate("Start")}

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
