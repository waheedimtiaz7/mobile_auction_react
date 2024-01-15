import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { getDevices, getDeviceDetail } from '../Utils/api'

import AuctionScreen from "../screens/AuctionScreen";


const Mobiles = () => {
  // const { HighestBid } = useContext(AuctionScreen);
  const [email, setEmail] = useState(null);
  const [type, setType] = useState(null);
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [highestBids, setHighestBids] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = (screenName) => {
    navigation.navigate(screenName);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const devices = await getDevices();
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
              <View style={{
                width: "98%", alignSelf: "center", borderWidth: 1, borderColor: "black",
                borderRadius: 5, padding: 10, marginBottom:3,height:115
              }}>
                <View style={{ width: "100%" ,marginTop:-10}}>
                  <Text style={{ fontWeight: 'bold' }}>Device Name</Text>
                  <Text style={{ width: "100%" , color:'green'}}>{item.device_name}</Text>
                </View>
                <View style={{ width: "100%" }}>
                  <Text style={{ fontWeight: 'bold' }}>Device Model</Text>
                  <Text style={{ width: "100%" , color:'green'}}>{item.model}</Text>
                </View>
                <View style={{ width: "100%" }}>
                  <Text style={{ fontWeight: 'bold' }}>Latest Bid {"\b"}
                  <Text style={{ width: "100%" , color:'green'}}>  ${item.latest_bid?.bid_amount}</Text></Text>
                </View>
               
              </View>
            
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Auction", {
                    id: item.id,
                    type: 'User',
                    device: item
                  })
                }
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

export default Mobiles;

const styles = StyleSheet.create({});
