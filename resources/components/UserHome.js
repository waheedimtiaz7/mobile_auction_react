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
import { getMyDevices } from '../Utils/api';
import { ScrollView } from "react-native";


const UserHome = () => {
  const [userId, setUserId] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const navigate = (screenName) => {
    navigation.navigate(screenName);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const devices = await getMyDevices();
        setData(devices);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    navigation.addListener('focus', () => {
      fetchData();
      });
  }, []);

  return (
    <View style={{
        flex:1
    }}>
      <View style={{ flexDirection: "row", alignItems: "center", }}>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 20,
            marginTop: 5,
            marginLeft: 10,
            color: "white",
            fontStyle: "italic",
            fontWeight: "bold",
            width: "48%",

          }}
        >
          My Devices
        </Text>

        <TouchableOpacity onPress={() => navigate("AllMobiles")}>
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
          <View key={key}  style={{
            display:"flex",
            flexDirection:"row",
            backgroundColor: "white",
            borderRadius: 25,
            marginLeft: 12,
            width: 290,
            height: 150,
            alignItems:"center"
          }}>
            {/* { item.ownerId === userId && ( */}
           
              <Image
                source={{
                  uri: item.picture,
                }}
                style={{
                  width:100,
                  height: "100%",
                  backgroundColor: "white",
                  resizeMode: "cover",
                  marginRight:10,
                  borderRadius:25
                }}
              />

              <View
                style={{
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 22,
                    
                  }}
                >
                  {item.device_name}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
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
                    fontWeight: "bold",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    Status :: {"\b"}
                  </Text>
                  {item.status}
                </Text>
                <TouchableOpacity
                      onPress={() => navigation.navigate("Device Detail", {
                                id: item.id,
                                device: item,
                              })}
                      style={{
                        backgroundColor: "#00BFFF",
                        borderRadius: 90,
                      }}
                    >
                  <Text
                    style={{
                      color: "black",
                      textAlign:"center",
                      paddingVertical:3
                    }}
                  >
                    Learn More
                  </Text>
                </TouchableOpacity>
              </View>
           
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default UserHome;

const styles = StyleSheet.create({});
