import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { useNavigation } from "@react-navigation/native";

const EmployeeDevices = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const navigate = (screenName) => {
    navigation.navigate(screenName);
  };
  useEffect(() => {
    const ref = collection(db, "mobiles");
    onSnapshot(ref, (mobiles) =>
      setData(
        mobiles.docs.map((mobile) => ({
          id: mobile.id,
          data: mobile.data(),
        }))
      )
    );
  }, []);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginBottom: 20,
            marginTop: 10,
            marginLeft: 10,
            color: "white",
            fontStyle: "italic",
            fontWeight: "bold",
            width: "48%",
          }}
        >
          DEVICES
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          position: "relative",
        }}
      >
        {data.map((item, key) => (
          <View
            key={key}
            style={{
              alignItems: "flex-start",
              backgroundColor: "white",
              resizeMode: "contain",
              position: "relative",
              borderRadius: 25,
              marginLeft: 12,
              height: 150,
              width: 260,
              elevation: 15,
            }}
          >
          
            <Image
              source={{
                uri: item.data.picture,
              }}
              style={{
                width: 70,
                height: 100,
                borderRadius: 15,
                backgroundColor: "white",
                resizeMode: "contain",
                position: "relative",
                marginLeft: 9,
                top: 25,
              }}
            />
            <View
              style={{
                marginLeft: 95,
                alignItems: "center",
                top: -87,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 25,
                  marginBottom: 6,
                }}
              >
                {item.data.device_name}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  marginBottom: 15,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Model::{"\b"}
                </Text>
                {item.data.model}
              </Text>
              <Text
                style={{
                  top: 20,
                  marginTop: -32,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    Price:: {"\b"}
                  </Text>
                  {item.data.price}
                </Text>
                /Rs
              </Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("priceSuggest", {
                  id: item.id,
                })
              }
              style={{
                backgroundColor: "#00BFFF",
                width: "48%",
                justifyContent: "center",
                alignItems: "center",
                height: 25,
                borderRadius: 90,
                position: "relative",
                marginTop: -55,
                marginLeft: 109,
              }}
            >
              <Text
                style={{
                  color: "black",
                }}
              >
                Learn More
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default EmployeeDevices;

const styles = StyleSheet.create({});
