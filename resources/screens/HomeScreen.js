import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Mobiles from "../components/Mobiles";
import UserTopBar from "../components/UserTopBar";
import UserHome from "../components/UserHome";
import { ImageBackground } from "react-native";

const HomeScreen = ({ navigation }) => {
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
        uri:
          "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3865.jpg?size=626&ext=jpg",
      }}
      style={{width: '100%', height: '100%'}}
    >
      <View>
        <ScrollView>
          <View>
            <ScrollView
              horizontal={true}
              style={{
                marginTop: 10
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Device Form")} >
                <Image
                  style={{ width: 500, height: 200, marginRight: 5 }}
                  source={require("../../assets/images/01.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 500,
                    height: 200,
                    backgroundColor: "red",
                    marginRight: 5,
                  }}
                  source={require("../../assets/images/02.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 500,
                    height: 200,
                    backgroundColor: "red",
                    marginRight: 5,
                  }}
                  source={require("../../assets/images/03.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => navigation.navigate("AllMobiles")}>
                <Image
                  style={{
                    width: 500,
                    height: 200,
                    backgroundColor: "red",
                    marginRight: 5,
                  }}
                  source={require("../../assets/images/04.jpg")}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
          <Mobiles />
          <UserHome />
        </ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate("Device Form")}
          style={{
            height: 50,
            width: 50,
            backgroundColor: "#0d75bf",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            marginTop:-40,
            marginLeft: 1,
          }}
        >
          <Image
            source={{
              uri: "https://www.iconsdb.com/icons/preview/white/add-xl.png",
            }}
            style={{
              height: 40,
              width: 40,
            }}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
    <UserTopBar navigation={navigation}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
