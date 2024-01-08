import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { logoutUser } from '../Utils/api';

const EmployeeTopBar = () => {
  const navigation = useNavigation();
  const navigate = (screenName) => {
    navigation.navigate(screenName);
  };
  const logout = () => {
    logoutUser(navigation);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Image
          source={{
            uri: "https://www.iconsdb.com/icons/preview/white/house-xl.png",
          }}
          style={{
            width: 30,
            height: 30,
          }}
          onPress={() => navigate("EmployeeDashboard")}
        />
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
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
        style={styles.buttonContainer}
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
        <Text>Devices</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={logout}
      >
        <Image
          source={{
            uri: "https://www.iconsdb.com/icons/preview/white/logout-xl.png",
          }}
          style={styles.image}
        />
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EmployeeTopBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 5,
    paddingBottom: 2,
    backgroundColor: "#00BFFF",
    height: 60,
    position:"absolute",
    width:"100%",
    bottom:0
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 30,
    height: 30,
  },
});
