import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { collection, onSnapshot } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase/firebase.config";

const AdminUsers = () => {
  const navigation = useNavigation();
  const navigate = (screenName) => {
    navigation.navigate(screenName);
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    const ref = collection(db, "users");
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Users</Text>

        <TouchableOpacity onPress={() => navigate("Users")}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {data.map((user, key) => (
          <View key={key}>
            {user.data.type !== "Admin" && (
              <View style={styles.userContainer}>
                <Image
                  source={{ uri: user.data.picture }}
                  style={styles.userImage}
                />
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>
                    <Text style={styles.userNameText}>Name: </Text>
                    {user.data.fname} {user.data.lname}
                  </Text>
                  <Text style={styles.userEmail}>
                    <Text style={styles.userEmailText}>Gmail: </Text>
                    {user.data.email}
                  </Text>
                  <Text style={styles.userType}>
                    <Text style={styles.userTypeText}>Type: </Text>
                    {user.data.type}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("SingleUser", {
                      id: user.id,
                    })
                  }
                  style={styles.moreDetailButton}
                >
                  <Text style={styles.moreDetailButtonText}>More Detail</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AdminUsers;
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 10,
    marginLeft: 10,
    color: "white",
    fontStyle: "italic",
    fontWeight: "bold",
    width: "48%",
  },
  viewAllText: {
    color: "black",
    fontSize: 16,
    marginLeft: 100,
  },
  scrollView: {
    position: "relative",
    top: -13,
  },
  userContainer: {
    alignItems: "flex-start",
    backgroundColor: "white",
    resizeMode: "contain",
    position: "relative",
    borderRadius: 25,
    marginLeft: 12,
    height: 180,
    width: 290,
    elevation: 15,
  },
  userImage: {
    width: 70,
    height: 100,
    borderRadius: 15,
    backgroundColor: "white",
    resizeMode: "contain",
    position: "relative",
    marginLeft: 9,
    top: 25,
  },
  userInfo: {
    marginLeft: 90,
    alignItems: "center",
    top: -87,
  },
  userName: {
    fontSize: 20,
    marginBottom: 6,
  },
  userEmail: {
    fontSize: 15,
    marginBottom: 15,
  },
  userType: {
    top: 20,
    marginTop: -32,
  },
  userTypeText: {
    fontWeight: "bold",
  },
  moreDetailButton: {
    backgroundColor: "#00BFFF",
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
    height: 25,
    borderRadius: 90,
    position: "relative",
    marginTop: -65,
    marginLeft: 129,
  },
  moreDetailButtonText: {
    color: "black",
  },
});
