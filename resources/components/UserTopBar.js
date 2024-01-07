import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { logoutUser } from '../Utils/api';



const UserTopBar = ({navigation}) => {
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
            uri: "https://www.iconsdb.com/icons/preview/white/home-5-xxl.png",
          }}
          style={styles.image}
          onPress={() => navigation.navigate("Home")}
        />
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigate("AllMobiles")}
      >
        <Image
          source={{
            uri:
              "https://www.iconsdb.com/icons/preview/white/mobile-phone-8-xl.png",
          }}
          style={styles.image}
        />
        <Text>Devices</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() =>
          navigate("Account")
        }
      >
        <Image
          source={{
            uri: "https://www.iconsdb.com/icons/preview/white/user-2-xl.png",
          }}
          style={styles.image}
        />
        <Text>Account</Text>
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

export default UserTopBar;
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