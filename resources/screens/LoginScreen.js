import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Input from "../components/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { login, resetPassword } from '../Utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
export default LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  useEffect(() => {
    ftechToken = async () => {
        const token =  await AsyncStorage.getItem('authToken');
        if(token){
          navigation.replace("Home");
        }
    };
    ftechToken();
  }, []);
  const loginUser = async() => {
    let deviceToken = '';
    /* let token;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig.extra.eas.projectId,
      });
    
    } else {
      alert('Must use physical device for Push Notifications');
    }
      if(token.data !=undefined){
        deviceToken = token.data;
      } */

      if(email==''){
        alert('Email is required');
      } else if(password==''){
        alert('Password is required');
      }else{
        login(email, password, navigation, deviceToken);
      }
    
  };

  const forget = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Reset Password request sent successfully. And check your Gmail Account");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
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
        <View
          style={{
            width: "80%",
          }}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >
            Password
          </Text>
          <Input
              icon="lock"
              placeholder="Password"
              value={password}
              onchange={(text) => setPassword(text)}
              mode="outlined"
              keyboard="default"
              is_secure={true}
              is_required={true}
            />
        </View>
      </View>

      <View>
      <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
          <Text
            style={{
              color: "black",
              fontSize: 16,
              marginLeft: 185,
              marginTop: 5,
            }}
          >
            forget password?
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={loginUser}
        style={{
          width: "75%",
          height: 40,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          marginTop: 90,
          marginLeft: 40,
        }}
      >
        <Text
          style={{
            color: "#00BFFF",
            fontSize: 16,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text
          style={{
            color: "black",
            fontSize: 16,
            marginLeft: 100,
            marginTop: 5,
          }}
        >
          Don't Have An Account?SIGN UP.
        </Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};
