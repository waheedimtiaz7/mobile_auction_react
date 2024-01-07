import { StyleSheet, Text, View } from "react-native";
import React, { useState,useEffect } from "react";
import { Image } from "react-native";
import { TextInput } from "react-native-paper";
import { TouchableOpacity, ImageBackground } from "react-native";
import { updateUser, futureUseIntent } from '../Utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from "expo-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const Profile = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [dbImage, setDbImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.canceled) {
      setImage(result.assets[0]);
      setDbImage(result.assets[0].uri);
    }
  };

  

  useEffect(() => {
    ftechUser = async () => {
      const userData =  await AsyncStorage.getItem('authUser');
      if(JSON.parse(userData)){
        const user = JSON.parse(userData);
        setfname(user.fname);
        setlname(user.lname);
        setPhone(user.phone);
        setAddress(user.address);
        setDbImage(user.picture);
        setEmail(user.email);
        
      }
  };
  ftechUser();
  }, []);

  const update = async () => {
    if(fname==''){
      alert('First name is required')
    }if(lname==''){
      alert('Last name is required')
    }if(email==''){
      alert('Email is required')
    }if(phone==''){
      alert('Phone is required')
    }
    const data = {
      fname: fname,
      lname: lname,
      phone: phone,
      address: address,
      email: email
    }
    await updateUser(image, data, navigation);
  };

  return (
    <ImageBackground
      source={{
        uri:
          "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3865.jpg?size=626&ext=jpg",
      }}
      style={styles.imageBackground}
    >
      <KeyboardAwareScrollView>
        <View style={styles.profileImageContainer}>
          <TouchableOpacity onPress={pickImage}>
            <Image
              source={{
                uri: dbImage,
              }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            label="Firstname"
            placeholder="Enter First name"
            style={styles.inputField}
            value={fname}
            onChangeText={(text) => setfname(text)}
          />
          <TextInput
            label="Lastname"
            placeholder="Enter Last name"
            style={styles.inputField}
            value={lname}
            onChangeText={(text) => setlname(text)}
          />
          <TextInput
            label="Phone"
            placeholder="Enter Phone"
            style={styles.inputField}
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
          <TextInput
            label="Email"
            placeholder="Enter Email"
            style={styles.inputField}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            label="Address"
            placeholder="Enter Address"
            style={styles.inputField}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>
        <View style={styles.updateButton}>
          <TouchableOpacity onPress={update}>
            <Text style={styles.updateButtonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default Profile;
const styles = StyleSheet.create({
  imageBackground: {
    height: "100%",
  },
  profileImageContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  inputContainer: {
    margin: 10,
    width: "80%",
    marginLeft: 35,
    marginTop: 45,
  },
  inputField: {
    marginVertical: 5,
    backgroundColor: "white",
    marginBottom: 8,
  },
  updateButton: {
    backgroundColor: "white",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    marginTop: 10,
    width: "70%",
    alignSelf:"center",
    marginBottom:10
  },
  updateButtonText: {
    color: "#00BFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
