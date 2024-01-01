import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { registerUser } from '../Utils/api';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import Input from "../components/Input";
export default RegistrationScreen = ({ navigation }) => {
  const [value, setValue] = useState(null);

  
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [address, setAddress] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [phone, setPhone] = useState("");

  const signup = async() => {
    let token;
    let deviceToken='';
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      
      /* if (finalStatus === 'granted') {
        token = await Notifications.getExpoPushTokenAsync({
          projectId: Constants.expoConfig.extra.eas.projectId,
        });
      } */
     
    
    }
     /*  if(token.data !=undefined){
        deviceToken = token.data;
      } */
      if(first_name==''){
        alert('First name is required');
      }else if(last_name==''){
        alert('Last name is required');
      }else if(email==''){
        alert('Email is required');
      }else if(phone==''){
        alert('Phone is required');
      }else if(address==''){
        alert('Address is required');
      }else if(password!==cpassword){
          alert('Password and confirma password did not matched');
      }else{
        const user = {
          device_token: deviceToken,
          password: password,
          first_name: first_name,
          last_name: last_name,
          address: address,
          phone: phone,
          email: email
        }
        registerUser(user, navigation);
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 33,
            marginBottom: 20,
            marginTop: 10,
            color: "white",
            fontStyle: "italic",
            fontWeight: "bold",
            width: "100%",
            textAlign: "center",
          }}
        >
          Create an Account
        </Text>
        <View
          style={{
            width: "100%",
            backgroundColor: "#00BFFF",
            borderRadius: 4,
            padding: 20,
            marginTop: 60,
            marginLeft: 60,
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              marginBottom: 8,
              width: "80%",
            }}
          >
            <Input
              icon="user"
              placeholder="First Name"
              value={first_name}
              onchange={(text) => setFirstName(text)}
              mode="outlined"
              keyboard="default"
              is_secure={false}
              is_required={true}

            />
          </View>
          <View
            style={{
              marginBottom: 8,
              width: "80%",
            }}
          >
            <Input
              icon="user"
              placeholder="Last Name"
              value={last_name}
              onchange={(text) => setLastName(text)}
              mode="outlined"
              keyboard="default"
              is_secure={false}
              is_required={true}
            />
          </View>

          <View
            style={{
              width: "80%",
              marginBottom: 8,
            }}
          >
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
              marginBottom: 8,
            }}
          >
            <Input
              icon="phone"
              placeholder="Phone"
              value={phone}
              onchange={(text) => setPhone(text)}
              mode="outlined"
              keyboard="phone-pad"
              is_secure={false}
              is_required={true}
            />
          </View>
          <View
            style={{
              width: "80%",
            }}
          >
            <Input
              icon="location-arrow"
              placeholder="Address"
              value={address}
              onchange={(text) => setAddress(text)}
              mode="outlined"
              keyboard="default"
              is_secure={false}
              is_required={true}
            />
          </View>

          <View
            style={{
              width: "80%",

              marginTop: 8,
            }}
          >
          
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
          <View
            style={{
              width: "80%",

              marginTop: 8,
            }}
          >
          
          <Input
              icon="lock"
              placeholder="Confirm Password"
              value={cpassword}
              onchange={(text) => setCpassword(text)}
              mode="outlined"
              keyboard="default"
              is_secure={true}
              is_required={true}
            />
          </View>
        </View>
      
      </View>
      <TouchableOpacity
        onPress={signup}
        style={{
          width: "75%",
          height: 40,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          marginTop: 70,
          marginLeft: 40,
          top: -20,
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
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text
          style={{
            color: "black",
            fontSize: 16,
            marginLeft: 100,
            top: -20,
          }}
        >
          You Have An Account?Login.
        </Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};
