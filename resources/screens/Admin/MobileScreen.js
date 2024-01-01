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
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase.config";

const MobileScreen = ({ navigation, route }) => {
  const [type, setType] = useState("All");
  useEffect(() => {}, [type]);
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
  const changeStatus = async (status, id) => {
    const washingtonRef = doc(db, "mobiles", id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      status: status,
    }).then(() => {
      alert("Device is " + status);
    });
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
              onPress={() => setType("All")}
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
              onPress={() => setType("Pending")}
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
              onPress={() => setType("Active")}
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
              {item.data.status === type && (
                <View
                  style={{
                    alignItems: "center",
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
                      backgroundColor: "white",
                      padding: 5,
                      marginTop: 5,
                      borderRadius: 5,
                      borderTopLeftRadius: 15,
                    }}
                  >
                    <Text>{item.data.device_name}</Text>
                    <Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        Model:{"\b"}
                      </Text>
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

                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Auction", {
                        id: item.id,
                      })
                    }
                    style={{
                      backgroundColor: "#3346FF",
                      width: "97%",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      borderBottomRightRadius: 15,
                      position: "relative",
                      marginTop: 5,
                      top: -25,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                      }}
                    >
                      View Details
                    </Text>
                  </TouchableOpacity>
                  {route.params.type === "Employee" &&
                    item.data.status === "Pending" && (
                      <View
                        style={{
                          width: "100%",
                          flexDirection: "row",
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            backgroundColor: "green",
                            width: "48%",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 40,
                            borderBottomLeftRadius: 15,
                            position: "relative",
                            marginTop: 5,
                            top: -25,
                          }}
                          onPress={() =>
                            navigation.navigate("priceSuggest", {
                              id: item.id,
                            })
                          }
                        >
                          <Text
                            style={{
                              color: "white",
                            }}
                          >
                            Accept
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            backgroundColor: "red",
                            width: "48%",
                            justifyContent: "center",
                            alignItems: "center",
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
                      uri: item.data.picture,
                    }}
                    style={{
                      width: 280,
                      height: 180,

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
                      backgroundColor: "white",
                      padding: 5,
                      marginTop: 5,
                      borderRadius: 5,
                      borderTopLeftRadius: 15,
                    }}
                  >
                    <Text>{item.data.device_name}</Text>
                    <Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        Model:{"\b"}
                      </Text>
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
                      {item.data.status}
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      backgroundColor: "#3346FF",
                      width: "97%",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      borderBottomRightRadius: 15,
                      position: "relative",
                      marginTop: 5,
                      top: -25,
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
                      View Details
                    </Text>
                  </TouchableOpacity>
                  {route.params.type === "Employee" &&
                    item.data.status === "Pending" && (
                      <View
                        style={{
                          width: "100%",
                          flexDirection: "row",
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            backgroundColor: "green",
                            width: "48%",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 40,
                            borderBottomLeftRadius: 15,
                            position: "relative",
                            marginTop: 5,
                            top: -25,
                          }}
                          onPress={() => changeStatus("Active", item.id)}
                        >
                          <Text
                            style={{
                              color: "white",
                            }}
                          >
                            Accept
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            backgroundColor: "red",
                            width: "48%",
                            justifyContent: "center",
                            alignItems: "center",
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
