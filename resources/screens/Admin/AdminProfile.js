import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { TextInput } from "react-native-paper";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db, storage } from "../../../firebase/firebase.config";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const AdminProfile = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
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
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    const uploadPicture = async () => {
      const metadata = {
        contentType: "image/jpeg",
      };

      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
          resolve(xhr.response);
        };
        xhr.onerror = function() {
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", image, true);
        xhr.send(null);
      });

      const storageRef = ref(storage, "profiles/" + Date.now());
      const uploadTask = uploadBytesResumable(storageRef, blob, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;
            case "storage/unknown":
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setDbImage(downloadURL);
          });
        }
      );
    };

    if (image != null) {
      uploadPicture();
      setImage(null);
    }
  }, [image, dbImage]);

  useEffect(() => {
    const readInfo = async () => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setfname(docSnap.data().fname);
        setlname(docSnap.data().lname);
        setPhone(docSnap.data().phone);
        setDbImage(docSnap.data().picture);
        setEmail(docSnap.data().email);
      }
    };

    readInfo();
  }, [email]);

  const update = async () => {
    const washingtonRef = doc(db, "users", auth.currentUser.uid);

    await updateDoc(washingtonRef, {
      fname: fname,
      lname: lname,
      phone: phone,
      email: email,
      picture: dbImage,
    }).then(() => {
      alert("Profile Updated Successfully.");
    });
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

export default AdminProfile;
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
    marginLeft: 45,
    marginTop: 40,
  },
  updateButtonText: {
    color: "#00BFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
