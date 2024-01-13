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
import { getOngoinAuctionDevices, getDeviceDetail } from '../../Utils/api'

const EmployeeMobiles = () => {

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
        const devices = await getOngoinAuctionDevices();
        console.log(devices)
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
            fontSize: 16,
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
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                <Text>
                  Name:
                </Text>
                {item.device_name}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  Model::
                </Text>{item.model}
              </Text>
             
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    Latest Bid:: {"\b"}
                    </Text>
                  ${item.latest_bid?.bid_amount}
                </Text>
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

export default EmployeeMobiles;

const styles = StyleSheet.create({});
