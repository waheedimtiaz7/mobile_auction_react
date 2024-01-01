import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Mobiles from "../../components/Mobiles";
import AdminTopBar from "../../components/AdminTopBar";
import { auth, db } from "../../../firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import AdminUsers from "../../components/AdminUsers";

const AdminDashboard = ({ navigation }) => {
  const [email, setEmail] = useState(null);

  const [fname, setfname] = useState(null);
  const [lname, setlname] = useState(null);
  const [dbImage, setDbImage] = useState(null);
  useEffect(() => {
    const readInfo = async () => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setfname(docSnap.data().fname);
        setlname(docSnap.data().lname);
        setDbImage(docSnap.data().picture);
        setEmail(docSnap.data().email);
      }
    };
    readInfo();
  }, [email]);
  useEffect(() => {
    // Remove the back button from the header
    navigation.setOptions({
      headerLeft: null,
    });
  }, []);
  return (
    <ImageBackground
      source={{
        uri: "https://wallpaperaccess.com/full/449895.jpg",
      }}
      style={styles.imageBackground}
    >
      <ScrollView style={styles.container}>
        <AdminTopBar />
        <View style={styles.header}>
          <View>
            <Image
              source={{
                uri: dbImage,
              }}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>
              {fname} {lname}
            </Text>
            <Text style={styles.profileEmail}>{email}</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AdminProfile", {
                  id: auth.currentUser.uid,
                })
              }
              style={styles.viewDetailButton}
            >
              <Text style={styles.viewDetailText}>---View Detail---</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Mobiles />
          <AdminUsers />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default AdminDashboard;
const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: "32%",
  },
  profileImageContainer: {
    marginLeft: 10,
    top: -30,
  },
  profileImage: {
    height: 180,
    width: 180,
    borderRadius: 100,
    top: -2,
  },
  profileInfo: {
    marginLeft: 10,
    top: -30,
  },
  profileName: {
    fontSize: 28,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  profileEmail: {
    fontSize: 15,
    fontStyle: "italic",
    marginTop: 10,
  },
  viewDetailButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  viewDetailText: {
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 10,
  },
  contentContainer: {
    top: -20,
  },
});
