import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Image, ImageBackground } from "react-native";
import { TextInput } from "react-native-paper";
import { fetchDevice } from '../Utils/api'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

const Auction = ({ navigation, route }) => {
  // const navigation = useNavigation();
  // const navigate = (screenName) => {
  //   navigation.navigate(screenName);
  // };

  const [mobile_id, setMobile_id] = useState(route.params.id);
  const [device, setDevice] = useState(route.params.device);
  useEffect(() => {
    ftechDeviceData = async () => {
      const data = await fetchDevice(mobile_id);
      setDevice(data);
   }
   ftechDeviceData();
  }, []);
  return (
    <ImageBackground
      source={{
        uri:
          "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3865.jpg?size=626&ext=jpg",
      }}
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          width: "100%",
          paddingTop: 10,
        }}
      >
        <View
          style={{
            
          }}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign:"center",
              color: "#ACFF05",
              
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {device.device_name} {device.model}
          </Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ 
            alignItems:"center"}}
          style={{
            position: "relative",
            paddingTop: 2,
            paddingBottom: 8,
            width:"90%",
            alignSelf:"center",
          }}
        >
          <Image
            source={{
              uri: device.picture,
            }}
            style={{
              height: 200,
              width: 150,
              alignSelf:"center"
            }}
          />
        </ScrollView>

        <View
          style={{
            borderWidth: 1,
            width:"90%",
alignSelf:"center",
borderColor: "white",
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#333",
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Builder
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                }}
              >
                Operating System{"\b"}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                }}
              >
                User Interface{"\b"}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                }}
              >
                Dimensions{"\b"}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                }}
              >
                Weight{"\b"}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                }}
              >
                Color{"\b"}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                }}
              >
                Sim{"\b"}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  
                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                  fontWeight: "bold",
                }}
              >
                {device.os}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  
                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                  fontWeight: "bold",
                }}
              >
                {device.ui}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  
                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                  fontWeight: "bold",
                }}
              >
                {device.dimensions}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  
                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                  fontWeight: "bold",
                }}
              >
                {device.weight}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  
                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                  fontWeight: "bold",
                }}
              >
                {device.color}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  
                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                  fontWeight: "bold",
                }}
              >
                {device.sim}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            borderWidth: 1,
            width:"90%",
alignSelf:"center",
borderColor: "white",
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#333",
              
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Processor
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                }}
              >
                CPU{"\b"}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                }}
              >
                GPU{"\b"}
              </Text>
            </View>
            <View style={{ marginLeft: 75 }}>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  
                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                  fontWeight: "bold",
                }}
              >
                {device.cpu}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  
                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                  fontWeight: "bold",
                }}
              >
                {device.gpu}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            borderWidth: 1,
            width:"90%",
alignSelf:"center",
borderColor: "white",
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#333",
              
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Screen
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                }}
              >
                Size{"\b"}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                }}
              >
                Resolution{"\b"}
              </Text>
            </View>
            <View style={{ marginLeft: 50 }}>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  
                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                  fontWeight: "bold",
                }}
              >
                {device.size}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  
                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                  fontWeight: "bold",
                }}
              >
                {device.resolution}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            width:"90%",
alignSelf:"center",
borderColor: "white",
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#333",
              
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Memory/Storage
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                }}
              >
                RAM{"\b"}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                }}
              >
                ROM{"\b"}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                }}
              >
                SDCard {"\b"}
              </Text>
            </View>
            <View style={{ marginLeft: 65 }}>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  
                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                  fontWeight: "bold",
                }}
              >
                {device.ram}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  
                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                  fontWeight: "bold",
                }}
              >
                {device.rom}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  
                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                  fontWeight: "bold",
                }}
              >
                {device.sdcard}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            width:"90%",
alignSelf:"center",
borderColor: "white",
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#333",
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Connections/Networks
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  marginBottom:5,
                }}
              >
                Bluetooth{"\b"}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                }}
              >
                Wifi{"\b"}
              </Text>
            </View>
            <View style={{ marginLeft: 65 }}>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  
                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                  fontWeight: "bold",
                }}
              >
                {device.bluetooth}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  
                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                  fontWeight: "bold",
                }}
              >
                {device.wifi}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            width:"90%",
alignSelf:"center",
borderColor: "white",
            borderRadius: 5,
            marginTop: 10,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#333",
              
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Battery Details
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                }}
              >
                Battery {"\b"}
              </Text>
            </View>
            <View style={{ marginLeft: 65 }}>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  
                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                  fontWeight: "bold",
                }}
              >
                {device.battery}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            width:"90%",
alignSelf:"center",
borderColor: "white",
            borderRadius: 5,
            marginBottom: 6,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#333",
              
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Price
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                }}
              >
                Seller Price{"\b"}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                }}
              >
                Suggested Price{"\b"}
              </Text>
            </View>
            <View style={{ marginLeft: 15 }}>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  
                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  
marginBottom:5,
                  fontWeight: "bold",
                }}
              >
                {device.price}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "black",
                  
                  marginLeft: 50,
                  textAlign: "center",
                  borderWidth: 1,
                  borderColor: "blue",
                  borderRadius: 5,
                  paddingHorizontal: 30,
                  
marginBottom:5,
                  fontWeight: "bold",
                }}
              >
                {device.suggestPrice}
              </Text>
            </View>
          </View>
        </View>

        {route.params.type === "User" && (
          <TouchableOpacity
            onPress={async () => {
              try {
                await navigation.navigate("Bidding", {
                  id: route.params.id,
                  device: device,
                });
              } catch (error) {
                // Handle the error here, e.g., log it or show a user-friendly message.
                console.error("Navigation error:", error);
              }
            }}
            style={{
              backgroundColor: "#0d75bf",
              height: 40,
              width: "70%",
              marginTop: 40,
              marginBottom: 40,
              alignSelf:"center",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
              marginVertical: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
              elevation: 9,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                fontStyle: "normal",
              }}
            >
              View auction
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default Auction;

const styles = StyleSheet.create({});
