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

import { useNavigation } from "@react-navigation/native";
import { getNewDevices, getDeviceDetail } from '../../Utils/api'


const EmployeeDevices = () => {
  const [userId, setUserId] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const devices = await getNewDevices();
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
          Pending Devices
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
          <View key={key}  style={{
            display:"flex",
            flexDirection:"row",
            backgroundColor: "white",
            borderRadius: 25,
            marginLeft: 12,
            width: 260,
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
                    fontSize: 18,
                    
                  }}
                >
                  {item.device_name}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
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
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    Status :: {"\b"}
                  </Text>
                  {item.status}
                </Text>
                <TouchableOpacity
                      onPress={() => navigation.navigate("priceSuggest", {
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

export default EmployeeDevices;

const styles = StyleSheet.create({});
