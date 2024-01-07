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
import SingleBidder from "../../components/SingleBidder";
import OwnerDet from "../../components/OwnerDet";
import SingleBid from "../../components/SingleBid";

import {getBidDevices, getOngoinAuctionDevices, getSoldDevices } from '../../Utils/api'
import AllDevices from "../../components/AllDevices";
import EmployeeDevices from "../../components/Employee/EmployeeDevices";
import EmployeeMobiles from "../../components/Employee/EmployeeMobiles";

const AuctionManage = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [type, setType] = useState("All");
  useEffect(() => {}, [type]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const devices = await getBidDevices();
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

  const getDevicesList = async(type) =>{
      if(type == 'All'){
        const devices = await getBidDevices();
        setData(devices);
      }else if(type == 'Available'){
        const ongoing = await getOngoinAuctionDevices();
        setData(ongoing);
      }else if(type == 'Sold'){
        const sold = await getSoldDevices();
        setData(sold);
      }
      
      setType(type);
  }
  return (
    <ImageBackground
      source={{
        uri: "https://wallpaperaccess.com/full/449895.jpg",
      }}
      style={styles.container}
    >
      <View>
        <ScrollView
          vertical
          showsHorizontalScrollIndicator={false}
          style={{
            position: "relative",
          }}
        >
          <View
            style={styles.topButtonview}
          >
            <TouchableOpacity
              style={styles.topButton}
              onPress={() => getDevicesList("All")}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.topButton}
              onPress={() => getDevicesList("Available")}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Active
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.topButton}
              onPress={() => getDevicesList("Sold")}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Sold
              </Text>
            </TouchableOpacity>
          </View>
          {data.map((item, key) => (
            <View key={key}>
              
                <View
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      margin: 20,
                      justifyContent: "space-evenly",
                      backgroundColor: "white",
                      padding: 5,
                      borderRadius: 10,
                      height: 180,
                    }}
                  >
                    <View
                      style={{
                        alignItems: "center",
                        marginTop: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                        }}
                      >
                        Owner
                      </Text>
                      <OwnerDet user={item.user} />
                    </View>
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 1,
                        marginLeft: 15,
                        marginRight: 15,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                        }}
                      >
                        Product
                      </Text>
                      <Image
                        source={{
                          uri: item.picture,
                        }}
                        style={{
                          width: 50,
                          height: 60,
                          borderRadius: 10,
                        }}
                      />
                      <Text>{item.device_name}</Text>
                      {item.status === "Available" && (
                        <View>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "bold",
                              alignSelf: "center",
                            }}
                          >
                            Bid Details
                          </Text>
                          <SingleBid bid={item.latest_bid} />
                        </View>
                      )}

                      {(item.status === "Sold" || item.status === "In Transit") && (
                        <View>
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            Bid Details
                          </Text>
                          <SingleBid bid={item.accepted_bid} />
                        </View>
                      )}
                    </View>
                    <View
                      style={{
                        alignItems: "center",
                        marginTop: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                        }}
                      >
                        Bidder
                      </Text>
                      {(item.status === "Sold" || item.status === "In Transit") && (<SingleBidder user={item.accepted_bid.user} />)}
                      {item.status === "Available" && <SingleBidder user={item.latest_bid.user} />}
                    </View>
                  </View>
                </View>
             
            
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default AuctionManage;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  topButtonview:{
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  topButton: {
    width: "24%",
    height: 45,
    backgroundColor: "#00BFFF",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});
