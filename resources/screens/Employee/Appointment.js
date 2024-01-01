import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { db } from "../../../firebase/firebase.config";
import { Image } from "react-native";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native";

const Appointment = () => {
  const [data, setData] = useState([]);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handleScheduleAppointment = () => {
    // Handle appointment scheduling logic here
    // For this example, we'll just log the chosen date and time
    console.log("Appointment Date:", appointmentDate);
    console.log("Appointment Time:", appointmentTime);
  };
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
          "https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      }}
      style={{
        height: "100%",
      }}
    >
      <View
        style={{
          height: "100%",
        }}
      >
        {data.map((item, key) => (
          <View key={key}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
                alignSelf: "center",
                // marginLeft:60
              }}
            >
              Prouct Details
            </Text>
            <View
              style={{
                height: "35%",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  marginTop: 35,
                  marginLeft: 10,
                  backgroundColor: "#7297e8",
                  height: "60%",
                  borderRadius: 15,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 15,
                    marginTop: 25,
                  }}
                >
                  Product Name:
                  <Text
                    style={{
                      color: "green",
                      fontSize: 22,
                    }}
                  >
                    {item.data.device_name}
                  </Text>
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 15,
                    marginTop: 5,
                  }}
                >
                  Product Model:
                  <Text
                    style={{
                      color: "green",
                      fontSize: 22,
                    }}
                  >
                    {item.data.model}
                  </Text>
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 15,
                    marginTop: 5,
                  }}
                >
                  Product Price:
                  <Text
                    style={{
                      color: "green",
                      fontSize: 22,
                    }}
                  >
                    {item.data.k}
                  </Text>
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 15,
                    marginTop: 5,
                  }}
                >
                  Product status:
                  <Text
                    style={{
                      color: "green",
                      fontSize: 22,
                    }}
                  >
                    {item.data.status}
                  </Text>
                </Text>
              </View>
              <Image
                source={{
                  uri: item.data.picture,
                }}
                style={{
                  width: 150,
                  height: 190,
                  borderRadius: 20,
                  marginLeft: 28,
                  marginTop: 33,
                  resizeMode: "cover",
                }}
              />
            </View>
            <ScrollView
              style={{
                backgroundColor: "white",
                height: "100%",
                width: "95%",
                alignSelf: "center",
                borderRadius: 35,
                top: -50,
              }}
            >
              <View style={{
                marginTop:20,
                    marginLeft:15,
              }}> 
              <Text>Seller Name:</Text>
              <Text>Customer Name:</Text>
              
                 <Text>Choose Appointment Date:</Text>
                <TextInput
                  style={{
                    fontSize: 16,
                   width:"90%",
                   height:30,
                    // borderColor: "#ccc",
                    borderRadius: 5,
                    paddingTop: 10,
                    marginBottom: 20,
                    
                  }}
                  value={appointmentDate}
                  onChangeText={setAppointmentDate}
                  placeholder="YYYY-MM-DD"
                />
              <Text>Choose Appointment Time:</Text>
                <TextInput
                  style={{
                    fontSize: 16,
                   width:"90%",
                   height:30,
                    // borderColor: "#ccc",
                    borderRadius: 5,
                    paddingTop: 10,
                    marginBottom: 20,
                    
                  }}
                  value={appointmentTime}
                  onChangeText={setAppointmentTime}
                  placeholder="HH:MM AM/PM"
                />

               
              </View>
              <View>
              <TouchableOpacity
                      style={{
                        backgroundColor: "#0d75bf",
                        width: "89%",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft:20,
                        height: 40,
                      
                        position: "relative",
                        
                        
                        
                      }}
                      // onPress={() =>
                      //   navigation.navigate("meeting", {
                      //     id: item.id,
                      //   })
                      // }
                    >
                      <Text
                        style={{
                          color: "white",
                        }}
                      >
                        Appoientment
                      </Text>
                    </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        ))}
      </View>
    </ImageBackground>

    // <View style={styles.container}>
    //   <Text style={styles.label}>Choose Appointment Date:</Text>
    //   <TextInput
    //     style={styles.input}
    //     value={appointmentDate}
    //     onChangeText={setAppointmentDate}
    //     placeholder="YYYY-MM-DD"
    //   />

    //   <Text style={styles.label}>Choose Appointment Time:</Text>
    //   <TextInput
    //     style={styles.input}
    //     value={appointmentTime}
    //     onChangeText={setAppointmentTime}
    //     placeholder="HH:MM AM/PM"
    //   />

    //   <Button title="Schedule Appointment" onPress={handleScheduleAppointment} />
    // </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding: 20,
  //   justifyContent: 'center',
  // },
  // label: {
  //   fontSize: 18,
  //   marginBottom: 10,
  // },
  // input: {
  //   fontSize: 16,
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   borderRadius: 5,
  //   padding: 10,
  //   marginBottom: 20,
  // },
});

export default Appointment;
