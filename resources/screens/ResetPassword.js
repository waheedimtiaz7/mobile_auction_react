import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Input from "../components/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { resetPassword } from '../Utils/api';
export default ResetPassword = ({ route, navigation }) => {
  const [email, setEmail] = useState(route.params.email);
  const [cpassword, setCpassword] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  useEffect(() => {

  }, []);
  const forget= async() => {

      if(code==''){
        alert('code is required');
      }else if(password!==cpassword){
        alert('Password and confirma password did not matched');
      } else{
        const data ={
          email:email, password:password, otp:code}
            resetPassword(data, navigation);
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
          marginTop: 30,
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
            Verification Code
          </Text>
          <Input
              icon="fax"
              placeholder="Code"
              onchange={(text) => setCode(text)}
              mode="outlined"
              editable='false'
              keyboard="number-pad"
              is_secure={false}
              is_required={true}
            />
        </View>
        
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
            Password
          </Text>
          <Input
              icon="lock"
              placeholder="New Password"
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
            marginBottom: 5,
            width: "80%",
          }}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >
            Confirm Password
          </Text>
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
