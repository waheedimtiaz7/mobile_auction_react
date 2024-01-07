import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import EmployeeTopBar from "../../components/EmployeeTopBar";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import EmployeeHomeDesign from "../../components/EmployeeHomeDesign";
import EmployeeDevices from "../../components/Employee/EmployeeDevices";
import EmployeeMobiles from "../../components/Employee/EmployeeMobiles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const EmployeeHome = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [fname, setfname] = useState(null);
  const [lname, setlname] = useState(null);
  const [dbImage, setDbImage] = useState(null);


  useEffect(() => {
    ftechUser = async () => {
      const userData =  await AsyncStorage.getItem('authUser');
      if(JSON.parse(userData)){
        const user = JSON.parse(userData);

        setfname(user.fname);
        setlname(user.lname);
        setDbImage(user.picture);
        setEmail(user.email);
        
      }
    }
    navigation.addListener('focus', () => {
    ftechUser();
    });
  }, [navigation]);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("")}>
          <Image
            source={{
              uri: "https://www.iconsdb.com/icons/preview/white/bell-2-xl.png",
            }}
            style={{
              width: 30,
              height: 30,
              marginRight: 9,
            }}
          />
        </TouchableOpacity>
      ),
    });
  });
  useEffect(() => {
    // Remove the back button from the header
    navigation.setOptions({
      headerLeft: null,
    });
  }, []);
  return (
    <View style={{ height:"100%" }}>
    <ImageBackground
      source={{
        uri: "https://wallpaperaccess.com/full/449895.jpg",
      }}
      style={{width: '100%', height: '100%'}}
    >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height:"30%"
            }}
          >
            <View>
              <Image
                source={{
                  uri: dbImage,
                }}
                style={{
                  height: 100,
                  width: 100,
                  marginLeft: 20,
                  borderRadius: 100,
                  top: -2,
                }}
              />
            </View>
            <View
              style={{
                marginLeft: 8,
                top: -20,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                {fname} {lname}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  // fontWeight:"bold",
                  fontStyle: "italic",
                  marginTop: 10,
                  marginLeft: 10,
                }}
              >
                {email}
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate("EmployeeAccount")}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    // fontWeight:"bold",
                    fontStyle: "italic",
                    marginTop: 10,
                  }}
                >
                  ---View Detail---
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <EmployeeMobiles/>
          <EmployeeDevices />
    </ImageBackground>
    <EmployeeTopBar />
    </View>
  );
};

export default EmployeeHome;

const styles = StyleSheet.create({});
