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
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase.config";
import EmployeeDevices from "../../components/EmployeeDevices";
import Mobiles from "../../components/Mobiles";
import { useNavigation } from "@react-navigation/native";

const EmployeeHome = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [fname, setfname] = useState(null);
  const [lname, setlname] = useState(null);
  const [dbImage, setDbImage] = useState(null);


  useEffect(() => {
    const readInfo = async () => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setfname(docSnap.data().fname);
        setlname(docSnap.data().lname);
        setDbImage(docSnap.data().picture);
        setEmail(docSnap.data().email);
      }
    };
    readInfo();
  }, [email]);
  useLayoutEffect(() => {
    const Notification = () => {
      Notification.then(() => {
        navigation.replace("Notification");
      });
    };
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={Notification}
          style={{
            marginRight: 10,
          }}
        >
          <Image
            source={{
              uri: "https://www.iconsdb.com/icons/preview/white/bell-2-xl.png",
            }}
            style={{
              width: 30,
              height: 30,
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
    <ImageBackground
      source={{
        uri: "https://wallpaperaccess.com/full/449895.jpg",
      }}
    >
      <ScrollView>
        <View
          style={{
            paddingBottom: 50,
          }}
        >
          <EmployeeTopBar />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",

              height: "32%",
            }}
          >
            <View>
              <Image
                source={{
                  uri: dbImage,
                }}
                style={{
                  height: 180,
                  width: 180,
                  // marginLeft: 160,
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
                  fontSize: 26,
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
                onPress={() => navigation.navigate("AdminProfile",{
                  id: auth.currentUser.uid,
                })}
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
          <Mobiles />
          <EmployeeDevices />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default EmployeeHome;

const styles = StyleSheet.create({});
