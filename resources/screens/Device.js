import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AllDevices from "../components/AllDevices";
import MyDevices from "../components/MyDevices";
import { getDevices, getMyDevices } from '../Utils/api';
const Device = () => {
  const navigation = useNavigation();

  const [userId, setUserId] = useState("All");
  const [data, setData] = useState([]);
  useEffect(() => {
    getTabDevices('All');
  }, []);

  const getTabDevices = async (type) =>{
      if(type == 'All'){
            const devices = await getDevices();
            setData(devices);
            setUserId(type);
        }else{
          const myDevices = await getMyDevices();
            setData(myDevices);
            setUserId(type);
        }
  }
  return (
    <ImageBackground
      source={{
        uri:
          "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3865.jpg?size=626&ext=jpg",
      }}
      style={{
        height: "100%",
      }}
    >
      <View
        style={
          {
            //   marginTop: 50,
          }
        }
      >
        <ScrollView
          vertical
          showsHorizontalScrollIndicator={false}
          style={{
            position: "relative",
            //   top:-80,
          }}
        >
          <View
            style={{
              // marginVertical:30,
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{
                width: "45%",
                height: 45,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                backgroundColor: "#0d75bf",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => getTabDevices("All")}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 16,
                  fontStyle: "italic",
                }}
              >
                All Devices
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: "45%",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                height: 45,
                backgroundColor: "#0d75bf",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => getTabDevices('User')}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 16,
                  fontStyle: "italic",
                }}
              >
                My Devices
              </Text>
            </TouchableOpacity>
          </View>
          
            <View >
              {userId !== "All" && (
                <MyDevices data={data} />
              )}
              {userId === "All" && (
                <AllDevices data={data} />
              )}
            </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Device;

const styles = StyleSheet.create({});
