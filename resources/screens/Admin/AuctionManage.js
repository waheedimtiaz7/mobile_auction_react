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
import { db } from "../../../firebase/firebase.config";
import SingleBidder from "../../components/SingleBidder";
import OwnerDet from "../../components/OwnerDet";
import SingleBid from "../../components/SingleBid";

const AuctionManage = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [type, setType] = useState("All");
  useEffect(() => {}, [type]);
 
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
                style={styles.topButton}
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
            <TouchableOpacity
               style={styles.topButton}
              onPress={() => setType("Hold")}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Hold
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.topButton}
              onPress={() => setType("Sold")}
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
              {item.data.status === type && (
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
                      <OwnerDet id={item.data.ownerId} />
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
                          uri: item.data.picture,
                        }}
                        style={{
                          width: 50,
                          height: 60,
                          borderRadius: 10,
                        }}
                      />
                      <Text>{item.data.device_name}</Text>
                      {item.data.status === "Hold" && (
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
                          <SingleBid id={item.data.bid_Id} />
                        </View>
                      )}

                      {item.data.status === "Sold" && (
                        <View>
                          <Text
                            style={{
                              fontSize: 10,
                            }}
                          >
                            Bid Details
                          </Text>
                          <SingleBid id={item.data.bid_Id} />
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
                        Buyer
                      </Text>
                      <SingleBidder id={item.data.bidderId} />
                    </View>
                  </View>
                  {item.data.status === "Hold" && (
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#0d75bf",
                        width: "89%",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 20,
                        height: 40,
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15,
                        position: "relative",
                        top: -26,
                      }}
                      onPress={() =>
                        navigation.navigate("meeting", {
                          id: item.id,
                        })
                      }
                    >
                      <Text
                        style={{
                          color: "white",
                        }}
                      >
                        Appoientment
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              )}

              {type === "All" && (
                <View
                  style={{
                    flexDirection: "row",
                    margin: 20,
                    justifyContent: "space-evenly",
                    backgroundColor: "white",
                    padding: 5,
                    borderRadius: 40,
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                      }}
                    >
                      Owner
                    </Text>
                    <OwnerDet id={item.data.ownerId} />
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                      }}
                    >
                      Product
                    </Text>
                    <Image
                      source={{
                        uri: item.data.picture,
                      }}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 10,
                      }}
                    />
                    <Text>{item.data.device_name}</Text>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                      }}
                    >
                      Buyer
                    </Text>
                    <SingleBidder id={item.data.bidderId} />
                  </View>
                </View>
              )}
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
