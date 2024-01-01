import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { ScrollView, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../firebase/firebase.config";

const UserScreen = () => {
  const [email, setEmail] = useState(null);

  const [fname, setfname] = useState(null);
  const [lname, setlname] = useState(null);
  const [data, setData] = useState([]);
  const [dbImage, setDbImage] = useState(null);
  const navigation = useNavigation();
  const [type, setType] = useState("Employee");
  useEffect(() => {const ref = collection(db, "users");
  const q = query(ref, where("type", "==", type));
  onSnapshot(q, (users) =>
    setData(
      users.docs.map((user) => ({
        id: user.id,
        data: user.data(),
      }))
    )
  );
}, [type]);
  
  return (
    <ImageBackground
      source={{
        uri: "https://wallpaperaccess.com/full/449895.jpg",
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
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              style={{
                width: "48%",
                height: 45,
                backgroundColor: "#00BFFF",
                justifyContent: "center",
                alignItems: "center",
                borderBottomRightRadius: 15,
                borderBottomLeftRadius: 15,
              }}
              onPress={() => setType("Employee")}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                Employees
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "48%",
                height: 45,
                backgroundColor: "#00BFFF",
                justifyContent: "center",
                alignItems: "center",
                borderBottomRightRadius: 15,
                borderBottomLeftRadius: 15,
              }}
              onPress={() => setType("User")}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
               Users
              </Text>
            </TouchableOpacity>
          </View>
          {data.map((item, key) => (
          <View key={key}>
            {item.data.type === type && (
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
                    width: 200,
                    height: 200,
                    // borderRadius:100,
                    // backgroundColor:'white',
                    resizeMode: "contain",
                    position: "relative",
                    borderRadius: 200,
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
                    marginTop: 25,
                    borderRadius: 5,
                    borderTopLeftRadius: 15,
                  }}
                >
                  <View>
                    <Text>{item.data.name}</Text>
                    <Text>{item.data.type}</Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      {item.data.status}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "gray",
                    width: "97%",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 40,
                    borderBottomRightRadius: 15,
                    position: "relative",
                    marginTop: 5,
                    top: -25,
                  }}
                  onPress={() => navigation.navigate("SingleUser",{
                    id:item.id
                  })}
                >
                  <Text
                    style={{
                      color: "white",
                    }}
                  >
                    View Details
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
