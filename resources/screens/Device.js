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
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase.config";

const Device = () => {
  const navigation = useNavigation();

  const [userId, setUserId] = useState("All");
  const [data, setData] = useState([]);
  useEffect(() => {
    const ref = collection(db, "mobiles");
    onSnapshot(ref, (users) =>
      setData(
        users.docs.map((user) => ({
          id: user.id,
          data: user.data(),
        }))
      )
    );
  }, []);
  return (
    <ImageBackground
      source={{
        uri:
          "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3865.jpg?size=626&ext=jpg",
      }}
      style={{
        height: "100%",
      }}
    >
      <View
        style={
          {
            //   marginTop: 50,
          }
        }
      >
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
              // marginVertical:30,
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{
                width: "45%",
                height: 45,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                backgroundColor: "#0d75bf",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => setUserId("All")}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 16,
                  fontStyle: "italic",
                }}
              >
                All Devices
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: "45%",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                height: 45,
                backgroundColor: "#0d75bf",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => setUserId(auth.currentUser.uid)}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 16,
                  fontStyle: "italic",
                }}
              >
                My Devices
              </Text>
            </TouchableOpacity>
          </View>
          {data.map((item, key) => (
            <View key={key}>
              {userId !== "All" && item.data.ownerId === userId && (
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
                      uri: item.data.picture,
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
                    <Text>{item.data.device_name}</Text>
                    <Text
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      {item.data.model}
                    </Text>
                    <Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        {item.data.price}
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
                      {item.data.status}
                    </Text>
                  </View>

                  {item.data.ownerId === auth.currentUser.uid && (
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
                        Edit Details
                      </Text>
                    </TouchableOpacity>
                  )}
                  {item.data.ownerId !== auth.currentUser.uid && (
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
                        navigation.navigate("Device Detail", {
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
                  )}
                </View>
              )}
              {userId === "All" && (
                <View
                  style={{
                    alignItems: "center",
                    // margin: 5,
                    // backgroundColor:'white',
                    padding: 12,
                    borderRadius: 10,
                  }}
                >
                  <Image
                    source={{
                      uri: item.data.picture,
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
                    <Text>{item.data.device_name}</Text>
                    <Text
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      {item.data.model}
                    </Text>
                    <Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        {item.data.price}
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
                        Status:
                      </Text>
                      {item.data.status}
                    </Text>
                  </View>

                  {item.data.ownerId === auth.currentUser.uid && (
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
                        navigation.navigate("Device Detail", {
                          id: item.id,
                        })
                      }
                    >
                      <Text
                        style={{
                          color: "white",
                        }}
                      >
                        Edit Details
                      </Text>
                    </TouchableOpacity>
                  )}
                  {item.data.ownerId !== auth.currentUser.uid &&  (
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

export default Device;

const styles = StyleSheet.create({});
