import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase.config";

const EmployeeHomeDesign = () => {
  const [email, setEmail] = useState(null);
  const [fname, setfname] = useState(null);
  const [lname, setlname] = useState(null);
  const [dbImage, setDbImage] = useState(null);
  const navigation = useNavigation();
  const navigate = (screenName) => {
    navigation.navigate(screenName);
  };

  const data = [
    {
      id: 1,
      title: "Iphone",
      model: "Iphone_11",
      image:
        "data:image/jpeg;base64,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",
      Starting_price: 90000,
    },
    {
      id: 2,
      title: "Samsung",
      model: "Galaxy",
      image:
        "https://freepngimg.com/thumb/samsung_mobile_phone/5-2-samsung-mobile-phone-png-hd.png",
      Starting_price: 40000,
    },
    {
      id: 3,
      title: "Samsung",
      model: "Galaxy Note 9",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_xLnesGEIHr95W4NmcZHQpE5YT4rWLIJO1NmrzHfncnl--Adr6ssf8fKbfEGCLQPA_8&usqp=CAU",
      Starting_price: 100000,
    },
  ];

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
          Ongoing Auctions
        </Text>

        <TouchableOpacity onPress={() => navigate("Auctionmanage")}>
          <Text
            style={{
              color: "black",
              fontSize: 16,
              marginLeft: 100,
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
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
                uri: item.image,
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
                {item.title}
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
                {item.model}
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
                    Latest Bid:: {"\b"}
                  </Text>
                  {item.Starting_price}
                </Text>
                /Rs
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigate("Device Detail")}
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

export default EmployeeHomeDesign;

const styles = StyleSheet.create({});
