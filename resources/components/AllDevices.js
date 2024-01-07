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

  const AllDevices = ({data}) => {
    console.log(data)
    const [userId, setUserId] = useState("");
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const navigate = (screenName) => {
      navigation.navigate(screenName);
    };
    useEffect(() => {
      
    }, []);
  
    return (
      <View style={{
          flex:1
      }}>
    
        
          {data.map((item, key) => (
            <View key={key} >
             
                <View
                  style={{
                    alignItems: "center",
                    // margin: 5,
                    // backgroundColor:'white',
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  <Image
                    source={{
                      uri: item.picture,
                    }}
                    style={{
                      width: 280,
                      height: 180,
                      // borderRadius:100,
                      // backgroundColor:'white',
                      resizeMode: "contain",
                      position: "relative",
                      top: 50,
                      zIndex: 1400,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      height: 100,
                      width: "100%",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "#D0EAF6",
                      padding: 5,
                      marginTop: 5,
                      borderRadius: 5,
                      borderTopLeftRadius: 15,
                    }}
                  >
                    <Text>{item.device_name}</Text>
                    <Text
                      style={{
                        fontWeight: "bold",
                      }}
                    >
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
                      top: -40,
                    }}
                  >
                    <Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        Status::
                      </Text>
                      {item.status}
                    </Text>
                  </View>
                  </View>
                  <TouchableOpacity
                      style={{
                        backgroundColor: "#0d75bf",
                        width: "96%",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 40,
                        borderBottomRightRadius: 15,
                        position: "relative",
                        marginTop: 5,
                        top: -37,
                      }}
                      onPress={() =>
                        navigation.navigate("Auction", {
                          id: item.id,
                        })
                      }
                    >
                      <Text
                        style={{
                          color: "white",
                        }}
                      >
                        Bid Now
                      </Text>
                    </TouchableOpacity>
             
            </View>
          ))}
      </View>
    );
  };
  
  export default AllDevices
  
  const styles = StyleSheet.create({});