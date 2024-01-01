import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Input from "../components/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { forgetPassword } from '../Utils/api';
export default ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  useEffect(() => {

  }, []);
  const forget= async() => {

      if(email==''){
        alert('Email is required');
      } else{
        forgetPassword(email, password, navigation, deviceToken);
      }
    
  };

  return (
    <KeyboardAwareScrollView
      style={{
        backgroundColor: "#00BFFF",
        height: "100%",
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
      </View>

      <View
        style={{
          marginLeft: 50,
          marginTop: 60,
          backgroundColor: "#00BFFF",
        }}
      >
        <View
          style={{
            marginBottom: 5,
            width: "80%",
          }}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >
            Email
          </Text>
          <Input
              icon="envelope"
              placeholder="Email"
              value={email}
              onchange={(text) => setEmail(text)}
              mode="outlined"
              keyboard="email-address"
              is_secure={false}
              is_required={true}
            />
        </View>
        
      </View>

      <TouchableOpacity
        onPress={forget}
        style={{
          width: "75%",
          height: 40,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          marginTop: 40,
          marginLeft: 40,
        }}
      >
        <Text
          style={{
            color: "#00BFFF",
            fontSize: 16,
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>

    </KeyboardAwareScrollView>
  );
};
