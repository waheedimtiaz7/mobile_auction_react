import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { TextInput } from "react-native-paper";
import { TouchableOpacity, ImageBackground } from "react-native";

const Profile = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [fullname, setFullname] = useState("");

  return (
    <View>
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
          style={{
            alignItems: "center",
            marginTop: 60,
          }}
        >
          <TouchableOpacity>
            <Image
              source={{
                uri:
                  "data:image/jpeg;base64,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",
              }}
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
            label="Fullname"
            placeholder="Enter Full name"
            style={{
              marginVertical: 5,
              backgroundColor: "white",
              marginBottom: 8,
            }}
            value={fullname}
            onChangeText={(text) => setFullname(text)}
          />

          <TextInput
            label="Phone"
            placeholder="Enter Phone"
            style={{
              marginVertical: 5,
              backgroundColor: "white",
              marginBottom: 8,
            }}
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
          <TextInput
            label="Email"
            placeholder="Enter Email"
            style={{
              marginVertical: 5,
              backgroundColor: "white",
              marginBottom: 8,
            }}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            // m
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
              marginTop: 10,
              width: "45%",

              marginTop: 30,
            }}
            //   onPress={update}
          >
            <Text
              style={{
                color: "#00BFFF",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              Update
            </Text>
            
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              height: 45,
              justifyContent: "center",
            alignItems: "center",
              borderRadius: 40,
              marginTop: 10,
              width: "45%",
              marginLeft:10,

              marginTop: 30,
            }}
            //   onPress={update}
          >
            <Text
              style={{
                color: "#00BFFF",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              DeActive
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
