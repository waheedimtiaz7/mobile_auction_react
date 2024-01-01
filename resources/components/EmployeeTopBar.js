import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const EmployeeTopBar = () => {
  const navigation = useNavigation();
  const navigate = (screenName) => {
    navigation.navigate(screenName);
  };
  const logout = () => {
    signOut(auth).then(() => {
      navigation.replace("Login");
    });
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#00BFFF",
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: 8,
      }}
    >
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://www.iconsdb.com/icons/preview/white/house-xl.png",
          }}
          style={{
            width: 30,
            height: 30,
          }}
          onPress={() => navigate("Dashboard")}
        />
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigate("Auctionmanage")}
      >
        <Image
          source={{
            uri: "https://www.iconsdb.com/icons/preview/white/gavel-2-xl.png",
          }}
          style={{
            width: 30,
            height: 30,
          }}
        />
        {/* <Image
    source={{ uri: dbImage }}
    style={{ width: 100, height: 100, borderRadius: 50 }}
  /> */}
        <Text>Auction</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() =>
          navigation.navigate("Mobile", {
            type: "Employee",
          })
        }
      >
        <Image
          source={{
            uri:
              "https://www.iconsdb.com/icons/preview/white/mobile-marketing-xl.png",
          }}
          style={{
            width: 30,
            height: 30,
          }}
        />
        {/* <Image
    source={{ uri: dbImage }}
    style={{ width: 100, height: 100, borderRadius: 50 }}
  /> */}
        <Text>Devices</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={logout}
      >
        <Image
          source={{
            uri: "https://www.iconsdb.com/icons/preview/white/logout-xl.png",
          }}
          style={{
            width: 30,
            height: 30,
          }}
        />
        {/* <Image
    source={{ uri: dbImage }}
    style={{ width: 100, height: 100, borderRadius: 50 }}
  /> */}
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EmployeeTopBar;

const styles = StyleSheet.create({});
