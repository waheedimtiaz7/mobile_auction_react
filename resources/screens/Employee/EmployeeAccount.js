import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { TextInput } from "react-native-paper";
import { TouchableOpacity, ImageBackground } from "react-native";
const EmployeeAccount = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [fullname, setFullname] = useState("");

  return (
    <View>
      <ImageBackground
        source={{
          uri:
            "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3865.jpg?size=626&ext=jpg",
        }}
        style={{
          height: "100%",
        }}
      >
        <View style={{ height:"100%", flex:1, width:'90%', justifyContent:"center", alignItems:"center",alignSelf:"center"}}>

        <TouchableOpacity
          onPress={() => navigation.navigate("AdminProfile")}
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
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("EmployeeComplaints")}
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
            Complaints
          </Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
      
    </View>
  );
};

export default EmployeeAccount;

const styles = StyleSheet.create({});
