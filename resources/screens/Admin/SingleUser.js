import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { TextInput } from "react-native-paper";
import { TouchableOpacity, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase.config";

const SingleUser = ({ navigation, route }) => {
  const [email, setEmail] = useState(null);
  const [userId, setUserId] = useState(route.params.id);
  const [phone, setPhone] = useState(null);
  const [fname, setFname] = useState(null);
  const [address, setAddress] = useState(null);
  const [lname, setLname] = useState(null);
  const [type, setType] = useState(null);
  const [dbImage, setDbImage] = useState(null);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    const readInfo = async () => {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setFname(docSnap.data().fname);
        setLname(docSnap.data().lname);
        setPhone(docSnap.data().phone);
        setDbImage(docSnap.data().picture);
        setType(docSnap.data().type);
        setStatus(docSnap.data().status);
        setEmail(docSnap.data().email);
        setAddress(docSnap.data().address);
      }
    };
    readInfo();
  }, [email, route.params.id]);

  const changeStatus = async (status) => {
    const washingtonRef = doc(db, "users", userId);

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      status: status,
    }).then(() => {
      alert("User Status Changed");
      navigation.navigate("Users");
    });
  };
  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: "https://wallpaperaccess.com/full/449895.jpg",
        }}
        style={{
          height: "100%",
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginTop: 60,
          }}
        >
          <TouchableOpacity>
            <Image
              source={{ uri: dbImage }}
              style={{
                width: 200,
                height: 200,
                borderRadius: 200,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            // justifyContent: "center",
            // alignItems: "center",
            margin: 10,

            width: "80%",
            marginLeft: 35,
            marginTop: 45,
          }}
        >
          <TextInput
            style={{
              marginVertical: 5,
              backgroundColor: "white",
              marginBottom: 8,
            }}
            value={fname}
            onChangeText={(text) => setFname(text)}
            editable={false}
          />
          <TextInput
            style={{
              marginVertical: 5,
              backgroundColor: "white",
              marginBottom: 8,
            }}
            value={lname}
            onChangeText={(text) => setLname(text)}
            editable={false}
          />
          <TextInput
            style={{
              marginVertical: 5,
              backgroundColor: "white",
              marginBottom: 8,
            }}
            value={address}
            onChangeText={(text) => setAddress(text)}
            editable={false}
          />

          <TextInput
            style={{
              marginVertical: 5,
              backgroundColor: "white",
              marginBottom: 8,
            }}
            value={phone}
            onChangeText={(text) => setPhone(text)}
            editable={false}
          />
          <TextInput
            style={{
              marginVertical: 5,
              backgroundColor: "white",
              marginBottom: 8,
            }}
            value={email}
            onChangeText={(text) => setEmail(text)}
            editable={false}
          />
        </View>

        {status === "Pending" && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              // alignItems: "center",
              margin: 10,
            }}
          >
            <TouchableOpacity
               style={{
                backgroundColor: "white",
                height: 45,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 40,
                top: -40,
                width: "45%",
                marginLeft: -5,
                marginTop: 40,
              }}
              onPress={() => changeStatus("Approved")}
            >
              <Text
               style={{
                  color: "#00BFFF",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                Accept
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                height: 45,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 40,
                top: -40,
                width: "45%",
                marginLeft: -5,
                marginTop: 40,
              }}
              onPress={() => changeStatus("Blocked")}
            >
              <Text
               style={{
                  color: "#00BFFF",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                Reject
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {status === "Approved" && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              // alignItems: "center",
              margin: 10,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                height: 45,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 40,
                top: -20,
                width: "70%",
                marginLeft: -5,
                marginTop: 40,
              }}
              onPress={() => changeStatus("Blocked")}
            >
              <Text
                style={{
                  color: "#00BFFF",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                Block
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {status === "Blocked" && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              // alignItems: "center",
              margin: 10,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                height: 45,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 40,
                top: -20,
                width: "70%",
                marginLeft: -5,
                marginTop: 40,
              }}
              onPress={() => changeStatus("Approved")}
            >
              <Text
                style={{
                  color: "#00BFFF",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                Un-Block
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
    </ScrollView>
  );
};

export default SingleUser;
