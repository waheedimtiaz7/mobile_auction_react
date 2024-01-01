import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const AdminTopBar = () => {
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
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image
          source={{
            uri: "https://www.iconsdb.com/icons/preview/white/house-xl.png",
          }}
          style={styles.image}
          onPress={() => navigate("Dashboard")}
        />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigate("Users")}>
        <Image
          source={{
            uri:
              "https://www.iconsdb.com/icons/preview/white/conference-xl.png",
          }}
          style={styles.image}
        />
        <Text>Users</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate("Auctionmanage")}
      >
        <Image
          source={{
            uri: "https://www.iconsdb.com/icons/preview/white/gavel-2-xl.png",
          }}
          style={styles.image}
        />
        <Text>Auction</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Mobile", {
            type: "Admin",
          })
        }
      >
        <Image
          source={{
            uri:
              "https://www.iconsdb.com/icons/preview/white/mobile-marketing-xl.png",
          }}
          style={styles.image}
        />
        <Text>Devices</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={logout}>
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

export default AdminTopBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00BFFF",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 8,
  },
  image: {
    width: 30,
    height: 30,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});
