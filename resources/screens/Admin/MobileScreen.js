import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {getActivePendingDevices, getOngoinAuctionDevices, getNewDevices } from '../../Utils/api'

const MobileScreen = ({ navigation, route }) => {
  const [type, setType] = useState("All");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const devices = await getActivePendingDevices();
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
      const devices = await getActivePendingDevices();
      setData(devices);
    }else if(type == 'Available'){
      const ongoing = await getOngoinAuctionDevices();
      setData(ongoing);
    }else if(type == 'Pending'){
      const sold = await getNewDevices();
      setData(sold);
    }
    
    setType(type);
}
const changeStatus = async (status, id) => {
  if(status == 'Available'){
    if(SuggestPrice == ''){
      alert('Please enter suggested price')
    }else{
        updateDeviceStatusByEmployee({
          status:status,
          suggest_price: SuggestPrice,
          device_id: id
        }, navigation)
    }
  }else{
    updateDeviceStatusByEmployee({
      status:status,
      suggest_price: 0,
      device_id: id
    }, navigation)
  }
};

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
            //   top:-80,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              style={styles.topbutton}
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
             style={styles.topbutton}
              onPress={() => getDevicesList("Pending")}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Pending
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.topbutton}
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
          </View>
          {data.map((item, key) => (
            <View key={key}>
              {item.status === type && (
                <View
                  style={{
                    alignItems: "center",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  <Image
                    source={{
                      uri: item.picture,
                    }}
                    style={{
                      width: 100,
                      height: 100,
                      resizeMode: "cover",
                      position: "relative",
                      top: 20,
                      zIndex: 1400,
                      borderRadius:100
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      height: 100,
                      width: "100%",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "white",
                      padding: 5,
                      borderRadius: 5,
                      borderTopLeftRadius: 15,
                    }}
                  >
                    <Text>{item.device_name}</Text>
                    <Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        Model:{"\b"}
                      </Text>
                      {item.model}
                    </Text>
                    <Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        {item.price}
                      </Text>
                      /Rs
                    </Text>
                  </View>
                  {item.status !=="Pending" && <TouchableOpacity
                    style={{
                      backgroundColor: "#3346FF",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: "100%",
                      borderBottomStartRadius: 15,
                      borderBottomEndRadius: 15,
                      position: "relative",
                      marginTop: 5,
                      top: -25,
                    }}
                    onPress={() =>
                      navigation.navigate("Auction", {
                        id: item.id,
                        device: item,
                      })
                    }
                  >
                    <Text
                      style={{
                        color: "white",
                      }}
                    >
                      View Details
                    </Text></TouchableOpacity>}
                  {
                    item.status === "Pending" && (<View
                        style={{
                          width: "100%",
                          flexDirection: "row",
                        }}
                      >
                        
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#3346FF",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: "33.33%",
                      borderBottomLeftRadius: 15,
                      position: "relative",
                      marginTop: 5,
                      top: -25,
                    }}
                    onPress={() =>
                      navigation.navigate("Auction", {
                        id: item.id,
                        device: item,
                      })
                    }
                  >
                    <Text
                      style={{
                        color: "white",
                      }}
                    >
                      View Details
                    </Text>
                  </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            backgroundColor: "green",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "33.33%",
                            height: 40,
                            position: "relative",
                            marginTop: 5,
                            top: -25,
                          }}
                          onPress={() =>
                            navigation.navigate("priceSuggest", {
                              id: item.id,
                              device: item,
                            })
                          }
                        >
                          <Text
                            style={{
                              color: "white",
                            }}
                          >
                            Approve
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            backgroundColor: "red",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "33.33%",
                            height: 40,
                            borderBottomRightRadius: 15,
                            position: "relative",
                            marginTop: 5,
                            top: -25,
                          }}
                          onPress={() => changeStatus("Rejected", item.id)}
                        >
                          <Text
                            style={{
                              color: "white",
                            }}
                          >
                            Reject
                          </Text>
                        </TouchableOpacity>
                       
                    
                    </View>
                    )}
                </View>
              )}
              {type === "All" && (
                <View
                  style={{
                    alignItems: "center",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  <Image
                    source={{
                      uri: item.picture,
                    }}
                    style={{
                      width: 100,
                      height: 100,
                      resizeMode: "cover",
                      position: "relative",
                      top: 40,
                      zIndex: 1400,
                      borderRadius:100
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      height: 100,
                      width: "100%",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "white",
                      padding: 10,
                      borderRadius: 5,
                      borderTopLeftRadius: 15,
                    }}
                  >
                    <Text>{item.device_name}</Text>
                    <Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        Model:{"\b"}
                      </Text>
                      {item.model}
                    </Text>
                    <Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        {item.price}
                      </Text>
                      /Rs
                    </Text>
                  </View>
                  <View
                    style={{
                      top: -30,
                    }}
                  >
                    <Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        Status:{"\b"}
                      </Text>
                      {item.status}
                    </Text>
                  </View>
                  {item.status !=="Pending" && <TouchableOpacity
                    style={{
                      backgroundColor: "#3346FF",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: "100%",
                      borderBottomStartRadius: 15,
                      borderBottomEndRadius: 15,
                      position: "relative",
                      marginTop: 5,
                      top: -25,
                    }}
                    onPress={() =>
                      navigation.navigate("Auction", {
                        id: item.id,
                        device: item,
                      })
                    }
                  >
                    <Text
                      style={{
                        color: "white",
                      }}
                    >
                      View Details
                    </Text></TouchableOpacity>}
                  {
                    item.status === "Pending" && (<View
                        style={{
                          width: "100%",
                          flexDirection: "row",
                        }}
                      >
                        
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#3346FF",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: "33.33%",
                      borderBottomLeftRadius: 15,
                      position: "relative",
                      marginTop: 5,
                      top: -25,
                    }}
                    onPress={() =>
                      navigation.navigate("Auction", {
                        id: item.id,
                        device: item,
                      })
                    }
                  >
                    <Text
                      style={{
                        color: "white",
                      }}
                    >
                      View Details
                    </Text>
                  </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            backgroundColor: "green",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "33.33%",
                            height: 40,
                            position: "relative",
                            marginTop: 5,
                            top: -25,
                          }}
                          onPress={() =>
                            navigation.navigate("priceSuggest", {
                              id: item.id,
                              device: item,
                            })
                          }
                        >
                          <Text
                            style={{
                              color: "white",
                            }}
                          >
                            Approve
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            backgroundColor: "red",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "33.33%",
                            height: 40,
                            borderBottomRightRadius: 15,
                            position: "relative",
                            marginTop: 5,
                            top: -25,
                          }}
                          onPress={() => changeStatus("Rejected", item.id)}
                        >
                          <Text
                            style={{
                              color: "white",
                            }}
                          >
                            Reject
                          </Text>
                        </TouchableOpacity>
                       
                    
                    </View>
                    )}
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default MobileScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  topbutton: {
    width: "30%",
    height: 45,
    backgroundColor: "#00BFFF",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
